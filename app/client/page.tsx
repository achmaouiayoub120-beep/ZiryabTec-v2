"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { User, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ClientAreaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <SectionWrapper>
        <div className="max-w-md mx-auto">
          <FadeInChild className="text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] mx-auto mb-6">
              <User size={40} />
            </div>
            <h1 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">
              {t("client.title")}
            </h1>
            <p className="text-[var(--text-secondary)]">
              {t("client.subtitle")}
            </p>
          </FadeInChild>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="elite-card p-8 bg-white"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  {t("client.username")}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                  {t("client.password")}
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:border-[var(--accent)] outline-none transition-all"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                </div>
              </div>
              <button className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                {t("client.login")}
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
              <p className="text-sm text-[var(--text-secondary)]">
                {t("client.noAccount")}{" "}
                <Link href="/contact" className="text-[var(--accent)] font-bold hover:underline">
                  {t("client.contactUs")}
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
