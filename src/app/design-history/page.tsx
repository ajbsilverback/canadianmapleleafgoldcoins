import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gold Eagle Design & History | Augustus Saint-Gaudens' Masterpiece",
  description:
    "Explore the history and design of the American Gold Eagle coin: Augustus Saint-Gaudens' iconic 1907 Liberty design, the modern bullion program, and what the design signals to gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Gold Eagle Design & History | Augustus Saint-Gaudens' Masterpiece",
    description:
      "The story behind the American Gold Eagle: Augustus Saint-Gaudens' celebrated 1907 design, cultural significance, and what the iconic imagery means for modern gold investors.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gold Eagle Design & History",
    description:
      "The story behind America's most popular gold coin: Augustus Saint-Gaudens' iconic Liberty design revived for modern bullion.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "American Gold Eagle Design & History",
    description:
      "The history and design origins of the American Gold Eagle coin, featuring Augustus Saint-Gaudens' iconic 1907 Liberty artwork.",
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
              The story behind America&apos;s most beautiful coin design, from the 1907 $20 Gold Piece to the modern bullion program.
            </p>
          </div>

          {/* Augustus Saint-Gaudens Section */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-64 md:w-56 md:h-72">
                  <Image
                    src="/Augustus-Saint-Gaudens.jpg"
                    alt="Augustus Saint-Gaudens, American sculptor and coin designer"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Augustus Saint-Gaudens (1848-1907)
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Augustus Saint-Gaudens is considered one of the foremost American sculptors. Born in Dublin, Ireland, and raised in New York City, he trained at the{" "}
                  <a href="https://cooper.edu/" target="_blank" rel="nofollow noopener noreferrer" className="text-bullion-gold hover:underline">Cooper Union</a>, the National Academy of Design, and the{" "}
                  <a href="https://www.beauxartsparis.fr/en" target="_blank" rel="nofollow noopener noreferrer" className="text-bullion-gold hover:underline">École des Beaux-Arts</a> in Paris.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Major works include the Robert Gould Shaw Memorial (Boston), the General William Tecumseh Sherman Monument (New York), and the Adams Memorial (Washington, D.C.).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In 1905, President Theodore Roosevelt commissioned Saint-Gaudens to redesign American gold coinage. The resulting $10 and $20 gold pieces (1907) are widely regarded as among the most beautiful coins ever minted. Saint-Gaudens died in August 1907, shortly after the designs entered production.
                </p>
              </div>
            </div>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Obverse: Walking Liberty
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The obverse features Saint-Gaudens&apos; Walking Liberty design, originally created for the 1907 $20 gold piece. Lady Liberty strides forward, holding a torch in her right hand and an olive branch in her left. Rays of sunlight radiate from behind the Capitol building.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Design elements:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Torch</strong>: Symbolizes enlightenment and freedom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Olive branch</strong>: Represents peace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Stars</strong>: Thirteen stars for the original colonies</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Inscriptions include &ldquo;LIBERTY&rdquo; and the year of minting.
                </p>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <Image
                    src="/gold-american-eagles-obverse.png"
                    alt="American Gold Eagle obverse showing Walking Liberty design"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 224px, 288px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <Image
                    src="/gold-american-eagles-reverse.png"
                    alt="American Gold Eagle reverse showing eagle family design"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 224px, 288px"
                  />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Reverse: Eagle Family
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The original reverse (1986-2021), designed by sculptor Miley Busiek, depicts a male eagle carrying an olive branch, flying above a nest containing a female eagle and hatchlings.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Design elements:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Male eagle</strong>: Carrying an olive branch, symbolizing provision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Nest</strong>: Female eagle with hatchlings, representing family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Olive branch</strong>: Symbol of peace</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Inscriptions: &ldquo;UNITED STATES OF AMERICA,&rdquo; &ldquo;E PLURIBUS UNUM,&rdquo; &ldquo;IN GOD WE TRUST,&rdquo; face value, and weight/purity.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong className="text-bullion-gold">2021 Update:</strong> The U.S. Mint introduced a refreshed reverse design by Jennie Norris, featuring a close-up portrait of a single eagle.
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Roosevelt&apos;s Coinage Reform
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Theodore Roosevelt initiated the redesign of American gold coinage, citing ancient Greek coins as the standard for numismatic art. He believed American coins should reflect the nation&apos;s stature.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The original Saint-Gaudens $20 gold piece (1907-1933) featured a high-relief design. The relief was later reduced for practical mass production. These coins circulated until Executive Order 6102 ended gold coinage in 1933.
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-gray-300 italic">
                &ldquo;I think the state of our coinage is artistically of atrocious hideousness. Would it be possible, without asking permission of Congress, to employ a man like Saint-Gaudens to give us a coinage which would have some beauty?&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">Theodore Roosevelt, 1905</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              When the U.S. Mint established its modern bullion program in 1986, the Saint-Gaudens Liberty design was selected for the Gold Eagle, connecting contemporary bullion to this numismatic heritage.
            </p>
          </section>

          {/* Modern Bullion Program */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The Modern Bullion Program
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The American Gold Eagle was authorized by the Gold Bullion Coin Act of 1985 and first minted in 1986. It was created to provide American investors with a domestic alternative to foreign bullion coins like the South African Krugerrand.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">1986 Launch</h3>
                <p className="text-gray-400 text-sm">
                  America&apos;s flagship gold bullion coin debuted, reviving Saint-Gaudens&apos; masterpiece for modern investors.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Multiple Sizes</h3>
                <p className="text-gray-400 text-sm">
                  Available in 1 oz, 1/2 oz, 1/4 oz, and 1/10 oz sizes to accommodate different investment levels.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">West Point Mint</h3>
                <p className="text-gray-400 text-sm">
                  Gold Eagles are primarily struck at the West Point Mint in New York, one of the U.S. Mint&apos;s four production facilities.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Ongoing Production</h3>
                <p className="text-gray-400 text-sm">
                  Minted annually since 1986, the Gold Eagle remains the cornerstone of the U.S. Mint&apos;s bullion program.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Learn more about the Gold Eagle&apos;s history at{" "}
              <a
                href="https://www.monex.com/knowledge/history-behind-american-eagle-gold-coin-design/"
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
                <h3 className="text-white font-semibold">American Heritage</h3>
                <p className="text-gray-400 text-sm">
                  The Saint-Gaudens design connects to over a century of American numismatic tradition. Investors recognize the design instantly, a factor that supports liquidity and trust.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Government Authority</h3>
                <p className="text-gray-400 text-sm">
                  The design&apos;s official U.S. Mint provenance signals authenticity and weight/purity guarantees backed by the federal government.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Timeless Value</h3>
                <p className="text-gray-400 text-sm">
                  Saint-Gaudens&apos; 1907 design has endured for over a century. Its continued use on modern bullion suggests permanence, a quality investors seek in store-of-value assets.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Global Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Gold Eagle design is recognized by dealers and investors worldwide, facilitating transactions across borders and markets.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Collector Crossover</h3>
                <p className="text-gray-400 text-sm">
                  The design&apos;s artistic merit appeals to both bullion investors and numismatists, potentially broadening the buyer pool when selling.
                </p>
              </div>
            </div>
          </section>

          {/* Design Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Eagle vs. Buffalo: Design Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The U.S. Mint produces two gold bullion coins with distinct design philosophies:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Eagle</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Augustus Saint-Gaudens&apos; 1907 Liberty design</li>
                  <li>• Walking Liberty and eagle family imagery</li>
                  <li>• Symbolizes freedom and national ideals</li>
                  <li>• Classic patriotic aesthetic</li>
                  <li>• America&apos;s flagship bullion coin since 1986</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Buffalo</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• James Earle Fraser&apos;s 1913 Buffalo Nickel design</li>
                  <li>• Native American and bison imagery</li>
                  <li>• Celebrates American frontier heritage</li>
                  <li>• Artistic, collectible aesthetic</li>
                  <li>• U.S. Mint&apos;s 24-karat option since 2006</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Compare Eagle and Buffalo coins in detail at{" "}
              <a
                href="https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-american-eagles/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex: Gold Eagle Guide
              </a>
            </p>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Key Dates in Gold Eagle Design History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1848</div>
                <p className="text-gray-300">Augustus Saint-Gaudens born in Dublin, Ireland</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1905</div>
                <p className="text-gray-300">President Theodore Roosevelt commissions Saint-Gaudens to redesign American coinage</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1907</div>
                <p className="text-gray-300">Saint-Gaudens $20 gold piece enters circulation; Saint-Gaudens passes away</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1933</div>
                <p className="text-gray-300">U.S. gold coinage ends under Executive Order 6102</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1985</div>
                <p className="text-gray-300">Gold Bullion Coin Act authorizes the American Gold Eagle program</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1986</div>
                <p className="text-gray-300">First American Gold Eagle coins minted with Saint-Gaudens obverse</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2021</div>
                <p className="text-gray-300">U.S. Mint introduces updated reverse design</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-gray-300">Gold Eagle remains America&apos;s most popular gold bullion coin</p>
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

