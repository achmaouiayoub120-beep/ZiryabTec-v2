"use client";

import { motion } from "framer-motion";
import { Building2, Code2, TrendingUp, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatsSection() {
  const { language } = useLanguage();

  const stats = [
    { icon: Building2, value: 50, suffix: "+", label: language === "fr" ? "Clients accompagnés" : "Clients supported", color: "rgba(26, 86, 219, 0.12)" },
    { icon: Code2, value: 120, suffix: "+", label: language === "fr" ? "Projets livrés" : "Projects delivered", color: "rgba(6, 182, 212, 0.12)" },
    { icon: TrendingUp, value: 98, suffix: "%", label: language === "fr" ? "Taux de satisfaction" : "Satisfaction rate", color: "rgba(22, 163, 74, 0.12)" },
    { icon: Award, value: 6, suffix: "", label: language === "fr" ? "Domaines d'expertise" : "Fields of expertise", color: "rgba(212, 168, 67, 0.12)" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg-alt)] to-[var(--bg)] pointer-events-none" />

      <SectionWrapper className="relative z-10">
        <FadeInChild className="text-center mb-16">
          <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
            {language === "fr" ? "EN CHIFFRES" : "BY THE NUMBERS"}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {language === "fr" ? "Notre impact en quelques chiffres" : "Our impact in a few numbers"}
          </h2>
        </FadeInChild>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
                className="elite-card p-6 md:p-8 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-[8px] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: stat.color }}
                >
                  <Icon size={28} className="text-[var(--accent)]" />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)] block"
                />
                <p className="text-sm text-[var(--text-muted)] mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
}
