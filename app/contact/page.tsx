"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const inputClasses = "w-full bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all duration-200";

  return (
    <div className="relative">
      <section className="pt-12 pb-20 bg-[var(--bg)]">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <FadeInChild>
              <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">{t("contact.tag")}</p>
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
                {t("contact.title")} <GradientText>{t("contact.titleAccent")}</GradientText>
              </h1>
              <p className="text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: Phone, label: t("contact.labels.phone"), value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone?.replace(/\s+/g, "")}` },
                  { icon: Mail, label: t("contact.labels.email"), value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: MapPin, label: t("contact.labels.office"), value: SITE_CONFIG.location },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[var(--text-primary)] mb-1">{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-[var(--text-secondary)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Google Maps */}
              <div className="elite-card overflow-hidden h-64 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.5600054366!2d-7.669394541793798!3d33.57240316491763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1683030281234!5m2!1sen!2sus"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeInChild>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            >
              <div className="elite-card p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-8">{t("contact.form.title")}</h2>

                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <CheckCircle size={48} className="text-[var(--success)] mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">{t("contact.form.success")}</h3>
                    <p className="text-[var(--text-secondary)]">{t("contact.form.successDesc")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-bold text-[var(--text-muted)]">{t("contact.form.name")}</label>
                        <input type="text" id="name" required className={inputClasses} placeholder={t("contact.form.placeholderName")} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold text-[var(--text-muted)]">{t("contact.form.email")}</label>
                        <input type="email" id="email" required className={inputClasses} placeholder={t("contact.form.placeholderEmail")} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-sm font-bold text-[var(--text-muted)]">{t("contact.form.service")}</label>
                      <select id="service" required defaultValue="" className={inputClasses + " appearance-none"}>
                        <option value="" disabled>{t("contact.form.select")}</option>
                        {SERVICES.map(s => <option key={s.id} value={s.id}>{t(`services.items.${s.id}.title`)}</option>)}
                        <option value="other">{t("contact.form.other")}</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-bold text-[var(--text-muted)]">{t("contact.form.message")}</label>
                      <textarea id="message" rows={5} required className={inputClasses + " resize-none"} placeholder={t("contact.form.placeholderMsg")} />
                    </div>
                    <button
                      type="submit"
                      disabled={formState !== "idle"}
                      className="w-full py-4 rounded-[var(--radius-md)] font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-[0_0_20px_rgba(26,86,219,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === "idle" ? t("contact.form.send") : t("contact.form.sending")}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
