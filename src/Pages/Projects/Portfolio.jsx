import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import "./Portfolio.css";
import pcImg1 from '../../Components/Assets/techland.png';
import pcImg2 from '../../Components/Assets/trustlab.png';
import pcImg3 from '../../Components/Assets/salespulse.png';
import phoneImg1 from '../../Components/Assets/phoneImg1.jpeg'
import phoneImg2 from '../../Components/Assets/phoneImg2.jpeg'
import phoneImg3 from '../../Components/Assets/phoneImg3.jpeg'

const Portfolio = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const ref = useRef(null);
    const isVisible = useRef(false);

    const projectStats = useMemo(() => {
        return [
            { label: "Web Development Projects", value: 200 },
            { label: "Mobile Apps Delivered", value: 150 },
            { label: "Digital Marketing Campaigns", value: 50 },
            { label: "Global Clients Served", value: 300 },
        ]
    }, []);

    const portfolioProjects = [
        {
            title: "E-Commerce Website",
            description: "A responsive and feature-rich online store built for scalability.",
            images: [pcImg1, pcImg2],
            category: "Web Development",
        },
        {
            title: "Mobile Banking App",
            description: "A secure and user-friendly mobile banking solution.",
            images: [phoneImg1, phoneImg2, phoneImg3],
            category: "Mobile App Development",
        },
        {
            title: "Digital Marketing Campaign",
            description: "A successful campaign that boosted client reach by 200%.",
            images: [pcImg3, pcImg1],
            category: "Digital Marketing",
        },
        {
            title: "AI-Powered Analytics Tool",
            description: "An innovative tool providing actionable business insights.",
            images: [pcImg1],
            category: "Web Development",
        },
        {
            title: "Food Delivery App",
            description: "A seamless food delivery solution for restaurants and users.",
            images: [pcImg2],
            category: "Mobile App Development",
        },
    ];

    const categories = ["All", "Web Development", "Mobile App Development", "Digital Marketing"];
    const animateCounts = useCallback(() => {
        projectStats.forEach((stat, index) => {
            const increment = Math.ceil(stat.value / 100);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    current = stat.value;
                    clearInterval(timer);
                }

                setCounts((prevCounts) => {
                    const updatedCounts = [...prevCounts];
                    updatedCounts[index] = current;
                    return updatedCounts;
                });
            }, 20);
        });
    }, [projectStats]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !isVisible.current) {
                    isVisible.current = true;
                    animateCounts();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [animateCounts]);



    const filteredProjects =
        selectedCategory === "All"
            ? portfolioProjects
            : portfolioProjects.filter((project) => project.category === selectedCategory);

    const [currentImageIndices, setCurrentImageIndices] = useState({});




    const handleNextImage = (projectIndex, images) => {
        setCurrentImageIndices((prevIndices) => ({
            ...prevIndices,
            [projectIndex]: (prevIndices[projectIndex] + 1 || 1) % images.length,
        }));
    };

    const handlePrevImage = (projectIndex, images) => {
        setCurrentImageIndices((prevIndices) => ({
            ...prevIndices,
            [projectIndex]: (prevIndices[projectIndex] - 1 + images.length || images.length - 1) % images.length,
        }));
    };
    return (
        <section className="portfolio-container">
            {/* Portfolio Section */}
            <div className="portfolio-header">
                <h1>Our Portfolio</h1>
                <p>Explore some of the amazing projects we’ve delivered for our clients.</p>
            </div>

            {/* Categories */}
            <div className="portfolio-categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`portfolio-category-btn ${selectedCategory === category ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Cards */}
            <div className="portfolio-projects">
                {filteredProjects.map((project, projectIndex) => (
                    <div key={projectIndex} className="portfolio-card">
                        <div className="carousel-container">
                            <button
                                onClick={() =>
                                    handlePrevImage(projectIndex, project.images)
                                }
                                className="carousel-btn"
                            >
                                &#10094;
                            </button>
                            <img
                                src={
                                    project.images[
                                    currentImageIndices[projectIndex] || 0
                                    ]
                                }
                                alt={`${project.title} ${currentImageIndices[projectIndex] || 0
                                    }`}
                                className="carousel-image"
                            />
                            <button
                                onClick={() =>
                                    handleNextImage(projectIndex, project.images)
                                }
                                className="carousel-btn"
                            >
                                &#10095;
                            </button>
                        </div>
                        <div className="portfolio-card-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Project Completion Section */}
            <div className="project-container" ref={ref}>
                <div className="project-header">
                    <h1>Project Milestones</h1>
                    <p>
                        We’ve successfully delivered projects across diverse industries,
                        ensuring innovation and excellence at every step.
                    </p>
                </div>
                <div className="project-stats">
                    {projectStats.map((stat, index) => (
                        <div key={index} className="project-stat">
                            <h2>{counts[index]}</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
