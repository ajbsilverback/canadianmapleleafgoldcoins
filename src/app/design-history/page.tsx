import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gold Maple Leaf Design & History | The Royal Canadian Mint Legacy",
  description:
    "Explore the history and design of the Canadian Gold Maple Leaf coin: the iconic maple leaf design, Royal Canadian Mint heritage, security innovations, and what the design signals to gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Gold Maple Leaf Design & History | The Royal Canadian Mint Legacy",
    description:
      "The story behind the Canadian Gold Maple Leaf: iconic maple leaf design, Royal Canadian Mint heritage, and pioneering .9999 purity for modern gold investors.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gold Maple Leaf Design & History",
    description:
      "The story behind the world's purest gold bullion coin: Royal Canadian Mint's iconic Maple Leaf design.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Canadian Gold Maple Leaf Design & History",
    description:
      "The history and design origins of the Canadian Gold Maple Leaf coin, featuring the iconic maple leaf and Royal Canadian Mint heritage.",
    url: `${SITE_CONFIG.domain}/design-history`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Design <span className="gold-text">&amp; History</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The story behind one of the world&apos;s most recognized pure gold bullion coins, from the Royal Canadian Mint&apos;s pioneering 1979 debut to today.
            </p>
          </div>

          {/* 3-Card Image Showcase */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: Designer Portrait */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  The Designer
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/walter-ott-royal-canadian-mint.jpg"
                      alt="Walter Ott, Royal Canadian Mint designer"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Walter Ott, Royal Canadian Mint</strong>
                  <br />
                  Created the iconic maple leaf reverse design in 1979
                </p>
              </div>

              {/* Card 2: Obverse Image */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  Obverse
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/gold-canadian-maple-leaf-obverse.png"
                      alt="Canadian Gold Maple Leaf obverse showing monarch portrait"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Monarch Portrait</strong>
                  <br />
                  King Charles III (or Queen Elizabeth II on earlier coins)
                </p>
              </div>

              {/* Card 3: Reverse Image */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  Reverse
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/gold-canadian-maple-leaf-reverse.png"
                      alt="Canadian Gold Maple Leaf reverse showing maple leaf design"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Maple Leaf</strong>
                  <br />
                  Iconic sugar maple leaf, Canada&apos;s national symbol
                </p>
              </div>
            </div>
          </section>

          {/* Royal Canadian Mint Section */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                <div className="relative w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[95%] h-[95%]">
                    <Image
                      src="/royal-canadian-mint.jpg"
                      alt="Royal Canadian Mint facility"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  The Royal Canadian Mint
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Royal Canadian Mint, headquartered in Ottawa with a refinery in Winnipeg, is one of the world&apos;s most advanced minting facilities. Established in 1908, the Mint has earned a global reputation for innovation, quality, and purity in precious metals production.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In 1979, the Royal Canadian Mint introduced the Gold Maple Leaf as one of the first .999 fine gold bullion coins available to investors. The following year, they increased purity to .9999, establishing a new global standard for gold bullion purity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, the Royal Canadian Mint is recognized as a world leader in precious metals refining and minting, producing coins and bullion products for collectors and investors worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Obverse: Monarch Portrait
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The obverse of the Gold Maple Leaf features the portrait of the reigning monarch of the United Kingdom and Commonwealth realms. The current design displays King Charles III, while coins minted before 2023 feature Queen Elizabeth II.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Design elements:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Portrait</strong>: Official effigy of the reigning monarch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Face value</strong>: &ldquo;50 DOLLARS&rdquo; inscribed in both English and French</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Year</strong>: Date of minting</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  The bilingual inscriptions reflect Canada&apos;s status as an officially bilingual nation.
                </p>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src="/gold-canadian-maple-leaf-obverse.png"
                      alt="Canadian Gold Maple Leaf obverse showing monarch portrait"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src="/gold-canadian-maple-leaf-reverse.png"
                      alt="Canadian Gold Maple Leaf reverse showing maple leaf design"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Reverse: The Iconic Maple Leaf
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The reverse features a single sugar maple leaf, one of Canada&apos;s most recognized national symbols. This elegant design was created by Walter Ott and has remained essentially unchanged since the coin&apos;s 1979 debut.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Design elements:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Maple leaf</strong>: Intricately detailed single sugar maple leaf</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">CANADA</strong>: Country name inscribed at the top</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Purity &amp; weight</strong>: &ldquo;9999&rdquo; and &ldquo;FINE GOLD 1 OZ OR PUR&rdquo;</span>
                  </li>
                </ul>
                <p className="text-gray-400 text-sm">
                  <strong className="text-bullion-gold">Security Feature:</strong> Since 2013, a micro-engraved maple leaf privy mark with the last two digits of the year is visible under magnification.
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Pioneering Pure Gold Bullion
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before 1979, investors seeking gold bullion had limited options. The South African Krugerrand, introduced in 1967, dominated the market but contained only .9167 fine gold. The Royal Canadian Mint saw an opportunity to create a purer alternative.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The 1979 Gold Maple Leaf launched at .999 fine gold, immediately offering investors a purer product. In 1980, the Mint increased purity to .9999 (four nines), establishing a new global benchmark for bullion purity that competitors would eventually follow.
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-gray-300 italic">
                &ldquo;The Gold Maple Leaf set a new standard for bullion purity that transformed the industry and gave investors access to the purest gold coins available.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">Royal Canadian Mint Heritage</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              This commitment to purity helped establish Canada&apos;s reputation as a leader in precious metals refining and positioned the Gold Maple Leaf as a premier choice for investors worldwide.
            </p>
          </section>

          {/* Security Innovations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Security Innovations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Royal Canadian Mint has consistently introduced innovative security features to protect against counterfeiting:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">2013: Radial Lines</h3>
                <p className="text-gray-400 text-sm">
                  Precise radial lines machined into the coin&apos;s background create a unique light-diffracting pattern.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">2013: Micro-Engraving</h3>
                <p className="text-gray-400 text-sm">
                  A tiny maple leaf privy mark containing the last two digits of the year, visible only under magnification.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">2014: Bullion DNA</h3>
                <p className="text-gray-400 text-sm">
                  Digital non-destructive activation technology allows authorized dealers to verify authenticity electronically.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Ongoing Innovation</h3>
                <p className="text-gray-400 text-sm">
                  The Royal Canadian Mint continues to develop new security measures to stay ahead of counterfeiters.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Learn more about security features at{" "}
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

          {/* What the Design Signals */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              What the Design Signals to Investors
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For investors, the design conveys more than visual appeal:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Maximum Purity</h3>
                <p className="text-gray-400 text-sm">
                  The .9999 purity marking signals the highest standard of gold refinement, pioneered by the Royal Canadian Mint.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Government Authority</h3>
                <p className="text-gray-400 text-sm">
                  The monarch&apos;s portrait and official Canadian Mint provenance signal authenticity and weight/purity guarantees backed by the government.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Timeless Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The maple leaf is instantly recognizable worldwide as Canada&apos;s national symbol, supporting liquidity and trust.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Global Acceptance</h3>
                <p className="text-gray-400 text-sm">
                  The Gold Maple Leaf design is recognized by dealers and investors worldwide, facilitating transactions across borders.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Security Confidence</h3>
                <p className="text-gray-400 text-sm">
                  Advanced security features integrated into the design provide authentication assurance for buyers and sellers.
                </p>
              </div>
            </div>
          </section>

          {/* Design Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Maple Leaf vs. Eagle: Design Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The world&apos;s two most popular gold bullion coins reflect different design philosophies:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Maple Leaf</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Walter Ott&apos;s 1979 maple leaf design</li>
                  <li>• Simple, elegant national symbol</li>
                  <li>• Emphasizes purity (.9999 fine)</li>
                  <li>• Modern security innovations</li>
                  <li>• Canada&apos;s flagship bullion coin since 1979</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Eagle</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Augustus Saint-Gaudens&apos; 1907 Liberty design</li>
                  <li>• Complex, artistic imagery</li>
                  <li>• Emphasizes durability (.9167 alloy)</li>
                  <li>• Classic numismatic aesthetic</li>
                  <li>• America&apos;s flagship bullion coin since 1986</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Compare Maple Leaf and Eagle coins in detail in our{" "}
              <Link
                href="/resources/coin-comparison"
                className="text-bullion-gold hover:underline"
              >
                coin comparison guide
              </Link>
            </p>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Key Dates in Gold Maple Leaf History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1908</div>
                <p className="text-gray-300">Royal Canadian Mint established in Ottawa</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1979</div>
                <p className="text-gray-300">Gold Maple Leaf launched at .999 fine purity</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1980</div>
                <p className="text-gray-300">Purity increased to .9999 fine (four nines), setting world standard</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1982</div>
                <p className="text-gray-300">Fractional sizes introduced (1/4 oz and 1/10 oz)</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1994</div>
                <p className="text-gray-300">1/20 oz and 1/2 oz sizes added to lineup</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2007</div>
                <p className="text-gray-300">1 Million Dollar, 100 kg coin sets Guinness World Record</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2013</div>
                <p className="text-gray-300">Radial lines and micro-engraved security features introduced</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2014</div>
                <p className="text-gray-300">Bullion DNA digital verification technology launched</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-gray-300">Gold Maple Leaf remains one of the world&apos;s most trusted bullion coins</p>
              </div>
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Coin Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
