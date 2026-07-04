import { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ products, className, columns = 3 }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h3 className="text-lg font-semibold text-text mb-2">No products found</h3>
        <p className="text-text-secondary text-sm">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-6",
        {
          "grid-cols-1 sm:grid-cols-2": columns === 2,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": columns === 4,
        },
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
