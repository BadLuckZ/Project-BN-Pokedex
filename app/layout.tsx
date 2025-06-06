import type { Metadata } from "next";
import { Atma, Gaegu } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const atma = Atma({
  variable: "--font-atma",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
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
      <body
        className={`${atma.variable} ${gaegu.variable} flex items-center justify-center min-h-screen bg-gray-100`}
      >
        <div
          className="flex rounded-4xl"
          style={{
            border: "28px solid #474444",
          }}
        >
          {/* Left Border */}
          <div className="flex items-center justify-center w-15 bg-[#474444]">
            <Image
              width={64}
              height={64}
              src="/botnoi.svg"
              alt="Botnoi Image"
              className="h-auto w-full object-contain -rotate-90 mr-6"
            />
          </div>

          {/* Screen */}
          <div className="w-[1024px] h-[768px] overflow-hidden">{children}</div>

          {/* Right Border */}
          <div
            className="flex items-center justify-center w-15"
            style={{
              background: "var(--modal-contentbox-shadow)",
            }}
          >
            <button
              className="w-full h-12 rounded-full ml-6"
              style={{
                backgroundColor: "#aeaeae",
              }}
            ></button>
          </div>
        </div>
      </body>
    </html>
  );
}
