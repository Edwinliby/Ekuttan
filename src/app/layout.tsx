import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import { Just_Me_Again_Down_Here } from 'next/font/google';

const instrumentSerif = Just_Me_Again_Down_Here({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/NeueMontreal-Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "Edwin Liby aka Ekuttan",
  description: "Welcome to my Portfolio",
  openGraph: {
    title: "Edwin Liby aka Ekuttan",
    description: "Welcome to my Portfolio",
    url: 'https://ekuttan.vercel.app/',
    siteName: 'Edwin Liby aka Ekuttan',
    images: [
      {
        url: 'https://ekuttan.vercel.app/web-app-manifest-192x192.png',
        width: 256,
        height: 75,
        alt: "Edwin Liby aka Ekuttan",
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
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ekuttan" />
        <meta property="og:title" content="Edwin Liby aka Ekuttan" />
        <meta property="og:description" content="Welcome to my Portfolio" />
        <meta property="og:image" content="https://ekuttan.vercel.app/web-app-manifest-192x192.png" />
        <meta property="og:url" content="https://ekuttan.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Edwin Liby aka Ekuttan" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edwin Liby aka Ekuttan" />
        <meta name="twitter:description" content="Welcome to my Portfolio" />
        <meta name="twitter:image" content="https://ekuttan.vercel.app/icon0.svg" />
      </head>
      <body
        className={`${neueMontreal.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}