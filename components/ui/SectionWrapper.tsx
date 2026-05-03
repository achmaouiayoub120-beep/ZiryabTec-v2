"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeInUp } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 ${className}`}
      variants={shouldReduceMotion ? undefined : staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  );
}

export function FadeInChild({ children, className = "" }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
