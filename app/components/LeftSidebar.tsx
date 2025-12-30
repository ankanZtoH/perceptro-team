"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Home, Users, Calendar, PenTool } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", id: "home", icon: <Home size={20} /> },
    { name: "Core Team", href: "/#core-team", id: "core-team", icon: <Users size={20} /> },
    { name: "Event Team", href: "/#event-team", id: "event-team", icon: <Calendar size={20} /> },
    { name: "Tech Team", href: "/#tech-design-team", id: "tech-design-team", icon: <PenTool size={20} /> },
];

export default function LeftSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        if (pathname !== "/") {
            router.push("/");
            // Use a slightly longer timeout to ensure page load before scrolling
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
        <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-24 bg-[#050505]/80 backdrop-blur-md border-r border-white/10 z-50 items-center justify-center py-8">

            <div className="flex flex-col gap-8 w-full px-2 items-center justify-center">
                {/* Top decoration line to match RightSidebar */}
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-neon-orange/50 to-transparent" />

                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.id)}
                        className="group flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:bg-white/5 relative w-full"
                    >
                        <div className="text-gray-400 group-hover:text-neon-orange transition-colors duration-300">
                            {item.icon}
                        </div>
                        <span className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-white mt-1 text-center font-orbitron tracking-wider hidden group-hover:block absolute left-14 bg-black/90 px-2 py-1 rounded border border-white/10 whitespace-nowrap z-50">
                            {item.name}
                        </span>

                        {/* Hover visible neon line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-neon-orange group-hover:h-full transition-all duration-300" />
                    </Link>
                ))}

                {/* Bottom decoration line */}
                <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-neon-orange/50 to-transparent" />
            </div>
        </aside>
    );
}
