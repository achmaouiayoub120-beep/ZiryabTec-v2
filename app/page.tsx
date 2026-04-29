"use client";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative z-10 bg-[var(--hz-bg)]">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nos <span className="text-gradient italic font-serif">Expertises</span>
            </h2>
            <p className="text-[var(--hz-text-muted)] max-w-2xl text-lg">
              Nous concevons des écosystèmes digitaux performants pour accélérer votre croissance et simplifier vos processus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                desc={service.short}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative z-10 border-t border-[var(--hz-border)] overflow-hidden">
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-[var(--hz-accent-2)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--hz-border)] text-[var(--hz-accent-1)] text-xs font-bold tracking-widest uppercase mb-6">
              Notre Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              L'innovation technologique <br/>
              <span className="text-gradient italic font-serif">au service de l'humain.</span>
            </h2>
            <p className="text-[var(--hz-text-muted)] text-lg mb-8 leading-relaxed">
              Chez {SITE_CONFIG.name}, nous ne faisons pas que coder. Nous pensons l'architecture de votre réussite. Notre équipe multidisciplinaire allie design d'exception et ingénierie de pointe pour créer des solutions qui marquent les esprits.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 pb-1 border-b border-[var(--hz-accent-1)] text-white font-bold group"
              data-cursor="button"
            >
              Découvrir notre histoire
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass border border-[var(--hz-border)] flex items-center justify-center group perspective-1000"
          >
            {/* Minimalist abstract representation instead of a real image to keep it clean */}
            <motion.div 
              className="w-64 h-64 rounded-full bg-gradient-to-tr from-[var(--hz-accent-1)] to-[var(--hz-accent-3)] opacity-80 blur-2xl absolute"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 text-center glass p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center">
              <div className="mb-4 text-[var(--hz-accent-1)]"><Sparkles size={48} /></div>
              <div className="text-xl font-bold text-white mb-2">Design. Build. Scale.</div>
              <div className="text-sm text-[var(--hz-text-muted)]">Excellence numérique</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
