
import agroImg from '../assets/projects/agro.png';
import settribeImg from '../assets/projects/Settribe.png'; 
import jmImg from '../assets/projects/JM.png';
import portfolioImg from '../assets/projects/Portfolio.png';

export const projects = [
    {
        id: 1,
        title: "AgriHub - Equipment Rental Platform",
        description:
            "A full-stack MERN platform that connects farmers and equipment owners for easy, secure, and efficient farm equipment rentals.",
        tags: ["Full-Stack", "React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/your-username/agrihub",
        liveDemoLink: "https://agrihub.vercel.app",
        image: agroImg, 
    },
    {
        id: 2,
        title: "Field Inspection System",
        description:
            "A digital inspection management system to track, log, and verify on-site inspection data.",
        tags: ["Full-Stack", "PHP", "SQL", "REST API"],
        githubLink: "https://github.com/RB1600/Field-Inspetion-System",
        liveDemoLink: "https://settribe.com/team/tms_zpk/login.php",
        image: settribeImg,
    },
    {
        id: 3,
        title: "JM Tour and Travels",
        description:
            "A modern travel booking and management web app featuring dynamic tour listings.",
        tags: ["Frontend", "React", "Firebase", "Tailwind CSS"],
        githubLink: "https://github.com/RB1600/Field-Inspetion-System",
        liveDemoLink: "https://jm-tour-travels.vercel.app",
        image: jmImg,
    },
    {
        id: 4,
        title: "Portfolio Website",
        description:
            "A personal portfolio built with React, Tailwind CSS, and Framer Motion.",
        tags: ["Frontend", "React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/your-username/portfolio",
        liveDemoLink: "https://your-portfolio.vercel.app",
        image: portfolioImg,
    },
];