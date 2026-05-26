import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "react-phone-number-input/style.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { FloatingSiteTools } from "@/components/floating-site-tools";
import { createPageMetadata, homeKeywords } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Gold Testing & Assaying Services in East Africa | Bilex Minerals",
    description:
      "Professional gold testing, assaying and purity review in Nairobi, Kenya. Serving international traders, buyers and investors from the US and Europe. By appointment.",
    keywords: homeKeywords,
    openGraphDescription:
      "Professional gold testing, assaying and purity review in Nairobi, Kenya. Serving international traders, buyers and investors. By appointment.",
    twitterTitle: "Gold Testing & Assaying Services | Bilex Minerals",
    twitterDescription:
      "Gold testing, assaying, purity review and result documentation. Nairobi, Kenya. Serving international clients.",
  }),
  metadataBase: new URL("https://bilexminerals.com"),
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  icons: {
    icon: [
      { url: "https://bilexminerals.com/favicon.ico", sizes: "any" },
      {
        url: "https://bilexminerals.com/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "https://bilexminerals.com/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        {children}
        <SiteFooter />
        <FloatingSiteTools />
      </body>
    </html>
  );
}
