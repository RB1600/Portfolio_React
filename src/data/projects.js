
import agroImg from '../assets/projects/Agro.png';
import settribeImg from '../assets/projects/Settribe.png';

import portfolioImg from '../assets/projects/Portfolio.png';
import chaloKhelne from '../assets/projects/chaloKhelne.png';
import bestoDineImg from '../assets/projects/BestoDine_Banner.png';
import bestoDineMarketingImg from '../assets/projects/bestoMarket.png';
import callForNaukriImg from '../assets/projects/CallForNaukri_Banner.png';
import jyotishAiImg from '../assets/projects/JyotishAI_Banner.png';

export const projects = [

    {
        id: 1,
        title: "Besto Dine - Restaurant Management SaaS",
        description:
            "A full-stack, multi-tenant SaaS platform built end-to-end, from architecture to deployment. Features JWT role-based authentication, menu & order management, table booking, and billing workflows, with a responsive modern UI and dark mode.",
        tags: ["Full-Stack", "React", "Node.js", "MongoDB", "SaaS", "JWT"],
        githubLink: "https://github.com/RB1600/Besto-Dine-bcs",
        liveDemoLink: "https://bestodine-frontend.onrender.com/",
        image: bestoDineImg,
    },
    {
        id: 2,
        title: "Call For Naukri - Job Search App",
        description:
            "A cross-platform job-search mobile app built with React Native and published live on the Google Play Store. Features user authentication, job listings, and fast search & filtering with an intuitive UI.",
        tags: ["Mobile", "React Native", "Android"],
        liveDemoLink: "https://play.google.com/store/apps/details?id=com.callfornaukri.CallForNaukri",
        image: callForNaukriImg,
    },
    {
        id: 3,
        title: "Besto Dine - Marketing Website",
        description:
            "Marketing and lead-generation site for the Besto Dine restaurant operating system, showcasing POS billing, QR ordering, event bookings, parking reservations, and kitchen automation through a clean landing page with a 'Request a Free Demo' flow.",
        tags: ["Frontend", "React", "Tailwind CSS", "Landing Page"],
        githubLink: "https://github.com/RB1600/bestodine-marketing",
        liveDemoLink: "https://bestodine-marketing.onrender.com/",
        image: bestoDineMarketingImg,
    },
    {
        id: 4,
        title: "Field Inspection System",
        description:
            "Digitized the school inspection workflow for Zilla Parishad, Kolhapur. Built modules for inspection planning, visit scheduling, and geo-tagged photo uploads, with dynamic forms and auto-generated analytics reports.",
        tags: ["Full-Stack", "PHP", "SQL", "REST API"],
        githubLink: "https://github.com/RB1600/Field-Inspetion-System",
        liveDemoLink: "https://settribe.com/team/tms_zpk/login.php",
        image: settribeImg,
    },
    {
        id: 5,
        title: "Chalo Khelne - Sports Advertisement.",
        description:
"A targeted advertising portal allowing local businesses and sports brands to run campaigns on the Chalo Khelne platform. Includes a self-service dashboard for managing banner ads, sponsoring local tournaments, and tracking real-time engagement analytics.",        tags: [ "React", "Tailwind CSS", "Node.js", "UI/UX Design"],
        githubLink: "https://github.com/RB1600/chalo_Khelne_Figma_website",
        liveDemoLink: "https://cholokhelne.netlify.app/",
        image: chaloKhelne,
    },

    {
        id: 6,
        title: "Portfolio Website",
        description:
            "A personal portfolio built with React, Tailwind CSS, and Framer Motion.",
        tags: ["Frontend", "React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/RB1600/Portfolio_React",
        liveDemoLink: "https://portfoliomir.netlify.app/",
        image: portfolioImg,
    },
     {
        id: 7,
        title: "AgriHub - Equipment Rental Platform",
        description:
            "A full-stack MERN platform that connects farmers and equipment owners for easy, secure, and efficient farm equipment rentals.",
        tags: ["Full-Stack", "React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/RB1600/Farming",
        liveDemoLink: "https://agrihub.vercel.app",
        image: agroImg,
    },
    {
        id: 8,
        title: "Ai Jyotish - AI Vedic Astrology Platform",
        description:
            "A white-label AI Vedic astrology platform — branded mobile apps powered by an AI Jyotish engine, with Kundli matching, personalized chart-based predictions, PDF reports, subscriptions, and admin dashboards.",
        tags: ["AI", "White-Label", "Mobile", "Coming Soon"],
        githubLink: "https://github.com/RB1600/Ai-Jyotish-Final",
        image: jyotishAiImg,
    }

];
