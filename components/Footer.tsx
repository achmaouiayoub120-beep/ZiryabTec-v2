import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070D] border-t border-[var(--hz-border)] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--hz-accent-1)] opacity-5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-[140px] h-[45px] transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="ZiryabTec Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </Link>
            <p className="text-[var(--hz-text-muted)] text-sm leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wider text-sm uppercase">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] text-sm transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] text-sm transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] text-sm transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wider text-sm uppercase">Expertises</h3>
            <ul className="flex flex-col gap-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] text-sm transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wider text-sm uppercase">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-[var(--hz-text-muted)]">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--hz-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--hz-text-muted)] text-xs">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[var(--hz-text-muted)] hover:text-white transition-colors text-xs">Mentions légales</a>
            <a href="#" className="text-[var(--hz-text-muted)] hover:text-white transition-colors text-xs">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
