import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shatakshi.org"),
  title: {
    default: "Shatakshi Seva Sansthan — Education, Service & Awareness",
    template: "%s · Shatakshi Seva Sansthan",
  },
  description:
    "Shatakshi Seva Sansthan is a registered trust working since 2011 in the flood-affected diara region of Gopalganj, Bihar — bringing free education, dignity and humanitarian service to those who need it most.",
  keywords: [
    "NGO Bihar",
    "Shatakshi Seva Sansthan",
    "Gopalganj NGO",
    "free education",
    "donate India",
    "Mission Arms to Pen",
    "Annapurna Kitchen",
  ],
  openGraph: {
    title: "Shatakshi Seva Sansthan",
    description:
      "Education, Service & Awareness in the flood-affected diara region of Gopalganj, Bihar.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
