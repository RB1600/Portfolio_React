
import agroImg from '../assets/projects/Agro.png';
import settribeImg from '../assets/projects/Settribe.png'; 

import portfolioImg from '../assets/projects/Portfolio.png';
import chaloKhelne from '../assets/projects/chaloKhelne.png';

export const projects = [
    
    {
        id: 1,
        title: "Field Inspection System",
        description:
            "A digital inspection management system to track, log, and verify on-site inspection data.",
        tags: ["Full-Stack", "PHP", "SQL", "REST API"],
        githubLink: "https://github.com/RB1600/Field-Inspetion-System",
        liveDemoLink: "https://settribe.com/team/tms_zpk/login.php",
        image: settribeImg,
    },
    {
        id: 2,
        title: "Chalo Khelne - Sports Advertisement.",
        description:
"A targeted advertising portal allowing local businesses and sports brands to run campaigns on the Chalo Khelne platform. Includes a self-service dashboard for managing banner ads, sponsoring local tournaments, and tracking real-time engagement analytics.",        tags: [ "React", "Tailwind CSS", "Node.js", "UI/UX Design"],
        githubLink: "https://github.com/RB1600/chalo_Khelne_Figma_website",
        liveDemoLink: "https://cholokhelne.netlify.app/",
        image: chaloKhelne,
    },
   
    {
        id: 3,
        title: "Portfolio Website",
        description:
            "A personal portfolio built with React, Tailwind CSS, and Framer Motion.",
        tags: ["Frontend", "React", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/RB1600/Portfolio_React",
        liveDemoLink: "https://portfoliomir.netlify.app/",
        image: portfolioImg,
    },
     {
        id: 4,
        title: "AgriHub - Equipment Rental Platform",
        description:
            "A full-stack MERN platform that connects farmers and equipment owners for easy, secure, and efficient farm equipment rentals.",
        tags: ["Full-Stack", "React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/RB1600/Farming",
        liveDemoLink: "https://agrihub.vercel.app",
        image: agroImg, 
    }
      
];