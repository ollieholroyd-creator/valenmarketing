"use client";

import { useEffect, useState, useRef } from "react";
import { cn, formatScore, scoreColor } from "@/lib/utils";
import { ValenScores } from "@/lib/types";

interface ScoreBarProps {
  label: string;
  value: number;
  animate?: boolean;
}

function ScoreBar({ label, value, animate }: ScoreBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(value * 10), 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(value * 10);
    }
  }, [value, animate]);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary font-medium">{label}</span>
        <span className={cn("text-xs font-bold", scoreColor(value))}>{formatScore(value)}</span>
      </div>
      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

interface ValenScoreProps {
  scores: ValenScores;
  compact?: boolean;
  animate?: boolean;
  className?: string;
}

export function ValenScore({ scores, compact = false, animate = false, className }: ValenScoreProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate]);

  const stars = Math.round(scores.overall / 2);

  if (compact) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={cn("text-sm", i < stars ? "text-accent-bright" : "text-surface-3")}>★</span>
          ))}
        </div>
        <span className={cn("text-sm font-bold", scoreColor(scores.overall))}>
          {formatScore(scores.overall)}
        </span>
        <span className="text-xs text-text-muted">/ 10</span>
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("bg-surface-2 rounded-2xl border border-border p-6 space-y-5", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">
            Valen Score
          </p>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={cn("text-xl", i < stars ? "text-accent-bright" : "text-surface-3")}>★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className={cn("text-4xl font-black tabular-nums", scoreColor(scores.overall))}>
            {formatScore(scores.overall)}
          </span>
          <span className="text-text-muted text-sm font-medium"> / 10</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Individual scores */}
      <div className="space-y-3">
        <ScoreBar label="Performance" value={scores.performance} animate={visible} />
        <ScoreBar label="Value for Money" value={scores.value} animate={visible} />
        <ScoreBar label="Build Quality" value={scores.quality} animate={visible} />
        <ScoreBar label="Ease of Use" value={scores.easeOfUse} animate={visible} />
      </div>
    </div>
  );
}
