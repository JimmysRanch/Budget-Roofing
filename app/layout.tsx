import type { Metadata } from "next";
import "./globals.css";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://budgetroofingandsiding.com"),
  title: "Budget Roofing & Siding",
  description: "Affordable residential roofing, roof repair, roof replacement, insurance claim assistance, and siding across Greater San Antonio.",
  keywords: ["San Antonio roofing", "roof repair", "roof replacement", "roof insurance claims", "siding contractor", "Budget Roofing and Siding"],
  openGraph: {
    title: "Budget Roofing & Siding | Quality You Can Afford",
    description: "Value-first roofing, roof repair, roof replacement, insurance-claim support, and siding across Greater San Antonio.",
    url: "https://budgetroofingandsiding.com",
    siteName: "Budget Roofing & Siding",
    type: "website",
    images: [{ url: "/budget-roofing-siding-logo.png", width: 1400, height: 530, alt: "Budget Roofing and Siding — Quality You Can Afford" }],
  },
  alternates: { canonical: "/" },
  icons: { icon: `${assetBasePath}/favicon.png`, shortcut: `${assetBasePath}/favicon.png`, apple: `${assetBasePath}/favicon.png` },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
