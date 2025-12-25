import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";
import Scanline from "./components/Scanline";
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

export const metadata: Metadata = {
  title: "Perceptron 2k26 | Team",
  description: "Meet the team behind Perceptron 2k26",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-background text-foreground bg-grid min-h-screen flex flex-col`}
      >
        <Navbar />
        <ScrollProgress />
        <TechBackground />
        <Scanline />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
