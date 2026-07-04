import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Discover: [
    { label: "Trending", href: "/trending" },
    { label: "On Sale", href: "/on-sale" },
    { label: "Categories", href: "/categories" },
    { label: "Platforms", href: "/platforms" },
  ],
  Info: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Affiliate Disclosure", href: "/disclosure" },
  ],
};

const socialLinks = [
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent-gradient flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold tracking-tight">VALEN</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Find every product I've recommended across my social media. Honest reviews.
              Real scores. No fluff.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-accent transition-colors duration-200 border border-border px-3 py-1.5 rounded-lg hover:border-accent/40 bg-surface-2"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {year} VALEN. All rights reserved.
          </p>
          <p className="text-xs text-text-muted text-center sm:text-right max-w-md">
            VALEN is a participant in the Amazon Associates Programme. As an Amazon Associate,
            I earn from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
