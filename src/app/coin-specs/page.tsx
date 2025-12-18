import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Canadian Gold Maple Leaf Coin Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for the 1 oz Canadian Gold Maple Leaf coin: .9999 fine purity (24-karat), weight, dimensions, legal tender status, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Canadian Gold Maple Leaf Coin Specifications | Technical Details",
    description:
      "Complete technical specifications for the 1 oz Canadian Gold Maple Leaf: .9999 purity (24-karat), 1 troy oz gold content, Royal Canadian Mint legal tender status, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Canadian Gold Maple Leaf Coin Specifications",
    description:
      "Complete technical specifications for the 1 oz Canadian Gold Maple Leaf: .9999 purity, 1 troy oz gold content, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Gold Purity", value: ".9999 fine (24-karat)", highlight: true },
  { label: "Alloy Composition", value: "99.99% pure gold" },
  { label: "Fine Gold Content", value: "1.0000 troy ounce (31.1035 g)", highlight: true },
  { label: "Gross Weight", value: "1.0000 troy ounces (31.1035 g)" },
  { label: "Diameter", value: "30.00 mm (1.181 in)" },
  { label: "Thickness", value: "2.87 mm (0.113 in)" },
  { label: "Face Value", value: "$50 CAD (Canadian legal tender)" },
  { label: "Mint", value: "Royal Canadian Mint" },
  { label: "First Minted", value: "1979" },
  { label: "Edge", value: "Reeded" },
  { label: "IRA Eligible", value: "Yes", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the Canadian Gold Maple Leaf?",
    answer:
      "The Canadian Gold Maple Leaf is .9999 fine gold (24-karat). This means it is 99.99% pure gold with no alloy metals added. This makes it one of the purest gold bullion coins available worldwide.",
  },
  {
    question: "How much gold is in a 1 oz Gold Maple Leaf?",
    answer:
      "The 1 oz Canadian Gold Maple Leaf contains exactly 1.0000 troy ounce (31.1035 grams) of fine gold. Unlike alloyed coins such as the American Gold Eagle, the Maple Leaf's weight equals its pure gold content.",
  },
  {
    question: "Is the Gold Maple Leaf legal tender?",
    answer:
      "Yes. The Canadian Gold Maple Leaf carries a $50 CAD face value and is official Canadian legal tender, backed by the Canadian government. The intrinsic gold value significantly exceeds the face value.",
  },
  {
    question: "Can I hold Gold Maple Leaf coins in an IRA?",
    answer:
      "Yes. Canadian Gold Maple Leaf coins meet IRS requirements for Precious Metals IRAs because their .9999 purity exceeds the minimum .995 fineness standard. Coins must be held by an approved custodian in an approved depository.",
  },
  {
    question: "Why does the Gold Maple Leaf have a premium over spot price?",
    answer:
      "Premiums cover Royal Canadian Mint production costs, distribution, and dealer margins. They also reflect the coin's legal tender status and global recognition. Gold Maple Leaf premiums are typically 2-4% over spot.",
  },
  {
    question: "How does the Gold Maple Leaf compare to the American Gold Eagle?",
    answer:
      "The Gold Maple Leaf is .9999 fine (24-karat) while the Gold Eagle is .9167 fine (22-karat). Both contain 1 troy ounce of gold. The Maple Leaf is pure gold and slightly softer; the Eagle has an alloy that adds durability. Both are IRA-eligible.",
  },
  {
    question: "What security features does the Gold Maple Leaf have?",
    answer:
      "Since 2013, Gold Maple Leaf coins include radial lines and a micro-engraved maple leaf privy mark visible under magnification. These security features help authenticate genuine Royal Canadian Mint coins.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Canadian Gold Maple Leaf Coin Specifications",
    description:
      "Complete technical specifications and investor facts for the 1 oz Canadian Gold Maple Leaf coin.",
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
              <span className="gold-text">Gold Maple Leaf</span> Specifications
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technical details and investor-facing facts for the 1 oz Canadian Gold Maple Leaf, one of the world&apos;s most recognized pure gold bullion coins.
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

          {/* 24-Karat Purity */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Understanding .9999 Fine Gold
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Gold Maple Leaf is minted from .9999 fine gold (24-karat), making it one of the purest gold bullion coins available. Unlike alloyed coins, it contains no copper or silver additives.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Maximum purity</strong>: 99.99% pure gold with no alloy metals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Exact weight</strong>: Gross weight equals fine gold content (1 troy oz)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Softer metal</strong>: Pure gold is more susceptible to scratches than alloyed coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Industry pioneer</strong>: The Maple Leaf helped establish .9999 as the purity standard for bullion</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Learn more about Gold Maple Leaf specifications at{" "}
              <a
                href="https://www.monex.com/gold-canadian-maple-leaf-coins/"
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
              The Canadian Gold Maple Leaf carries a <strong className="text-white">$50 CAD face value</strong> and is official Canadian legal tender. This government backing provides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Produced by the Royal Canadian Mint with strict quality controls and advanced anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Government Guarantee</h3>
                <p className="text-gray-400 text-sm">
                  Weight and purity backed by the Canadian government, ensuring global confidence.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Market Recognition</h3>
                <p className="text-gray-400 text-sm">
                  Widely recognized and accepted by dealers worldwide, supporting excellent liquidity.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-gray-400 text-sm">
                  Meets IRS requirements for Precious Metals IRAs with its .9999 purity exceeding minimum standards.
                </p>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since 2013, the Royal Canadian Mint has incorporated advanced security features into the Gold Maple Leaf:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span><strong className="text-white">Radial lines</strong>: Precise lines machined into the coin's background</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span><strong className="text-white">Micro-engraved maple leaf</strong>: Tiny privy mark with year visible under magnification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span><strong className="text-white">Bullion DNA</strong>: Digital non-destructive activation technology for verification</span>
              </li>
            </ul>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Note:</strong> These security features help distinguish genuine Royal Canadian Mint coins from counterfeits and support authentication.
              </p>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Canadian Gold Maple Leaf coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>.9999 purity exceeds the IRS minimum .995 fineness requirement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Produced by a recognized national mint (Royal Canadian Mint)</span>
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
              Gold Maple Leaf coins trade at a premium above the spot price of gold. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Minting Costs</h3>
                <p className="text-gray-400 text-sm">
                  Royal Canadian Mint production, quality control, and security feature implementation.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Dealer Margins</h3>
                <p className="text-gray-400 text-sm">
                  Wholesale and retail markups that fund dealer operations and distribution.
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
                  Economic uncertainty and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Product Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Gold Maple Leaf&apos;s global recognition supports competitive spreads and liquidity.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              View current Gold Maple Leaf pricing at{" "}
              <a
                href="https://www.monex.com/gold-canadian-maple-leaf-coins/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex
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
