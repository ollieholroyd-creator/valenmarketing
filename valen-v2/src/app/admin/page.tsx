"use client";

import { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, CheckCircle, ExternalLink, RotateCcw, Search, LogOut } from "lucide-react";
import { useProducts } from "@/lib/useProducts";
import { deleteProduct, resetToSeedData, hasLocalChanges } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn, scoreColor } from "@/lib/utils";

function AdminContent() {
  const { products, refresh } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [authChecked, setAuthChecked] = useState(false);
  const savedSlug = searchParams.get("saved");
  const wasDeleted = searchParams.get("deleted");

  // Check auth on load
  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json())
      .then((d) => {
        if (!d.isAdmin) {
          router.replace("/login");
        } else {
          setAuthChecked(true);
        }
      });
  }, [router]);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete "${name}"? This can't be undone.`)) {
      deleteProduct(id);
      refresh();
    }
  };

  const handleReset = () => {
    if (confirm("Reset all products to sample data?")) {
      resetToSeedData();
      refresh();
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-text-secondary text-sm">Checking access…</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Admin</p>
          <h1 className="text-3xl font-black text-text mb-1">Manage products</h1>
          <p className="text-text-secondary text-sm">{products.length} products on VALEN right now.</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {hasLocalChanges() && (
            <Button variant="ghost" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" /> Reset to sample data
            </Button>
          )}
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4" /> Sign out
          </Button>
          <Link href="/admin/new">
            <Button variant="primary">
              <Plus className="w-4 h-4" /> Add product
            </Button>
          </Link>
        </div>
      </div>

      {savedSlug && (
        <div className="bg-success/10 border border-success/30 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
          <p className="text-sm text-text">
            Product saved.{" "}
            <Link href={`/products/${savedSlug}`} className="text-success underline font-medium" target="_blank">
              View live page →
            </Link>
          </p>
        </div>
      )}
      {wasDeleted && (
        <div className="bg-surface-2 border border-border rounded-2xl p-4 mb-6 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-text-secondary" />
          <p className="text-sm text-text-secondary">Product deleted.</p>
        </div>
      )}

      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-4 mb-6">
        <p className="text-xs text-text-secondary">
          <span className="font-semibold text-accent-bright">Local storage mode:</span> Products save in your browser during development. When you connect a database, only <code className="text-xs bg-surface-3 px-1 py-0.5 rounded">src/lib/store.ts</code> needs to change.
        </p>
      </div>

      <div className="flex items-center gap-3 bg-surface-2 border border-border rounded-xl px-4 py-3 mb-6 max-w-md">
        <Search className="w-4 h-4 text-text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className="flex-1 bg-transparent text-sm text-text placeholder:text-text-muted outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">📦</p>
          <h3 className="text-lg font-semibold text-text mb-2">No products found</h3>
          <Link href="/admin/new">
            <Button variant="primary"><Plus className="w-4 h-4" /> Add your first product</Button>
          </Link>
        </div>
      ) : (
        <div className="bg-surface-2 border border-border rounded-2xl overflow-hidden">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={cn(
                "flex items-center gap-4 p-4 hover:bg-surface-3 transition-colors duration-150",
                i !== filtered.length - 1 && "border-b border-border"
              )}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-surface-3 flex-shrink-0 border border-border">
                {product.images[0] ? (
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" unoptimized />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-muted text-xs">No img</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="text-sm font-semibold text-text truncate">{product.name}</p>
                  {product.trending && <Badge variant="trending">🔥</Badge>}
                  {product.onSale && <Badge variant="sale">💸</Badge>}
                  {product.featured && <Badge variant="new">⭐</Badge>}
                </div>
                <p className="text-xs text-text-muted">
                  {product.brand} · <span className="capitalize">{product.category}</span> · {product.price}
                </p>
                <div className="flex gap-1 mt-1">
                  {product.platforms.map((p) => (
                    <span key={p} className="text-[9px] font-bold bg-surface-3 border border-border rounded px-1.5 py-0.5 text-text-muted capitalize">{p}</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-14">
                <span className={cn("text-base font-bold", scoreColor(product.scores.overall))}>{product.scores.overall}</span>
                <span className="text-[10px] text-text-muted">Score</span>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Link href={`/products/${product.slug}`} target="_blank" className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface-3 transition-colors" title="View">
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link href={`/admin/${product.id}/edit`} className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-surface-3 transition-colors" title="Edit">
                  <Pencil className="w-4 h-4" />
                </Link>
                <button onClick={() => handleDelete(product.id, product.name)} className="p-2 rounded-lg text-text-muted hover:text-sale hover:bg-surface-3 transition-colors" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12 text-text-secondary">Loading…</div>}>
      <AdminContent />
    </Suspense>
  );
}
