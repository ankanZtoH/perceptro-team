"use client";

import { TeamMember } from "@/data/team";
import { Github, Linkedin, Phone, Briefcase, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export default function TeamCard({ member }: { member: TeamMember }) {
    function getGoogleDriveDirectLink(url: string) {
        if (!url) return null;
        if (url.includes("drive.google.com") && url.includes("/file/d/")) {
            const id = url.split("/file/d/")[1].split("/")[0];
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }
        return url;
    }

    const imageSrc = member.image ? getGoogleDriveDirectLink(member.image) : null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full relative group h-[450px]"
        >
            {/* Cyber Frame Container */}
            <div className="relative w-full h-full">

                {/* 1. Background & Border (Chamfered) */}
                <div
                    className="absolute inset-0 bg-[#0a0f18]/90 backdrop-blur-md border-[2px] border-transparent bg-gradient-to-b from-neon-orange/20 to-transparent [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] transition-all duration-300 group-hover:border-neon-orange group-hover:shadow-[0_0_30px_rgba(255,136,0,0.4),inset_0_0_20px_rgba(255,136,0,0.2)]"
                    style={{
                        clipPath: "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)",
                        borderImage: "linear-gradient(to bottom, rgba(255,136,0,0.5), transparent) 1"
                    }}
                >
                    {/* Animated Grid Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,136,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Corner Accents - All 4 corners */}
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-neon-orange" />
                    <div className="absolute top-0 left-0 w-[1px] h-8 bg-neon-orange" />

                    <div className="absolute top-0 right-0 w-8 h-[1px] bg-neon-orange" />
                    <div className="absolute top-0 right-0 w-[1px] h-8 bg-neon-orange" />

                    <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-neon-orange" />
                    <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-neon-orange" />

                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-neon-orange" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-neon-orange" />
                </div>

                {/* 2. Top Header Content */}
                <div className="absolute top-0 left-0 w-full p-6 text-center z-20">
                    <h3 className={cn(
                        "text-xl md:text-2xl font-bold text-white font-russo tracking-wide uppercase mb-1 group-hover:text-neon-orange transition-colors duration-300 drop-shadow-md leading-none"
                    )}>
                        {member.name}
                    </h3>
                    <p className="text-[11px] font-bold text-neon-orange/80 font-mono tracking-[0.2em] uppercase">
                        {member.role}
                    </p>
                    <div className="mt-2 w-12 h-[2px] bg-neon-orange/40 mx-auto" />
                </div>

                {/* 3. Main Character Image */}
                <div className="absolute inset-x-4 top-24 bottom-24 z-10 overflow-hidden rounded-sm">
                    {imageSrc ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={imageSrc}
                                alt={member.name}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Gradient Overlay at bottom of image for text readability */}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0f18] to-transparent" />
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white/5 border border-white/10">
                            <span className="text-4xl font-bold text-neon-orange font-orbitron opacity-50">
                                {member.name.substring(0, 2).toUpperCase()}
                            </span>
                        </div>
                    )}
                </div>

                {/* 4. Bottom Social Bar */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[80px] z-20 flex items-center justify-center"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))"
                    }}
                >
                    {/* Background for social bar */}
                    <div className="absolute inset-0 bg-[#0a0f18]/80 backdrop-blur-sm border-t border-white/5" />

                    <div className="relative flex gap-3 z-30 pt-2">
                        {member.socials.linkedin && member.socials.linkedin !== "#" && (
                            <SocialButton href={member.socials.linkedin} icon={<Linkedin size={18} />} />
                        )}
                        {member.socials.github && member.socials.github !== "#" && (
                            <SocialButton href={member.socials.github} icon={<Github size={18} />} />
                        )}
                        {member.socials.instagram && member.socials.instagram !== "#" && (
                            <SocialButton href={member.socials.instagram} icon={<Instagram size={18} />} />
                        )}
                        {member.socials.phone && member.socials.phone !== "#" && (
                            <SocialButton href={member.socials.phone} icon={<Phone size={18} />} />
                        )}
                        {member.socials.portfolio && member.socials.portfolio !== "#" && (
                            <SocialButton href={member.socials.portfolio} icon={<Briefcase size={18} />} />
                        )}
                        {member.socials.email && member.socials.email !== "#" && (
                            <SocialButton href={`mailto:${member.socials.email}`} icon={<Mail size={18} />} />
                        )}
                    </div>
                </div>

                {/* Side Decorations */}
                <div className="absolute top-1/2 left-2 w-[2px] h-12 bg-neon-orange/20 -translate-y-1/2" />
                <div className="absolute top-1/2 right-2 w-[2px] h-12 bg-neon-orange/20 -translate-y-1/2" />

                {/* Hover Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden z-20">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-orange shadow-[0_0_15px_rgba(255,136,0,0.8)] animate-scan-slow" />
                </div>

            </div>
        </motion.div>
    );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 group/btn overflow-hidden"
            style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)"
            }}
        >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-neon-orange opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <span className="relative z-10 transform group-hover/btn:scale-110 group-hover/btn:text-black transition-transform duration-200">
                {icon}
            </span>
        </a>
    )
}