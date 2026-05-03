"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, Globe, User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[#2563EB] text-white text-xs py-2.5 relative z-50 font-medium" suppressHydrationWarning>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between" suppressHydrationWarning>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone?.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:flex items-center gap-2">
              <MapPin size={14} />
              <span>{SITE_CONFIG.location}</span>
            </span>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#E8E4DC] shadow-sm"
            : ""
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-20 md:h-24" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <div className="relative h-16 w-[140px] md:h-20 md:w-[160px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="ZiryabTec Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[15px] font-semibold text-[#555550] hover:text-[#111111] transition-colors group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center gap-2 text-[#555550] hover:text-[#111111] font-semibold text-[15px] transition-colors bg-gray-100/50 hover:bg-gray-100 px-3 py-1.5 rounded-full"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
            </button>
            <Link href="/client" className="flex items-center gap-2 text-[#555550] hover:text-[#111111] font-semibold text-[15px] transition-colors">
              <User size={18} />
              <span>{t("nav.clientSpace")}</span>
            </Link>
            <Link
              href="/contact"
              className="bg-[#2563EB] text-white px-6 py-3 rounded-[8px] text-[15px] font-bold hover:bg-[#1D4ED8] transition-colors shadow-sm hover:shadow-md"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#111111]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[120px] z-30 bg-white flex flex-col lg:hidden border-t border-[#E8E4DC]"
          >
            {/* Nav links */}
            <nav className="flex-1 flex flex-col px-6 py-8 gap-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-display font-bold text-[#111111] hover:text-[#2563EB] transition-colors block pb-4 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4 mb-4">
                  <button 
                    onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                    className="flex flex-1 items-center justify-center gap-2 text-[#111111] font-semibold bg-gray-100 py-3 rounded-[8px]"
                  >
                    <Globe size={18} />
                    <span className="uppercase">{language}</span>
                  </button>
                  <Link href="/client" className="flex flex-1 items-center justify-center gap-2 text-[#111111] font-semibold bg-gray-100 py-3 rounded-[8px]" onClick={() => setMobileMenuOpen(false)}>
                    <User size={18} />
                    <span>{t("nav.clientSpace")}</span>
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#2563EB] text-white py-4 rounded-[8px] font-bold text-center text-lg w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.cta")}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
