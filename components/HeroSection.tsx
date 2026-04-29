"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import NetworkCanvas from "./NetworkCanvas";

// --- CUSTOM HOOKS ---

function useCountAnimation(target: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return { count, nodeRef };
}

// --- SUB-COMPONENTS ---

const AnimatedBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--hz-border)] backdrop-blur-sm bg-[rgba(99,102,241,0.08)] mb-8"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span className="text-[var(--hz-accent-1)] text-xs font-bold tracking-[0.1em] uppercase">
      Transformation Digitale — Nouvelle Ère
    </span>
  </motion.div>
);

const HeroHeading = () => {
  const line2Text = "l'avenir digital";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 select-none" aria-label="Nous construisons l'avenir digital de votre entreprise">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="block text-[var(--hz-text-muted)] font-extrabold tracking-tight"
      >
        Nous construisons
      </motion.span>
      
      <motion.span 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="block text-gradient font-serif font-bold italic py-2"
        aria-hidden="true"
      >
        {line2Text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
      
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="block font-extrabold tracking-tight"
      >
        de votre entreprise
      </motion.span>
    </h1>
  );
};

const HeroSubtitle = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.9 }}
    className="max-w-2xl text-lg md:text-xl text-[var(--hz-text-muted)] leading-relaxed mb-10"
  >
    ZiryabTec propulse les entreprises dans l'ère digitale — du développement ERP sur mesure à la stratégie e-commerce, en passant par le marketing data-driven et l'outsourcing expert.
  </motion.p>
);

const HeroCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.1 }}
    className="flex flex-col sm:flex-row gap-4"
  >
    <motion.a
      href="/contact"
      className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--hz-accent-1)] to-[var(--hz-accent-2)] text-white font-bold group"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--hz-glow)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor="button"
    >
      Démarrer votre projet
      <span className="transform transition-transform group-hover:translate-x-1">→</span>
    </motion.a>
    
    <motion.a
      href="/services"
      className="flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-[var(--hz-border)] backdrop-blur-sm text-white font-bold hover:border-[var(--hz-accent-1)] hover:bg-[rgba(99,102,241,0.08)] transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      data-cursor="button"
    >
      Voir nos réalisations
    </motion.a>
  </motion.div>
);

const StatItem = ({ target, suffix, label }: { target: number, suffix: string, label: string }) => {
  const { count, nodeRef } = useCountAnimation(target, 2.5);
  
  return (
    <div className="flex flex-col gap-1">
      <span ref={nodeRef} className="text-3xl md:text-4xl font-bold text-[var(--hz-accent-1)]">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm text-[var(--hz-text-muted)] uppercase tracking-widest font-semibold">
        {label}
      </span>
    </div>
  );
};

const HeroStats = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
    className="mt-16 pt-8 border-t border-[var(--hz-border)] flex flex-wrap gap-12"
  >
    <StatItem target={87} suffix="%" label="Croissance clients" />
    <div className="w-[1px] h-12 bg-[var(--hz-border)] hidden md:block" />
    <StatItem target={247} suffix="" label="Projets livrés" />
    <div className="w-[1px] h-12 bg-[var(--hz-border)] hidden md:block" />
    <StatItem target={12} suffix="+" label="Années d'expertise" />
  </motion.div>
);

const HeroScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
  >
    <span className="text-[10px] text-[var(--hz-text-muted)] tracking-[0.3em] font-bold" style={{ writingMode: 'vertical-rl' }}>
      SCROLL
    </span>
    <div className="w-[1px] h-16 bg-[var(--hz-border)] relative overflow-hidden">
      <motion.div
        className="w-full h-1/2 bg-[var(--hz-accent-1)]"
        animate={{ y: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-16 px-6 md:px-12 lg:px-24"
    >
      {/* Background Layers */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0">
        <NetworkCanvas />
      </motion.div>
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.06) 40%, transparent 70%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl">
        <AnimatedBadge />
        <HeroHeading />
        <HeroSubtitle />
        <HeroCTA />
        <HeroStats />
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
