import { Globe, Smartphone, Users, Zap, GraduationCap, Brain } from "lucide-react";

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
    icon: <Globe size={32} />, 
    image: "/services/dev-web.png",
    desc: "Sites vitrines, e-commerce, apps web complexes avec les dernières technologies.", 
    short: "Conception de sites web fiables",
    gradient: "from-blue-500/20 via-sky-500/10 to-blue-600/20",
    glowColor: "rgba(59, 130, 246, 0.15)",
    accentColor: "#3B82F6"
  },
  { 
    id: "dev-mobile", 
    title: "Développement mobile", 
    icon: <Smartphone size={32} />, 
    image: "/services/dev-mobile.png",
    desc: "Applications iOS & Android natives et cross-platform performantes.", 
    short: "Expérience mobile optimale",
    gradient: "from-indigo-500/20 via-purple-500/10 to-indigo-600/20",
    glowColor: "rgba(99, 102, 241, 0.15)",
    accentColor: "#6366F1"
  },
  { 
    id: "outsourcing", 
    title: "Outsourcing IT", 
    icon: <Users size={32} />, 
    image: "/services/outsourcing.png",
    desc: "Équipes dédiées de développeurs, intégrées à vos processus internes.", 
    short: "Services IT pour votre entreprise",
    gradient: "from-cyan-500/20 via-teal-500/10 to-cyan-600/20",
    glowColor: "rgba(6, 182, 212, 0.15)",
    accentColor: "#06B6D4"
  },
  { 
    id: "digitalisation", 
    title: "Digitalisation", 
    icon: <Zap size={32} />, 
    image: "/services/digitalisation.png",
    desc: "Transformation digitale de vos processus métier, ERP sur mesure.", 
    short: "Exposition numérique percutante",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-violet-600/20",
    glowColor: "rgba(139, 92, 246, 0.15)",
    accentColor: "#8B5CF6"
  },
  { 
    id: "formation", 
    title: "Formation", 
    icon: <GraduationCap size={32} />, 
    image: "/services/formation.png",
    desc: "Programmes de montée en compétences tech pour vos équipes.", 
    short: "Développez vos compétences",
    gradient: "from-orange-500/20 via-amber-500/10 to-orange-600/20",
    glowColor: "rgba(249, 115, 22, 0.15)",
    accentColor: "#F97316"
  },
  { 
    id: "data-ia", 
    title: "Data & IA", 
    icon: <Brain size={32} />, 
    image: "/services/outsourcing.png",
    desc: "Solutions d'intelligence artificielle et d'analyse de données.", 
    short: "Intelligence Artificielle",
    gradient: "from-emerald-500/20 via-green-500/10 to-emerald-600/20",
    glowColor: "rgba(16, 185, 129, 0.15)",
    accentColor: "#10B981"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mehdi Alaoui",
    role: "DG",
    company: "NexTech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "ZiryabTec a digitalisé l'ensemble de nos process. Une équipe à l'écoute et techniquement irréprochable.",
  },
  {
    id: 2,
    name: "Laila Bennani",
    role: "DSI",
    company: "Maroc Logistics",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "L'équipe de développement a livré un ERP sur mesure qui a transformé notre gestion opérationnelle.",
  },
  {
    id: 3,
    name: "Omar Tazi",
    role: "Fondateur",
    company: "CasaFintech",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "Grâce à leur expertise en IA, nous avons automatisé de nombreuses tâches complexes.",
  },
  {
    id: 4,
    name: "Samira El Khattabi",
    role: "DRH",
    company: "Atlas Industries",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "La formation dispensée à nos équipes a été remarquable. Un vrai boost de compétences.",
  }
];

export const TIMELINE = [
  { year: "2018", title: "Fondation", desc: "Création de ZiryabTec avec une vision claire : innover dans le développement de logiciels." },
  { year: "2020", title: "Spécialisation", desc: "Maîtrise de technologies cloud et modernes pour des architectures évolutives.", tech: [
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "React", slug: "react", color: "61DAFB" },
    { 
      name: "AWS", 
      slug: "amazonaws", 
      color: "232F3E", 
      customUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
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
