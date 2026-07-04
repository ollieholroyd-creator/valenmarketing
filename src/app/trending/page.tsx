"use client";

import { useProducts } from "@/lib/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function TrendingPage() {
  const { products, loaded } = useProducts();
  const trending = products.filter((p) => p.trending);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <SectionHeader
          eyebrow="Right now"
          title="🔥 Trending Products"
          description="The products everyone's talking about — and that I genuinely love."
        />
      </div>
      {loaded && <ProductGrid products={trending} />}
    </div>
  );
}
