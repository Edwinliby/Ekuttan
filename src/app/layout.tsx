import ThemeController from "@/components/ThemeController";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Just_Me_Again_Down_Here, Inter, Instrument_Serif } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const justMe = Just_Me_Again_Down_Here({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-just-me-again-down-here",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Edwin Liby",
  description: "Welcome to my Portfolio",
  openGraph: {
    title: "Edwin Liby",
    description: "Welcome to my Portfolio",
    url: 'https://edwinliby.dev/',
    siteName: 'Edwin Liby',
    images: [
      {
        url: 'https://edwinliby.dev/web-app-manifest-192x192.png',
        width: 256,
        height: 75,
        alt: "Edwin Liby",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Edwin Liby" />
        <meta property="og:title" content="Edwin Liby" />
        <meta property="og:description" content="Welcome to my Portfolio" />
        <meta property="og:image" content="https://edwinliby.dev/web-app-manifest-192x192.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="75" />
        <meta property="og:url" content="https://edwinliby.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Edwin Liby" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edwin Liby" />
        <meta name="twitter:description" content="Welcome to my Portfolio" />
        <meta name="twitter:image" content="https://edwinliby.dev/icon0.svg" />
      </head>
      <body
        className={`${justMe.variable} ${instrumentSerif.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeController />
        <Analytics />
        {children}
      </body>
    </html>
  );
}