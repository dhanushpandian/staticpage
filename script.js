document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic project cards
    const projects = [
        {
            title: "Cryptocurrency-to-Fiat Conversion Platform",
            description: "Developed a mobile application enabling cryptocurrency transactions with local vendors. Utilized the Polygon-powered blockchain for secure storage. Integrated a hardware component, the CryptoSwift box, for real-time speech notifications to vendors."
        },
        {
            title: "Car Damage Image Classifier - Ripik.AI Hackfest",
            description: "Developed an image classifier for categorizing car damages. Aimed to assist insurance companies in assessing claim legitimacy. Utilized skills in image classification and machine learning."
        },
        {
            title: "Medi-Bot - Healthcare Automation",
            description: "Developed an innovative system for senior medication management using Robotic Process Automation (RPA). Operates on a monthly basis, autonomously ordering crucial medications to eliminate manual intervention. Implemented triggers-based scheduling facilitated by an RPA orchestrator for precise and timely medication orders."
        },
        {
            title: "Portfolio Website",
            description: "Created a responsive portfolio website using Next.js and Tailwind CSS. Showcased skills, projects, and achievements in an elegant design. Dependencies include Next.js, Tailwind CSS, React, React Icons, TypeScript, and more."
        },
        {
            title: "Visual Search Engine",
            description: "Implemented dual classification leveraging Hugging Face inference and a bespoke model for deeper insights. Utilized Next.js, TensorFlow, Keras, OpenAPI 4, Express, Flask, and MongoDB in the tech stack."
        },
        {
            title: "Customer Attrition Prediction",
            description: "Contributed to a Streamlit web application predicting customer attrition using Logistic Regression and K-Means Clustering. Implemented with Python, Spark, and various data science libraries. Utilized Docker for containerization."
        },
        {
            title: "SIH1460 - AICTE Skills Assessment Program",
            description: "Contributed to the development of a web-based adaptive multiple-choice question (MCQ) testing system. Focused on assessing and improving the skills of engineering students in India. Employed an adaptive algorithm analyzing user responses, time spent on questions, and performance data. Integrated AI-based question generation for precise assessments."
        },
        {
            title: "Air Pollution Data Visualization",
            description: "Visualized air pollution data to infer the relation between pollution, population density, and weather. Used Power BI and Excel for data analysis and visualization. Examined the impact of pollution on population density and weather conditions."
        }
    ];

    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Skills section
    const skills = [
        "JavaScript", "Python", "React", "Node.js", "Express.js", "MongoDB",
        "SQL", "HTML5", "CSS3", "Git", "Docker", "AWS", "Machine Learning",
        "Deep Learning", "TensorFlow", "PyTorch", "Computer Vision", "NLP"
    ];

    const skillsList = document.querySelector('.skills-list');
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    // Form submission
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});