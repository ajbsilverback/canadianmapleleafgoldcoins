/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for AmericanEagleGoldCoin.com
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (GBXSPOT vs AE)
 * - Monex API endpoints
 * - Monex chart embed script
 * - Navigation IA
 * 
 * PRICING RULES:
 * - GBXSPOT: live gold spot price per troy ounce (market reference ONLY)
 * - AE: American Eagle Gold Coin product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * CONTENT:
 * - This site is strictly about American Gold Eagle coins
 * - Focus on: minting, legal tender status, purity (.9167 fine / 22-karat), premiums, 
 *   liquidity, IRA eligibility, obverse/reverse designs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.americaneaglegoldcoin.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.americaneaglegoldcoin.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "American Eagle Gold Coin",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "American Gold Eagle coins",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "gold",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "coins",
  
  /** Size or series identifier */
  sizeOrSeries: "1 oz",

  /** Troy ounce equivalent */
  troyOunces: 1,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * AE = American Eagle Gold Coin (product cards + charts ONLY)
   */
  productSymbol: "AE",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * GBXSPOT = Gold Spot Index (market reference ONLY)
   */
  spotSymbol: "GBXSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "investors seeking U.S. Mint legal tender gold bullion with proven durability and strong liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/american-eagle-gold-coins-for-sale/",
    "https://www.monex.com/gold-american-eagle-price-charts/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/investing-in-gold/",
    "https://www.monex.com/knowledge-base/gold-investing/gold-coins/gold-american-eagles/",
    "https://www.monex.com/knowledge/american-eagles-historic-rise-to-gold-standard/",
    "https://www.monex.com/knowledge/history-behind-american-eagle-gold-coin-design/",
    "https://www.monex.com/knowledge/are-american-eagle-gold-coins-good-investments/",
    "https://www.monex.com/knowledge/american-eagle-gold-coins-value-wealth-diversification/",
    "https://www.monex.com/knowledge/investing-in-american-eagle-gold-coins-trends-insights/",
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
