"use client";

import TeamCard from "@/app/components/TeamCard";
import GlitchText from "@/app/components/GlitchText";
import ScrollReveal from "@/app/components/ScrollReveal";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const categories = ["Core Team", "Event Team", "Tech & Design Team"] as const;

export default function TeamPage() {
    return (
        <div className="min-h-screen pt-4 px-4 pb-12 relative z-10">
            <div className="max-w-7xl mx-auto space-y-8">

                <div className="text-center space-y-2">
                    <ScrollReveal direction="up">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <GlitchText
                                text="OUR TEAM"
                                className="text-4xl md:text-7xl mt-10 font-bold font-orbitron"
                            />
                        </motion.div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} direction="up">
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto font-inter text-sm md:text-base"
                        >
                            Meet the minds behind Perceptron 2k26.
                        </motion.p>
                    </ScrollReveal>
                </div>

                {categories.map((category, catIndex) => {
                    const members = teamMembers.filter(m => m.category === category);

                    if (members.length === 0) return null;

                    return (
                        <section
                            key={category}
                            className={`space-y-6 ${catIndex > 0 ? "pt-24" : ""}`}
                        >
                            <ScrollReveal direction="left">
                                <div className="relative">
                                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white font-orbitron relative z-10 uppercase tracking-widest">
                                        {category}
                                    </h2>
                                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent -z-0" />
                                </div>
                            </ScrollReveal>

                            <div className="flex flex-wrap justify-center gap-8">
                                {members.map((member, index) => (
                                    <ScrollReveal
                                        key={member.id}
                                        delay={index * 0.1}
                                        direction="up"
                                        className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(25%-2rem)] min-w-[280px] max-w-[340px]"
                                    >
                                        <TeamCard member={member} />
                                    </ScrollReveal>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
