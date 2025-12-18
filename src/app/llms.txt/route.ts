import { NextResponse } from "next/server";

const llmsTxt = `# CanadianMapleLeafGoldCoins.com - LLMs.txt

> An independent educational resource about Canadian Gold Maple Leaf coins

## Site Overview

CanadianMapleLeafGoldCoins.com provides educational content about Canadian Gold Maple Leaf coins, one of the world's most recognized pure gold bullion coins minted by the Royal Canadian Mint with .9999 fine purity (24-karat).

## What This Site Is

- Independent educational resource
- Information about Canadian Gold Maple Leaf coins
- Live gold pricing data from Monex API
- Educational articles about gold coin investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, the Royal Canadian Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Key Topics Covered

- Canadian Gold Maple Leaf coin specifications (.9999 fine, 1 oz, $50 CAD face value)
- Gold Maple Leaf vs Gold Eagle vs Gold Buffalo comparisons
- Premium and pricing dynamics
- IRA eligibility for Gold Maple Leaf coins
- Storage and authentication
- Market dynamics affecting gold prices

## Product Focus

The Canadian Gold Maple Leaf is:
- 24-karat gold (.9999 fine purity)
- 1 troy ounce of pure gold
- Canadian legal tender with $50 CAD face value
- First minted in 1979
- IRA-eligible
- Features the maple leaf design and monarch portrait

## Pricing Data

- Product pricing uses Monex API symbol: LF (Canadian Maple Leaf)
- Spot pricing uses Monex API symbol: GBXSPOT
- Prices fetched fresh on page load only
- No real-time updates or polling

## Navigation

- Home: /
- Gold Prices: /live-gold-prices
- Coin Specs: /coin-specs
- Design & History: /design-history
- Where to Buy: /where-to-buy
- Resources: /resources
- About: /about

## Contact

Website: https://www.canadianmapleleafgoldcoins.com

## Disclaimer

All content is for educational purposes only. Gold investments carry risks. This site does not provide financial advice. Consult qualified professionals before making investment decisions.
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
