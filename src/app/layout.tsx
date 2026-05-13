import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import SmoothScrolling from "@/components/SmoothScrolling";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avishkar AI",
  description: "AI-native dispatch platform for critical infrastructure. Powering 15k+ ATMs and 68k+ telecom towers.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // REMOVED 'scroll-smooth' from here so it doesn't fight with Lenis!
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {/* Wrap everything inside the Lenis Provider */}
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}