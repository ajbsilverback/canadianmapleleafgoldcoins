/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for CanadianMapleLeafGoldCoins.com
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (GBXSPOT vs product symbol)
 * - Monex API endpoints
 * - Monex chart embed script
 * - Navigation IA
 * 
 * PRICING RULES:
 * - GBXSPOT: live gold spot price per troy ounce (market reference ONLY)
 * - Product symbol: Canadian Maple Leaf Gold Coin product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * CONTENT:
 * - This site is strictly about Canadian Gold Maple Leaf coins
 * - Focus on: Royal Canadian Mint, legal tender status, purity (.9999 fine / 24-karat), premiums, 
 *   liquidity, IRA eligibility, obverse/reverse designs, global recognition
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.canadianmapleleafgoldcoins.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.canadianmapleleafgoldcoins.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "Canadian Maple Leaf Gold Coins",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "Canadian Gold Maple Leaf coins",
  
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
   * LF = Canadian Maple Leaf Gold Coin (product cards + charts ONLY)
   */
  productSymbol: "LF",
  
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
    "investors seeking .9999 pure gold bullion from the Royal Canadian Mint with global recognition and strong liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/gold-canadian-maple-leaf-coins/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/investing-in-gold/",
    "https://www.monex.com/knowledge-base/gold-investing/gold-coins/",
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
