import React, { useRef, useEffect, useCallback } from "react";
import "./Projects.css";
import phoneImg1 from '../../Components/Assets/Projectimg/project1.png'
import phoneImg2 from '../../Components/Assets/Projectimg/project2.png'
import phoneImg3 from '../../Components/Assets/Projectimg/project3.png'
import phoneImg4 from '../../Components/Assets/Projectimg/project4.png'
import phoneImg5 from '../../Components/Assets/Projectimg/project5.png'
import phoneImg6 from '../../Components/Assets/Projectimg/project6.png'
import phoneImg7 from '../../Components/Assets/Projectimg/project7.png'


import pcImg1 from '../../Components/Assets/techland.png'
import pcImg2 from '../../Components/Assets/trustlab.png'
import pcImg3 from '../../Components/Assets/salespulse.png'


const Projects = () => {
    const moblieProjects = [
        { name: "Trust Labs", logo: phoneImg1, },
        { name: "Client Two", logo: phoneImg2, },
        { name: "Client Three", logo: phoneImg3, },
        { name: "Client Four", logo: phoneImg4, },
        { name: "Trust Labs", logo: phoneImg5, },
        { name: "Client Two", logo: phoneImg6, },
        { name: "Client Three", logo: phoneImg7, },

    ];
    const pcProjects = [
        { name: "Trust Labs", logo: pcImg1, },
        { name: "Client Two", logo: pcImg2, },
        { name: "Client Three", logo: pcImg3, },
        { name: "Client Four", logo: pcImg1, },
        { name: "Trust Labs", logo: pcImg2, },
        { name: "Client Two", logo: pcImg3, },
        { name: "Client Three", logo: pcImg1, },
        { name: "Client Four", logo: pcImg2, },
        { name: "Trust Labs", logo: pcImg3, },
        { name: "Client Two", logo: pcImg1, },
        { name: "Client Three", logo: pcImg2, },
        { name: "Client Four", logo: pcImg3, },
    ];



    // Refs and states for clients and testimonials
    const cardContainerRef = useRef(null);
    const testimonialContainerRef = useRef(null);
    const animationFrameClients = useRef(null);
    const animationFrameTestimonials = useRef(null);
    const scrollAmountClients = useRef(0);
    const scrollAmountTestimonials = useRef(0);
    const scrollSpeed = useRef(1);
    const scrollBackClients = useRef(false);
    const scrollBackTestimonials = useRef(false);

    const scrollContent = useCallback((containerRef, animationFrameRef, scrollAmountRef, scrollBackRef) => {
        if (containerRef.current) {
            // Check if scrolling should reverse
            if (!scrollBackRef.current && scrollAmountRef.current >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
                scrollBackRef.current = true;
            } else if (scrollBackRef.current && scrollAmountRef.current <= 0) {
                scrollBackRef.current = false;
            }

            // Adjust the scroll position
            scrollAmountRef.current += scrollBackRef.current ? -scrollSpeed.current : scrollSpeed.current;
            containerRef.current.scrollTo(scrollAmountRef.current, 0);

            // Request next animation frame
            animationFrameRef.current = requestAnimationFrame(() => scrollContent(containerRef, animationFrameRef, scrollAmountRef, scrollBackRef));
        }
    }, []);

    useEffect(() => {
        // Start scrolling clients
        animationFrameClients.current = requestAnimationFrame(() =>
            scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)
        );

        // Start scrolling testimonials
        animationFrameTestimonials.current = requestAnimationFrame(() =>
            scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)
        );

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameClients.current);
            cancelAnimationFrame(animationFrameTestimonials.current);
        };
    }, [scrollContent]);

    return (
        <section className="project-section">
            <div className="project-container">
                <h2 className="project-title">Our Moblie Projects</h2>
                <span className="project-subtitle">
                    We are proud to have partnered with exceptional clients across various industries.
                </span>
                <div
                    className="project-grid"
                    onMouseEnter={() => cancelAnimationFrame(animationFrameClients.current)}
                    onMouseLeave={() => (animationFrameClients.current = requestAnimationFrame(() =>
                        scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}
                    onTouchStart={() => cancelAnimationFrame(animationFrameClients.current)}
                    onTouchEnd={() => (animationFrameClients.current = requestAnimationFrame(() =>
                        scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}

                    ref={cardContainerRef}
                >
                    {moblieProjects.map((client, index) => (
                        <div key={index} className="project-card">
                            <img src={client.logo} alt={client.name} className="project-logo-moblie" />
                            <p className="project-name">{client.name}</p>
                            <div className="mobileBtn"></div>
                        </div>
                    ))}
                </div>


                <h2 className="project-title">Our Website Projects</h2>
                <span className="project-subtitle">
                    We are proud to have partnered with exceptional clients across various industries.
                </span>
                <div
                    className="project-grid"
                    onMouseEnter={() => cancelAnimationFrame(animationFrameTestimonials.current)}
                    onMouseLeave={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
                        scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
                    onTouchStart={() => cancelAnimationFrame(animationFrameTestimonials.current)}
                    onTouchEnd={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
                        scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
                    ref={testimonialContainerRef}
                >
                    {pcProjects.map((client, index) => (
                        <div key={index} className="project-card">
                            <img src={client.logo} alt={client.name} className="project-logo-pc" />
                            <p className="project-name">{client.name}</p>
                            <div className="pcStand"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Projects;

