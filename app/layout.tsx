import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yimbelelani | Hymns in Xitswa",
  description: "A digital hymnal preserving Christian hymns in Xitswa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
