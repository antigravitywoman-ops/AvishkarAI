import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {/* Navbar stays here so it shows up on every page automatically */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}