"use client";

import { motion } from "framer-motion";
import { TIMELINE, SITE_CONFIG } from "@/lib/constants";
import { Rocket, Diamond, Handshake, Target } from "lucide-react";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Rocket, title: t("about.values.items.0.title"), desc: t("about.values.items.0.desc") },
    { icon: Diamond, title: t("about.values.items.1.title"), desc: t("about.values.items.1.desc") },
    { icon: Handshake, title: t("about.values.items.2.title"), desc: t("about.values.items.2.desc") },
    { icon: Target, title: t("about.values.items.3.title"), desc: t("about.values.items.3.desc") },
  ];

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="pt-12 pb-20 bg-[var(--bg)]" suppressHydrationWarning>
        <SectionWrapper>
          <FadeInChild className="text-center">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("about.hero.tag")}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              {t("about.hero.title")} <GradientText>{t("about.hero.titleAccent")}</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </FadeInChild>
        </SectionWrapper>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 md:py-32 bg-[var(--bg-alt)]" suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          >
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("about.mission.tag")}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              {t("about.mission.title")} <GradientText>{t("about.mission.titleAccent")}</GradientText>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              {t("about.mission.p1")}
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t("about.mission.p2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="elite-card p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-light)] to-transparent opacity-40 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              {[
                { label: t("about.stats.founded"), value: "2018" },
                { label: t("about.stats.specialties"), value: SITE_CONFIG.specialties },
                { label: t("about.stats.team"), value: SITE_CONFIG.size },
                { label: t("about.stats.sector"), value: SITE_CONFIG.sector },
              ].map((item) => (
                <div key={item.label} className="border-b border-[var(--border)] pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[var(--text-primary)] font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 md:py-32 bg-[var(--bg)]" suppressHydrationWarning>
        <SectionWrapper>
          <FadeInChild className="text-center mb-16">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("about.journey.tag")}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              {t("about.journey.title")}
            </h2>
          </FadeInChild>

          <div className="relative max-w-4xl mx-auto py-10">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border)] transform md:-translate-x-1/2">
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--accent)] to-[#06B6D4]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: index * 0.15 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-20 group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[var(--accent)] z-10 group-hover:scale-150 group-hover:bg-[var(--accent)] transition-all duration-500 shadow-[0_0_12px_rgba(26,86,219,0.3)]" />

                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`elite-card p-8 group-hover:border-[var(--accent)] transition-colors duration-300 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-3xl font-display font-bold text-[var(--accent)] mb-2">{item.year}</h3>
                    <h4 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">
                      {t(`about.journey.items.${index}.title`)}
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                      {t(`about.journey.items.${index}.desc`)}
                    </p>

                    {/* Tech Stack Icons */}
                    {item.tech && (
                      <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
                        {item.tech.map((t, i) => (
                          <div key={i} className="w-8 h-8 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center p-1.5 hover:bg-[var(--bg-alt)] transition-colors group/tech">
                            <img
                              src={t.customUrl ? t.customUrl : `https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                              alt={t.name}
                              className="w-full h-full object-contain grayscale group-hover/tech:grayscale-0 transition-all"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 md:py-32 bg-[var(--bg-alt)]" suppressHydrationWarning>
        <SectionWrapper>
          <FadeInChild className="text-center mb-16">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("about.values.tag")}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              {t("about.values.title")}
            </h2>
          </FadeInChild>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
                  className="elite-card p-8 text-center group hover:border-[var(--accent)] transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">{val.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-32 bg-[var(--bg)]" suppressHydrationWarning>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
            className="elite-card p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-light)] to-transparent opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {t("about.cta.title")} <GradientText>{t("about.cta.titleAccent")}</GradientText> ?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto leading-relaxed">
                {t("about.cta.desc")}
              </p>
              <Button href="/contact" variant="primary" size="lg" magnetic>
                {t("about.cta.button")} <span className="ml-2">→</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
