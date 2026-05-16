"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Database,
  ShoppingCart,
  Users,
  GraduationCap,
  ArrowUpRight,
  ExternalLink,
  Layers,
  BarChart3,
  Sparkles,
} from "lucide-react";

const ECOSYSTEM_PROJECTS = [
  {
    id: "ztec-erp",
    icon: <Database size={28} />,
    secondaryIcon: <Layers size={18} />,
    gradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20",
    glowColor: "rgba(99, 102, 241, 0.15)",
    accentColor: "#6366F1",
    tags: ["ERP", "SaaS", "Cloud"],
  },
  {
    id: "retailink",
    icon: <ShoppingCart size={28} />,
    secondaryIcon: <BarChart3 size={18} />,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    glowColor: "rgba(16, 185, 129, 0.15)",
    accentColor: "#10B981",
    tags: ["E-commerce", "Retail", "Analytics"],
  },
  {
    id: "coachprolink",
    icon: <Users size={28} />,
    secondaryIcon: <Sparkles size={18} />,
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    glowColor: "rgba(245, 158, 11, 0.15)",
    accentColor: "#F59E0B",
    tags: ["Coaching", "CRM", "Gestion"],
  },
  {
    id: "ziryabtec-formation",
    icon: <GraduationCap size={28} />,
    secondaryIcon: <ExternalLink size={18} />,
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
    glowColor: "rgba(139, 92, 246, 0.15)",
    accentColor: "#8B5CF6",
    tags: ["E-learning", "Formation", "LMS"],
    isFormation: true,
  },
];

// URL of the e-learning platform
const FORMATION_PLATFORM_URL = "https://ziryabtec-qnsv.vercel.app";

export default function ServicesPreview() {
  const { t, language } = useLanguage();

  return (
    <section
      id="ecosystem"
      className="py-20 md:py-32 bg-[var(--bg)] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-[0.2em] mb-4">
            {t("ecosystem.tag")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5">
            {t("ecosystem.title")}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            {t("ecosystem.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid — Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {ECOSYSTEM_PROJECTS.map((project, index) => {
            // Bento grid spans: 7-5-5-7 pattern
            const colSpans = [
              "lg:col-span-7",
              "lg:col-span-5",
              "lg:col-span-5",
              "lg:col-span-7",
            ];
            const colSpan = colSpans[index];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0, 0, 0.2, 1],
                }}
                className={`${colSpan}`}
              >
                <div
                  className={`bento-card group relative h-full min-h-[280px] md:min-h-[320px] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[var(--card-accent)] ${
                    project.isFormation ? "ring-[1.5px] ring-purple-500/40 bg-purple-500/[0.02]" : "border border-[var(--border)]"
                  }`}
                  style={
                    {
                      "--card-glow": project.glowColor,
                      "--card-accent": project.accentColor,
                    } as React.CSSProperties
                  }
                >
                  {/* Gradient background overlay (Glow interne) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]`}
                  />

                  {/* Badge for highlight (only for Formation) */}
                  {project.isFormation && (
                    <div className="absolute top-5 right-5 md:top-6 md:right-6 z-20">
                      <div className="bg-purple-100/90 backdrop-blur-md border border-purple-200/60 text-purple-700 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        {t("ecosystem.badgeFormation")}
                      </div>
                    </div>
                  )}

                  {/* Floating orb decoration */}
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-2xl pointer-events-none -z-10"
                    style={{ background: project.accentColor }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top section — Icon + Tags */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        style={{
                          background: `${project.accentColor}15`,
                          color: project.accentColor,
                        }}
                      >
                        {project.icon}
                      </div>

                      <div className="flex items-center gap-1.5 mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-colors duration-300"
                            style={{
                              borderColor: `${project.accentColor}30`,
                              color: project.accentColor,
                              background: `${project.accentColor}08`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Middle section — Title + Description */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-[1.65rem] font-display font-bold text-[var(--text-primary)] mb-3 leading-tight">
                        {t(`ecosystem.projects.${project.id}.title`)}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed">
                        {t(`ecosystem.projects.${project.id}.desc`)}
                      </p>
                    </div>

                    {/* Bottom section — Action */}
                    <div className="mt-8 flex items-center justify-between">
                      {project.isFormation ? (
                        <a
                          href={FORMATION_PLATFORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:gap-3.5 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98]"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentColor}, #A855F7)`,
                          }}
                        >
                          {t("ecosystem.accessPlatform")}
                          <ExternalLink size={16} className="shrink-0" />
                        </a>
                      ) : (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                          style={{ color: project.accentColor }}
                        >
                          {t("ecosystem.learnMore")}
                          <ArrowUpRight
                            size={16}
                            className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      )}

                      {/* Secondary icon indicator */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center opacity-40 group-hover:opacity-80 transition-all duration-300"
                        style={{
                          background: `${project.accentColor}10`,
                          color: project.accentColor,
                        }}
                      >
                        {project.secondaryIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
