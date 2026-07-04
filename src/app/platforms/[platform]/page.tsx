"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { platforms } from "@/lib/data";
import { useProducts } from "@/lib/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";

const PLATFORM_META: Record<string, {
  icon: string; color: string; glow: string; bg: string;
  description: string; ctaText: string;
}> = {
  tiktok:    { icon: "♪",  color: "#FF0050", glow: "rgba(255,0,80,0.2)",    bg: "rgba(255,0,80,0.06)",    description: "Everything I've featured in my TikTok videos", ctaText: "Watch on TikTok" },
  instagram: { icon: "◈",  color: "#E1306C", glow: "rgba(225,48,108,0.2)",  bg: "rgba(225,48,108,0.06)",  description: "Products from my Instagram posts and Reels",    ctaText: "See on Instagram" },
  youtube:   { icon: "▶",  color: "#FF0000", glow: "rgba(255,0,0,0.2)",     bg: "rgba(255,0,0,0.06)",     description: "Products from my in-depth YouTube reviews",   ctaText: "Watch on YouTube" },
  pinterest: { icon: "✦",  color: "#E60023", glow: "rgba(230,0,35,0.2)",    bg: "rgba(230,0,35,0.06)",    description: "Curated picks from my Pinterest boards",       ctaText: "See on Pinterest" },
  facebook:  { icon: "◉",  color: "#1877F2", glow: "rgba(24,119,242,0.2)",  bg: "rgba(24,119,242,0.06)",  description: "Products shared with my Facebook community",   ctaText: "See on Facebook" },
};

export default function PlatformPage() {
  const params = useParams();
  const platformId = params.platform as string;
  const { products, loaded } = useProducts();

  const p = platforms.find((pl) => pl.id === platformId);
  const meta = PLATFORM_META[platformId];
  const filtered = products.filter((prod) => prod.platforms.includes(platformId as any));

  if (!p || !meta) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-xl font-bold text-text mb-2">Platform not found</h1>
        <Link href="/platforms" className="text-accent text-sm">← All platforms</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Platform hero banner */}
      <div
        className="w-full py-20 px-4 text-center relative overflow-hidden"
        style={{ background: meta.bg }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center, ${meta.glow} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Big platform icon */}
          <div
            className="w-28 h-28 rounded-3xl mx-auto mb-6 flex items-center justify-center text-6xl font-bold border-2"
            style={{
              background: meta.color + "18",
              borderColor: meta.color + "40",
              color: meta.color,
              boxShadow: `0 0 60px ${meta.glow}`,
            }}
          >
            {meta.icon}
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-text mb-3">
            {p.label} Picks
          </h1>
          <p className="text-text-secondary mb-8 text-lg">{meta.description}</p>

          {/* Platform CTA */}
          <a
            href={p.handle === "@valen" ? "#" : `https://${platformId}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{
              background: meta.color,
              color: "#fff",
              boxShadow: `0 0 24px ${meta.glow}`,
            }}
          >
            <ExternalLink className="w-4 h-4" />
            Follow me on {p.label}
          </a>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: meta.color }}>
              {p.label} recommendations
            </p>
            <h2 className="text-2xl font-bold text-text">
              {filtered.length} {filtered.length === 1 ? "product" : "products"} featured
            </h2>
          </div>
          <Link href="/platforms" className="text-sm text-text-secondary hover:text-text transition-colors">
            ← All platforms
          </Link>
        </div>

        {loaded && (
          filtered.length > 0 ? (
            <ProductGrid products={filtered} />
          ) : (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">{meta.icon}</p>
              <h3 className="text-lg font-semibold text-text mb-2">No products yet on {p.label}</h3>
              <p className="text-text-secondary text-sm">Check back after I post my next {p.label} review.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
