"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset = {
    up: { x: 0, y: 56 },
    left: { x: -72, y: 0 },
    right: { x: 72, y: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -14% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
