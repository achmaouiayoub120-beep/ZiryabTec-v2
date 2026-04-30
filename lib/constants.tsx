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
      customUrl: "https://img.icons8.com/?size=100&id=33039&format=png&color=FF9900" 
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
