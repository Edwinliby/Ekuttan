import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google';
import { PostHogProvider } from "../components/PostHogProvider";

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
      </head>
      <body
        className={`${neueMontreal.variable} antialiased`}
      >
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
      <GoogleAnalytics gaId="G-6NRWXGK37W" />
    </html>
  );
}