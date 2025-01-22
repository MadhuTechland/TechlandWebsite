import React from "react";
import "./OurTeam.css";
import personImg from '../../Components/Assets/person.jpg'

const OurTeam = () => {
    const team = [
        {
            name: "John Doe",
            role: "CEO & Founder",
            image: personImg,
            social: {
                linkedin: "https://linkedin.com/in/johndoe",
                twitter: "https://twitter.com/johndoe",
            },
        },
        {
            name: "Jane Smith",
            role: "Project Manager",
            image: personImg,
            social: {
                linkedin: "https://linkedin.com/in/janesmith",
                twitter: "https://twitter.com/janesmith",
            },
        },
        {
            name: "Michael Johnson",
            role: "Lead Developer",
            image: personImg,
            social: {
                linkedin: "https://linkedin.com/in/michaeljohnson",
                twitter: "https://twitter.com/michaeljohnson",
            },
        },
        {
            name: "Emily Davis",
            role: "UI/UX Designer",
            image: personImg,
            social: {
                linkedin: "https://linkedin.com/in/emilydavis",
                twitter: "https://twitter.com/emilydavis",
            },
        },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="team-title">Our Team</h2>
                <p className="team-subtitle">
                    Meet the talented individuals who make Techland IT Solutions a success.
                </p>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
