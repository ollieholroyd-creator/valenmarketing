"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { useProducts } from "@/lib/useProducts";

export default function CategoriesPage() {
  const { products } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Browse</p>
        <h1 className="text-4xl font-black text-text mb-3">Categories</h1>
        <p className="text-text-secondary">Explore recommendations across every area of life.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => {
          const prods = products.filter((p) => p.category === cat.id);
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group bg-surface-2 border border-border rounded-3xl p-7 hover:border-accent/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-5xl block mb-5">{cat.emoji}</span>
              <h2 className="text-lg font-bold text-text group-hover:text-accent-bright transition-colors mb-1">
                {cat.label}
              </h2>
              <p className="text-sm text-text-secondary mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">{prods.length} products</span>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
