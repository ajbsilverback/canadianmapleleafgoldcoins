import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$2,700" (ask price rounded to $10)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$2,600–$2,800" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$2,700+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$2,700+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the American Gold Eagle coin?",
    answer: "The American Gold Eagle is a 22-karat gold bullion coin minted by the U.S. Mint since 1986. It contains exactly 1 troy ounce of pure gold alloyed with copper and silver for durability. The coin carries a $50 face value and is legal tender in the United States.",
  },
  {
    question: "Why is the Gold Eagle 22-karat instead of pure gold?",
    answer: "The Gold Eagle uses a .9167 fine alloy (22-karat) with copper and silver to create a more durable coin that resists scratching and wear. Despite the alloy, each 1 oz Gold Eagle contains exactly 1 troy ounce of pure gold. The coin simply weighs more (1.0909 oz total) because of the alloy metals.",
  },
  {
    question: "How much does an American Gold Eagle cost?",
    answer: "At current gold prices, an American Gold Eagle costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the gold spot value plus a premium typically ranging from 3-5% for standard bullion coins.",
  },
  {
    question: "Are Gold Eagle coins easy to sell?",
    answer: "Yes, American Gold Eagle coins are highly liquid. As America's most popular gold bullion coin with U.S. Mint legal tender status, they're recognized and readily purchased by dealers worldwide. Most established dealers will buy Gold Eagle coins at competitive prices, typically within 2-3% of spot.",
  },
  {
    question: "Can I hold Gold Eagle coins in my IRA?",
    answer: "Yes, American Gold Eagle coins are specifically named in IRS code as approved assets for Precious Metals IRAs. They are explicitly approved regardless of the general purity requirements. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and Gold Eagle prices?",
    answer: "The Gold Eagle price equals the gold spot price (per troy ounce) plus a premium typically ranging from 3-5%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers U.S. Mint production, distribution through Authorized Purchasers, and dealer margins.",
  },
  {
    question: "Why do Gold Eagle premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers may have better relationships with Authorized Purchasers. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my Gold Eagle investment?",
    answer: "The bid-ask spread on Gold Eagle coins is typically 2-4% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $50-$100. Your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do Gold Eagle coins have different premiums than Gold Buffalos?",
    answer: "Gold Eagle and Gold Buffalo premiums are typically similar, both ranging from 3-5% over spot under normal conditions. The Eagle's 22-karat alloy and Buffalo's .9999 purity both command similar premiums since both are government-minted legal tender coins with excellent liquidity.",
  },
  {
    question: "When is the best time to buy Gold Eagle coins based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-5% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 8-10% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Gold Eagle resources cover?",
    answer: "Our educational library covers all aspects of Gold Eagle investing including: understanding premiums, coin comparisons (Eagle vs Buffalo vs Maple Leaf), storage options, durability advantages, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How does the Gold Eagle compare to the Gold Buffalo?",
    answer: "Both are excellent U.S. Mint bullion coins. The Eagle offers .9167 purity (22-karat) with superior durability, while the Buffalo is .9999 (24-karat) pure gold. Both contain exactly 1 troy ounce of gold and are IRA-eligible. The Eagle's alloy makes it more scratch-resistant.",
  },
  {
    question: "Is the Gold Eagle better than other gold coins?",
    answer: "Neither is universally better; each serves different investor needs. The Gold Eagle is ideal for investors prioritizing durability, IRA eligibility with explicit IRS approval, and U.S. legal tender status. Other coins like the Maple Leaf may offer higher purity at lower premiums.",
  },
  {
    question: "What should I look for when buying my first Gold Eagle?",
    answer: "For first-time Gold Eagle buyers: purchase from reputable dealers, verify the dealer's credentials, compare premiums across multiple sources, ensure full documentation, and plan your storage solution before purchasing. Government-minted coins from authorized channels provide the best authenticity assurance.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for an American Gold Eagle?",
      answer: "Typical premiums for American Gold Eagle coins range from 3-5% over spot under normal market conditions. This is comparable to Gold Buffalos and slightly higher than Canadian Maple Leafs. During supply constraints, premiums can temporarily rise to 8-10% or more.",
    },
    {
      question: "Why do Gold Eagle premiums exist?",
      answer: "Premiums cover U.S. Mint minting costs, Authorized Purchaser margins, dealer margins, and reflect the value of the coin's legal tender status and government guarantee. Government-minted coins command premiums for their guaranteed authenticity and worldwide recognition.",
    },
    {
      question: "Do I recover the premium when I sell my Gold Eagle?",
      answer: "You typically don't recover the full premium on resale, but Gold Eagle coins from the U.S. Mint have competitive bid-ask spreads (2-4%). Their strong recognition supports good buyback prices. The combination of reasonable purchase premiums and competitive spreads makes Gold Eagles economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Gold Eagle and Gold Buffalo?",
      answer: "The primary difference is purity and durability: Gold Eagle is .9167 fine (22-karat, alloyed with copper and silver) while Gold Buffalo is .9999 fine (24-karat pure gold). Both contain 1 troy ounce of gold, but the Eagle is more durable; the Buffalo is softer.",
    },
    {
      question: "Which gold coin has the lowest premium?",
      answer: "Among major gold bullion coins, Canadian Maple Leafs typically have slightly lower premiums (2-4%) than U.S. coins. Gold Eagle and Gold Buffalo premiums are comparable (3-5%). Premium differences are modest among major government coins.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, American Gold Eagle, Gold Buffalo, and Canadian Maple Leaf are all IRS-approved for Precious Metals IRAs. Gold Eagles are specifically named in the IRS code. All are government-minted legal tender coins meeting eligibility requirements.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Gold Eagle coins?",
      answer: "Gold Eagle coins are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store Gold Eagle coins at home?",
      answer: "Yes, Gold Eagle coins are well-suited for home storage. Their durable 22-karat alloy is more resistant to scratching than pure gold coins. A quality fireproof safe (ideally bolted down) provides reasonable security for several coins. Consider insurance coverage for high-value holdings.",
    },
    {
      question: "Do IRA Gold Eagle coins have special storage requirements?",
      answer: "Yes, IRA gold must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA gold while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does 22-karat purity provide advantages?",
      answer: "The 22-karat (.9167 fine) alloy in Gold Eagles contains copper and silver that create a harder, more durable coin. This means better scratch resistance and wear tolerance compared to pure gold coins. You still get exactly 1 troy ounce of pure gold in every coin.",
    },
    {
      question: "Is .9167 gold less valuable than .9999 gold?",
      answer: "Spot value is based on gold content, not purity. A 1 oz Gold Eagle (.9167) and 1 oz Gold Buffalo (.9999) both contain exactly 1 troy ounce of gold and have the same gold value. The Eagle simply weighs more because of its alloy metals. Premiums are similar for both.",
    },
    {
      question: "Does lower purity affect resale value?",
      answer: "Not for well-known coins. Both Gold Eagle and Gold Buffalo are highly liquid with similar resale dynamics. The Eagle's durability advantage may actually help maintain coin condition over time, potentially benefiting resale appearance.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a Gold Eagle coin?",
      answer: "Gold Eagle coins can typically be sold within 1-2 business days through established dealers. As America's most popular gold bullion coin with U.S. Mint legal tender status, they're instantly recognized. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do Gold Eagle coins trade as well as Gold Buffalos?",
      answer: "Yes, Gold Eagles have excellent liquidity, often even better than Buffalos due to their longer history (1986 vs 2006) and higher name recognition. Both are U.S. Mint products with strong dealer demand.",
    },
    {
      question: "What documentation helps with Gold Eagle resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original U.S. Mint packaging (if purchased from Mint) adds value for collectors. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates.",
    },
    {
      question: "How do Federal Reserve decisions affect Gold Eagle values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Gold Eagle values move with spot prices regardless of coin size.",
    },
    {
      question: "Do Gold Eagle premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market crises or uncertainty, demand for physical gold often spikes, pushing premiums to 8-10% or higher. During calm markets, premiums settle to normal 3-5% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Gold Eagle coins?",
      answer: "Under normal market conditions, spreads of 2-4% for Gold Eagle coins represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a Gold Eagle?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 4% over spot and expect to receive 2% below spot when selling, you need 6% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Gold Eagle, that's roughly $150-$180 in gold price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins (Eagle, Buffalo, Maple Leaf). All benefit from strong recognition and dealer markets. Lesser-known coins or private mint products may face wider spreads. For Gold Eagle purchases, expect competitive spreads.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Gold Eagle coin is authentic?",
      answer: "Key verification methods: confirm correct weight (1.0909 oz or 33.931g total), verify diameter (32.7mm) and thickness (2.87mm), check design details against known specimens, purchase from reputable dealers. For secondary market purchases, consider professional authentication.",
    },
    {
      question: "What security features do Gold Eagle coins have?",
      answer: "Gold Eagle coins include precise specifications, detailed design elements (Walking Liberty and eagle family are intricately detailed), and consistent weight/dimensions. The 22-karat alloy has a distinct appearance. U.S. Mint quality control ensures consistency across all coins.",
    },
    {
      question: "Should I have Gold Eagle coins professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary because dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Gold Eagle coins IRA-eligible?",
      answer: "Gold Eagles are specifically named in IRS code as approved assets for Precious Metals IRAs. Unlike generic gold that must meet purity requirements, Gold Eagles have explicit statutory approval. They're minted by the U.S. government and recognized as legal tender.",
    },
    {
      question: "Can I take physical possession of my IRA Gold Eagles?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding Gold Eagles in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in gold coins?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Gold Eagles are appropriate for any gold allocation.",
    },
    {
      question: "Should I buy Gold Eagles all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline.",
    },
    {
      question: "How do Gold Eagle coins fit with other gold investments?",
      answer: "Gold Eagles and gold ETFs serve different purposes. Physical coins provide direct ownership with no counterparty risk. ETFs offer liquidity and easy trading but represent claims on gold held by third parties. Many investors use both for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a Gold Eagle coin?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for Gold Eagle purchases?",
      answer: "Wire transfer is common for precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work for single-coin purchases.",
    },
    {
      question: "Why do Gold Eagle prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers are Authorized Purchasers with direct Mint access; others buy from distributors. Always compare prices from multiple sources.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a Gold Eagle coin?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding Gold Eagles in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
