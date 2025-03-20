import React from 'react';
import js from './assets/images/javascript.png';
import php from './assets/images/php.png';
import sql from './assets/images/sql.png';
import react from './assets/images/react.png';
import vue from './assets/images/vue.png';
import aws from './assets/images/aws.png';
import java from './assets/images/java.png';
import spring from './assets/images/spring.png';
import node from './assets/images/node.png';
import mongo from './assets/images/mongodb.png';
import digitalocean from './assets/images/digitalocean.jpg';
import git from './assets/images/git.png';
import html from './assets/images/html.png';
import heroku from './assets/images/heroku.jpg';
import css3 from './assets/images/css3.png';

const experiences = [
    {
        company: "Accenture SRL",
        role: "Semi Senior Fullstack Developer",
        period: "Octubre 2024 - Marzo 2025",
        description: "Encargado del mantenimiento y desarrollo de una de las plataformas directas de Accenture, asegurando su estabilidad y evolución. Implementé mejoras en la documentación técnica, realicé investigación para optimizar procesos y participé activamente en el desarrollo de nuevas funcionalidades. Trabajé en un entorno basado en AWS, asegurando la escalabilidad y seguridad del sistema.",
        technologies: [
            { imgSrc: php, name: "PHP" },
            { imgSrc: aws, name: "AWS" },
            { imgSrc: js, name: "JavaScript" },
            { imgSrc: vue, name: "Vue.js" },
            { imgSrc: sql, name: "SQL" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "javascript-color"
    },
    {
        company: "Accenture SRL",
        role: "Semi Senior Frontend Developer",
        period: "Abril 2024 - Octubre 2024",
        description: "Trabaje en la reestructuración del frontend de una de las plataformas principales de Accenture, mejorando la arquitectura y la experiencia de usuario. Implementé mejores prácticas en el código, optimicé el rendimiento y aseguré la mantenibilidad del proyecto. Trabajé con React en un entorno escalable dentro de la infraestructura de Accenture.",
        technologies: [
            { imgSrc: react, name: "React.js" },
            { imgSrc: digitalocean, name: "Digital Ocean" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "react-color"
    },
    {
        company: "Accenture SRL",
        role: "Fullstack Developer",
        period: "Noviembre 2023 - Abril 2024",
        description: "Desarrollador backend para un cliente de Accenture. Me encargué de la migración de servicios legacy a una nueva arquitectura escalable. Implementé la estructura BFF-MS-AD para mejorar la adaptabilidad y eficiencia de los nuevos servicios.",
        technologies: [
            { imgSrc: java, name: "Java" },
            { imgSrc: spring, name: "Spring Boot" },
            { imgSrc: sql, name: "SQL" },
            { imgSrc: git, name: "GIT" }

        ],
        colorClass: "spring-color"
    },

    {
        company: "Accenture SRL",
        role: "Backend Developer",
        period: "Marzo 2023 - Noviembre 2023",
        description: "Desarrollador backend para un cliente de Accenture, encargado del mantenimiento y evolución de un monolito basado en Java y Spring Boot. Implementé nuevas funcionalidades y realicé refactorización de código para mejorar la eficiencia y escalabilidad del sistema. Además, en mis tiempos libres, desarrollé aplicaciones adicionales para el cliente utilizando Node.js y React.js para resolver necesidades específicas.",
        technologies: [
            { imgSrc: java, name: "Java" },
            { imgSrc: spring, name: "Spring Boot" },
            { imgSrc: sql, name: "SQL" },
            { imgSrc: node, name: "Node.js" },
            { imgSrc: react, name: "React.js" },
            { imgSrc: js, name: "JavaScript" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "javascript-color"
    },
    {
        company: "Accenture SRL",
        role: "Backend Developer",
        period: "Agosto 2021 - Marzo 2023",
        description: "Desarrollador backend para un cliente de Accenture, encargado del mantenimiento y optimización de un monolito de gran escala basado en Java y Spring Boot. Implementé mejoras en el rendimiento y aseguré la estabilidad del sistema. Paralelamente,comence a desarrollar aplicaciones adicionales para el cliente utilizando Node.js y React.js, brindando soluciones adaptadas a sus necesidades.",
        technologies: [
            { imgSrc: java, name: "Java" },
            { imgSrc: spring, name: "Spring Boot" },
            { imgSrc: sql, name: "SQL" },
            { imgSrc: mongo, name: "MongoDB" },
            { imgSrc: node, name: "Node.js" },
            { imgSrc: react, name: "React.js" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "spring-color"
    },
    {
        company: "Freelance",
        role: "Fullstack Developer",
        period: "noviembre 2020 - Agosto 2021",
        description: "Desarrollé una aplicación similar en funcionalidad a Pedidos Ya, pero enfocada en solicitar asistencia vehicular. La plataforma permitía a los usuarios compartir su ubicación en tiempo real mediante GPS, conectándolos con asistentes que asignaban al mejor reparador según el tipo de problema. Implementé backend escalable con Node.js y MongoDB, un frontend interactivo con React.js y desplegué la infraestructura en Digital Ocean.",
        technologies: [
            { imgSrc: node, name: "Node.js" },
            { imgSrc: react, name: "React.js" },
            { imgSrc: js, name: "JavaScript" },
            { imgSrc: mongo, name: "MongoDB" },
            { imgSrc: digitalocean, name: "Digital Ocean" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "node-color"
    },
    {
        company: "Freelance",
        role: "Fullstack Developer",
        period: "Noviembre 2019 - Noviembre 2020",
        description: "Desarrollé una aplicación para la gestión de un lavadero de autos con un sistema de cochera incluido. La plataforma permitía la reserva de turnos, administración de clientes y control de espacios en la cochera en tiempo real. Implementé una arquitectura robusta utilizando PHP para el backend, HTML, CSS y JavaScript para el frontend, con una base de datos SQL. Desplegué la aplicación en Heroku, asegurando su disponibilidad y escalabilidad.",
        technologies: [
            { imgSrc: php, name: "PHP" },
            { imgSrc: html, name: "HTML" },
            { imgSrc: css3, name: "CSS" },
            { imgSrc: js, name: "JavaScript" },
            { imgSrc: sql, name: "SQL" },
            { imgSrc: heroku, name: "Heroku" },
            { imgSrc: git, name: "GIT" }
        ],
        colorClass: "git-color"
    }

];

const ExperienceSection = () => {
    return (
        <div className=" ml-5 mr-5">
            <h2 className="text-center">Experiencia & Proyectos</h2>
            <div className="experience-grid mt-4">
                {experiences.map((exp, index) => (
                    <div key={index} className={`experience-card p-3 m-3 ${exp.colorClass} text-center exp-card`}>
                        <div className="card-content">
                            <h2 className="company-name exp-title">{exp.company}</h2>
                            <hr />
                            <h3 className="exp-position">{exp.role}</h3>
                            <p className="period">{exp.period}</p>
                            <p className="exp-description ">{exp.description}</p>
                            <div className="tech-icons">
                                {exp.technologies.map((tech, idx) => (
                                    <div key={idx} className="tech-item">
                                        <img src={tech.imgSrc} alt={tech.name} className="tech-icon" />
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
