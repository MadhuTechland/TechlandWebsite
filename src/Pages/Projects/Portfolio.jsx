import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Portfolio.css'; // Import the updated CSS file

import pcImg1 from '../../Components/Assets/techland.png';
import pcImg2 from '../../Components/Assets/trustlab.png';
import pcImg3 from '../../Components/Assets/salespulse.png';
import phoneImg1 from '../../Components/Assets/Projectimg/project1.png';
import phoneImg2 from '../../Components/Assets/Projectimg/project2.png';
import phoneImg3 from '../../Components/Assets/Projectimg/project3.png';

const Portfolio = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const statsRef = useRef(null);

    const projects = {
        mobile: [
            {
                title: "Health & Fitness App",
                description: "A comprehensive fitness tracking solution that helps users maintain their health goals.",
                images: [phoneImg1, phoneImg2, phoneImg3],
                category: "mobile"
            },
            {
                title: "Social Network",
                description: "A next-generation social platform that connects people through shared interests and experiences.",
                images: [phoneImg1, phoneImg2, phoneImg3],
                category: "mobile"
            },
            {
                title: "Food Delivery",
                description: "An innovative food delivery platform connecting local restaurants with hungry customers.",
                images: [phoneImg1, phoneImg2, phoneImg3],
                category: "mobile"
            }
        ],
        web: [
            {
                title: "E-commerce Platform",
                description: "A scalable e-commerce solution with advanced features including inventory management.",
                images: [pcImg1, pcImg2, pcImg3],
                category: "web"
            },
            {
                title: "Learning Management",
                description: "A comprehensive educational platform designed for modern learning.",
                images: [pcImg1, pcImg2, pcImg3],
                category: "web"
            },
            {
                title: "Analytics Dashboard",
                description: "A powerful business intelligence tool providing real-time insights and data visualization.",
                images: [pcImg1, pcImg2, pcImg3],
                category: "web"
            }
        ]
    };

    const stats = useRef([
        { label: "Mobile Apps", value: 156, icon: <i class="fa-solid fa-mobile-screen"></i> },
        { label: "Websites", value: 94, icon: <i class="fa-solid fa-globe"></i> },
        { label: "Projects", value: 52, icon: <i class="fa-solid fa-laptop-code"></i> },
        { label: "Happy Clients", value: 350, icon: <i class="fa-solid fa-user-group"></i> }
    ]);

    const [activeImageIndices, setActiveImageIndices] = useState({
        mobile: Array(projects.mobile.length).fill(0),
        web: Array(projects.web.length).fill(0),
    });

    const animateStats = useCallback(() => {
        stats.current.forEach((stat, index) => {
            let start = 0;
            const increment = Math.ceil(stat.value / 50);
            const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                    start = stat.value;
                    clearInterval(timer);
                }
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = start;
                    return newCounts;
                });
            }, 40);
        });
    }, [stats]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !animationTriggered) {
                    setAnimationTriggered(true);
                    animateStats();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(statsRef.current);
            }
        };
    }, [animateStats, animationTriggered]);

    // Carousel navigation functions for each project
    const goToNextImage = (category, index) => {
        setActiveImageIndices(prevIndices => {
            const newIndices = { ...prevIndices };
            newIndices[category][index] = (newIndices[category][index] + 1) % projects[category][index].images.length;
            return newIndices;
        });
    };

    const goToPrevImage = (category, index) => {
        setActiveImageIndices(prevIndices => {
            const newIndices = { ...prevIndices };
            newIndices[category][index] = (newIndices[category][index] - 1 + projects[category][index].images.length) % projects[category][index].images.length;
            return newIndices;
        });
    };

    const renderProjectSection = ({ title, items, category, isMobile = false }) => (
        <div className="project-section">
            <h2>{title}</h2>
            <div className="project-items">
                {items.map((project, index) => (
                    <div key={index} className={`project-item ${index % 2 === 0 ? " " : 'reversed'}`}>
                        <div className={`project-image-wrapper ${isMobile ? 'mobile' : ''}  `}>
                            <button className="carousel-btn prev" onClick={() => goToPrevImage(category, index)}>
                                &#8592;
                            </button>
                            <img
                                src={project.images[activeImageIndices[category][index]]}
                                alt={`${project.title}`}
                            />
                            <button className="carousel-btn next" onClick={() => goToNextImage(category, index)}>
                                &#8594;
                            </button>
                        </div>
                        <div className={`project-info-wrapper ${isMobile ? 'mobile' : ''}`}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button>View Project</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="main-container">
            <div className="header-section">
                <h1>Our Work Portfolio</h1>
                <p>We create beautiful digital experiences that help businesses grow and succeed in the modern world.</p>
            </div>

            {renderProjectSection({ title: "Mobile Applications", items: projects.mobile, category: "mobile", isMobile: true })}
            {renderProjectSection({ title: "Web Projects", items: projects.web, category: "web", reversed: true })}

            {/* Project Completion Section */}
            <div className="project-container" ref={statsRef}>
                <div className="project-header">
                    <h1>Project Milestones</h1>
                    <p>
                        We’ve successfully delivered projects across diverse industries,
                        ensuring innovation and excellence at every step.
                    </p>
                </div>
                <div className="project-stats">
                    {stats.current.map((stat, index) => (
                        <div key={index} className="project-stat">
                            {stat.icon}
                            <h2>{counts[index]}+</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
