import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "American Gold Eagle Coin Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for the 1 oz American Gold Eagle coin: .9167 fine purity (22-karat), weight, dimensions, legal tender status, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "American Gold Eagle Coin Specifications | Technical Details",
    description:
      "Complete technical specifications for the 1 oz American Gold Eagle: .9167 purity (22-karat), 1 troy oz gold content, U.S. Mint legal tender status, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "American Gold Eagle Coin Specifications",
    description:
      "Complete technical specifications for the 1 oz American Gold Eagle: .9167 purity, 1 troy oz gold content, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Gold Purity", value: ".9167 fine (22-karat)", highlight: true },
  { label: "Alloy Composition", value: "91.67% gold, 3% copper, 5.33% silver" },
  { label: "Fine Gold Content", value: "1.0000 troy ounce (31.1035 g)", highlight: true },
  { label: "Gross Weight", value: "1.0909 troy ounces (33.931 g)" },
  { label: "Diameter", value: "32.70 mm (1.287 in)" },
  { label: "Thickness", value: "2.87 mm (0.113 in)" },
  { label: "Face Value", value: "$50 USD (legal tender)" },
  { label: "Mint", value: "United States Mint" },
  { label: "First Minted", value: "1986" },
  { label: "Edge", value: "Reeded" },
  { label: "IRA Eligible", value: "Yes", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the American Gold Eagle?",
    answer:
      "The American Gold Eagle is .9167 fine gold (22-karat). The alloy consists of 91.67% gold, 3% copper, and 5.33% silver. This composition creates a harder coin that resists scratching and wear better than pure gold.",
  },
  {
    question: "How much gold is in a 1 oz Gold Eagle?",
    answer:
      "The 1 oz American Gold Eagle contains exactly 1.0000 troy ounce (31.1035 grams) of fine gold. The copper and silver alloy adds weight, bringing the total coin weight to 1.0909 troy ounces (33.931 grams). The gold content is the same as a 1 oz .9999 fine coin.",
  },
  {
    question: "Is the Gold Eagle legal tender?",
    answer:
      "Yes. The American Gold Eagle carries a $50 face value and is official U.S. legal tender, backed by the United States government. The intrinsic gold value exceeds the face value.",
  },
  {
    question: "Can I hold Gold Eagle coins in an IRA?",
    answer:
      "Yes. American Gold Eagle coins are specifically named in IRS code as approved assets for Precious Metals IRAs. You need a qualified custodian and an approved depository to hold IRA-owned coins.",
  },
  {
    question: "Why does the Gold Eagle have a premium over spot price?",
    answer:
      "Premiums cover U.S. Mint production costs, distribution through Authorized Purchasers, and dealer margins. They also reflect the coin's legal tender status and global recognition. Premiums fluctuate with market conditions and demand.",
  },
  {
    question: "How does the Gold Eagle compare to the Gold Buffalo?",
    answer:
      "The Gold Eagle is .9167 fine (22-karat) while the Gold Buffalo is .9999 fine (24-karat). Both contain 1 troy ounce of gold. The Eagle weighs more due to its alloy and is more scratch-resistant. The Buffalo is softer pure gold. Both are U.S. Mint products and IRA-eligible.",
  },
  {
    question: "What affects Gold Eagle premiums?",
    answer:
      "Premium drivers include mint production capacity, dealer inventory, demand for physical gold, and broader market conditions. During periods of high demand or supply constraints, premiums typically increase above normal levels.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "American Gold Eagle Coin Specifications",
    description:
      "Complete technical specifications and investor facts for the 1 oz American Gold Eagle coin.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Gold Eagle</span> Specifications
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technical details and investor-facing facts for the 1 oz American Gold Eagle, America&apos;s most popular gold bullion coin.
            </p>
          </div>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-bullion-gold/10">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-bullion-gold/5" : ""}>
                      <td className="py-4 pr-4 text-gray-400 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-bullion-gold font-semibold" : "text-white"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 22-Karat Composition */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Understanding the 22-Karat Alloy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Gold Eagle is minted from a .9167 fine alloy (22-karat). Despite the alloy, each 1 oz coin contains exactly 1 troy ounce of fine gold. The copper and silver add durability without reducing gold content.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Full gold content</strong>: 1.0000 troy ounce of fine gold per 1 oz coin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Alloy metals</strong>: 3% copper and 5.33% silver add scratch resistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Gross weight</strong>: 1.0909 troy ounces total (alloy adds weight, not gold)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Historical precedent</strong>: Same 22-karat standard used for historic U.S. gold coins and British sovereigns</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Learn more about Gold Eagle specifications at{" "}
              <a
                href="https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-american-eagles/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Knowledge Base
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Legal Tender Status
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The American Gold Eagle carries a <strong className="text-white">$50 face value</strong> and is official United States legal tender. This government backing provides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Produced by the U.S. Mint with strict quality controls and anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Government Guarantee</h3>
                <p className="text-gray-400 text-sm">
                  Weight and purity backed by the full faith of the United States government.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Market Recognition</h3>
                <p className="text-gray-400 text-sm">
                  Widely recognized and accepted by dealers worldwide, supporting liquidity.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-gray-400 text-sm">
                  Specifically named in IRS code as an approved asset for Precious Metals IRAs.
                </p>
              </div>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              American Gold Eagle coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Specifically named in IRS code as an approved gold investment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Produced by the U.S. Mint (approved national mint)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Must be held by an IRS-approved custodian and depository</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Cannot be stored at home for IRA purposes</span>
              </li>
            </ul>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Note:</strong> This is general information, not tax or investment advice. Consult a qualified tax professional or IRA custodian for guidance specific to your situation.
              </p>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Gold Eagle coins trade at a premium above the spot price of gold. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Minting Costs</h3>
                <p className="text-gray-400 text-sm">
                  U.S. Mint production, quality control, and distribution expenses.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Dealer Margins</h3>
                <p className="text-gray-400 text-sm">
                  Wholesale and retail markups that fund dealer operations.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Supply & Demand</h3>
                <p className="text-gray-400 text-sm">
                  Mint production capacity versus investor demand for physical gold.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Market Conditions</h3>
                <p className="text-gray-400 text-sm">
                  Economic uncertainty, inflation concerns, and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Product Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Gold Eagle&apos;s government backing and global recognition support competitive spreads.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              View current Gold Eagle pricing at{" "}
              <a
                href="https://www.monex.com/gold-american-eagle-price-charts/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Price Charts
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-gold-prices" className="btn-primary">
                View Gold Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
