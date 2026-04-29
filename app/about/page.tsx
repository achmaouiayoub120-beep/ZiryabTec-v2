"use client";

import { motion } from "framer-motion";
import { TIMELINE, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { Rocket, Diamond, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 relative z-10">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--hz-border)] text-[var(--hz-accent-1)] text-xs font-bold tracking-widest uppercase mb-6">
            À Propos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Notre <span className="text-gradient italic font-serif">Histoire</span>
          </h1>
          <p className="text-[var(--hz-text-muted)] text-lg max-w-2xl mx-auto">
            Nous sommes les architectes de la transformation digitale. Nés de la passion pour la technologie, nous construisons l'avenir des entreprises ambitieuses.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-32 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[var(--hz-border)] hidden md:block" />
          
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-[45%]" />
              
              {/* Timeline dot */}
              <div className="relative z-10 w-12 h-12 rounded-full glass border border-[var(--hz-accent-1)] flex items-center justify-center font-bold text-[var(--hz-accent-1)] shadow-[0_0_15px_var(--hz-glow)] my-4 md:my-0">
                <div className="w-2 h-2 rounded-full bg-[var(--hz-accent-1)]" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-[45%] glass p-8 rounded-2xl ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                <span className="text-3xl font-bold text-white mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-[var(--hz-accent-1)] mb-3">{item.title}</h3>
                <p className="text-[var(--hz-text-muted)]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Nos <span className="text-gradient italic font-serif">Valeurs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Rocket size={40} className="text-[var(--hz-accent-1)]" />, title: "Innovation", desc: "Toujours à la pointe des nouvelles technologies." },
              { icon: <Diamond size={40} className="text-[var(--hz-accent-1)]" />, title: "Excellence", desc: "Une qualité d'exécution irréprochable et un design soigné." },
              { icon: <Handshake size={40} className="text-[var(--hz-accent-1)]" />, title: "Partenariat", desc: "Nous avançons main dans la main avec nos clients." }
            ].map((val, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center group hover:border-[var(--hz-accent-1)] transition-colors">
                <div className="mb-4 flex justify-center transform transition-transform group-hover:scale-110">{val.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-[var(--hz-text-muted)] text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--hz-accent-1)]/20 to-[var(--hz-accent-2)]/20 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Prêt à transformer votre entreprise ?</h2>
          <p className="text-[var(--hz-text-muted)] mb-8 max-w-xl mx-auto relative z-10">
            Rejoignez l'aventure ZiryabTec et propulsez votre business avec des solutions taillées sur mesure.
          </p>
          <Link 
            href="/contact"
            className="inline-block relative z-10 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--hz-accent-1)] to-[var(--hz-accent-2)] text-white font-bold hover:scale-105 transition-transform"
            data-cursor="button"
          >
            Discutons de votre projet →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
