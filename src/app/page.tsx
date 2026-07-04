"use client";

import Link from "next/link";
import { useProducts } from "@/lib/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PLATFORMS = [
  {
    id: "tiktok",
    label: "TikTok",
    icon: "♪",
    color: "#FF0050",
    glow: "rgba(255,0,80,0.35)",
    bg: "rgba(255,0,80,0.08)",
    border: "rgba(255,0,80,0.25)",
    description: "Short-form picks",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: "◈",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.35)",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.25)",
    description: "Photo & Reels",
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: "▶",
    color: "#FF0000",
    glow: "rgba(255,0,0,0.35)",
    bg: "rgba(255,0,0,0.08)",
    border: "rgba(255,0,0,0.25)",
    description: "In-depth reviews",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    icon: "✦",
    color: "#E60023",
    glow: "rgba(230,0,35,0.35)",
    bg: "rgba(230,0,35,0.08)",
    border: "rgba(230,0,35,0.25)",
    description: "Curated finds",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "◉",
    color: "#1877F2",
    glow: "rgba(24,119,242,0.35)",
    bg: "rgba(24,119,242,0.08)",
    border: "rgba(24,119,242,0.25)",
    description: "Community picks",
  },
];

export default function HomePage() {
  const { products, loaded } = useProducts();
  const trending = products.filter((p) => p.trending).slice(0, 3);
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold tracking-wide mb-8">
            ⚡ Every product. Every platform. One place.
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-text">VALEN</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary font-light max-w-lg mx-auto leading-relaxed mb-4">
            Find every product I've recommended across my social media.
          </p>
          <p className="text-sm text-text-muted mb-14">
            Pick a platform below to see exactly what I featured there.
          </p>

          {/* ── Platform Icons — the main CTA ── */}
          <div className="grid grid-cols-5 gap-3 sm:gap-5 max-w-2xl mx-auto mb-6">
            {PLATFORMS.map((p) => (
              <Link
                key={p.id}
                href={`/platforms/${p.id}`}
                className="group flex flex-col items-center gap-3"
              >
                {/* Big icon button */}
                <div
                  className="relative w-full aspect-square rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl font-bold transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                  style={{
                    background: p.bg,
                    border: `2px solid ${p.border}`,
                    color: p.color,
                    boxShadow: `0 0 0 0 ${p.glow}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${p.glow}, 0 8px 32px rgba(0,0,0,0.4)`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = p.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${p.glow}`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = p.border;
                  }}
                >
                  <span className="select-none">{p.icon}</span>
                  {/* Glow ring on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${p.glow} 0%, transparent 70%)` }}
                  />
                </div>
                {/* Label */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-bold text-text group-hover:text-white transition-colors">
                    {p.label}
                  </p>
                  <p className="text-[10px] text-text-muted hidden sm:block mt-0.5">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-xs text-text-muted">
            Tap the platform you came from to see my picks
          </p>
        </div>
      </section>

      {/* ── Scroll anchor ── */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-text-muted" />
          <p className="text-[10px] text-text-muted uppercase tracking-widest">Or browse below</p>
        </div>
      </div>

      {/* ── Below-fold content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20">

        {/* Trending */}
        {loaded && trending.length > 0 && (
          <section>
            <SectionHeader
              eyebrow="Hot right now"
              title="🔥 Trending"
              description="The products everyone's talking about."
              href="/trending"
            />
            <ProductGrid products={trending} />
          </section>
        )}

        {/* Featured */}
        {loaded && featured.length > 0 && (
          <section>
            <SectionHeader
              eyebrow="Editor's choice"
              title="Featured Products"
              description="The products I trust, test, and recommend most."
              href="/search"
            />
            <ProductGrid products={featured} />
          </section>
        )}
      </div>
    </div>
  );
}
