// Definim structura de date pentru traduceri
export interface Translation {
  [key: string]: string | Translation;
}

export interface LanguageData {
  languages: {
    ro: Translation;
    en: Translation;
  };
}

// Exportăm traducerile predefinite
export const defaultTranslations: LanguageData = {
  "languages": {
    "ro": {
      "nav": {
        "home": "Acasă",
        "services": "Servicii",
        "solutions": "Soluții",
        "portfolio": "Portofoliu",
        "about": "Despre noi",
        "blog": "Blog",
        "careers": "Cariere",
        "contact": "Contact",
        "more": "Mai mult"
      },
      "hero": {
        "title": "SOLUȚII DIGITALE PERSONALIZATE",
        "subtitle": "Transformăm ideile tale în experiențe digitale de impact",
        "description": "Echipa noastră de experți oferă servicii complete de dezvoltare web și mobile, având în vedere obiectivele tale de business.",
        "cta": "Discută cu noi",
        "satisfied_clients": "Peste 100 de clienți mulțumiți"
      },
      "services": {
        "title": "Serviciile noastre",
        "subtitle": "Soluții complete pentru prezența ta digitală",
        "description": "Oferim o gamă completă de servicii digitale pentru a ajuta afacerea ta să prospere online. De la dezvoltare web la marketing digital, acoperim toate nevoile tale digitale.",
        "web_dev": {
          "title": "Dezvoltare web și mobilă",
          "description": "Creăm site-uri și aplicații personalizate care se adaptează perfect nevoilor afacerii tale."
        },
        "design": {
          "title": "Design UI/UX",
          "description": "Transformăm experiența utilizatorilor tăi prin design modern și intuitiv care maximizează conversiile."
        },
        "marketing": {
          "title": "Marketing digital",
          "description": "Strategii complete de marketing digital care îți aduc clienți și cresc vizibilitatea online."
        },
        "seo": {
          "title": "Optimizare SEO",
          "description": "Îmbunătățim poziția ta în motoarele de căutare pentru a atrage mai mult trafic organic și potențiali clienți."
        },
        "cta": "Vezi toate serviciile"
      },
      "why_us": {
        "title": "De ce să lucrezi cu noi",
        "subtitle": "Suntem pasionați de creșterea afacerii tale",
        "expertise": {
          "title": "Expertiză tehnică",
          "description": "Echipa noastră are peste 10 ani de experiență în dezvoltarea de soluții digitale performante."
        },
        "results": {
          "title": "Rezultate dovedite",
          "description": "Ne mândrim cu peste 100 de proiecte de succes și clienți mulțumiți în diverse industrii."
        },
        "support": {
          "title": "Suport complet",
          "description": "Oferim asistență continuă și actualizări pentru toate proiectele noastre."
        },
        "solutions": {
          "title": "Soluții personalizate",
          "description": "Creăm strategii și implementări adaptate specific nevoilor și obiectivelor tale de business."
        }
      },
      "analysis": {
        "title": "Analizăm nevoile tale",
        "subtitle": "Procesul nostru de lucru este centrat pe obiectivele tale de business",
        "research": {
          "title": "Cercetare",
          "description": "Analizăm piața, competiția și nevoile utilizatorilor pentru a identifica oportunitățile."
        },
        "strategy": {
          "title": "Strategie",
          "description": "Dezvoltăm un plan personalizat care aliniază soluțiile digitale cu obiectivele tale de business."
        },
        "design": {
          "title": "Design",
          "description": "Creăm interfețe intuitive și atractive care maximizează conversiile și satisfacția utilizatorilor."
        },
        "development": {
          "title": "Dezvoltare",
          "description": "Implementăm soluții tehnice robuste și scalabile folosind cele mai noi tehnologii."
        },
        "testing": {
          "title": "Testare",
          "description": "Verificăm riguros fiecare aspect al soluției pentru a asigura funcționalitatea perfectă."
        },
        "launch": {
          "title": "Lansare",
          "description": "Implementăm soluția finală și oferim suport continuu pentru succesul pe termen lung."
        }
      },
      "portfolio": {
        "title": "Portofoliul nostru",
        "subtitle": "Proiecte de succes care au generat rezultate",
        "view_all": "Vezi toate proiectele",
        "categories": {
          "web": "Web",
          "mobile": "Mobile",
          "ecommerce": "E-commerce",
          "branding": "Branding"
        }
      },
      "testimonials": {
        "title": "Ce spun clienții noștri",
        "subtitle": "Peste 100 de afaceri mulțumite de colaborarea cu noi",
        "client1": {
          "name": "Alexandru Popescu",
          "position": "CEO, TechSolutions",
          "text": "Colaborarea cu echipa a fost excepțională. Au înțeles perfect nevoile noastre și au livrat o soluție care ne-a depășit așteptările."
        },
        "client2": {
          "name": "Maria Ionescu",
          "position": "Marketing Director, EcoStore",
          "text": "De când am implementat noua strategie digitală, vânzările noastre online au crescut cu peste 40%. Recomand cu căldură serviciile lor."
        },
        "client3": {
          "name": "Andrei Marinescu",
          "position": "Fondator, StartupHub",
          "text": "Profesionalismul și dedicarea echipei sunt remarcabile. Au transformat complet prezența noastră online și rezultatele vorbesc de la sine."
        }
      },
      "tools": {
        "title": "Unelte care se potrivesc nevoilor tale",
        "subtitle": "Folosim cele mai avansate tehnologii pentru a crea soluții performante",
        "web": "Dezvoltare Web",
        "mobile": "Aplicații Mobile",
        "cloud": "Soluții Cloud",
        "ai": "Inteligență Artificială",
        "analytics": "Analiză de Date",
        "security": "Securitate Cibernetică"
      },
      "cta": {
        "title": "Pregătiți pentru următorul tău proiect",
        "subtitle": "Hai să transformăm ideile tale în soluții digitale de succes",
        "button": "Contactează-ne acum"
      },
      "about": {
        "hero": {
          "title": "Despre noi",
          "subtitle": "Transformăm afaceri prin soluții digitale inovatoare",
          "description": "Suntem o agenție digitală dedicată creării de experiențe web memorabile și eficiente care aduc rezultate măsurabile."
        },
        "agency": {
          "title": "Agenția noastră",
          "subtitle": "O echipă pasionată de rezultate excepționale",
          "description": "Suntem o agenție digitală cu experiență vastă în dezvoltarea de soluții web și mobile personalizate. Ne dedicăm succesului clienților noștri prin combinarea expertizei tehnice cu o înțelegere profundă a obiectivelor de business.",
          "experience": "10+ ani experiență",
          "projects": "100+ proiecte de succes",
          "clients": "90% clienți recurenți",
          "industries": "15+ industrii deservite"
        },
        "content": {
          "mission_title": "Misiunea noastră",
          "mission_desc": "Ne-am dedicat misiunea de a ajuta afacerile să prospere în era digitală prin soluții inovatoare și strategii personalizate care generează rezultate reale și măsurabile.",
          "vision_title": "Viziunea noastră",
          "vision_desc": "Aspirăm să devenim partenerul digital de încredere pentru afaceri ambițioase, oferind soluții tehnologice care depășesc așteptările și stabilesc noi standarde în industrie.",
          "values_title": "Valorile noastre",
          "innovation": "Inovație",
          "innovation_desc": "Căutăm mereu soluții creative și abordări noi pentru provocările complexe.",
          "quality": "Calitate",
          "quality_desc": "Urmărim constant cele mai înalte standarde în tot ceea ce facem.",
          "transparency": "Transparență",
          "transparency_desc": "Suntem deschiși, onești și etici în toate interacțiunile noastre.",
          "teamwork": "Colaborare",
          "teamwork_desc": "Credem în puterea muncii în echipă și a parteneriatelor bazate pe respect."
        }
      },
      "footer": {
        "company": "Companie",
        "services": "Servicii",
        "resources": "Resurse",
        "contact": "Contact",
        "copyright": "© 2025 Numele companiei. Toate drepturile rezervate.",
        "privacy": "Politica de confidențialitate",
        "terms": "Termeni și condiții"
      },
      "routes": {
        "home": "",
        "about": "despre-noi",
        "services": "servicii",
        "portfolio": "portofoliu",
        "solutions": "solutii",
        "contact": "contact",
        "blog": "blog",
        "careers": "cariere"
      }
    },
    "en": {
      "nav": {
        "home": "Home",
        "services": "Services",
        "solutions": "Solutions",
        "portfolio": "Portfolio",
        "about": "About",
        "blog": "Blog",
        "careers": "Careers",
        "contact": "Contact",
        "more": "More"
      },
      "hero": {
        "title": "BUILDING YOUR DIGITAL FUTURE",
        "subtitle": "We transform your ideas into impactful digital experiences",
        "description": "Our team of experts provides comprehensive web and mobile development services, keeping your business objectives in mind.",
        "cta": "Talk to us",
        "satisfied_clients": "Over 100 satisfied clients"
      },
      "services": {
        "title": "Our Services",
        "subtitle": "Complete solutions for your digital presence",
        "description": "We offer a comprehensive range of digital services to help your business thrive online. From web development to digital marketing, we cover all your digital needs.",
        "web_dev": {
          "title": "Web & Mobile Development",
          "description": "We create custom websites and applications that perfectly adapt to your business needs."
        },
        "design": {
          "title": "UI/UX Design",
          "description": "We transform your users' experience through modern and intuitive design that maximizes conversions."
        },
        "marketing": {
          "title": "Digital Marketing",
          "description": "Comprehensive digital marketing strategies that bring you customers and increase online visibility."
        },
        "seo": {
          "title": "SEO Optimization",
          "description": "We improve your position in search engines to attract more organic traffic and potential customers."
        },
        "consulting": {
          "title": "Business Consulting",
          "description": "Strategic guidance to help your business grow and adapt in an ever-changing digital landscape."
        },
        "optimization": {
          "title": "Conversion Optimization",
          "description": "We fine-tune your digital assets to maximize conversions and improve your ROI."
        },
        "cta": "See all services"
      },
      "why_us": {
        "title": "Why Work With Us",
        "subtitle": "We're passionate about growing your business",
        "expertise": {
          "title": "Technical Expertise",
          "description": "Our team has over 10 years of experience in developing high-performance digital solutions."
        },
        "results": {
          "title": "Proven Results",
          "description": "We pride ourselves on over 100 successful projects and satisfied clients across various industries."
        },
        "support": {
          "title": "Full Support",
          "description": "We provide continuous assistance and updates for all our projects."
        },
        "solutions": {
          "title": "Tailored Solutions",
          "description": "We create strategies and implementations specifically adapted to your business needs and objectives."
        }
      },
      "analysis": {
        "title": "We Analyze Your Needs",
        "subtitle": "Our workflow process is centered on your business objectives",
        "research": {
          "title": "Research",
          "description": "We analyze the market, competition, and user needs to identify opportunities."
        },
        "strategy": {
          "title": "Strategy",
          "description": "We develop a personalized plan that aligns digital solutions with your business goals."
        },
        "design": {
          "title": "Design",
          "description": "We create intuitive and attractive interfaces that maximize conversions and user satisfaction."
        },
        "development": {
          "title": "Development",
          "description": "We implement robust and scalable technical solutions using the latest technologies."
        },
        "testing": {
          "title": "Testing",
          "description": "We rigorously verify every aspect of the solution to ensure perfect functionality."
        },
        "launch": {
          "title": "Launch",
          "description": "We implement the final solution and provide continuous support for long-term success."
        }
      },
      "portfolio": {
        "title": "Our Portfolio",
        "subtitle": "Successful projects that have generated results",
        "view_all": "View all projects",
        "all_projects": "All projects",
        "categories": {
          "web": "Web",
          "mobile": "Mobile",
          "ecommerce": "E-commerce",
          "branding": "Branding"
        }
      },
      "testimonials": {
        "title": "What Our Clients Say",
        "subtitle": "Over 100 businesses satisfied with our collaboration",
        "client1": {
          "name": "Alex Johnson",
          "position": "CEO, TechSolutions",
          "text": "Working with the team has been exceptional. They perfectly understood our needs and delivered a solution that exceeded our expectations."
        },
        "client2": {
          "name": "Mary Williams",
          "position": "Marketing Director, EcoStore",
          "text": "Since implementing the new digital strategy, our online sales have increased by over 40%. I highly recommend their services."
        },
        "client3": {
          "name": "Andrew Martin",
          "position": "Founder, StartupHub",
          "text": "The team's professionalism and dedication are remarkable. They completely transformed our online presence and the results speak for themselves."
        }
      },
      "tools": {
        "title": "Tools That Fit Your Needs",
        "subtitle": "We use the most advanced technologies to create high-performance solutions",
        "web": "Web Development",
        "mobile": "Mobile Apps",
        "cloud": "Cloud Solutions",
        "ai": "Artificial Intelligence",
        "analytics": "Data Analytics",
        "security": "Cyber Security"
      },
      "needs_analysis": {
        "title": "We Analyze Your Needs",
        "subtitle": "Understanding your business needs is the first step to success",
        "ux": {
          "title": "User Experience (UX) Optimization",
          "description": "Optimization"
        },
        "support": {
          "title": "Ongoing Maintenance and Support",
          "description": "Support"
        },
        "mobile": {
          "title": "Mobile App Development",
          "description": "Apps"
        },
        "seo": {
          "title": "Search Engine Optimization",
          "description": "SEO"
        },
        "backend": {
          "title": "Scalable Backend Solutions",
          "description": "Backend"
        }
      },
      "cta": {
        "title": "Ready for Your Next Project",
        "subtitle": "Let's transform your ideas into successful digital solutions",
        "description": "Got a fresh business idea? We're all ears and ready to roll! Our team loves a good brainstorm and we're here to help make your idea shine.",
        "image_alt_1": "Team collaboration",
        "image_alt_2": "Business idea brainstorming",
        "button": "Contact us now"
      },
      "about": {
        "hero": {
          "title": "About Us",
          "subtitle": "Transforming businesses through innovative digital solutions",
          "description": "We are a digital agency dedicated to creating memorable and efficient web experiences that deliver measurable results."
        },
        "agency": {
          "title": "Our Agency",
          "subtitle": "A team passionate about exceptional results",
          "description": "We are a digital agency with extensive experience in developing custom web and mobile solutions. We are dedicated to our clients' success by combining technical expertise with a deep understanding of business objectives.",
          "experience": "10+ years experience",
          "projects": "100+ successful projects",
          "clients": "90% recurring clients",
          "industries": "15+ industries served"
        },
        "content": {
          "mission_title": "Our Mission",
          "mission_desc": "We have dedicated our mission to helping businesses thrive in the digital age through innovative solutions and personalized strategies that generate real and measurable results.",
          "vision_title": "Our Vision",
          "vision_desc": "We aspire to become the trusted digital partner for ambitious businesses, providing technological solutions that exceed expectations and set new standards in the industry.",
          "values_title": "Our Values",
          "innovation": "Innovation",
          "innovation_desc": "We always seek creative solutions and new approaches for complex challenges.",
          "quality": "Quality",
          "quality_desc": "We consistently pursue the highest standards in everything we do.",
          "transparency": "Transparency",
          "transparency_desc": "We are open, honest, and ethical in all our interactions.",
          "teamwork": "Teamwork",
          "teamwork_desc": "We believe in the power of teamwork and partnerships based on respect."
        }
      },
      "footer": {
        "company": "Company",
        "services": "Services",
        "resources": "Resources",
        "contact": "Contact",
        "copyright": "© 2025 Company name. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms & Conditions"
      },
      "routes": {
        "home": "",
        "about": "about-us",
        "services": "services",
        "portfolio": "portfolio",
        "solutions": "solutions",
        "contact": "contact",
        "blog": "blog",
        "careers": "careers"
      }
    }
  }
};