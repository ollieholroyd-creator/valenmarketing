"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CheckCircle, XCircle, ArrowLeft, Star, Pencil } from "lucide-react";
import { Product, Platform } from "@/lib/types";
import { getProductBySlugLocal } from "@/lib/store";
import { ValenScore } from "@/components/ui/ValenScore";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const platformLabel: Record<Platform, { label: string; emoji: string; color: string }> = {
  tiktok:    { label: "TikTok",    emoji: "♪", color: "#FF0050" },
  instagram: { label: "Instagram", emoji: "📷", color: "#E1306C" },
  youtube:   { label: "YouTube",   emoji: "▶", color: "#FF0000" },
  pinterest: { label: "Pinterest", emoji: "📌", color: "#E60023" },
  facebook:  { label: "Facebook",  emoji: "👥", color: "#1877F2" },
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | undefined | null>(undefined);

  useEffect(() => {
    const found = getProductBySlugLocal(slug);
    setProduct(found ?? null);
  }, [slug]);

  if (product === undefined) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center text-text-secondary">Loading…</div>;
  }

  if (product === null) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-xl font-bold text-text mb-2">Product not found</h1>
        <Link href="/" className="text-accent hover:text-accent-bright text-sm font-medium">← Back to home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <Link href={`/admin/${product.id}/edit`}>
          <Button variant="secondary" size="sm">
            <Pencil className="w-3.5 h-3.5" />
            Edit product
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square bg-surface-2 rounded-3xl overflow-hidden border border-border">
            {product.images[0] ? (
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" priority unoptimized />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">No image</div>
            )}
            {product.onSale && (
              <div className="absolute top-4 left-4"><Badge variant="sale">💸 On Sale</Badge></div>
            )}
            {product.trending && (
              <div className="absolute top-4 right-4"><Badge variant="trending">🔥 Trending</Badge></div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square bg-surface-2 rounded-2xl overflow-hidden border border-border">
                  <Image src={img} alt={`${product.name} ${i + 2}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Badge variant="category">{product.category}</Badge>
            <span className="text-sm text-text-muted">{product.brand}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-text leading-tight">{product.name}</h1>

          <div className="flex items-baseline gap-3">
            {product.onSale && product.salePrice ? (
              <>
                <span className="text-3xl font-black text-sale">{product.salePrice}</span>
                <span className="text-lg text-text-muted line-through">{product.price}</span>
              </>
            ) : (
              <span className="text-3xl font-black text-text">{product.price}</span>
            )}
          </div>

          <ValenScore scores={product.scores} animate />

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Valen Verdict</p>
            <p className="text-text font-medium leading-relaxed italic">"{product.valenVerdict}"</p>
          </div>

          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer nofollow" className="block">
            <Button variant="amazon" size="lg" className="w-full text-base py-4 rounded-2xl">
              <ExternalLink className="w-5 h-5" />
              View on Amazon
            </Button>
          </a>

          <p className="text-xs text-text-muted text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>

          {/* Platforms featured on — highlighted as a key discovery path */}
          {product.platforms.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">
                📲 Watch the original post
              </p>
              <div className="flex flex-wrap gap-2">
                {product.platforms.map((p) => {
                  const info = platformLabel[p];
                  const link = product.platformLinks[p];
                  return (
                    <a
                      key={p}
                      href={link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: info.color + "15",
                        borderColor: info.color + "40",
                        color: "#F8F8FF",
                      }}
                    >
                      <span>{info.emoji}</span>
                      {info.label}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-2 rounded-3xl border border-border p-8">
            <h2 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              My Review
            </h2>
            <div className="space-y-4">
              {product.fullReview.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl border border-border p-8">
            <h2 className="text-xl font-bold text-text mb-4">Why I Recommend It</h2>
            <p className="text-text-secondary leading-relaxed">{product.whyIRecommend}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-success/5 border border-success/20 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-success uppercase tracking-widest mb-4">Pros</h3>
              <ul className="space-y-3">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sale/5 border border-sale/20 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-sale uppercase tracking-widest mb-4">Cons</h3>
              <ul className="space-y-3">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <XCircle className="w-4 h-4 text-sale flex-shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ValenScore scores={product.scores} animate />

          <div className="bg-surface-2 rounded-2xl border border-border p-5">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="bg-surface-2 rounded-2xl border border-border p-5 space-y-3">
            <p className="text-sm font-semibold text-text">Ready to buy?</p>
            <a href={product.amazonLink} target="_blank" rel="noopener noreferrer nofollow">
              <Button variant="amazon" size="md" className="w-full">
                <ExternalLink className="w-4 h-4" />
                View on Amazon
              </Button>
            </a>
            <p className="text-xs text-text-muted">Free delivery available for Prime members.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
