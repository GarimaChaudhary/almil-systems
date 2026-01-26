import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
    pauseOnHover?: boolean;
}

export default function Marquee({
    children,
    direction = "left",
    speed = 20,
    className = "",
    pauseOnHover = true,
}: MarqueeProps) {
    return (
        <div
            className={`relative flex overflow-hidden w-full ${className}`}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <motion.div
                className="flex min-w-full shrink-0 items-center justify-around gap-8 py-4"
                animate={{
                    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
            >
                {children}
                {children}
            </motion.div>
            <motion.div
                className="flex min-w-full shrink-0 items-center justify-around gap-8 py-4"
                animate={{
                    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
                style={{ marginLeft: "2rem" }} // Gap between duplicates
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
