"use client";

import Link from "next/link";
import { useProducts } from "@/lib/useProducts";

const PLATFORMS = [
  { id: "tiktok",    label: "TikTok",    icon: "♪", color: "#FF0050", glow: "rgba(255,0,80,0.3)",   bg: "rgba(255,0,80,0.08)",   border: "rgba(255,0,80,0.3)",   desc: "Short-form video picks" },
  { id: "instagram", label: "Instagram", icon: "◈", color: "#E1306C", glow: "rgba(225,48,108,0.3)", bg: "rgba(225,48,108,0.08)", border: "rgba(225,48,108,0.3)", desc: "Photos & Reels" },
  { id: "youtube",   label: "YouTube",   icon: "▶", color: "#FF0000", glow: "rgba(255,0,0,0.3)",    bg: "rgba(255,0,0,0.08)",    border: "rgba(255,0,0,0.3)",    desc: "In-depth reviews" },
  { id: "pinterest", label: "Pinterest", icon: "✦", color: "#E60023", glow: "rgba(230,0,35,0.3)",   bg: "rgba(230,0,35,0.08)",   border: "rgba(230,0,35,0.3)",   desc: "Curated boards" },
  { id: "facebook",  label: "Facebook",  icon: "◉", color: "#1877F2", glow: "rgba(24,119,242,0.3)", bg: "rgba(24,119,242,0.08)", border: "rgba(24,119,242,0.3)", desc: "Community picks" },
];

export default function PlatformsPage() {
  const { products } = useProducts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Where I create</p>
        <h1 className="text-4xl sm:text-5xl font-black text-text mb-4">Choose a platform</h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto">
          Tap the platform you came from to see every product I've featured there.
        </p>
      </div>

      {/* 5 large platform icons */}
      <div className="grid grid-cols-5 gap-4 sm:gap-8 mb-16">
        {PLATFORMS.map((p) => {
          const count = products.filter((prod) => prod.platforms.includes(p.id as any)).length;
          return (
            <Link
              key={p.id}
              href={`/platforms/${p.id}`}
              className="group flex flex-col items-center gap-4"
            >
              <div
                className="relative w-full aspect-square rounded-2xl sm:rounded-3xl flex items-center justify-center text-4xl sm:text-5xl font-bold transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105"
                style={{
                  background: p.bg,
                  border: `2px solid ${p.border}`,
                  color: p.color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 50px ${p.glow}, 0 12px 40px rgba(0,0,0,0.5)`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = p.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.borderColor = p.border;
                }}
              >
                <span className="select-none">{p.icon}</span>
              </div>
              <div className="text-center">
                <p className="font-bold text-text text-sm sm:text-base group-hover:text-white transition-colors">{p.label}</p>
                <p className="text-xs text-text-muted hidden sm:block mt-0.5">{p.desc}</p>
                {count > 0 && (
                  <p className="text-xs font-semibold mt-1" style={{ color: p.color }}>{count} products</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
