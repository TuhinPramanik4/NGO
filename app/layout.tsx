import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
