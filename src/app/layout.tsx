import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | .9999 Pure Gold from the Royal Canadian Mint`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about Canadian Gold Maple Leaf coins from the Royal Canadian Mint. .9999 fine gold (24-karat), globally recognized, and highly liquid. Expert insights on pricing, premiums, and investing.",
  keywords: [
    "Canadian Gold Maple Leaf",
    "Gold Maple Leaf coin",
    "1 oz gold coin",
    "24 karat gold coin",
    ".9999 fine gold",
    "Royal Canadian Mint gold coin",
    "gold bullion coin",
    "buy Gold Maple Leaf",
    "gold coin prices",
    "gold coin investment",
    "IRA eligible gold",
    "pure gold coin",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | .9999 Pure Gold from the Royal Canadian Mint`,
    description:
      "Discover everything about Canadian Gold Maple Leaf coins from the Royal Canadian Mint. .9999 fine gold (24-karat), globally recognized, and highly liquid.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Canadian Gold Maple Leaf Coin - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | .9999 Pure Gold from the Royal Canadian Mint`,
    description:
      "Discover everything about Canadian Gold Maple Leaf coins from the Royal Canadian Mint. .9999 fine gold (24-karat), globally recognized, and highly liquid.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bullion-darker text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
