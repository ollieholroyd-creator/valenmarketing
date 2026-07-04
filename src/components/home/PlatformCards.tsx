import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { platforms } from "@/lib/data";
import { Product } from "@/lib/types";

interface PlatformCardsProps {
  products: Product[];
}

const platformGradients: Record<string, string> = {
  tiktok: "from-[#FF0050]/20 to-[#00F2EA]/10",
  instagram: "from-[#E1306C]/20 to-[#833AB4]/10",
  youtube: "from-[#FF0000]/20 to-[#FF0000]/5",
  pinterest: "from-[#E60023]/20 to-[#E60023]/5",
  facebook: "from-[#1877F2]/20 to-[#1877F2]/5",
};

const platformIcons: Record<string, string> = {
  tiktok: "♪",
  instagram: "📷",
  youtube: "▶",
  pinterest: "📌",
  facebook: "👥",
};

export function PlatformCards({ products }: PlatformCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {platforms.map((platform) => {
        const count = products.filter((p) => p.platforms.includes(platform.id)).length;
        return (
          <Link
            key={platform.id}
            href={`/platforms/${platform.id}`}
            className={`group relative bg-gradient-to-br ${platformGradients[platform.id]} bg-surface-2 border-2 border-border rounded-2xl p-5 flex flex-col gap-3 hover:border-white/20 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
          >
            <div className="absolute inset-0 bg-surface-2 -z-10" />
            <div className="flex items-center justify-between">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border border-white/10"
                style={{ backgroundColor: platform.color + "22" }}
              >
                {platformIcons[platform.id]}
              </div>
              {count > 0 && (
                <span className="text-[10px] font-bold bg-white/10 text-white px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold text-text group-hover:text-white transition-colors duration-200">
                {platform.label}
              </h3>
              <p className="text-xs text-text-muted mt-0.5">{platform.handle}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
              <span className="text-xs text-text-secondary flex items-center gap-1">
                <Users className="w-3 h-3" />
                Shop this platform
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
