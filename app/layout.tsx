import type { Metadata } from "next";
import { Atma, Gaegu } from "next/font/google";
import "./globals.css";

const atma = Atma({
  variable: "--font-atma",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gaegu = Gaegu({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "BN Pokedex",
  description: "Intern Project by Botnoi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atma.variable} ${gaegu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
