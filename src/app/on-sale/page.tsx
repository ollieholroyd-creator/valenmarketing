"use client";

import { useProducts } from "@/lib/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function OnSalePage() {
  const { products, loaded } = useProducts();
  const onSale = products.filter((p) => p.onSale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <SectionHeader
          eyebrow="Limited time"
          title="💸 On Sale"
          description="Grab my recommended products while they're discounted."
        />
      </div>
      {loaded && <ProductGrid products={onSale} />}
    </div>
  );
}
