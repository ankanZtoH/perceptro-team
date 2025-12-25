"use client";

import { TeamMember } from "@/data/team";
import { Github, Linkedin, Phone, Briefcase, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export default function TeamCard({ member }: { member: TeamMember }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    function getGoogleDriveDirectLink(url: string) {
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[340px] w-full rounded-xl bg-black/40 border border-white/10 p-5 backdrop-blur-xl transition-all duration-200"
        >
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-neon-green opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-neon-green opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-neon-green opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-neon-green opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Holographic Gradient Overlay */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "linear-gradient(135deg, rgba(0,255,65,0.4) 0%, rgba(189,0,255,0.4) 100%)",
                }}
            />

            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col items-center h-full">
                {/* Profile Image */}
                <div className="w-28 h-28 rounded-full mb-4 overflow-hidden border-2 border-white/10 group-hover:border-neon-green transition-colors duration-300 relative shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_var(--neon-green)]">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-3xl font-orbitron font-bold text-gray-500 group-hover:text-neon-green transition-colors">
                            {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white font-orbitron tracking-widest group-hover:text-neon-green transition-colors duration-300">
                        {member.name}
                    </h3>
                    <p className="text-sm text-neon-purple font-medium mt-1 font-inter tracking-[0.2em] uppercase">
                        {member.role}
                    </p>
                </div>

                {/* Socials - Always Visible */}
                <div className="mt-auto flex space-x-4 bg-black/40 p-2 rounded-full border border-white/10 backdrop-blur-sm shadow-lg">
                    {member.socials.linkedin && member.socials.linkedin !== "#" && (
                        <SocialIcon href={member.socials.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
                    )}
                    {member.socials.github && member.socials.github !== "#" && (
                        <SocialIcon href={member.socials.github} icon={<Github size={16} />} label="GitHub" />
                    )}
                    {member.socials.instagram && member.socials.instagram !== "#" && (
                        <SocialIcon href={member.socials.instagram} icon={<Instagram size={16} />} label="Instagram" />
                    )}
                    {member.socials.phone && member.socials.phone !== "#" && !member.socials.phone.endsWith("0000000000") && (
                        <SocialIcon href={member.socials.phone} icon={<Phone size={16} />} label="Call" />
                    )}

                    {member.socials.portfolio && member.socials.portfolio !== "#" && (
                        <SocialIcon href={member.socials.portfolio} icon={<Briefcase size={16} />} label="Portfolio" />
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            title={label}
            className="text-gray-400 hover:text-white hover:bg-neon-green/20 p-2 rounded-full transition-all hover:scale-125"
        >
            {icon}
        </Link>
    );
}
