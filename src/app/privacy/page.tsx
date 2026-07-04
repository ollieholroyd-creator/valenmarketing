import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VALEN handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Legal</p>
        <h1 className="text-4xl font-black text-text mb-4">Privacy Policy</h1>
        <p className="text-text-muted text-sm">Last updated: January 2025</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        {[
          {
            title: "Information We Collect",
            body: "VALEN does not collect personal information beyond what you voluntarily provide via our contact form. We may collect anonymised usage analytics to understand how visitors use the site and improve the experience.",
          },
          {
            title: "Cookies",
            body: "We use minimal, essential cookies to ensure the website functions correctly. We may also use analytics cookies to understand site performance. You can disable cookies in your browser settings at any time.",
          },
          {
            title: "Amazon Associates",
            body: "VALEN participates in the Amazon Associates Programme. When you click an Amazon link on our site, Amazon may store cookies on your device as part of their tracking system. Please refer to Amazon's Privacy Policy for full details.",
          },
          {
            title: "Third-Party Links",
            body: "VALEN contains links to third-party websites including social media platforms and Amazon. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.",
          },
          {
            title: "Data Security",
            body: "We take reasonable measures to protect any information you provide. Contact form submissions are transmitted securely. We do not sell, trade, or transfer your personal data to third parties.",
          },
          {
            title: "Your Rights",
            body: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, please contact us at hello@valen.co.",
          },
          {
            title: "Changes to This Policy",
            body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of VALEN constitutes acceptance of the updated policy.",
          },
          {
            title: "Contact",
            body: "If you have questions about this Privacy Policy, please contact us at hello@valen.co.",
          },
        ].map((section) => (
          <div key={section.title} className="bg-surface-2 border border-border rounded-2xl p-6">
            <h2 className="text-base font-bold text-text mb-3">{section.title}</h2>
            <p className="text-sm text-text-secondary leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
