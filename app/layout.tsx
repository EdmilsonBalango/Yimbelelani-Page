import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yimbelelani | Hymns in Xitswa",
  description: "A digital hymnal preserving Christian hymns in Xitswa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <Analytics />
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
