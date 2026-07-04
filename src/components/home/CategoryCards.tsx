import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { Product } from "@/lib/types";

interface CategoryCardsProps {
  products: Product[];
}

export function CategoryCards({ products }: CategoryCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.id).length;
        return (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="group relative bg-surface-2 border border-border rounded-2xl p-5 flex flex-col gap-3 hover:border-accent/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-3xl">{cat.emoji}</span>
            <div>
              <h3 className="text-sm font-semibold text-text group-hover:text-accent-bright transition-colors duration-200">
                {cat.label}
              </h3>
              <p className="text-xs text-text-muted mt-0.5">{cat.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-text-muted">{count} {count === 1 ? "product" : "products"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
