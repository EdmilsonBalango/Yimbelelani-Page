import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Yimbelelani | Hymns in Xitswa",
  description: "A digital hymnal preserving Christian hymns in Xitswa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <Analytics />
      <body>{children}</body>
    </html>
  );
}
