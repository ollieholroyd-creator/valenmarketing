import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "VALEN's affiliate relationship disclosure.",
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Transparency</p>
        <h1 className="text-4xl font-black text-text mb-4">Affiliate Disclosure</h1>
        <p className="text-text-muted text-sm">Last updated: January 2025</p>
      </div>

      <div className="space-y-6">
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
          <p className="text-text font-medium leading-relaxed">
            VALEN is a participant in the Amazon Associates Programme, an affiliate advertising
            programme designed to provide a means for sites to earn advertising fees by advertising
            and linking to Amazon.
          </p>
        </div>

        {[
          {
            title: "What This Means",
            body: "When you click an Amazon link on VALEN and make a purchase, I may earn a small commission at no additional cost to you. This helps support the time and effort that goes into testing products and maintaining this website.",
          },
          {
            title: "My Commitment to You",
            body: "Earning a commission never influences my recommendations. Every product featured on VALEN has been chosen based on quality, value, and genuine usefulness — not on commission rates. I would recommend the same products regardless of affiliate arrangements.",
          },
          {
            title: "No Paid Placements",
            body: "VALEN does not accept payment from brands or manufacturers to feature their products. Every recommendation is independent and based solely on my personal experience and assessment.",
          },
          {
            title: "Price Transparency",
            body: "Prices displayed on VALEN are approximate and may differ from prices on Amazon due to sales, promotions, or regional pricing. Always verify the current price on Amazon before purchasing.",
          },
          {
            title: "FTC Compliance",
            body: "In accordance with FTC guidelines, VALEN clearly discloses its affiliate relationships. This disclosure is present site-wide and on every product page to ensure complete transparency.",
          },
        ].map((section) => (
          <div key={section.title} className="bg-surface-2 border border-border rounded-2xl p-6">
            <h2 className="text-base font-bold text-text mb-3">{section.title}</h2>
            <p className="text-sm text-text-secondary leading-relaxed">{section.body}</p>
          </div>
        ))}

        <p className="text-xs text-text-muted text-center pt-4">
          Questions? Email us at hello@valen.co
        </p>
      </div>
    </div>
  );
}
