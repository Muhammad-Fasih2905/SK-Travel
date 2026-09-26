import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { TravelHeader } from "@/components/TravelHeader";
import { TravelFooter } from "@/components/TravelFooter";
import { PageTransition } from "@/components/PageTransition";

// Note: this sandbox has no access to fonts.googleapis.com, so these are
// wired up but not exercised during this build. In a normal dev/deploy
// environment (with internet access) this "just works" and self-hosts
// the font files automatically — no extra setup needed.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sktravels.example.com"),
  title: {
    default: "SK Travels | Visa Consultancy & Holiday Packages",
    template: "%s | SK Travels",
  },
  description:
    "SK Travels offers visa consultancy and holiday packages — Canada, New Zealand, Southeast Asia, Russia, and the Umrah & Turkey trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} ${poppins.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <TravelHeader />
          <main className="flex-1"><PageTransition>{children}</PageTransition></main>
          <TravelFooter />
        </div>
      </body>
    </html>
  );
}