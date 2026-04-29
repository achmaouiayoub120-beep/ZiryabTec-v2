import { Monitor, Smartphone, Users, Zap, GraduationCap, MessageSquare } from "lucide-react";

export const SITE_CONFIG = {
  name: "ZiryabTec",
  slogan: "Créateurs de solutions digitales, penseurs d'idées innovantes.",
  description: "ZiryabTec propulse les entreprises dans l'ère digitale — du développement ERP sur mesure à la stratégie e-commerce, en passant par le marketing data-driven et l'outsourcing expert.",
  email: "contact@ziryabtec.com",
  location: "Casablanca, Maroc",
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
  { year: "2012", title: "Fondation", desc: "Création de ZiryabTec avec une vision claire : innover." },
  { year: "2016", title: "Expansion", desc: "Ouverture à l'international et premiers grands comptes." },
  { year: "2020", title: "Transformation", desc: "Pivot vers les solutions digitales intégrées et le cloud." },
  { year: "2024", title: "L'Ère de l'IA", desc: "Intégration de l'intelligence artificielle dans toutes nos offres." },
];
