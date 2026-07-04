"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { categories } from "@/lib/data";
import { useProducts } from "@/lib/useProducts";
import { Product } from "@/lib/types";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "highest-rated" | "trending" | "sale";
type FilterState = {
  category: string;
  platform: string;
  onSale: boolean;
  trending: boolean;
  sort: SortOption;
};

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQ = searchParams.get("q") || "";
  const { products } = useProducts();

  const [query, setQuery] = useState(initialQ);
  const [results, setResults] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    platform: "",
    onSale: false,
    trending: false,
    sort: "newest",
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...products];

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Platform
    if (filters.platform) {
      filtered = filtered.filter((p) => p.platforms.includes(filters.platform as any));
    }

    // Sale
    if (filters.onSale) filtered = filtered.filter((p) => p.onSale);

    // Trending
    if (filters.trending) filtered = filtered.filter((p) => p.trending);

    // Sort
    if (filters.sort === "newest") {
      filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (filters.sort === "highest-rated") {
      filtered.sort((a, b) => b.scores.overall - a.scores.overall);
    }

    setResults(filtered);
  }, [query, filters, products]);

  const clearFilters = () => {
    setFilters({ category: "", platform: "", onSale: false, trending: false, sort: "newest" });
    setQuery("");
  };

  const activeFilterCount = [
    filters.category,
    filters.platform,
    filters.onSale,
    filters.trending,
    filters.sort !== "newest",
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-text mb-2">Search</h1>
        <p className="text-text-secondary">Find products by name, category, or brand.</p>
      </div>

      {/* Search input */}
      <div className="relative mb-6">
        <div className="flex items-center gap-3 bg-surface-2 border border-border rounded-2xl px-5 py-4 focus-within:border-accent/50 transition-all duration-300">
          <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories…"
            className="flex-1 bg-transparent text-text placeholder:text-text-muted text-base outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-text-muted hover:text-text transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200",
            showFilters || activeFilterCount > 0
              ? "bg-accent/10 border-accent/30 text-accent"
              : "bg-surface-2 border-border text-text-secondary hover:text-text"
          )}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Quick sort */}
        {(["newest", "highest-rated"] as SortOption[]).map((s) => (
          <button
            key={s}
            onClick={() => setFilters((f) => ({ ...f, sort: s }))}
            className={cn(
              "px-3 py-2 rounded-xl text-sm border transition-all duration-200",
              filters.sort === s
                ? "bg-accent/10 border-accent/30 text-accent"
                : "bg-surface-2 border-border text-text-secondary hover:text-text"
            )}
          >
            {s === "newest" ? "Newest" : "Highest Rated"}
          </button>
        ))}

        <button
          onClick={() => setFilters((f) => ({ ...f, trending: !f.trending }))}
          className={cn(
            "px-3 py-2 rounded-xl text-sm border transition-all duration-200",
            filters.trending
              ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
              : "bg-surface-2 border-border text-text-secondary hover:text-text"
          )}
        >
          🔥 Trending
        </button>

        <button
          onClick={() => setFilters((f) => ({ ...f, onSale: !f.onSale }))}
          className={cn(
            "px-3 py-2 rounded-xl text-sm border transition-all duration-200",
            filters.onSale
              ? "bg-sale/10 border-sale/30 text-sale"
              : "bg-surface-2 border-border text-text-secondary hover:text-text"
          )}
        >
          💸 On Sale
        </button>

        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="px-3 py-2 rounded-xl text-sm text-text-muted hover:text-text transition-colors">
            Clear all
          </button>
        )}
      </div>

      {/* Expanded filter panel */}
      {showFilters && (
        <div className="bg-surface-2 border border-border rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Category filter */}
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters((f) => ({ ...f, category: "" }))}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs border transition-all",
                    !filters.category ? "bg-accent/10 border-accent/30 text-accent" : "border-border text-text-secondary hover:text-text"
                  )}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setFilters((f) => ({ ...f, category: c.id }))}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs border transition-all",
                      filters.category === c.id ? "bg-accent/10 border-accent/30 text-accent" : "border-border text-text-secondary hover:text-text"
                    )}
                  >
                    {c.emoji} {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform filter */}
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Platform</p>
              <div className="flex flex-wrap gap-2">
                {["", "tiktok", "instagram", "youtube", "pinterest", "facebook"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setFilters((f) => ({ ...f, platform: p }))}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs border transition-all capitalize",
                      filters.platform === p ? "bg-accent/10 border-accent/30 text-accent" : "border-border text-text-secondary hover:text-text"
                    )}
                  >
                    {p || "All"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-text-muted mb-6">
        {results.length} {results.length === 1 ? "product" : "products"} found
        {query && <span> for "<span className="text-text">{query}</span>"</span>}
      </p>

      {/* Results */}
      <ProductGrid products={results} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-text-secondary">Loading search…</div>}>
      <SearchContent />
    </Suspense>
  );
}
