"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const suggestions = ["Sony headphones", "Air fryer", "Gaming mouse", "Kindle", "Dyson Airwrap"];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Floating grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide">
          <Zap className="w-3.5 h-3.5" fill="currentColor" />
          Honest reviews. Real recommendations.
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-[1.05]">
          <span className="text-text">VALEN</span>
        </h1>

        <p className="text-xl sm:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Find every product I've recommended across my social media.
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-6">
          <div
            className={cn(
              "flex items-center gap-3 bg-surface-2 border border-border rounded-2xl px-5 py-4",
              "hover:border-accent/30 focus-within:border-accent/50 focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]",
              "transition-all duration-300"
            )}
          >
            <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, categories, brands…"
              className="flex-1 bg-transparent text-text placeholder:text-text-muted text-base outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-accent-gradient text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
            >
              Search
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-text-muted">Try:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => router.push(`/search?q=${encodeURIComponent(s)}`)}
              className="text-xs text-text-secondary bg-surface border border-border px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-text transition-all duration-200"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16">
          {[
            { value: "12+", label: "Recommendations" },
            { value: "5", label: "Platforms" },
            { value: "8", label: "Categories" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-text mb-1">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-text-muted" />
        <p className="text-[10px] text-text-muted uppercase tracking-widest">Scroll</p>
      </div>
    </section>
  );
}
