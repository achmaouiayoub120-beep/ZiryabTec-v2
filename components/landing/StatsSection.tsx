"use client";

import { motion } from "framer-motion";
import { Building2, Code2, TrendingUp, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatsSection() {
  const { language } = useLanguage();

  const stats = [
    { icon: Building2, value: 50, suffix: "+", label: language === "fr" ? "Clients accompagnés" : "Clients supported", gradient: "from-blue-500/20 via-sky-500/10 to-blue-600/20", glowColor: "rgba(59, 130, 246, 0.15)", accentColor: "#3B82F6" },
    { icon: Code2, value: 120, suffix: "+", label: language === "fr" ? "Projets livrés" : "Projects delivered", gradient: "from-cyan-500/20 via-teal-500/10 to-cyan-600/20", glowColor: "rgba(6, 182, 212, 0.15)", accentColor: "#06B6D4" },
    { icon: TrendingUp, value: 98, suffix: "%", label: language === "fr" ? "Taux de satisfaction" : "Satisfaction rate", gradient: "from-emerald-500/20 via-green-500/10 to-emerald-600/20", glowColor: "rgba(16, 185, 129, 0.15)", accentColor: "#10B981" },
    { icon: Award, value: 6, suffix: "", label: language === "fr" ? "Domaines d'expertise" : "Fields of expertise", gradient: "from-orange-500/20 via-amber-500/10 to-orange-600/20", glowColor: "rgba(249, 115, 22, 0.15)", accentColor: "#F97316" },
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
                className="h-full"
              >
                <div 
                  className="elite-card h-full p-6 md:p-8 text-center group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--card-accent)] hover:shadow-[0_0_30px_var(--card-glow)]"
                  style={{
                    "--card-glow": stat.glowColor,
                    "--card-accent": stat.accentColor,
                  } as React.CSSProperties}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]`}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-[8px] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                      style={{ 
                        background: `linear-gradient(135deg, ${stat.accentColor}15, ${stat.accentColor}05)`,
                        border: `1px solid ${stat.accentColor}30`,
                        color: stat.accentColor
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)] block"
                    />
                    <p className="text-sm text-[var(--text-muted)] mt-2 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
}
