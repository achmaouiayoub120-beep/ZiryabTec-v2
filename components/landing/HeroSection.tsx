"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const wordAnimation = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] },
  }),
};

function DashboardMockup() {
  const { t } = useLanguage();
  return (
    <div
      className="relative w-full max-w-lg mx-auto animate-float"
      style={{ perspective: "1200px" }}
    >
      <div
        className="elite-card p-6 md:p-8"
        style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">Dashboard</p>
            <p className="text-lg font-display font-bold text-[var(--text-primary)]">Gestion de Projet</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
            <span className="text-xs text-[var(--success)] font-bold">En ligne</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-4 mb-6">
          {[
            { label: "Design UI/UX", progress: 92, color: "var(--accent)" },
            { label: "Développement", progress: 67, color: "#06B6D4" },
            { label: "Tests & QA", progress: 45, color: "var(--gold)" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[var(--text-secondary)] font-medium">{item.label}</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{item.progress}%</span>
              </div>
              <div className="w-full h-2 bg-[var(--bg-alt)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mini chart (SVG) */}
        <div className="bg-[var(--bg)] rounded-lg p-4 mb-4">
          <p className="text-xs text-[var(--text-muted)] mb-3">Performance mensuelle</p>
          <svg viewBox="0 0 200 60" className="w-full h-12">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 Q25,40 50,30 T100,25 T150,15 T200,10 L200,60 L0,60 Z" fill="url(#chartGrad)" />
            <path d="M0,45 Q25,40 50,30 T100,25 T150,15 T200,10" fill="none" stroke="var(--accent)" strokeWidth="2" />
          </svg>
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "AWS"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono font-bold bg-[var(--accent-light)] text-[var(--accent)] rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t, language } = useLanguage();
  
  // Use translations for the title words
  const titleText = t("hero.title");
  const titleWords = titleText.split(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26, 86, 219, 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06B6D4] rounded-full blur-[120px] opacity-[0.04]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(90deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 60px)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-light)] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-[var(--accent)] text-xs font-bold tracking-wider uppercase">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Title */}
            <h1
              className="font-display font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}
            >
              {titleWords.map((word: string, i: number) => {
                const isSpecial = language === "fr" ? word === "digital" : word === "digital";
                // In English, maybe "future" or "digital" could be highlighted.
                return (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-[0.3em]"
                  >
                    {word.toLowerCase().includes("digital") ? (
                      <GradientText>{word}</GradientText>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-xl text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button href="/contact" variant="primary" size="lg" magnetic>
                {t("hero.ctaPrimary")} <span className="ml-2">→</span>
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                {t("hero.ctaSecondary")}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: 50, suffix: "+", label: t("hero.stats.clients") },
                { value: 98, suffix: "%", label: t("hero.stats.satisfaction") },
                { value: 6, suffix: "", label: t("hero.stats.expertise") },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-display font-bold text-[var(--accent)]"
                  />
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
