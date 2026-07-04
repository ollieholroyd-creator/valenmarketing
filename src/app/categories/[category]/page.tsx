"use client";

import { useParams } from "next/navigation";
import { categories } from "@/lib/data";
import { useProducts } from "@/lib/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const { products, loaded } = useProducts();

  const cat = categories.find((c) => c.id === categoryId);
  const filtered = products.filter((p) => p.category === categoryId);

  if (!cat) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-xl font-bold text-text mb-2">Category not found</h1>
        <Link href="/categories" className="text-accent hover:text-accent-bright text-sm font-medium">
          ← All categories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-5xl mb-4">{cat.emoji}</p>
        <SectionHeader
          eyebrow="Category"
          title={cat.label}
          description={cat.description}
          href="/categories"
          hrefLabel="All categories"
        />
      </div>
      {loaded && <ProductGrid products={filtered} />}
    </div>
  );
}
