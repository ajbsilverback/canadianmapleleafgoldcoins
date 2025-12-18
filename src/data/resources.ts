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
    title: "Understanding Gold Maple Leaf Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Gold Maple Leaf coins have premiums over spot, and how to evaluate costs when purchasing Canadian Gold Maple Leaf coins.",
    excerpt:
      "Discover why Canadian Gold Maple Leaf coins carry premiums over spot and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "coin-comparison",
    title: "Gold Maple Leaf vs Gold Eagle vs Gold Buffalo: Comparing Gold Coins",
    description:
      "A detailed comparison of major gold bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare Canadian Gold Maple Leaf, American Gold Eagle, and Gold Buffalo coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-coins/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Gold Maple Leaf Coins: Options and Best Practices",
    description:
      "Compare storage solutions for Canadian Gold Maple Leaf coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "purity-advantages",
    title: "The .9999 Purity Advantage: Why Gold Maple Leafs Are Pure Gold",
    description:
      "Understanding the significance of the Gold Maple Leaf's .9999 fine purity and what maximum gold purity means for investors.",
    excerpt:
      "Learn why the Canadian Gold Maple Leaf's 24-karat purity makes it one of the purest gold coins available.",
    category: "Products",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Gold Maple Leaf Coins",
    description:
      "Understanding the liquidity of Canadian Gold Maple Leaf coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of Gold Maple Leaf coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Coin Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for Gold Maple Leaf investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Gold Maple Leaf Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling Gold Maple Leaf coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Gold Maple Leaf trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Gold Maple Leaf Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on Canadian Gold Maple Leaf coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "ira-eligibility",
    title: "Gold Maple Leaf IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how Canadian Gold Maple Leaf coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how Gold Maple Leaf coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Gold Maple Leaf Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating Canadian Gold Maple Leaf coins into a diversified investment portfolio.",
    excerpt:
      "Discover how Gold Maple Leaf coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Gold Maple Leaf Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing Canadian Gold Maple Leaf coins.",
    excerpt:
      "Learn what to expect when purchasing your first Gold Maple Leaf coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/gold-canadian-maple-leaf-coins/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Gold Maple Leaf Coins",
    description:
      "A high-level overview of tax considerations related to physical gold coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
