"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
    { name: "Core Team", mobileName: "Core Team", href: "/#core-team", id: "core-team" },
    { name: "Event Team", mobileName: "Event Team", href: "/#event-team", id: "event-team" },
    { name: "Tech & Design Team", mobileName: "T & D Team", href: "/#tech-design-team", id: "tech-design-team" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (pathname !== "/") {
            router.push("/");
            // Wait for navigation then scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 500);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 relative">

                    {/* Navigation Items - Visible on all screens */}
                    <div className="flex items-center justify-center space-x-2 md:space-x-8 w-full max-w-full overflow-x-auto no-scrollbar">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.id)}
                                className="group relative flex-1 md:flex-none md:w-[180px] h-7 md:h-10 flex items-center justify-center overflow-hidden rounded-md border border-neon-green/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-neon-green hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] animate-pulse-glow"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-neon-green/0 via-neon-green/10 to-neon-green/0 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                                <span className="relative z-10 text-[9px] sm:text-[10px] md:text-xs font-bold font-orbitron tracking-wider md:tracking-widest text-neon-green/80 transition-colors duration-300 group-hover:text-white uppercase shadow-[0_0_10px_rgba(0,255,65,0.2)] text-center whitespace-nowrap px-1">
                                    <span className="md:hidden">{item.mobileName}</span>
                                    <span className="hidden md:inline">{item.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
}
