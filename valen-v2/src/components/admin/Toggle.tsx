"use client";

import { cn } from "@/lib/utils";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
}

export function Toggle({ checked, onChange, label, description }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="w-full flex items-center justify-between py-3"
    >
      <div className="text-left">
        <p className="text-sm font-semibold text-text">{label}</p>
        {description && <p className="text-xs text-text-muted mt-0.5">{description}</p>}
      </div>
      <div
        className={cn(
          "w-10 h-6 rounded-full border transition-colors duration-200 relative flex-shrink-0",
          checked ? "bg-accent border-accent" : "bg-surface-3 border-border"
        )}
      >
        <div
          className={cn(
            "w-4 h-4 rounded-full bg-white absolute top-[3px] transition-all duration-200",
            checked ? "left-[22px]" : "left-[3px]"
          )}
        />
      </div>
    </button>
  );
}
