import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Star, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind VALEN.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-2xl font-black tracking-tight">VALEN</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-text mb-6 leading-tight">
          Your shortcut to the best products.
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
          VALEN is where I collect every product I've discovered, tested, and recommended across
          TikTok, Instagram, YouTube, Pinterest, and Facebook — all in one beautiful place.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
        {[
          {
            icon: <Star className="w-5 h-5 text-accent" />,
            title: "Honest Reviews",
            body: "Every product on VALEN has been personally tested. I only recommend things I genuinely use and love.",
          },
          {
            icon: <Shield className="w-5 h-5 text-accent" />,
            title: "No Paid Placements",
            body: "I don't accept payment to feature products. Every recommendation is based purely on merit.",
          },
          {
            icon: <Heart className="w-5 h-5 text-accent" />,
            title: "Community First",
            body: "VALEN was built for my community. Every score, review, and verdict is written with you in mind.",
          },
          {
            icon: <Zap className="w-5 h-5 text-accent" />,
            title: "Always Updated",
            body: "I regularly revisit and update my reviews as products evolve. You'll always find current, relevant information here.",
          },
        ].map((v) => (
          <div key={v.title} className="bg-surface-2 border border-border rounded-2xl p-6">
            <div className="mb-3">{v.icon}</div>
            <h3 className="text-base font-bold text-text mb-2">{v.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="bg-surface-2 border border-border rounded-3xl p-8 sm:p-12 mb-12">
        <h2 className="text-2xl font-bold text-text mb-6">The Story</h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            I've been recommending products on social media for years. Over that time, I built up
            a library of genuinely great finds — tech, kitchen, fitness, beauty, home, gaming —
            but they were scattered across platforms and hard to find.
          </p>
          <p>
            VALEN was born from that frustration. I wanted one beautiful, fast, and honest place
            where my community could discover everything I've recommended, read my full reviews,
            and find the best deals — without wading through algorithm-driven noise.
          </p>
          <p>
            Every product you find here has been in my hands. Every score is earned. Every
            recommendation is genuine. That's the VALEN promise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-text-secondary mb-4">Have a question or collaboration enquiry?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent-gradient text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
