import { Monitor, Smartphone, Users, Zap, GraduationCap, MessageSquare } from "lucide-react";

export const SITE_CONFIG = {
  name: "ZiryabTec",
  slogan: "Créateurs de solutions digitales, penseurs d'idées innovantes.",
  description: "ZiryabTec propulse les entreprises dans l'ère digitale — du développement ERP sur mesure à la stratégie e-commerce, en passant par le marketing data-driven et l'outsourcing expert.",
  email: "contact@ziryabtec.com",
  phone: "+212 670 20 00 50",
  location: "Casablanca, Casablanca - Settat",
  linkedin: "https://www.linkedin.com/company/ziryabtec/",
  sector: "Développement de logiciels",
  size: "2-10 employés",
  founded: "2018",
  specialties: "NodeJS, Laravel, Angular, React, VueJS, AWS, Docker, Kubernetes et DevOps"
};

export const SERVICES = [
  { 
    id: "dev-web", 
    title: "Développement web", 
    icon: <Monitor size={32} />, 
    image: "/services/dev-web.png",
    desc: "Les techniques de développement web les plus avancées sont utilisées à fin de concevoir des sites web fiables.", 
    short: "Conception de sites web fiables" 
  },
  { 
    id: "dev-mobile", 
    title: "Développement mobile", 
    icon: <Smartphone size={32} />, 
    image: "/services/dev-mobile.png",
    desc: "On vous garantit une expérience utilisateur attrayante et une interface utilisateur optimale sur tous les appareils mobiles.", 
    short: "Expérience mobile optimale" 
  },
  { 
    id: "outsourcing", 
    title: "Outsourcing", 
    icon: <Users size={32} />, 
    image: "/services/outsourcing.png",
    desc: "Nous offrons une variété de services informatiques pour tout genre d'entreprise ainsi que pour les organisations étrangères.", 
    short: "Services IT pour votre entreprise" 
  },
  { 
    id: "digitalisation", 
    title: "Digitalisation", 
    icon: <Zap size={32} />, 
    image: "/services/digitalisation.png",
    desc: "Nos services de digitalisation sont soigneusement sélectionnés pour donner à votre marque une exposition numérique percutante.", 
    short: "Exposition numérique percutante" 
  },
  { 
    id: "formation", 
    title: "Formation", 
    icon: <GraduationCap size={32} />, 
    image: "/services/formation.png",
    desc: "Une formation riche et diversifiée pour développer vos compétences et suivre l'essor technologique.", 
    short: "Développez vos compétences" 
  },
  { 
    id: "discussion", 
    title: "Discussion", 
    icon: <MessageSquare size={32} />, 
    image: "/services/outsourcing.png",
    desc: "Prompt conversation and collaboration within your community of learners and instructors with forums system integrated.", 
    short: "Collaboration & Communauté" 
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Youssef Alaoui",
    role: "CEO, TechMaroc",
    content: "ZiryabTec a transformé notre gestion interne grâce à un ERP sur mesure. Leur équipe est réactive et d'un professionnalisme rare.",
  },
  {
    id: 2,
    name: "Amina Bennani",
    role: "Directrice Marketing, Luxe & Co",
    content: "Notre plateforme e-commerce a doublé ses ventes en 6 mois après la refonte par ZiryabTec. Une agence incontournable au Maroc.",
  },
  {
    id: 3,
    name: "Karim Tazi",
    role: "Fondateur, Startup Hub",
    content: "L'outsourcing IT avec ZiryabTec nous a permis d'accélérer notre développement sans compromis sur la qualité du code.",
  }
];

export const TIMELINE = [
  { year: "2018", title: "Fondation", desc: "Création de ZiryabTec avec une vision claire : innover dans le développement de logiciels." },
  { year: "2020", title: "Spécialisation", desc: "Maîtrise de technologies cloud et modernes pour des architectures évolutives.", tech: [
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "React", slug: "react", color: "61DAFB" },
    { 
      name: "AWS", 
      slug: "amazonwebservices", 
      color: "FF9900", 
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.348 16.486c-1.185 0-2.427-.145-3.763-.438a34.7 34.7 0 01-3.147-1.062l.745-1.947c.61.463 1.316.832 2.122 1.072a7.618 7.618 0 002.486.365c1.366 0 2.378-.34 3.037-1.024.66-.683.987-1.634.987-2.853V9.243h-2.146c-1.073 0-1.878.342-2.415 1.025-.537.683-.805 1.512-.805 2.487 0 1.146.293 2.025.878 2.634.585.61 1.44.915 2.56.915 1.146 0 2.073-.415 2.78-.244v1.073c0 .732-.146 1.341-.439 1.829a3.342 3.342 0 01-1.17 1.121 4.544 4.544 0 01-1.91.439l.01-.031zm.293-4.586c-.683 0-1.22-.244-1.61-.731a2.806 2.806 0 01-.585-1.464c0-.61.195-1.097.585-1.463.39-.366.927-.549 1.61-.549s1.22.183 1.61.549c.39.366.585.853.585 1.463 0 .488-.195.976-.585 1.464-.39.487-.927.731-1.61.731zm-6.096 4.61c-1.39 0-2.73-.133-4.004-.393a20.065 20.065 0 01-3.83-1.183l.76-1.921c1.52.751 3.33 1.126 5.42 1.126 3.65 0 5.48-1.125 5.48-3.375 0-.664-.17-1.171-.51-1.521-.34-.35-.84-.524-1.49-.524h-2.12c-1.06 0-1.93.27-2.62.81-.69.54-1.03 1.31-1.03 2.304 0 1.054.35 1.866 1.05 2.431.7.566 1.7.849 3 1.123v.143zM23.95 13.1c-.05 1.11-.6 2.12-1.52 2.85-.92.73-2.12 1.1-3.59 1.1-1.47 0-2.74-.37-3.82-1.1-.51-.34-.94-.78-1.29-1.31l1.73-1.2c.43.68 1.25 1.3 2.5 1.3.83 0 1.45-.19 1.87-.57.42-.38.64-.89.66-1.52v-.09c-.48.46-1.13.69-1.93.69-1.07 0-1.91-.35-2.52-1.05-.61-.7-.91-1.61-.91-2.73 0-1.11.31-2.02.93-2.71.62-.69 1.45-1.04 2.48-1.04 1.03 0 1.82.35 2.36 1.04v-.79h2.15v6.13h-.06zm-4.3-4.63c-.56 0-.99.19-1.3.57-.31.38-.47.9-.47 1.56 0 .66.16 1.17.47 1.55s.74.57 1.3.57c.56 0 .99-.19 1.3-.57.31-.38.47-.9.47-1.55 0-.66-.16-1.18-.47-1.56-.31-.38-.74-.57-1.3-.57z"/></svg>`
    },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
    { name: "Laravel", slug: "laravel", color: "FF2D20" },
    { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
    { name: "Angular", slug: "angular", color: "DD0031" }
  ] },
  { year: "2022", title: "Croissance", desc: "Expansion de l'équipe et partenariats stratégiques en outsourcing IT." },
  { year: "2024", title: "L'Ère Digitale", desc: "Digitalisation percutante et développement d'infrastructures robustes." },
];
