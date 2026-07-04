import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = "View all",
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4 mb-8", className)}>
      <div className={cn(center && "text-center w-full")}>
        {eyebrow && (
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-text">{title}</h2>
        {description && (
          <p className="mt-2 text-text-secondary text-sm sm:text-base max-w-xl">
            {description}
          </p>
        )}
      </div>
      {href && !center && (
        <Link
          href={href}
          className="flex-shrink-0 flex items-center gap-1 text-sm text-accent hover:text-accent-bright transition-colors duration-200 font-medium group"
        >
          {hrefLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      )}
    </div>
  );
}
