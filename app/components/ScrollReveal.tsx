"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right";
    className?: string;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: ScrollRevealProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const, // Fix type inference
                delay
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
