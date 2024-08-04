import React, { useRef, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { FaChartLine, FaCode, FaLaptopCode, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './datascience.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";

const Datascience = () => {
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
        { title: 'Data Cleaning Project', description: 'Clean and preprocess a large dataset for analysis.', code: `import pandas as pd\n\n# Load the dataset\ndf = pd.read_csv('data.csv')\n\n# Drop missing values\ndf.dropna(inplace=True)\n\n# Save the cleaned dataset\ndf.to_csv('cleaned_data.csv', index=False)` },
        { title: 'Machine Learning Model', description: 'Build and train a machine learning model to predict outcomes.', code: `from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\n# Split the dataset\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# Train the model\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\n\n# Evaluate the model\naccuracy = model.score(X_test, y_test)` },
        { title: 'Data Visualization', description: 'Create visualizations to explore data and communicate insights.', code: `import matplotlib.pyplot as plt\n\n# Plot the data\nplt.figure(figsize=(10, 6))\nplt.plot(data['date'], data['value'])\nplt.title('Data Over Time')\nplt.xlabel('Date')\nplt.ylabel('Value')\nplt.show()` },
        { title: 'Big Data Analysis', description: 'Analyze a large dataset using big data technologies.', code: `from pyspark.sql import SparkSession\n\n# Create a Spark session\nspark = SparkSession.builder.appName('BigDataAnalysis').getOrCreate()\n\n# Load the dataset\ndf = spark.read.csv('big_data.csv', header=true)\n\n# Perform analysis\ndf.groupBy('category').count().show()` },
    ];

    return (
        <div className="datascience-page">
            <Helmet>
                <title>Learn Data Science and Analysis - Comprehensive Guide</title>
                <meta name="description" content="Learn data science and analysis with our comprehensive guide. From basics to advanced topics, become proficient in data science with practical projects and real-world applications." />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Course",
                            "name": "Learn Data Science and Analysis",
                            "description": "Comprehensive guide to data science and analysis with practical projects.",
                            "provider": {
                                "@type": "Organization",
                                "name": "U-Learn Tech",
                                "sameAs": "http://www.ulearntech.com"
                            }
                        }
                    `}
                </script>
            </Helmet>
            <Header />
            <div className="hero-section">
                <h1> Master Data Science and Analysis</h1>
                <p>Become a proficient data scientist by completing a variety of projects!</p>
                <Link to="/science" className="cta-button">Get Started</Link>
            </div>

            <section className="course-overview" ref={courseOverviewRef}>
                <h2>Course Overview</h2>
                <p>This comprehensive Data Science course will take you from a beginner to an advanced level.</p>
                <p>Equipping you with the skills to analyze and interpret complex data sets.</p>
                <h3>Who This Course Is For</h3>
                <p>This course is designed for:</p>
               
                    <p>Beginners with basic programming knowledge</p>
                    <p>Professionals looking to expand their data analysis skills</p>
                    <p>Developers interested in data science and machine learning</p>
                    <p>Anyone looking to build a career in data science</p>
               
            </section>

            <section className="why-datascience" ref={whyUlearnTechRef}>
                <h2>Why Learn Data Science</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaCode />, title: "High Demand", description: "Data scientists are in high demand globally, with excellent career prospects and opportunities." },
                        { icon: <FaLaptopCode />, title: "Valuable Insights", description: "Data science allows you to derive valuable insights from data, helping businesses make informed decisions." },
                        { icon: <FaChartLine />, title: "Versatile Skills", description: "Skills in data science are applicable in various industries, from healthcare to finance to tech." }
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
                        <h3>Data Science Basics</h3>
                        <ul>
                            <li>Introduction to Data Science</li>
                            <li>Data Types and Structures</li>
                            <li>Data Wrangling</li>
                            <li>Exploratory Data Analysis</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced Data Science</h3>
                        <ul>
                            <li>Machine Learning Algorithms</li>
                            <li>Data Visualization</li>
                            <li>Statistical Analysis</li>
                            <li>Big Data Technologies</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Practical Applications</h3>
                        <ul>
                            <li>Data Science Projects</li>
                            <li>Case Studies</li>
                            <li>Industry Applications</li>
                            <li>Real-World Data Sets</li>
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
                <h2>Ready to Start Your Data Science Journey?</h2>
                <p>Enroll now and take the first step towards becoming a data science expert!</p>
                <Link to="/science" className="cta-button">Get Started</Link>
            </section>
        </div>
    );
};

export default Datascience;
