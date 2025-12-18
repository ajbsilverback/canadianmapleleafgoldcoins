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
    question: "What is the Canadian Gold Maple Leaf coin?",
    answer: "The Canadian Gold Maple Leaf is a 24-karat gold bullion coin minted by the Royal Canadian Mint since 1979. It contains exactly 1 troy ounce of .9999 fine gold, making it one of the purest gold bullion coins available. The coin carries a $50 CAD face value and is Canadian legal tender.",
  },
  {
    question: "Why is the Gold Maple Leaf .9999 pure?",
    answer: "The Royal Canadian Mint chose .9999 fine gold (24-karat) to offer investors the purest gold content available. This purity level was pioneered by the Mint in 1980 and has become the global standard for bullion purity. Each 1 oz Gold Maple Leaf contains exactly 1 troy ounce of pure gold with no alloy metals.",
  },
  {
    question: "How much does a Canadian Gold Maple Leaf cost?",
    answer: "At current gold prices, a Canadian Gold Maple Leaf costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the gold spot value plus a premium typically ranging from 2-4% for standard bullion coins.",
  },
  {
    question: "Are Gold Maple Leaf coins easy to sell?",
    answer: "Yes, Canadian Gold Maple Leaf coins are highly liquid. As one of the world's most recognized pure gold bullion coins with Royal Canadian Mint backing, they're accepted by dealers worldwide. Most established dealers will buy Gold Maple Leaf coins at competitive prices, typically within 2-3% of spot.",
  },
  {
    question: "Can I hold Gold Maple Leaf coins in my IRA?",
    answer: "Yes, Canadian Gold Maple Leaf coins meet IRS requirements for Precious Metals IRAs because their .9999 purity exceeds the minimum .995 fineness standard. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and Gold Maple Leaf prices?",
    answer: "The Gold Maple Leaf price equals the gold spot price (per troy ounce) plus a premium typically ranging from 2-4%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers Royal Canadian Mint production, distribution, and dealer margins.",
  },
  {
    question: "Why do Gold Maple Leaf premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers may have better relationships with distributors. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my Gold Maple Leaf investment?",
    answer: "The bid-ask spread on Gold Maple Leaf coins is typically 2-4% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $50-$100. Your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do Gold Maple Leaf coins have different premiums than Gold Eagles?",
    answer: "Gold Maple Leaf premiums are typically slightly lower than Gold Eagle premiums. Maple Leafs often range from 2-4% over spot, while Eagles may range from 3-5%. Both are government-minted legal tender coins with excellent liquidity.",
  },
  {
    question: "When is the best time to buy Gold Maple Leaf coins based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (2-4% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 8-10% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Gold Maple Leaf resources cover?",
    answer: "Our educational library covers all aspects of Gold Maple Leaf investing including: understanding premiums, coin comparisons (Maple Leaf vs Eagle vs Buffalo), storage options, purity advantages, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How does the Gold Maple Leaf compare to the Gold Eagle?",
    answer: "Both are excellent government bullion coins. The Maple Leaf offers .9999 purity (24-karat) while the Eagle is .9167 (22-karat). Both contain exactly 1 troy ounce of gold and are IRA-eligible. The Maple Leaf is purer but softer; the Eagle's alloy makes it more scratch-resistant.",
  },
  {
    question: "Is the Gold Maple Leaf better than other gold coins?",
    answer: "Neither is universally better; each serves different investor needs. The Gold Maple Leaf is ideal for investors prioritizing maximum purity, competitive premiums, and global recognition. Other coins like the Gold Eagle may offer superior durability due to their alloy composition.",
  },
  {
    question: "What should I look for when buying my first Gold Maple Leaf?",
    answer: "For first-time Gold Maple Leaf buyers: purchase from reputable dealers, verify the dealer's credentials, compare premiums across multiple sources, ensure full documentation, and plan your storage solution before purchasing. Government-minted coins from authorized channels provide the best authenticity assurance.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a Canadian Gold Maple Leaf?",
      answer: "Typical premiums for Canadian Gold Maple Leaf coins range from 2-4% over spot under normal market conditions. This is often slightly lower than American Gold Eagles. During supply constraints, premiums can temporarily rise to 8-10% or more.",
    },
    {
      question: "Why do Gold Maple Leaf premiums exist?",
      answer: "Premiums cover Royal Canadian Mint minting costs, distributor margins, dealer margins, and reflect the value of the coin's legal tender status and government guarantee. Government-minted coins command premiums for their guaranteed authenticity and worldwide recognition.",
    },
    {
      question: "Do I recover the premium when I sell my Gold Maple Leaf?",
      answer: "You typically don't recover the full premium on resale, but Gold Maple Leaf coins from the Royal Canadian Mint have competitive bid-ask spreads (2-4%). Their strong recognition supports good buyback prices. The combination of reasonable purchase premiums and competitive spreads makes Maple Leafs economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Gold Maple Leaf and Gold Eagle?",
      answer: "The primary difference is purity: Gold Maple Leaf is .9999 fine (24-karat pure gold) while Gold Eagle is .9167 fine (22-karat, alloyed with copper and silver). Both contain 1 troy ounce of gold, but the Maple Leaf is softer pure gold; the Eagle's alloy adds durability.",
    },
    {
      question: "Which gold coin has the lowest premium?",
      answer: "Among major gold bullion coins, Canadian Maple Leafs typically have slightly lower premiums (2-4%) than U.S. coins (3-5%). Premium differences are modest among major government coins, so the choice often comes down to purity preferences and liquidity needs.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, Canadian Gold Maple Leaf, American Gold Eagle, and Gold Buffalo are all IRS-approved for Precious Metals IRAs. The Maple Leaf and Buffalo both exceed the .995 minimum purity requirement. Gold Eagles are specifically named in IRS code.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Gold Maple Leaf coins?",
      answer: "Gold Maple Leaf coins work well with multiple storage options. A quality home safe is suitable for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store Gold Maple Leaf coins at home?",
      answer: "Yes, Gold Maple Leaf coins are suitable for home storage. However, their .9999 pure gold is softer and more susceptible to scratching than alloyed coins. Use protective capsules or holders. A quality fireproof safe (ideally bolted down) provides reasonable security. Consider insurance coverage for high-value holdings.",
    },
    {
      question: "Do IRA Gold Maple Leaf coins have special storage requirements?",
      answer: "Yes, IRA gold must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA gold while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does .9999 purity matter to investors?",
      answer: "The .9999 purity (24-karat) means Gold Maple Leafs contain 99.99% pure gold with no alloy metals. Some investors prefer maximum purity for its intrinsic value. The exact 1:1 relationship between coin weight and gold content simplifies calculations.",
    },
    {
      question: "Is .9999 gold more valuable than .9167 gold?",
      answer: "Spot value is based on gold content, not purity. A 1 oz Gold Maple Leaf (.9999) and 1 oz Gold Eagle (.9167) both contain exactly 1 troy ounce of gold and have the same gold value. The Eagle simply weighs more because of its alloy metals. Premiums are similar for both.",
    },
    {
      question: "Does higher purity affect handling?",
      answer: "Yes, pure gold is softer than alloyed gold. Gold Maple Leafs (.9999) are more susceptible to scratches and minor damage than Gold Eagles (.9167). This is why protective capsules are recommended for Maple Leafs. For investors who handle coins frequently, this is worth considering.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a Gold Maple Leaf coin?",
      answer: "Gold Maple Leaf coins can typically be sold within 1-2 business days through established dealers. As one of the world's most recognized pure gold bullion coins with Royal Canadian Mint backing, they're instantly recognized. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do Gold Maple Leaf coins trade as well as Gold Eagles?",
      answer: "Yes, Gold Maple Leafs have excellent liquidity comparable to Gold Eagles. Both are government-minted products with strong dealer demand. The Maple Leaf's longer history (1979 vs 1986) and global recognition support strong liquidity worldwide.",
    },
    {
      question: "What documentation helps with Gold Maple Leaf resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original Royal Canadian Mint packaging (if purchased from Mint) adds value for collectors. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates.",
    },
    {
      question: "How do Federal Reserve decisions affect Gold Maple Leaf values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Gold Maple Leaf values move with spot prices regardless of coin type.",
    },
    {
      question: "Do Gold Maple Leaf premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market crises or uncertainty, demand for physical gold often spikes, pushing premiums to 8-10% or higher. During calm markets, premiums settle to normal 2-4% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Gold Maple Leaf coins?",
      answer: "Under normal market conditions, spreads of 2-4% for Gold Maple Leaf coins represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a Gold Maple Leaf?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 3% over spot and expect to receive 2% below spot when selling, you need 5% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Gold Maple Leaf, that's roughly $130-$150 in gold price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins (Maple Leaf, Eagle, Buffalo). All benefit from strong recognition and dealer markets. Lesser-known coins or private mint products may face wider spreads. For Gold Maple Leaf purchases, expect competitive spreads.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Gold Maple Leaf coin is authentic?",
      answer: "Key verification methods: confirm correct weight (1.0 oz or 31.1035g total), verify diameter (30mm) and thickness (2.87mm), check design details against known specimens, look for security features (radial lines, micro-engraving). Purchase from reputable dealers. For secondary market purchases, consider professional authentication.",
    },
    {
      question: "What security features do Gold Maple Leaf coins have?",
      answer: "Since 2013, Gold Maple Leafs include radial lines, a micro-engraved maple leaf privy mark with the year visible under magnification, and Bullion DNA digital verification technology. These features help authenticate genuine Royal Canadian Mint coins.",
    },
    {
      question: "Should I have Gold Maple Leaf coins professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary because dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Gold Maple Leaf coins IRA-eligible?",
      answer: "Gold Maple Leafs meet IRS requirements because their .9999 purity exceeds the minimum .995 fineness standard for IRA gold. They're minted by a recognized national mint (Royal Canadian Mint) and meet all eligibility requirements for Precious Metals IRAs.",
    },
    {
      question: "Can I take physical possession of my IRA Gold Maple Leafs?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding Gold Maple Leafs in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in gold coins?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Gold Maple Leafs are appropriate for any gold allocation.",
    },
    {
      question: "Should I buy Gold Maple Leafs all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline.",
    },
    {
      question: "How do Gold Maple Leaf coins fit with other gold investments?",
      answer: "Gold Maple Leafs and gold ETFs serve different purposes. Physical coins provide direct ownership with no counterparty risk. ETFs offer liquidity and easy trading but represent claims on gold held by third parties. Many investors use both for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a Gold Maple Leaf coin?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for Gold Maple Leaf purchases?",
      answer: "Wire transfer is common for precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work for single-coin purchases.",
    },
    {
      question: "Why do Gold Maple Leaf prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers may have direct relationships with Royal Canadian Mint distributors; others buy from wholesalers. Always compare prices from multiple sources.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a Gold Maple Leaf coin?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding Gold Maple Leafs in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
