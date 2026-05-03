"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const technologies = [
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { 
    name: "AWS", 
    slug: "amazonwebservices", 
    color: "232F3E", 
    customUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
  },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Linux", slug: "linux", color: "FCC624" },
];

// Duplicate for seamless loop
const allLogos = [...technologies, ...technologies, ...technologies];

export default function LogoMarquee() {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 overflow-hidden bg-[var(--bg-alt)] border-y border-[var(--border)]">
      {/* Section Label */}
      <div className="text-center mb-10">
        <p className="text-sm text-[var(--text-muted)] font-bold uppercase tracking-widest">
          {language === "fr" ? "Technologies de confiance" : "Trusted Technologies"}
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-alt)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-alt)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 w-max items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((tech, i) => (
            <div
              key={`${tech.slug}-${i}`}
              className="flex items-center gap-4 shrink-0 group"
            >
              <div className="w-16 h-12 rounded-xl bg-white border border-[var(--border)] shadow-sm flex items-center justify-center p-2 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-md group-hover:-translate-y-1">
                <img
                  src={tech.customUrl ? tech.customUrl : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className={`w-full h-full object-contain transition-all duration-300 ${tech.name !== 'AWS' ? 'grayscale group-hover:grayscale-0' : ''}`}
                  loading="lazy"
                />
              </div>
              <span className="font-display text-base font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
