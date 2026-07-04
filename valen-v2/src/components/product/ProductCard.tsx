import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ValenScore } from "@/components/ui/ValenScore";
import { cn, truncate } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const platformEmoji: Record<string, string> = {
  tiktok: "TT",
  instagram: "IG",
  youtube: "YT",
  pinterest: "PT",
  facebook: "FB",
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-surface rounded-3xl border border-border overflow-hidden",
        "transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover hover:-translate-y-1",
        "shadow-card",
        className
      )}
    >
      {/* Badges overlay */}
      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
        {product.trending && (
          <Badge variant="trending">🔥 Trending</Badge>
        )}
        {product.onSale && (
          <Badge variant="sale">💸 Sale</Badge>
        )}
      </div>

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] bg-surface-2 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Category + platforms */}
        <div className="flex items-center justify-between">
          <Badge variant="category">{product.category}</Badge>
          <div className="flex gap-1">
            {product.platforms.slice(0, 3).map((p) => (
              <span
                key={p}
                className="text-[10px] font-bold bg-surface-3 border border-border rounded-md px-1.5 py-0.5 text-text-muted"
              >
                {platformEmoji[p]}
              </span>
            ))}
          </div>
        </div>

        {/* Name & brand */}
        <div>
          <p className="text-xs text-text-muted mb-0.5">{product.brand}</p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-base font-bold text-text leading-tight group-hover:text-accent-bright transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Score */}
        <ValenScore scores={product.scores} compact />

        {/* Short review */}
        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {truncate(product.shortReview, 90)}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          {product.onSale && product.salePrice ? (
            <>
              <span className="text-lg font-bold text-sale">{product.salePrice}</span>
              <span className="text-sm text-text-muted line-through">{product.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-text">{product.price}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1"
          >
            <Button variant="amazon" size="sm" className="w-full">
              <ExternalLink className="w-3.5 h-3.5" />
              View on Amazon
            </Button>
          </a>
          <Link href={`/products/${product.slug}`}>
            <Button variant="secondary" size="sm" className="gap-1.5">
              <Play className="w-3.5 h-3.5" />
              Review
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
