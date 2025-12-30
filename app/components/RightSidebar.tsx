"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export default function RightSidebar() {
    return (
        <aside className="hidden md:flex flex-col fixed right-0 top-0 bottom-0 w-24 bg-[#050505]/80 backdrop-blur-md border-l border-white/10 z-50 items-center justify-center py-8">
            <div className="flex flex-col gap-8 w-full px-2 items-center justify-center">
                {/* Top decoration line */}
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                <SocialLink href="https://www.facebook.com/perceptron.rkmveri" icon={<Facebook size={20} />} label="Facebook" />
                <SocialLink href="https://www.linkedin.com/company/perceptron-rkmveri/" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/perceptron.rkmveri" icon={<Instagram size={20} />} label="Instagram" />
                <SocialLink href="mailto:perceptron.cs@gm.rkmvu.ac.in" icon={<Mail size={20} />} label="Email" />

                {/* Bottom decoration line */}
                <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-neon-orange/50 to-transparent" />
            </div>
        </aside>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    const isExternal = href.startsWith("http");
    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group relative w-full flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
            aria-label={label}
        >
            <div className="text-gray-400 group-hover:text-neon-orange transition-colors duration-300 relative z-10">
                {icon}
            </div>

            {/* Tooltip to match Left Sidebar */}
            <span className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-white mt-1 text-center font-orbitron tracking-wider hidden group-hover:block absolute right-14 bg-black/90 px-2 py-1 rounded border border-white/10 whitespace-nowrap z-50">
                {label}
            </span>

            {/* Hover visible neon line - Right side this time */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-neon-orange group-hover:h-full transition-all duration-300" />
        </Link>
    );
}
