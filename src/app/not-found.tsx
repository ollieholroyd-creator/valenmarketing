import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-black text-surface-3 mb-6">404</p>
      <h1 className="text-2xl font-bold text-text mb-3">Page not found</h1>
      <p className="text-text-secondary mb-8 max-w-sm">
        This page doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-accent-gradient text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>
    </div>
  );
}
