import React from "react";
import "./Services.css";
import uiux from '../../Components/Assets/UIUX.png';
import webdev from '../../Components/Assets/webdev.jpg';
import appdev from '../../Components/Assets/appdev.avif';
import eCommerceIcon from '../../Components/Assets/ecommerce-custom-web-banner.webp';
import digitalMarketingIcon from '../../Components/Assets/digital-marketing.png';
import staffingIcon from '../../Components/Assets/StaffingServices.png';

const servicesData = [
    {
        title: "Mobile App Development",
        description:
            "Build user-friendly mobile applications for iOS, Android, and cross-platform solutions to bring your ideas to life.",
        imgSrc: appdev,
        details: [
            {
                subTitle: "iOS & Android Development",
                subDescription:
                    "We build high-quality apps for both platforms using native development tools such as Swift, Kotlin, and Java."
            },
            {
                subTitle: "Cross-Platform Solutions",
                subDescription:
                    "Save time and costs with apps that work across multiple platforms using technologies like React Native and Flutter."
            },
            {
                subTitle: "App Maintenance & Updates",
                subDescription:
                    "We offer continuous support and updates for your app to ensure it stays competitive in a rapidly changing market."
            },
        ],
        additionalInfo: "Our end-to-end app development includes UI/UX design, performance optimization, and integration with third-party APIs.",
        workflow:
            [
                { id: 1, title: 'Requirement Analysis', description: 'Define app goals and features.' },
                { id: 2, title: 'Design', description: 'Create user journey maps and high-fidelity prototypes.' },
                { id: 3, title: 'Development', description: 'Build apps using native or cross-platform tools.' },
                { id: 4, title: 'Quality Assurance', description: 'Perform functional and performance testing.' },
                { id: 5, title: 'Deployment', description: 'Publish the app on App Stores.' },
                { id: 6, title: 'Maintenance', description: 'Provide updates and add new features.' },
            ]
    },
    {
        title: "Web Development",
        description:
            "We create responsive, SEO-friendly, and engaging websites tailored to your business needs using the latest technologies.",
        imgSrc: webdev,
        details: [
            {
                subTitle: "Responsive Design",
                subDescription:
                    "Your website will look great on all devices, from desktops to smartphones. Our team ensures pixel-perfect designs and seamless performance."
            },
            {
                subTitle: "SEO Optimization",
                subDescription:
                    "We ensure your website ranks well in search engines to attract organic traffic. With our expertise in technical SEO and content strategy, you gain maximum visibility."
            },
            {
                subTitle: "E-Commerce Solutions",
                subDescription:
                    "We create seamless e-commerce experiences with secure payment gateways, intuitive navigation, and tailored shopping cart designs."
            },
        ],
        additionalInfo: "We leverage technologies such as React, Angular, Node.js, and WordPress to develop robust web solutions for diverse industries.",
        workflow:
            [
                { id: 1, title: 'Requirement Gathering', description: 'Understand client goals and target audience.' },
                { id: 2, title: 'Planning', description: 'Develop a sitemap and choose the technology stack.' },
                { id: 3, title: 'Design', description: 'Create mockups and prototypes for client approval.' },
                { id: 4, title: 'Development', description: 'Implement responsive design and add functionality.' },
                { id: 5, title: 'Testing', description: ' Ensure cross-browser and cross-device compatibility.' },
                { id: 6, title: 'Launch', description: 'Deploy the website and provide maintenance.' },
            ]

    },

    {
        title: "Digital Marketing",
        description:
            "Enhance your brand's online presence with tailored strategies, including SEO, social media, PPC, and content marketing.",
        imgSrc: digitalMarketingIcon,
        details: [
            {
                subTitle: "SEO & SEM",
                subDescription:
                    "Optimize your site for search engines and increase visibility with paid ads. Our strategies focus on targeted keywords and measurable results."
            },
            {
                subTitle: "Social Media Marketing",
                subDescription:
                    "Reach your target audience through campaigns on platforms like Facebook, Instagram, and LinkedIn, backed by data-driven insights."
            },
            {
                subTitle: "Email Campaigns",
                subDescription:
                    "Engage your customers directly through personalized email campaigns that drive conversions and build brand loyalty."
            },
        ],
        additionalInfo: "We also provide analytics and reporting to measure the success of each campaign and guide future strategies.",
        workflow: [
            {
                "id": 1,
                "title": "Discovery",
                "description": "Understand the brand, audience, and goals."
            },
            {
                "id": 2,
                "title": "Strategy Planning",
                "description": "Develop a tailored marketing plan."
            },
            {
                "id": 3,
                "title": "Content Creation",
                "description": "Produce engaging content for various platforms."
            },
            {
                "id": 4,
                "title": "Execution",
                "description": "Run campaigns across social media, email, and search engines."
            },
            {
                "id": 5,
                "title": "Monitoring",
                "description": "Track performance and engagement metrics."
            },
            {
                "id": 6,
                "title": "Optimization",
                "description": "Refine strategies based on analytics and feedback."
            }
        ]

    },
    {
        title: "Custom Software Development",
        description:
            "Designing and developing tailored software solutions to meet unique business challenges and improve efficiency.",
        imgSrc: eCommerceIcon,
        details: [
            {
                subTitle: "Bespoke Solutions",
                subDescription:
                    "Tailored software built specifically for your business processes and goals, ensuring a perfect fit for your needs."
            },
            {
                subTitle: "Automation",
                subDescription:
                    "Automate repetitive tasks to improve productivity and reduce human error, allowing your team to focus on strategic initiatives."
            },
            {
                subTitle: "Integration Services",
                subDescription:
                    "Integrate with third-party systems, CRMs, and databases to streamline your workflow and improve overall efficiency."
            },
        ],
        additionalInfo: "Our solutions utilize cutting-edge technologies like AI, machine learning, and cloud computing to deliver scalable and secure software.",
        workflow: [
            {
                "id": 1,
                "title": "Requirement Gathering",
                "description": "Identify specific business challenges."
            },
            {
                "id": 2,
                "title": "Design",
                "description": "Create software architecture and prototypes."
            },
            {
                "id": 3,
                "title": "Development",
                "description": "Implement features using the chosen tech stack."
            },
            {
                "id": 4,
                "title": "Testing",
                "description": "Perform unit, integration, and system testing."
            },
            {
                "id": 5,
                "title": "Deployment",
                "description": "Deploy the solution in the desired environment."
            },
            {
                "id": 6,
                "title": "Support",
                "description": "Provide ongoing maintenance and updates."
            }
        ]

    },
    {
        title: "UI/UX Design",
        description:
            "Crafting user-centric designs to enhance customer experience and engagement, ensuring your digital presence is both functional and visually appealing.",
        imgSrc: uiux,
        details: [
            {
                subTitle: "User Research & Analysis",
                subDescription:
                    "We conduct in-depth research to understand your target audience and create designs that resonate with them."
            },
            {
                subTitle: "Wireframing & Prototyping",
                subDescription:
                    "Our team creates detailed wireframes and interactive prototypes to visualize the user journey before development."
            },
            {
                subTitle: "Visual Design",
                subDescription:
                    "We deliver stunning visual designs that align with your brand identity and enhance user engagement."
            },
        ],
        additionalInfo: "Our approach combines creativity and usability, leveraging tools like Figma, Adobe XD, and Sketch to deliver exceptional designs.",
        workflow: [
            {
                "id": 1,
                "title": "Discovery",
                "description": "Understand user needs and project goals."
            },
            {
                "id": 2,
                "title": "Research",
                "description": "Conduct competitor analysis and gather insights."
            },
            {
                "id": 3,
                "title": "Wireframing",
                "description": "Design user flows and wireframes."
            },
            {
                "id": 4,
                "title": "Prototyping",
                "description": "Build interactive prototypes for feedback."
            },
            {
                "id": 5,
                "title": "Visual Design",
                "description": "Apply branding and visual elements."
            },
            {
                "id": 6,
                "title": "Delivery",
                "description": "Handoff assets for development."
            }
        ]

    },
    {
        title: "Staffing Services",
        description:
            "Providing skilled professionals to meet your business requirements and ensure smooth operations across various domains.",
        imgSrc: staffingIcon,
        details: [
            {
                subTitle: "IT Staffing",
                subDescription:
                    "We provide highly skilled IT professionals to help you scale your technical team and meet project demands."
            },
            {
                subTitle: "Contract Staffing",
                subDescription:
                    "Flexible staffing solutions that allow you to manage workloads efficiently and meet project deadlines with ease."
            },
            {
                subTitle: "Permanent Staffing",
                subDescription:
                    "Find the right talent for long-term roles in your organization with our rigorous screening and matching process."
            },
        ],
        additionalInfo: "Our staffing solutions cover a wide range of industries, ensuring you get the best talent for your specific needs.",
        workflow: [
            {
                "id": 1,
                "title": "Consultation",
                "description": "Understand client staffing needs."
            },
            {
                "id": 2,
                "title": "Sourcing",
                "description": "Identify and screen candidates."
            },
            {
                "id": 3,
                "title": "Shortlisting",
                "description": "Provide pre-vetted candidate profiles."
            },
            {
                "id": 4,
                "title": "Interviews",
                "description": "Coordinate client-candidate interactions."
            },
            {
                "id": 5,
                "title": "Placement",
                "description": "Onboard the selected candidates."
            },
            {
                "id": 6,
                "title": "Follow-Up",
                "description": "Ensure candidate satisfaction and performance."
            }
        ]

    },
];

const DetailedServices = () => {

    return (
        <section className="detailservice-container">
            <div className="detailservice-header">
                <h1>Our Services</h1>
                <p>
                    At Techland IT Solutions, we offer a comprehensive range of services designed to meet the diverse needs of businesses in the digital age. Our team of experts delivers high-quality, innovative solutions tailored to your goals, ensuring your business remains ahead of the competition.                </p>
            </div>
            <div className="detailservice-grid">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="detailservice-card"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div style={{ display: 'flex' }}>
                            <img src={service.imgSrc} alt={service.title} width={'20%'} />
                            <div className="card-header">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>

                        </div>
                        <div className="detailservice-details">
                            {service.details.map((detail, idx) => (
                                <div key={idx} className="detailservice-detail-item">
                                    <h3>{detail.subTitle}</h3>
                                    <p>{detail.subDescription}</p>
                                </div>
                            ))}
                        </div>
                        <div className="detailservice-additional-info">
                            <p><strong>Additional Information:</strong> {service.additionalInfo}</p>
                        </div>
                        <div className="workflow">

                            {service.workflow.map((step, stepIdx) => (
                                <>
                                    <div
                                        className={`workflow-step  active`}
                                    >
                                        <div className="step-content">
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                    {stepIdx < service.workflow.length - 1 && (
                                        <div
                                            className={`arrow active`}
                                        >
                                            →
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DetailedServices;
