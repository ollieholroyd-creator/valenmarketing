import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with VALEN.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Get in touch</p>
        <h1 className="text-4xl font-black text-text mb-4">Contact</h1>
        <p className="text-text-secondary leading-relaxed">
          Have a question about a product? Want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-surface-2 border border-border rounded-2xl p-6">
          <Mail className="w-6 h-6 text-accent mb-3" />
          <h3 className="text-sm font-bold text-text mb-1">Email</h3>
          <p className="text-xs text-text-secondary mb-3">For collaborations and enquiries</p>
          <a href="mailto:hello@valen.co" className="text-sm text-accent hover:text-accent-bright transition-colors">
            hello@valen.co
          </a>
        </div>
        <div className="bg-surface-2 border border-border rounded-2xl p-6">
          <MessageSquare className="w-6 h-6 text-accent mb-3" />
          <h3 className="text-sm font-bold text-text mb-1">Social DMs</h3>
          <p className="text-xs text-text-secondary mb-3">Reach me on any platform</p>
          <span className="text-sm text-accent">@valen</span>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-surface-2 border border-border rounded-3xl p-8">
        <h2 className="text-xl font-bold text-text mb-6">Send a Message</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-surface-3 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-surface-3 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full bg-surface-3 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
            <textarea
              rows={5}
              placeholder="Your message…"
              className="w-full bg-surface-3 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors resize-none"
            />
          </div>
          <button className="w-full bg-accent-gradient text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
            Send Message
          </button>
          <p className="text-xs text-text-muted text-center">I'll get back to you within 48 hours.</p>
        </div>
      </div>
    </div>
  );
}
