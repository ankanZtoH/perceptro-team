"use client";

import { TeamMember } from "@/data/team";
import { Github, Linkedin, Phone, Briefcase, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/app/lib/utils";

export default function TeamCard({ member }: { member: TeamMember }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

    // Holographic sheen effect
    const sheenX = useTransform(x, [-0.5, 0.5], ["0%", "200%"]);
    const sheenOpacity = useTransform(x, [-0.5, 0, 0.5], [0, 1, 0]);

    function getGoogleDriveDirectLink(url: string) {
        if (!url) return null;
        if (url.includes("drive.google.com") && url.includes("/file/d/")) {
            const id = url.split("/file/d/")[1].split("/")[0];
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }
        return url;
    }

    const imageSrc = member.image ? getGoogleDriveDirectLink(member.image) : null;

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
                perspective: 1000,
            }}
            className="w-full h-[400px] relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full relative"
            >
                {/* Main Card Container */}
                <div className="absolute inset-0 bg-[#0a0f18]/80 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transition-colors duration-300 group-hover:border-neon-green/50 shadow-2xl">

                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Scanner Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-green/50 shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-scan-slow opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col p-6 items-center" style={{ transform: "translateZ(20px)" }}>

                        {/* Header Details */}
                        <div className="w-full flex justify-between items-start mb-6 text-[10px] text-neon-green/60 font-mono tracking-widest">
                            {/* <span>ID: {member.id.padStart(4, '0')}</span> */}
                            <span className="animate-pulse">ACTIVE</span>
                        </div>

                        {/* Image Ring Container */}
                        <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-500">
                            {/* Rotating Tech Ring */}
                            <div className="absolute inset-[-8px] border border-dashed border-neon-green/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-[-4px] border-2 border-transparent border-t-neon-green/60 border-l-neon-green/60 rounded-full rotate-45" />

                            {/* Profile Image */}
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative z-10 bg-black/50">
                                {imageSrc ? (
                                    <Image
                                        src={imageSrc}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-neon-green font-orbitron text-3xl">
                                        {member.name.substring(0, 2).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="text-center w-full space-y-2 mb-6">
                            <div className={cn("min-h-[3.5rem] flex items-center justify-center px-1", member.id === "0" ? "h-auto" : "")}>
                                <h3 className={cn(
                                    "text-xl font-bold text-white font-orbitron tracking-wider group-hover:text-neon-green transition-colors drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] leading-tight",
                                    member.id === "0" ? "" : "line-clamp-2"
                                )}>
                                    {member.name}
                                </h3>
                            </div>
                            <div className="h-[2rem] flex items-center justify-center">
                                <div className="inline-block px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded text-xs text-neon-green font-mono tracking-[0.2em] uppercase truncate max-w-full">
                                    {member.role}
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-auto flex gap-3 z-20">
                            {member.socials.linkedin && member.socials.linkedin !== "#" && (
                                <SocialButton href={member.socials.linkedin} icon={<Linkedin size={18} />} />
                            )}
                            {member.socials.github && member.socials.github !== "#" && (
                                <SocialButton href={member.socials.github} icon={<Github size={18} />} />
                            )}
                            {member.socials.instagram && member.socials.instagram !== "#" && (
                                <SocialButton href={member.socials.instagram} icon={<Instagram size={18} />} />
                            )}
                            {member.socials.portfolio && member.socials.portfolio !== "#" && (
                                <SocialButton href={member.socials.portfolio} icon={<Briefcase size={18} />} />
                            )}
                            {member.socials.email && member.socials.email !== "#" && (
                                <SocialButton href={`mailto:${member.socials.email}`} icon={<Mail size={18} />} />
                            )}
                            {member.socials.phone && member.socials.phone !== "#" && (
                                <SocialButton href={member.socials.phone} icon={<Phone size={18} />} />
                            )}
                        </div>

                    </div>

                    {/* Tech Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-green/30" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/30" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green/30" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-green/30" />

                    {/* Holographic Gradient Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                        style={{ x: sheenX, opacity: sheenOpacity }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-black hover:bg-neon-green hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] transition-all duration-300"
        >
            {icon}
        </a>
    )
}
