"use client";

import Link from "next/link";
import GlitchText from "@/app/components/GlitchText";
import TeamCard from "@/app/components/TeamCard";
import ScrollReveal from "@/app/components/ScrollReveal";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";
import { useEffect } from "react";

const categories = ["Core Team", "Event Team", "Tech & Design Team"] as const;

export default function Home() {
  const getCategoryId = (category: string) => {
    return category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
  };

  // Force scroll to top on load/refresh
  useEffect(() => {
    // Small timeout to ensure it overrides browser's scroll restoration
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 relative z-10 w-full">
        <div className="z-10 text-center space-y-2 md:space-y-8 relative">
          <div className="relative inline-block">
            <img src="/logo-full.svg" alt="Error" />
          </div>

          <GlitchText
            text="2K26 TEAM"
            className="text-xl md:text-2xl font-medium font-inter uppercase tracking-[0.5em]"
          />


        </div>

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </section>

      {/* Team Sections */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-24 space-y-24">
        {categories.map((category) => {
          const members = teamMembers.filter((m) => m.category === category);
          const categoryId = getCategoryId(category);

          if (members.length === 0) return null;

          return (
            <section key={category} id={categoryId} className="scroll-mt-24 space-y-12">
              <ScrollReveal direction="left">
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold text-center text-white font-orbitron relative z-10 uppercase tracking-widest">
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
    </main>
  );
}
