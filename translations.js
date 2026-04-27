const translations = {
    es: {
        // Navigation
        nav_about: "about",
        nav_work: "work",
        nav_projects: "projects",
        nav_contact: "contact",
        nav_resume: "resume.pdf",

        // Hero
        hero_cta: "scroll(); // explora",
        meta_role: "ROL",
        meta_role_val: "ingeniero de software",
        meta_company: "EMPRESA",
        meta_location: "UBICACIÓN",
        meta_status: "ESTADO",
        meta_status_val: "construyendo sistemas críticos de transporte",
        meta_open: "abierto a colaboraciones",

        // Section paths
        path_about: "~/sobre-mi.md",
        path_work: "~/trayectoria.log",
        path_projects: "~/proyectos/",
        path_contact: "~/contacto.sh",

        // About
        about_me_btn: "SOBRE MÍ",
        about_me_title: "Sobre mí",
        about_me_desc: "Más que código, creo soluciones. Mi viaje en la ingeniería comenzó con la curiosidad de cómo funcionan las cosas y evolucionó hacia la pasión por construir sistemas que impactan el mundo real.<br><br>He liderado proyectos desde aplicaciones móviles en iOS y Android hasta arquitecturas de blockchain privadas, siempre buscando el equilibrio entre código limpio, seguridad y rendimiento. Me fascinan los retos que plantean la IA, el IoT y las industrias críticas como la aeroespacial.<br><br>Cuando no estoy programando, exploro nuevas fronteras en Computer Vision o optimizo algoritmos financieros.",

        // Career & Education
        edu_exp_title: "Trayectoria y Formación",

        // Tabs
        tab_experience: "work",
        tab_education: "education",
        tab_others: "other",
        tab_engineering: "Ingeniería",
        tab_degree: "Grado Superior",
        tab_online: "Cursos / I+D",

        // Job Indra
        job_indra_title: "Ingeniero de Software",
        job_indra_date: "2025 — presente",
        job_indra_desc1: "Ingeniería de software para sistemas de transporte críticos. Diseño de arquitecturas de alta disponibilidad y tolerancia a fallos.",
        job_indra_desc2: "Implementación de estrategias de escalabilidad y optimización de recursos en entornos complejos.",
        job_indra_desc3: "Liderazgo técnico en equipos ágiles (Scrum), impulsando mejores prácticas de desarrollo y CI/CD.",

        // Job1
        job1_title: "Frontend Developer",
        job1_date: "2023 — 2025",
        job1_desc1: "Modernización de legado tecnológico migrando interfaces críticas tanto iOS como Android, mejorando la mantenibilidad.",
        job1_desc2: "Rediseño integral de la UX/UI, resultando en una navegación más intuitiva y mayor retención de usuarios.",
        job1_desc3: "Optimización de rendimiento (Performance Tuning) para asegurar fluidez en dispositivos con recursos limitados.",

        // Education
        edu1_title: "Ingeniería Informática",
        edu1_desc1: "Enfoque práctico con proyectos complejos anuales abarcando todo el ciclo de vida del software.",
        edu1_desc2: "TFG: Diseño e implementación de un Gestor de Contraseñas Descentralizado basado en Blockchain.",
        edu1_desc3: "Sólida base en Algoritmia, Estructuras de Datos, Ciberseguridad, IA y Sistemas Distribuidos.",

        edu2_title: "Técnico Superior — DAM",
        edu2_desc1: "Formación intensiva orientada a la industria y mejores prácticas de desarrollo.",
        edu2_desc2: "Desarrollo de competencias transversales: trabajo en equipo, gestión de tiempos y resolución de conflictos.",
        edu2_desc3: "Especialización en ecosistemas Móviles (Android/iOS), Web Full-Stack y administración de Linux.",

        edu_online_date: "2020 — presente (+65h)",
        edu3_title: "Trading Financiero & Algorítmico",
        edu3_desc1: "Aplicación de modelos matemáticos y estadísticos en mercados reales.",
        edu3_desc2: "Análisis técnico y fundamental avanzado, gestión de riesgo y psicotrading.",

        // Projects
        projects_title: "Proyectos Destacados",
        featured_project: "Proyecto destacado",
        proj_role_full: "full-stack · arquitectura",
        proj_role_eng: "ingeniería · firmware",
        proj_role_mobile: "móvil · integración backend",
        proj_role_solo: "solo · producto · arquitectura",

        proj_noteflow_desc: "Aplicación de notas keyboard-first para Windows y Linux pensada para desarrolladores: editor markdown, sticky notes flotantes, grupos con deadlines, notas cifradas individualmente y sincronización privada con GitHub vía OAuth Device Flow. Incluye una CLI standalone para entornos headless (SSH, Raspberry Pi) y se integra como skill para agentes de IA.",
        proj_keychain_desc: "Gestor de contraseñas de alta seguridad sobre una Blockchain privada implementada desde cero. Utiliza KDF y cifrado AES-256 para garantizar integridad y confidencialidad de los datos, eliminando puntos únicos de fallo.",
        proj_easytable_desc: "Sistema de gestión de reservas inteligente basado en IoT. Permite seleccionar restaurantes según métricas ambientales en tiempo real (calidad del aire, ruido, temperatura) recolectadas por sensores in-situ.",
        proj_meraki_desc: "Plataforma móvil nativa (Android) diseñada para revitalizar el comercio local. Integra geolocalización en tiempo real para conectar usuarios con negocios cercanos y ofrecer un catálogo digital interactivo.",

        // Other projects
        other_projects_title: "Otros Proyectos I+D",
        proj_ml_desc: "Análisis predictivo de insuficiencia cardíaca usando modelos de Machine Learning (Python/Scikit-learn) sobre grandes conjuntos clínicos.",
        proj_compiler_desc: "Diseño y construcción de un compilador funcional para un subconjunto de Python: análisis léxico, sintáctico y semántico.",
        proj_smart_desc: "Suite de Smart Contracts auditables desplegados en testnets, demostrando patrones de diseño seguros y lógica on-chain.",
        proj_safejail_desc: "Sistema integral de seguridad y gestión biométrica para instituciones penitenciarias. Enfocado en fiabilidad y control de accesos.",
        proj_octans_desc: "DApp para creación y comercio de NFTs sobre Ethereum. Stack Web3 completo: Solidity, integración Metamask y frontend reactivo.",
        proj_nutrilog_desc: "Analizador de recetas con IA. Extrae y evalúa contenido nutricional desde URLs de YouTube procesando transcripciones y comentarios.",

        // Contact
        contact_pre: "¿Hablamos?",
        contact_title: "Contáctame",
        contact_text: "Mi bandeja de entrada siempre está abierta para nuevas oportunidades, dudas técnicas o simplemente saludar. Haré todo lo posible por responder.",
        contact_btn: "send_message",
        copy_email: "[ copiar ]",
        copied: "[ copiado ✓ ]",

        // Footer
        footer_text: "Diseñado & desarrollado por Yago Iglesias Díaz",

        // Legacy
        intro_hi: "Hola, mi nombre es",
        intro_text: "Ingeniero de Software con más de 4 años de experiencia.",
    },

    en: {
        // Navigation
        nav_about: "about",
        nav_work: "work",
        nav_projects: "projects",
        nav_contact: "contact",
        nav_resume: "resume.pdf",

        // Hero
        hero_cta: "scroll(); // explore",
        meta_role: "ROLE",
        meta_role_val: "software engineer",
        meta_company: "COMPANY",
        meta_location: "LOCATION",
        meta_status: "STATUS",
        meta_status_val: "building critical transport systems",
        meta_open: "open to collaborations",

        // Section paths
        path_about: "~/about-me.md",
        path_work: "~/career.log",
        path_projects: "~/projects/",
        path_contact: "~/contact.sh",

        // About
        about_me_btn: "ABOUT ME",
        about_me_title: "About me",
        about_me_desc: "I build solutions, not just code. My engineering journey started with curiosity and evolved into a drive to architect systems that make a real-world impact.<br><br>From high-performance mobile apps to private blockchain infrastructures, I strive for the sweet spot between clean code, security, and efficiency. I thrive on challenges in AI, IoT, and critical infrastructure.<br><br>When I'm not coding, I'm deep-diving into Computer Vision research or fine-tuning financial algorithms.",

        // Career & Education
        edu_exp_title: "Career & Education",

        // Tabs
        tab_experience: "work",
        tab_education: "education",
        tab_others: "other",
        tab_engineering: "Engineering",
        tab_degree: "Higher Degree",
        tab_online: "Courses / R&D",

        // Job Indra
        job_indra_title: "Software Engineer",
        job_indra_date: "2025 — present",
        job_indra_desc1: "Software engineering for critical transportation systems. Designing high-availability and fault-tolerant architectures.",
        job_indra_desc2: "Scalability strategies and resource optimization in complex environments.",
        job_indra_desc3: "Technical leadership in agile teams (Scrum), driving development best practices and CI/CD pipelines.",

        // Job1
        job1_title: "Frontend Developer",
        job1_date: "2023 — 2025",
        job1_desc1: "Modernizing legacy tech stacks by migrating critical interfaces both iOS and Android, improving maintainability.",
        job1_desc2: "Comprehensive UX/UI redesign, resulting in more intuitive navigation and higher user retention.",
        job1_desc3: "Performance Tuning to ensure smooth operation on resource-constrained devices.",

        // Education
        edu1_title: "Computer Engineering",
        edu1_desc1: "Practical focus with complex annual projects covering the full software lifecycle.",
        edu1_desc2: "Bachelor's Thesis: Design and implementation of a Blockchain-Based Decentralized Password Manager.",
        edu1_desc3: "Solid foundation in Algorithms, Data Structures, Cybersecurity, AI, and Distributed Systems.",

        edu2_title: "Higher Technician — DAM",
        edu2_desc1: "Intensive training oriented towards industry standards and development best practices.",
        edu2_desc2: "Development of soft skills: teamwork, time management, and conflict resolution.",
        edu2_desc3: "Specialization in Mobile ecosystems (Android/iOS), Full-Stack Web, and Linux administration.",

        edu_online_date: "2020 — present (+65h)",
        edu3_title: "Financial & Algorithmic Trading",
        edu3_desc1: "Application of mathematical and statistical models in real markets.",
        edu3_desc2: "Advanced technical and fundamental analysis, risk management, and psychotrading.",

        // Projects
        projects_title: "Featured Projects",
        featured_project: "Featured Project",
        proj_role_full: "full-stack · architecture",
        proj_role_eng: "engineering · firmware",
        proj_role_mobile: "mobile · backend integration",
        proj_role_solo: "solo · product · architecture",

        proj_noteflow_desc: "A keyboard-first note-taking app for Windows and Linux, built for developers: markdown editor, floating sticky notes, color-coded groups with deadlines, individually encrypted notes, and private GitHub sync via OAuth Device Flow. Ships with a standalone CLI for headless environments (SSH, Raspberry Pi) and integrates as a skill for AI agents.",
        proj_keychain_desc: "High-security password manager built on a custom private Blockchain. Uses KDF and AES-256 encryption to guarantee data integrity and confidentiality, eliminating single points of failure.",
        proj_easytable_desc: "IoT-based intelligent reservation system. Allows users to select restaurants based on real-time environmental metrics (air quality, noise, temperature) collected by on-site sensors.",
        proj_meraki_desc: "Native Android platform designed to revitalize local commerce. Integrates real-time geolocation to connect users with nearby businesses and offer an interactive digital catalog.",

        // Other projects
        other_projects_title: "Other R&D Projects",
        proj_ml_desc: "Predictive analysis of heart failure using Machine Learning models (Python/Scikit-learn) on large clinical datasets.",
        proj_compiler_desc: "Design and construction of a functional compiler for a Python subset, including lexical, syntactic, and semantic analysis.",
        proj_smart_desc: "Suite of auditable Smart Contracts deployed on testnets, demonstrating secure design patterns and on-chain business logic.",
        proj_safejail_desc: "Comprehensive security and biometric management system for penitentiary institutions. Engineering project focused on reliability and access control.",
        proj_octans_desc: "DApp for NFT creation and trading on the Ethereum network. Full Web3 stack: Solidity Smart Contracts, Metamask integration, and a reactive frontend.",
        proj_nutrilog_desc: "AI-based recipe analyzer. Extracts and evaluates nutritional content from YouTube URLs by processing transcripts and comments.",

        // Contact
        contact_pre: "What's next?",
        contact_title: "Get in touch",
        contact_text: "My inbox is always open for new opportunities, technical discussions, or just to say hi. I'll do my best to get back to you asap.",
        contact_btn: "send_message",
        copy_email: "[ copy ]",
        copied: "[ copied ✓ ]",

        // Footer
        footer_text: "Designed & built by Yago Iglesias Díaz",

        // Legacy
        intro_hi: "Hi, my name is",
        intro_text: "Software Engineer with 4+ years of experience.",
    }
};
