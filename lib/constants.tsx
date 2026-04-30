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
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.4 15.3c-1.2 0-2.4-.1-3.7-.4-1.1-.2-2.2-.6-3.1-1.1l.7-1.9c.6.4 1.3.8 2.1 1.1.8.2 1.6.4 2.5.4 1.4 0 2.4-.3 3-.9.6-.6 1-1.5 1-2.6v-2.2h-2.1c-1.1 0-1.9.3-2.4 1-.5.7-.8 1.5-.8 2.5 0 1.1.3 2 .9 2.6.6.6 1.4.9 2.6.9 1.1 0 2.1-.4 2.8-.2v1.1c0 .7-.1 1.3-.4 1.8s-.7 1-1.2 1.2c-.5.3-1.1.4-1.9.4zm.3-4.6c-.7 0-1.2-.2-1.6-.7-.4-.5-.6-1-.6-1.5 0-.6.2-1.1.6-1.5.4-.4.9-.6 1.6-.6s1.2.2 1.6.6c.4.4.6.9.6 1.5 0 .5-.2 1-.6 1.5-.4.5-.9.7-1.6.7zM9.5 16.5c-1.4.4-2.9.6-4.5.6-2.3 0-4.4-.4-6.3-1.3l.8-1.9c1.5.8 3.3 1.1 5.4 1.1 3.7 0 5.5-1.1 5.5-3.4 0-.7-.2-1.2-.5-1.5-.3-.3-.8-.5-1.5-.5H6.3c-1.1 0-1.9.3-2.6.8-.7.5-1 1.3-1 2.3 0 1.1.3 1.9 1 2.4s1.7.9 3 .9c1.2 0 2.2-.3 3.1-1v1.5c-.3 0-.3 0 0 0z"/></svg>`
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
