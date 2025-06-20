import type { Metadata } from "next";
import { Doto, Share_Tech, Share_Tech_Mono } from "next/font/google";
import { CustomCursor, Nav, ScrollProgressIndicator } from "@/components";
import "@/lib/fontawesome";
import "./globals.css";
import { Footer } from "@/sections";

const doto = Doto({
  variable: "--font-rouge-script",
  subsets: ["latin"],
  weight: ["400"],
});

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: ["400"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jaydeep Mithani",
  description: "Portfolio of Jaydeep Mithani as a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTech.variable} ${shareTechMono.variable} ${doto.variable} antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <ScrollProgressIndicator />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
