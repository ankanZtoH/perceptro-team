"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Home, Users, Calendar, PenTool } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", id: "home", icon: <Home size={20} /> },
    { name: "Core", href: "/#core-team", id: "core-team", icon: <Users size={20} /> },
    { name: "Event", href: "/#event-team", id: "event-team", icon: <Calendar size={20} /> },
    { name: "Tech", href: "/#tech-design-team", id: "tech-design-team", icon: <PenTool size={20} /> },
];

export default function MobileBottomNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                if (id === "home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }, 500);
            return;
        }

        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="md:hidden fixed bottom-1 left-4 right-4 h-16 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-2xl z-50 flex items-center justify-between px-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="flex flex-col items-center justify-center gap-1 text-gray-400 active:text-neon-orange transition-colors"
                >
                    {item.icon}
                    <span className="text-[9px] font-orbitron tracking-wide">{item.name}</span>
                </Link>
            ))}
        </div>
    );
}
