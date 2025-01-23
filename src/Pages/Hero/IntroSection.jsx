import React from "react";
import "./IntroSection.css";
import intrologo from "../../Components/Assets/web-developer-animation.mp4"; // Replace with actual image path
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import Projects from "../Projects/Projects";
import OurTeam from "../OurTeam/OurTeam";
import Contact from "../Contact/Contact";
import TeamBlogs from "../Blogs/TeamBlogs";

// import sectionDivider from '../../Components/Assets/sectionDividers.png'
// import servicesImage from "./assets/servicesImage.jpg"; // Replace with actual image path

const IntroSection = () => {


	return (
		<>

			<section className="intro-section">
				<div className="intro-container">
					<div className="intro-content">
						<h1 className="intro-title">Techland IT Solutions</h1>
						<p className="intro-description">
							Techland IT Solutions, based in Hyderabad, is a premier provider of digital solutions tailored to empower businesses.
							Our expertise spans mobile app development, web development, e-commerce, digital marketing, and UI/UX design.
							We are dedicated to delivering high-quality, innovative, and client-centric services that elevate your digital presence.
						</p>
						<ul className="intro-services">
							<li>✔ Mobile App Development</li>
							<li>✔ Flutter & Cross-Platform Development</li>
							<li>✔ E-Commerce Solutions</li>
							<li>✔ Web Development</li>
							<li>✔ Digital Marketing (SEO, PPC, GMB)</li>
							<li>✔ Intuitive UI/UX Design</li>
						</ul>
						<button class="intro-learn-more">
							<span class="intro-circle" aria-hidden="true">
								<span class="intro-icon intro-arrow"></span>
							</span>
							<span class="intro-button-text">Learn More</span>
						</button>

					</div>

					{/* <div class="morphing-box"> */}
					<video src={intrologo} width="50%" autoPlay loop muted style={{ mixBlendMode: 'multiply' }}>
					</video>

					{/* </div> */}

				</div>
			</section>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#bfc3f9", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#2c77f5", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad1)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad1)"></path>
			</svg>
			<Services />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad2)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad2)"></path>
			</svg>
			<Clients />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<Projects />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<OurTeam />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<TeamBlogs />

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<Contact />

		</>
	);
};

export default IntroSection;
