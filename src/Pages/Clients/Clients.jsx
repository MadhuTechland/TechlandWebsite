import React from 'react';
import './Clients.css';
import { useEffect, useRef, useCallback } from "react";
import trustlabs from '../../Components/Assets/trustlabsLogo.png';

const Clients = () => {
	const clients = [
		{ name: "Trust Labs", logo: trustlabs },
		{ name: "Client Two", logo: trustlabs },
		{ name: "Client Three", logo: trustlabs },
		{ name: "Client Four", logo: trustlabs },
		{ name: "Trust Labs", logo: trustlabs },
		{ name: "Client Two", logo: trustlabs },
		{ name: "Client Three", logo: trustlabs },
		{ name: "Client Four", logo: trustlabs },
		{ name: "Trust Labs", logo: trustlabs },
		{ name: "Client Two", logo: trustlabs },
		{ name: "Client Three", logo: trustlabs },
		{ name: "Client Four", logo: trustlabs },
	];

	const testimonials = [
		{
			client: "Client One",
			feedback: "Techland IT Solutions transformed our online presence with an incredible website and mobile app.",
		},
		{
			client: "Client Two",
			feedback: "Their team delivered outstanding e-commerce solutions for our business. Highly recommended!",
		},
		{
			client: "Client Three",
			feedback: "Their innovative approach and support made all the difference. Fantastic team!",
		},
		{
			client: "Client Three",
			feedback: "Their innovative approach and support made all the difference. Fantastic team!",
		},
		{
			client: "Client Three",
			feedback: "Their innovative approach and support made all the difference. Fantastic team!",
		},

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
		<section className="clients-section">
			<div className="clients-container">
				<h2 className="clients-title">Our Clients</h2>
				<span className="clients-subtitle">
					We are proud to have partnered with exceptional clients across various industries.
				</span>
				<div
					className="clients-grid"
					onMouseEnter={() => cancelAnimationFrame(animationFrameClients.current)}
					onMouseLeave={() => (animationFrameClients.current = requestAnimationFrame(() =>
						scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}
					ref={cardContainerRef}
				>
					{clients.map((client, index) => (
						<div key={index} className="client-card">
							<img src={client.logo} alt={client.name} className="client-logo" />
							<p className="client-name">{client.name}</p>
						</div>
					))}
				</div>

				<div className="testimonials">
					<h3 className="testimonials-title">What Our Clients Say</h3>
					<div
						className="testimonial-grid"
						onMouseEnter={() => cancelAnimationFrame(animationFrameTestimonials.current)}
						onMouseLeave={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
							scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
						ref={testimonialContainerRef}
					>
						{testimonials.map((testimonial, index) => (
							<div key={index} className="testimonial-card">
								<p className="testimonial-feedback">“{testimonial.feedback}”</p>
								<p className="testimonial-client">- {testimonial.client}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Clients;
