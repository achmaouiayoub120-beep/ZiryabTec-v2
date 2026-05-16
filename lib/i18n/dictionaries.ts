export type Language = "fr" | "en";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      clientSpace: "Espace Client",
      cta: "Démarrer un projet",
    },
    hero: {
      badge: "N°1 Agence au Maroc",
      title: "Nous construisons l'avenir digital de votre entreprise.",
      subtitle: "Du développement ERP sur mesure à la stratégie e-commerce, en passant par l'outsourcing expert et l'intelligence artificielle.",
      ctaPrimary: "Démarrer votre projet",
      ctaSecondary: "Voir nos expertises",
      slides: [
        {
          title: "Nous construisons l'avenir digital de votre entreprise.",
          subtitle: "Du développement ERP sur mesure à la stratégie e-commerce, en passant par l'outsourcing expert et l'intelligence artificielle.",
          ctaPrimary: "Démarrer votre projet",
          ctaSecondary: "Voir nos expertises"
        },
        {
          title: "L'innovation au cœur de votre stratégie digitale.",
          subtitle: "Des solutions technologiques de pointe pour accélérer votre croissance et optimiser vos processus métiers.",
          ctaPrimary: "Découvrir nos solutions",
          ctaSecondary: "En savoir plus"
        },
        {
          title: "Transformez vos idées en réalités numériques.",
          subtitle: "Une équipe d'experts dédiée à la conception d'applications web et mobiles performantes.",
          ctaPrimary: "Lancer votre idée",
          ctaSecondary: "Explorer nos réalisations"
        }
      ],
      stats: {
        clients: "Clients",
        satisfaction: "Satisfaction",
        expertise: "Expertises",
      }
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions technologiques de pointe conçues pour répondre à vos défis métiers spécifiques.",
      more: "En savoir plus",
      back: "Retour aux services",
      whyUs: "Pourquoi choisir notre expertise ?",
      startProject: "Démarrer un projet",
      items: {
        "dev-web": {
          title: "Développement web",
          desc: "Sites vitrines, e-commerce, apps web complexes avec les dernières technologies."
        },
        "dev-mobile": {
          title: "Développement mobile",
          desc: "Applications iOS & Android natives et cross-platform performantes."
        },
        "outsourcing": {
          title: "Outsourcing IT",
          desc: "Équipes dédiées de développeurs, intégrées à vos processus internes."
        },
        "digitalisation": {
          title: "Digitalisation",
          desc: "Transformation digitale de vos processus métier, ERP sur mesure."
        },
        "formation": {
          title: "Formation",
          desc: "Programmes de montée en compétences tech pour vos équipes."
        },
        "data-ia": {
          title: "Data & IA",
          desc: "Solutions d'intelligence artificielle et d'analyse de données."
        }
      }
    },
    ecosystem: {
      tag: "NOTRE ÉCOSYSTÈME",
      title: "Nos Projets Phares",
      subtitle: "Découvrez les solutions innovantes que nous développons pour transformer les entreprises et les individus.",
      learnMore: "En savoir plus",
      accessPlatform: "Explorer les formations",
      badgeFormation: "Plateforme E-learning",
      projects: {
        "ztec-erp": {
          title: "ZTEC-ERP",
          desc: "Notre ERP cloud sur mesure, conçu pour centraliser et automatiser l'ensemble des processus métier des PME marocaines : gestion commerciale, RH, comptabilité et production."
        },
        "retailink": {
          title: "Retailink",
          desc: "Plateforme e-commerce connectée alliant gestion de catalogue, logistique intelligente et analytics en temps réel pour acteurs du retail."
        },
        "coachprolink": {
          title: "Coachprolink",
          desc: "Outil CRM dédié aux coachs et consultants : gestion de clientèle, planification de séances, suivi de progression et facturation automatisée."
        },
        "ziryabtec-formation": {
          title: "ZiryabTec Formation",
          desc: "Propulsez votre carrière avec nos formations certifiantes en développement, data et IT."
        }
      }
    },
    about: {
      hero: {
        tag: "À PROPOS",
        title: "Notre",
        titleAccent: "Histoire",
        subtitle: "Nous sommes les architectes de la transformation digitale. Nés de la passion pour la technologie, nous construisons l'avenir des entreprises ambitieuses."
      },
      mission: {
        tag: "NOTRE MISSION",
        title: "Propulser les entreprises dans l'ère",
        titleAccent: "digitale",
        p1: "Chez ZiryabTec, notre mission est claire : transformer la technologie en un avantage compétitif pour nos clients. Nous accompagnons les entreprises marocaines et internationales dans leur transformation digitale avec des solutions sur mesure.",
        p2: "Fondée en 2018, notre équipe multidisciplinaire allie design d'exception et ingénierie de pointe pour créer des écosystèmes digitaux performants."
      },
      stats: {
        founded: "Fondation",
        specialties: "Spécialités",
        team: "Équipe",
        sector: "Secteur"
      },
      journey: {
        tag: "NOTRE PARCOURS",
        title: "Les étapes clés",
        items: [
          { year: "2018", title: "Fondation", desc: "Création de ZiryabTec avec une vision claire : innover dans le développement de logiciels." },
          { year: "2020", title: "Spécialisation", desc: "Maîtrise de technologies cloud et modernes pour des architectures évolutives." },
          { year: "2022", title: "Croissance", desc: "Expansion de l'équipe et partenariats stratégiques en outsourcing IT." },
          { year: "2024", title: "L'Ère Digitale", desc: "Digitalisation percutante et développement d'infrastructures robustes." }
        ]
      },
      values: {
        tag: "NOS VALEURS",
        title: "Ce qui nous anime",
        items: [
          { title: "Innovation", desc: "Toujours à la pointe des nouvelles technologies pour vous offrir les solutions les plus modernes." },
          { title: "Excellence", desc: "Une qualité d'exécution irréprochable, un design soigné et une attention au détail obsessionnelle." },
          { title: "Partenariat", desc: "Nous avançons main dans la main avec nos clients, comme de véritables partenaires technologiques." },
          { title: "Impact", desc: "Chaque projet vise un impact mesurable sur la croissance et l'efficacité de votre entreprise." }
        ]
      },
      cta: {
        title: "Prêt à transformer",
        titleAccent: "votre entreprise",
        desc: "Rejoignez l'aventure ZiryabTec et propulsez votre business avec des solutions taillées sur mesure.",
        button: "Discutons de votre projet"
      }
    },
    client: {
      title: "Espace Client",
      subtitle: "Connectez-vous pour suivre l'avancement de vos projets.",
      username: "Identifiant",
      password: "Mot de passe",
      login: "Se connecter",
      noAccount: "Pas encore de compte ?",
      contactUs: "Contactez-nous"
    },
    contact: {
      tag: "CONTACT",
      title: "Parlons de votre",
      titleAccent: "Projet",
      subtitle: "Vous avez un projet de transformation digitale ? Notre équipe d'experts est prête à relever le défi.",
      labels: {
        phone: "Téléphone",
        email: "Email",
        office: "Bureaux"
      },
      form: {
        title: "Envoyez-nous un message",
        name: "Nom complet",
        email: "Email professionnel",
        service: "Service souhaité",
        select: "Sélectionnez un service",
        other: "Autre / Projet global",
        message: "Détails du projet",
        placeholderName: "Jean Dupont",
        placeholderEmail: "jean@entreprise.com",
        placeholderMsg: "Décrivez brièvement vos besoins...",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé !",
        successDesc: "Nous vous répondrons sous 48h."
      }
    },
    footer: {
      desc: "ZiryabTec propulse les entreprises dans l'ère digitale — du développement ERP sur mesure à la stratégie e-commerce, en passant par le marketing data-driven et l'outsourcing expert.",
      rights: "Tous droits réservés.",
      builtWith: "Construit avec",
      at: "au Maroc",
      sections: {
        services: "Services",
        company: "Entreprise",
        legal: "Légal"
      },
      links: {
        about: "À propos",
        careers: "Carrières",
        blog: "Blog",
        legal: "Mentions légales",
        terms: "CGV",
        privacy: "Confidentialité",
        cookies: "Cookies"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      clientSpace: "Client Area",
      cta: "Start a Project",
    },
    hero: {
      badge: "N°1 Agency in Morocco",
      title: "We build the digital future of your business.",
      subtitle: "From custom ERP development to e-commerce strategy, including expert outsourcing and artificial intelligence.",
      ctaPrimary: "Start your project",
      ctaSecondary: "View our expertise",
      slides: [
        {
          title: "We build the digital future of your business.",
          subtitle: "From custom ERP development to e-commerce strategy, including expert outsourcing and artificial intelligence.",
          ctaPrimary: "Start your project",
          ctaSecondary: "View our expertise"
        },
        {
          title: "Innovation at the heart of your digital strategy.",
          subtitle: "Cutting-edge technological solutions to accelerate your growth and optimize your business processes.",
          ctaPrimary: "Discover our solutions",
          ctaSecondary: "Learn more"
        },
        {
          title: "Transform your ideas into digital realities.",
          subtitle: "A dedicated team of experts in designing high-performance web and mobile applications.",
          ctaPrimary: "Launch your idea",
          ctaSecondary: "Explore our work"
        }
      ],
      stats: {
        clients: "Clients",
        satisfaction: "Satisfaction",
        expertise: "Expertises",
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Cutting-edge technological solutions designed to meet your specific business challenges.",
      more: "Learn more",
      back: "Back to services",
      whyUs: "Why choose our expertise?",
      startProject: "Start a project",
      items: {
        "dev-web": {
          title: "Web Development",
          desc: "Showcase sites, e-commerce, complex web apps with the latest technologies."
        },
        "dev-mobile": {
          title: "Mobile Development",
          desc: "High-performance native and cross-platform iOS & Android applications."
        },
        "outsourcing": {
          title: "IT Outsourcing",
          desc: "Dedicated developer teams integrated into your internal processes."
        },
        "digitalisation": {
          title: "Digitalization",
          desc: "Digital transformation of your business processes, custom ERP."
        },
        "formation": {
          title: "Training",
          desc: "Tech skill-up programs for your teams."
        },
        "data-ia": {
          title: "Data & AI",
          desc: "Artificial intelligence and data analysis solutions."
        }
      }
    },
    ecosystem: {
      tag: "OUR ECOSYSTEM",
      title: "Our Flagship Projects",
      subtitle: "Discover the innovative solutions we build to transform businesses and individuals.",
      learnMore: "Learn more",
      accessPlatform: "Explore training programs",
      badgeFormation: "E-learning Platform",
      projects: {
        "ztec-erp": {
          title: "ZTEC-ERP",
          desc: "Our custom cloud ERP, designed to centralize and automate all business processes for Moroccan SMEs: sales, HR, accounting, and production."
        },
        "retailink": {
          title: "Retailink",
          desc: "A connected e-commerce platform combining catalog management, smart logistics, and real-time analytics for retail players."
        },
        "coachprolink": {
          title: "Coachprolink",
          desc: "A CRM tool dedicated to coaches and consultants: client management, session planning, progress tracking, and automated invoicing."
        },
        "ziryabtec-formation": {
          title: "ZiryabTec Training",
          desc: "Boost your career with our certified training programs in development, data, and IT."
        }
      }
    },
    about: {
      hero: {
        tag: "ABOUT US",
        title: "Our",
        titleAccent: "History",
        subtitle: "We are the architects of digital transformation. Born from a passion for technology, we build the future of ambitious companies."
      },
      mission: {
        tag: "OUR MISSION",
        title: "Propelling businesses into the",
        titleAccent: "digital era",
        p1: "At ZiryabTec, our mission is clear: to turn technology into a competitive advantage for our clients. We support Moroccan and international companies in their digital transformation with tailor-made solutions.",
        p2: "Founded in 2018, our multidisciplinary team combines exceptional design with cutting-edge engineering to create high-performance digital ecosystems."
      },
      stats: {
        founded: "Founded",
        specialties: "Specialties",
        team: "Team",
        sector: "Sector"
      },
      journey: {
        tag: "OUR JOURNEY",
        title: "Key Milestones",
        items: [
          { year: "2018", title: "Foundation", desc: "Creation of ZiryabTec with a clear vision: to innovate in software development." },
          { year: "2020", title: "Specialization", desc: "Mastery of cloud and modern technologies for scalable architectures." },
          { year: "2022", title: "Growth", desc: "Team expansion and strategic partnerships in IT outsourcing." },
          { year: "2024", title: "The Digital Era", desc: "Powerful digitalization and development of robust infrastructures." }
        ]
      },
      values: {
        tag: "OUR VALUES",
        title: "What drives us",
        items: [
          { title: "Innovation", desc: "Always at the forefront of new technologies to offer you the most modern solutions." },
          { title: "Excellence", desc: "Impeccable execution quality, meticulous design, and obsessive attention to detail." },
          { title: "Partnership", desc: "We work hand-in-hand with our clients, as true technological partners." },
          { title: "Impact", desc: "Every project aims for a measurable impact on your company's growth and efficiency." }
        ]
      },
      cta: {
        title: "Ready to transform",
        titleAccent: "your business",
        desc: "Join the ZiryabTec adventure and propel your business with tailor-made solutions.",
        button: "Let's discuss your project"
      }
    },
    client: {
      title: "Client Area",
      subtitle: "Log in to track your project progress.",
      username: "Username / Email",
      password: "Password",
      login: "Login",
      noAccount: "Don't have an account?",
      contactUs: "Contact us"
    },
    contact: {
      tag: "CONTACT",
      title: "Let's talk about your",
      titleAccent: "Project",
      subtitle: "Do you have a digital transformation project? Our team of experts is ready for the challenge.",
      labels: {
        phone: "Phone",
        email: "Email",
        office: "Offices"
      },
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Professional Email",
        service: "Requested Service",
        select: "Select a service",
        other: "Other / Global Project",
        message: "Project Details",
        placeholderName: "John Doe",
        placeholderEmail: "john@company.com",
        placeholderMsg: "Briefly describe your needs...",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent!",
        successDesc: "We will get back to you within 48h."
      }
    },
    footer: {
      desc: "ZiryabTec propels businesses into the digital era — from custom ERP development to e-commerce strategy, including data-driven marketing and expert outsourcing.",
      rights: "All rights reserved.",
      builtWith: "Built with",
      at: "in Morocco",
      sections: {
        services: "Services",
        company: "Company",
        legal: "Legal"
      },
      links: {
        about: "About Us",
        careers: "Careers",
        blog: "Blog",
        legal: "Legal Notice",
        terms: "T&Cs",
        privacy: "Privacy",
        cookies: "Cookies"
      }
    }
  }
};
