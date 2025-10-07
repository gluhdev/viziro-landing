import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Viziro | Competitor Intelligence & Industry Insights",
  description: "Unlock competitive advantage with AI-powered competitor analysis and industry insights for AI, SaaS, and Fintech startups.",
  keywords: "competitor analysis, industry insights, AI, SaaS, Fintech, competitive intelligence",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Viziro | Competitor Intelligence & Industry Insights",
    description: "Unlock competitive advantage with AI-powered competitor analysis and industry insights",
    type: "website",
  },
  themeColor: '#0a0a0a',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Viziro',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
