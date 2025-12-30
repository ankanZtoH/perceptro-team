import type { Metadata } from "next";
import { Inter, Orbitron, Russo_One } from "next/font/google";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";
// import Scanline from "./components/Scanline";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const russo = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perceptron 2k26 | Team",
  description: "Meet the team behind Perceptron 2k26",
  icons: {
    icon: '/favicon.ico',
  }
};

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

import MobileBottomNav from "./components/MobileBottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${russo.variable} antialiased bg-background text-foreground bg-grid min-h-screen flex flex-col`}
      >
        {/* Desktop Sidebars - Hidden on Mobile */}
        <LeftSidebar />
        <RightSidebar />

        {/* Mobile Bottom Navigation - Fixed */}
        <MobileBottomNav />

        <ScrollProgress />
        <TechBackground />

        {/* Main Content Area */}
        {/* Added padding on left/right for desktop to account for sidebars (w-24 = 6rem = 96px) */}
        {/* Added bottom padding for mobile nav (h-16 + spacing = pb-24) */}
        <main className="flex-grow pt-4 pb-24 md:pt-0 md:pb-0 md:px-24 min-h-screen relative z-10 w-full overflow-x-hidden">
          {children}
        </main>

        {/* Mobile Footer - Shown on Desktop too now, but styled differently */}
        <div className="mt-auto pb-20 md:pb-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
