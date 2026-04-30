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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Notre <span className="text-gradient italic font-serif">Histoire</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto py-10">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--hz-accent-1)] to-[var(--hz-accent-2)]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          {TIMELINE.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-24 group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Node Dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--hz-bg)] border-2 border-[var(--hz-accent-1)] z-10 group-hover:scale-150 group-hover:bg-[var(--hz-accent-1)] transition-all duration-500 shadow-[0_0_15px_var(--hz-accent-1)]" />

              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className={`glass p-8 rounded-3xl relative overflow-hidden group-hover:border-[var(--hz-accent-1)] transition-colors duration-500 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--hz-accent-1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-3xl font-bold text-white mb-2">{item.year}</h3>
                  <h4 className="text-xl font-medium text-[var(--hz-accent-1)] mb-4">{item.title}</h4>
                  <p className="text-[var(--hz-text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Render Tech Stack if available */}
                  {(item as any).tech && (
                    <div className={`mt-6 flex flex-wrap gap-3 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                      {((item as any).tech).map((t: any, i: number) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="relative group/icon"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-help">
                            <img src={t.customUrl ? t.customUrl : `https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} className="w-full h-full object-contain drop-shadow-md" />
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[var(--hz-surface)] text-xs text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                            {t.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Empty half for spacing */}
              <div className="hidden md:block w-5/12" />
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
