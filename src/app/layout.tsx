import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-associates.example.com"),
  title: {
    default: "SK Associates | Travel & Real Estate",
    template: "%s | SK Associates",
  },
  description:
    "SK Associates brings together SK Travels and SK Real Estate — visa consultancy, holiday packages, and property services under one trusted name.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
