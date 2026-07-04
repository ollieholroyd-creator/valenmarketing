"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Zap, Plus, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/trending", label: "Trending" },
  { href: "/on-sale", label: "On Sale" },
  { href: "/categories", label: "Categories" },
  { href: "/platforms", label: "Platforms" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check admin session
  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json())
      .then((d) => setIsAdmin(d.isAdmin === true))
      .catch(() => {});
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center shadow-accent-sm transition-transform group-hover:scale-110 duration-200">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-text">VALEN</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-text bg-surface-2"
                      : "text-text-secondary hover:text-text hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/search"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-text hover:border-accent/40 transition-all duration-200 text-sm"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </Link>

              {isAdmin ? (
                <Link
                  href="/admin"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent-bright hover:bg-accent/15 transition-all duration-200 text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Admin
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface border border-border text-text-muted hover:text-text transition-all duration-200 text-sm"
                  title="Admin login"
                >
                  <LogIn className="w-4 h-4" />
                </Link>
              )}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-text transition-all duration-200"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className={cn(
          "absolute top-16 left-0 right-0 bg-surface border-b border-border p-6 transition-all duration-300",
          menuOpen ? "translate-y-0" : "-translate-y-4"
        )}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-text bg-surface-2 border border-border"
                    : "text-text-secondary hover:text-text hover:bg-surface-2"
                )}
              >
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link href="/admin" className="mt-2 px-4 py-3 rounded-xl text-sm font-medium bg-accent/10 border border-accent/30 text-accent-bright flex items-center gap-2">
                <Plus className="w-4 h-4" /> Admin
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="h-16" />
    </>
  );
}
