import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vihan Goenka — Builder & Founder",
  description:
    "Math-CS @ UCSD. Building products, shipping code, winning competitions.",
  openGraph: {
    title: "Vihan Goenka — Builder & Founder",
    description:
      "Math-CS @ UCSD. Building products, shipping code, winning competitions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vihan Goenka — Builder & Founder",
    description: "Math-CS @ UCSD. Building products, shipping code, winning competitions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
