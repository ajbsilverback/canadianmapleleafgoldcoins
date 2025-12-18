export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Gold Eagle Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Gold Eagle coins have premiums over spot, and how to evaluate costs when purchasing American Gold Eagle coins.",
    excerpt:
      "Discover why American Gold Eagle coins carry premiums over spot and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-american-eagle-price-charts/",
  },
  {
    slug: "coin-comparison",
    title: "Gold Eagle vs Gold Buffalo vs Maple Leaf: Comparing Gold Coins",
    description:
      "A detailed comparison of major gold bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare American Gold Eagle, Gold Buffalo, and Canadian Maple Leaf coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-american-eagles/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Gold Eagle Coins: Options and Best Practices",
    description:
      "Compare storage solutions for American Gold Eagle coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge/american-eagle-gold-coins-value-wealth-diversification/",
  },
  {
    slug: "purity-advantages",
    title: "The 22-Karat Durability Advantage: Why Gold Eagles Are Built to Last",
    description:
      "Understanding the significance of the Gold Eagle's .9167 fine purity and how the alloy provides durability advantages.",
    excerpt:
      "Learn why the American Gold Eagle's 22-karat alloy provides superior durability for long-term investors.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge/history-behind-american-eagle-gold-coin-design/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Gold Eagle Coins",
    description:
      "Understanding the liquidity of American Gold Eagle coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of Gold Eagle coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/are-american-eagle-gold-coins-good-investments/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Coin Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for Gold Eagle investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Gold Eagle Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling Gold Eagle coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Gold Eagle trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-american-eagle-price-charts/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Gold Eagle Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on American Gold Eagle coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-american-eagles/",
  },
  {
    slug: "ira-eligibility",
    title: "Gold Eagle IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how American Gold Eagle coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how Gold Eagle coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge/american-eagle-gold-coins-value-wealth-diversification/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Gold Eagle Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating American Gold Eagle coins into a diversified investment portfolio.",
    excerpt:
      "Discover how Gold Eagle coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Gold Eagle Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing American Gold Eagle coins.",
    excerpt:
      "Learn what to expect when purchasing your first Gold Eagle coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/american-eagle-gold-coins-for-sale/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Gold Eagle Coins",
    description:
      "A high-level overview of tax considerations related to physical gold coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge/investing-in-american-eagle-gold-coins-trends-insights/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
