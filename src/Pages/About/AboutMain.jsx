import React from "react";
import "./About.css";
import intrologo from '../../Components/Assets/aboutus.mp4';
import mission from '../../Components/Assets/mission.mp4';
import vision from '../../Components/Assets/ourvision.mp4';

const AboutUs = () => {
    return (
        <main className="about-us" role="main">
            <section className="aboutintro">
                <article>
                    <header className="about-header">
                        <h1>About Techland IT Solutions</h1>
                        <p>
                            At Techland IT Solutions, we believe in harnessing the power of technology to transform ideas into reality.
                            Our journey is driven by innovation, collaboration, and a passion for excellence.
                        </p>
                    </header>
                </article>


                <video
                    src={intrologo}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Introduction video about Techland IT Solutions"
                />
            </section>

            <section className="aboutus-section reverse about-header">
                <article>
                    <header>
                        <h2>Our Mission</h2>
                    </header>
                    <p>
                        Our mission is to empower businesses with cutting-edge, scalable, and customer-centric technology solutions.
                        We strive to deliver solutions that not only solve today’s challenges but also prepare our clients for tomorrow’s opportunities.
                    </p>
                </article>
                <video
                    src={mission}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Mission video of Techland IT Solutions"
                />
            </section>

            <section className="aboutus-section about-header">
                <article>
                    <header>
                        <h2>Our Vision</h2>
                    </header>
                    <p>
                        We envision a world where technology is seamlessly integrated into every aspect of life and business.
                        Our goal is to become a global leader in IT services by consistently delivering value-driven solutions.
                    </p>
                </article>
                <video
                    src={vision}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Vision video of Techland IT Solutions"
                />
            </section>

            <section className="about-values">
                <header>
                    <h2>Our Core Values</h2>
                </header>
                <div className="values-grid">
                    <article className="value-item">
                        <header>
                            <h3>Innovation</h3>
                        </header>
                        <p>We embrace creativity and leverage the latest technologies to deliver innovative solutions.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Integrity</h3>
                        </header>
                        <p>We operate with honesty and transparency in everything we do.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Customer-Centricity</h3>
                        </header>
                        <p>Our clients are at the center of our success, and their satisfaction is our top priority.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Excellence</h3>
                        </header>
                        <p>We are committed to maintaining the highest quality standards in all our work.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Collaboration</h3>
                        </header>
                        <p>We value teamwork and foster strong partnerships with our clients and stakeholders.</p>
                    </article>
                </div>
            </section>
            <section className="aboutus-container">


                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>What We Do</h2>
                        <p>
                            At Techland IT Solutions, we provide a diverse range of IT services tailored to meet the unique needs of our clients. Our services include:
                        </p>
                        <ul>
                            <li>
                                <strong>Web Development:</strong> Creating responsive and engaging websites tailored to your business needs.
                            </li>
                            <li>
                                <strong>Mobile App Development:</strong> Building user-friendly mobile apps for iOS, Android, and cross-platform solutions.
                            </li>
                            <li>
                                <strong>Digital Marketing:</strong> Implementing strategies to enhance your brand's online visibility and reach.
                            </li>
                            <li>
                                <strong>Custom Software Development:</strong> Tailored software solutions to address complex business challenges.
                            </li>
                            <li>
                                <strong>Cloud and IT Consulting:</strong> Helping businesses migrate to the cloud and optimize their IT infrastructure.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1 aboutus-reverse">
                    <div className="aboutus-content">
                        <h2>Why Choose Techland IT Solutions?</h2>
                        <ul>
                            <li>
                                <strong>Proven Expertise:</strong> With years of experience and a portfolio of successful projects, we bring unmatched expertise to every project.
                            </li>
                            <li>
                                <strong>Innovative Approach:</strong> Leveraging the latest technologies and best practices to deliver solutions that meet your business needs.
                            </li>
                            <li>
                                <strong>Client-Centric Focus:</strong> Building strong relationships with our clients and exceeding expectations.
                            </li>
                            <li>
                                <strong>Global Reach:</strong> Trusted by businesses worldwide, enabling us to build a diverse and loyal client base.
                            </li>
                            <li>
                                <strong>Dedicated Team:</strong> Our team of highly skilled developers, designers, and strategists work tirelessly to bring your ideas to life.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>Our Milestones</h2>
                        <ul>
                            <li>
                                <strong>2018:</strong> Techland IT Solutions was founded with a vision to create impactful digital solutions.
                            </li>
                            <li>
                                <strong>2020:</strong> Delivered our 100th successful project, spanning industries like healthcare, retail, and education.
                            </li>
                            <li>
                                <strong>2022:</strong> Expanded our global footprint, with clients in the USA, Europe, and Asia.
                            </li>
                            <li>
                                <strong>2024:</strong> Launched AI-driven solutions to help businesses automate workflows and improve decision-making.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1 aboutus-reverse">
                    <div className="aboutus-content">
                        <h2>Meet Our Team</h2>
                        <p>
                            Our team is the backbone of our success. Comprising talented individuals with diverse expertise in <strong>development</strong>,
                            <strong>design</strong>, <strong>marketing</strong>, and <strong>strategy</strong>, we are united by a passion for technology and a
                            commitment to excellence. Every member of our team brings a unique perspective, allowing us to deliver solutions that are creative,
                            effective, and innovative.
                        </p>
                    </div>
                </div>

                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>Join Our Journey</h2>
                        <p>
                            At Techland IT Solutions, we don’t just create IT solutions; we build partnerships. Whether you’re a startup looking to establish
                            your digital presence or an established enterprise seeking to scale your operations, we are here to help you every step of the way.
                            Let’s work together to transform your vision into reality.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
