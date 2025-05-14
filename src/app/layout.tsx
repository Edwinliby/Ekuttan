import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}