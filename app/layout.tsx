import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Libre_Franklin, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shatakshi.org"),
  title: {
    default: "Shatakshi Seva Sansthan — Gopalganj, Bihar",
    template: "%s · Shatakshi Seva Sansthan",
  },
  description:
"Since 2011, Shatakshi Seva Sansthan has worked in the flood-hit diara belt of Gopalganj, Bihar — free schooling for 800 children, daily meals for abandoned elders, a free 24×7 ambulance and dignified last rites for the unclaimed.",
  openGraph: {
    title: "Shatakshi Seva Sansthan — Gopalganj, Bihar",
    description:
"Education, service and awareness in the flood-hit diara belt of Gopalganj, Bihar.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#142c25",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${franklin.variable} ${tiro.variable}`}
    >
      <body className="font-sans text-[1.02rem]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-river-900 focus:px-4 focus:py-2 focus:text-sand-50"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
