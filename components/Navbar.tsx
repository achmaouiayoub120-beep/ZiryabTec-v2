"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-[var(--hz-bg)]/80 backdrop-blur-md border-b border-[var(--hz-border)] shadow-lg shadow-[var(--hz-bg)]/50" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group" data-cursor="button">
            <div className="relative w-[140px] h-[45px] transition-transform duration-300 group-hover:scale-105">
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--hz-text-muted)] hover:text-white transition-colors"
                data-cursor="button"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="relative px-5 py-2 text-sm font-medium rounded-full border border-[var(--hz-border)] overflow-hidden group"
              data-cursor="button"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">
                Contact
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--hz-accent-1)] to-[var(--hz-accent-2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--hz-bg)] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-bold hover:text-[var(--hz-accent-1)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--hz-accent-1)] to-[var(--hz-accent-2)] font-bold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nous Contacter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
