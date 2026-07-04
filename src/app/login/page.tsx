"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Zap, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // If already logged in, redirect to admin
  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json())
      .then((d) => { if (d.isAdmin) router.replace("/admin"); });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-2xl font-black tracking-tight">VALEN</span>
          </div>
          <h1 className="text-xl font-bold text-text mb-2">Admin access</h1>
          <p className="text-sm text-text-secondary">Enter your password to manage products</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-surface-2 border border-border rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full bg-surface-3 border border-border rounded-xl pl-10 pr-10 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-sale/10 border border-sale/20 rounded-xl p-3 text-sm text-sale">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-gradient-to-r from-accent to-accent-glow text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {loading ? "Signing in…" : "Sign in →"}
          </button>
        </form>

        <p className="text-center text-xs text-text-muted mt-6">
          This page is only for the site owner.{" "}
          <a href="/" className="text-accent hover:text-accent-bright transition-colors">
            Go back home →
          </a>
        </p>
      </div>
    </div>
  );
}
