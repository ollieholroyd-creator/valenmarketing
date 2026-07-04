import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "trending" | "sale" | "new" | "category" | "platform";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full",
        {
          "bg-surface-2 border border-border text-text-secondary": variant === "default",
          "bg-orange-500/10 border border-orange-500/20 text-orange-400": variant === "trending",
          "bg-sale/10 border border-sale/20 text-sale": variant === "sale",
          "bg-accent/10 border border-accent/20 text-accent-bright": variant === "new",
          "bg-surface-2 border border-border text-text-muted": variant === "category",
          "bg-surface-3 border border-border text-text-secondary": variant === "platform",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
