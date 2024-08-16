import React, { useRef, useEffect } from "react";
import { FaLightbulb, FaPalette, FaMobileAlt, FaChalkboardTeacher, FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './UX.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";

const UiUxDesignPrinciples = () => {
    const whyUlearnTechRef = useRef(null);
    const courseOverviewRef = useRef(null);
    const reasonItemsRef = useRef([]);
    const projectsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const courseOverviewElement = courseOverviewRef.current;
        const reasonItemsElements = reasonItemsRef.current;
        const projectsElement = projectsRef.current;
        const whyUlearnTechElement = whyUlearnTechRef.current;

        if (courseOverviewElement) {
            observer.observe(courseOverviewElement);
        }

        reasonItemsElements.forEach(item => {
            if (item) observer.observe(item);
        });

        if (projectsElement) {
            observer.observe(projectsElement);
        }

        if (whyUlearnTechElement) {
            observer.observe(whyUlearnTechElement);
        }

        return () => {
            if (courseOverviewElement) {
                observer.unobserve(courseOverviewElement);
            }
            reasonItemsElements.forEach(item => {
                if (item) observer.unobserve(item);
            });
            if (projectsElement) {
                observer.unobserve(projectsElement);
            }
            if (whyUlearnTechElement) {
                observer.unobserve(whyUlearnTechElement);
            }
        };
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const projects = [
        {
            title: 'Creating a User Persona',
            description: 'Learn to create detailed user personas to better understand your target audience.',
            code: `# Sample Python code for creating a user persona
import json

persona = {
    "name": "Jane Doe",
    "age": 28,
    "occupation": "Software Developer",
    "goals": ["Improve coding skills", "Learn new technologies"],
    "challenges": ["Balancing work and personal life", "Staying updated with trends"]
}

# Convert persona dictionary to JSON
persona_json = json.dumps(persona, indent=4)
print(persona_json)`,
        },
        {
            title: 'Wireframing a Mobile App',
            description: 'Learn the basics of wireframing to design the layout of a mobile application.',
            code: `# Sample HTML for wireframing a mobile app
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile App Wireframe</title>
</head>
<body>
    <div class="header">
        <h1>App Name</h1>
    </div>
    <div class="content">
        <p>Welcome to the app!</p>
    </div>
    <div class="footer">
        <p>&copy; 2024 App Company</p>
    </div>
</body>
</html>`,
        },
    ];

    return (
        <HelmetProvider>
            <div className="uiux-page">
                <Helmet>
                <title>UI/UX Design Principles - U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn the fundamental principles of UI/UX design to create user-friendly and aesthetically pleasing applications." />
      <meta name="keywords" content="UI/UX, Design Principles, User Experience, User Interface, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "UI/UX Design Principles",
          "description": "Learn the fundamental principles of UI/UX design to create user-friendly and aesthetically pleasing applications.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/uiux-design-principles",
          "courseCode": "UIUX101",
          "educationalLevel": "Beginner to Intermediate"
        })}
      </script>
                </Helmet>
                <Header />
                <div className="hero-section">
                    <h1 className="ux">UI/UX Design Principles</h1>
                    <p>Master the fundamental principles of UI/UX design to create user-friendly and aesthetically pleasing applications.</p>
                    <Link to="/design" className="cta-button">Get Started</Link>
                </div>

                <section className="course-overview" ref={courseOverviewRef}>
                    <h2>Course Overview</h2>
                    <p>This comprehensive UI/UX Design Principles course will take you from a beginner to an advanced level.</p>
                    <p>Equipping you with the skills to design intuitive and engaging user interfaces.</p>
                    <h3>Who This Course Is For</h3>
                    <p>This course is designed for:</p>
                    <p>Beginners with basic design knowledge</p>
                    <p>Designers looking to expand their UI/UX skills</p>
                    <p>Developers interested in design principles</p>
                    <p>Anyone looking to create user-friendly applications</p>
                </section>

                <section className="why-uiux" ref={whyUlearnTechRef}>
                    <h2>Why Learn UI/UX Design</h2>
                    <div className="reasons-grid">
                        {[
                            { icon: <FaLightbulb />, title: "Creative Field", description: "UI/UX Design allows you to express your creativity through digital interfaces." },
                            { icon: <FaPalette />, title: "High Demand", description: "UI/UX Designers are in high demand across various industries." },
                            { icon: <FaMobileAlt />, title: "Versatile Skillset", description: "Apply UI/UX Design principles to a wide range of projects and platforms." }
                        ].map((reason, index) => (
                            <div 
                                key={index}
                                className="reason-item"
                                ref={el => reasonItemsRef.current[index] = el}
                            >
                                {reason.icon}
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="course-content">
                    <h2>Course Content</h2>
                    <div className="content-modules">
                        <div className="module">
                            <h3>UI/UX Basics</h3>
                            <ul>
                                <li>Introduction to UI/UX Design</li>
                                <li>Design Principles</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>User Testing</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>Advanced UI/UX</h3>
                            <ul>
                                <li>Design Systems</li>
                                <li>Accessibility</li>
                                <li>Mobile Design</li>
                                <li>Interactive Prototyping</li>
                                <li>Design Thinking</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>UI/UX Tools</h3>
                            <ul>
                                <li>Figma</li>
                                <li>Sketch</li>
                                <li>Adobe XD</li>
                                <li>InVision</li>
                                <li>Axure RP</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>Other Important Areas</h3>
                            <ul>
                                <li>User Research</li>
                                <li>Information Architecture</li>
                                <li>Usability Testing</li>
                                <li>Responsive Design</li>
                                <li>UX Writing</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="projects additional-section" ref={projectsRef}>
                    <h2>Hands-on Projects</h2>
                    <Slider {...sliderSettings}>
                        {projects.map((project, index) => (
                            <div key={index}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ReadOnlyCodeSnippet code={project.code} />
                            </div>
                        ))}
                    </Slider>
                </section>
                <section className="why-ulearntech additional-section" ref={whyUlearnTechRef}>
                    <h2>Why Study at U-Learn Tech?</h2>
                    <div className="reasons-container">
                        {[
                            { icon: <FaChalkboardTeacher />, title: "Comprehensive Curriculum", description: "Our courses cover the latest technologies and best practices, ensuring you stay ahead of the curve." },
                            { icon: <FaHandsHelping />, title: "Hands-On Learning", description: "Engage in practical projects that give you the skills and confidence to succeed in your career." },
                            { icon: <FaLaptopCode />, title: "Flexible Learning", description: "Study at your own pace with flexible schedules that fit your lifestyle." }
                        ].map((reason, index) => (
                            <div key={index} className="reason-card">
                                {reason.icon}
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="enroll-section">
                   <h2>Ready to Start Your UI/UX Design Journey?</h2>
                   <p>Enroll now and take the first step towards becoming a UI/UX design expert!</p>
                   <Link to="/design" className="cta-button">Get Started</Link>
                </section>

            </div>
        </HelmetProvider>
    );
};

export default UiUxDesignPrinciples;
