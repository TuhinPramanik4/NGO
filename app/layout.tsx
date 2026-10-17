import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
    default: "Shatakshi Seva Sansthan — No one unseen",
    template: "%s · Shatakshi Seva Sansthan",
  },
  description:
    "Since 2011, Shatakshi Seva Sansthan has worked in the flood-hit diara belt of Gopalganj, Bihar — free schooling for 800 children, daily meals for abandoned elders, a free 24×7 ambulance and dignified last rites for the unclaimed.",
  openGraph: {
    title: "Shatakshi Seva Sansthan — No one unseen",
    description:
      "Education, service and awareness in the flood-hit diara belt of Gopalganj, Bihar.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3530",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${tiro.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-river-900 focus:px-4 focus:py-2 focus:text-sand-50"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
