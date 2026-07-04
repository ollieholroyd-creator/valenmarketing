"use client";

import { scoreColor } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ScoreSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function ScoreSlider({ label, value, onChange }: ScoreSliderProps) {
  return (
    <div className="flex items-center gap-4">
      <label className="text-sm text-text-secondary w-32 flex-shrink-0">{label}</label>
      <input
        type="range"
        min={1}
        max={10}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-accent h-1.5 rounded-full bg-surface-3 cursor-pointer"
      />
      <span className={cn("text-sm font-bold w-8 text-right", scoreColor(value))}>{value}</span>
    </div>
  );
}
