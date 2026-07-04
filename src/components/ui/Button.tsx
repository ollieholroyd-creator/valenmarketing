import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "amazon";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Primary — blue gradient
            "bg-accent-gradient text-white hover:opacity-90 hover:shadow-accent shadow-accent-sm active:scale-[0.98]":
              variant === "primary",
            // Secondary — surface
            "bg-surface-2 border border-border text-text hover:bg-surface-3 hover:border-border active:scale-[0.98]":
              variant === "secondary",
            // Ghost
            "text-text-secondary hover:text-text hover:bg-surface-2":
              variant === "ghost",
            // Danger
            "bg-sale/10 border border-sale/20 text-sale hover:bg-sale/20":
              variant === "danger",
            // Amazon CTA
            "bg-[#FF9900] hover:bg-[#F0A00C] text-black font-semibold hover:shadow-[0_0_20px_rgba(255,153,0,0.3)] active:scale-[0.98]":
              variant === "amazon",
          },
          {
            "text-xs px-3 py-1.5": size === "sm",
            "text-sm px-4 py-2.5": size === "md",
            "text-base px-6 py-3.5": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
