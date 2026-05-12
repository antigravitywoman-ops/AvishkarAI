import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avishkar AI | FSM Dispatch & Uptime Layer",
  description: "AI-native dispatch platform for critical infrastructure. Powering 15k+ ATMs and 68k+ telecom towers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {/* Navbar stays here so it shows up on every page automatically */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}