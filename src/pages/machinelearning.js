import React, { useRef, useEffect } from "react";
import { FaBrain, FaChartLine, FaCode, FaHandsHelping, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './machinelearning.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MachineLearning = () => {
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
            title: 'Predicting House Prices',
            description: 'Build a model to predict house prices using various features.',
            code: `# Sample Python code for a machine learning project
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load dataset
data = pd.read_csv('house_prices.csv')

# Split data into features and target
X = data.drop('price', axis=1)
y = data['price']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict on the test set
predictions = model.predict(X_test)

print(predictions)`,
        },
        {
            title: 'Image Classification',
            description: 'Classify images using a convolutional neural network.',
            code: `# Sample Python code for an image classification project
import tensorflow as tf
from tensorflow.keras import datasets, layers, models

# Load and preprocess dataset
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()
train_images, test_images = train_images / 255.0, test_images / 255.0

# Build the CNN model
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10)
])

# Compile the model
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

# Train the model
model.fit(train_images, train_labels, epochs=10, 
          validation_data=(test_images, test_labels))`,
        },
    ];

    return (
        <HelmetProvider>
        <div className="machinelearning-page">
            <Helmet>
            <title>Master Machine Learning - From Fundamentals to Advanced AI | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Dive into Machine Learning from basics to advanced concepts. Learn to build intelligent systems and predictive models with our comprehensive ML course at U-Learn Tech." />
      <meta name="keywords" content="Machine Learning, Artificial Intelligence, Deep Learning, Neural Networks, Data Science, Python, TensorFlow, PyTorch, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/machine-learning" />
      <meta name="twitter:title" content="Master Machine Learning - From Fundamentals to Advanced AI | U-Learn Tech" />
      <meta name="twitter:description" content="Dive into Machine Learning from basics to advanced concepts. Learn to build intelligent systems and predictive models with our comprehensive ML course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/machine-learning-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master Machine Learning - From Fundamentals to Advanced AI",
          "description": "Dive into Machine Learning from basics to advanced concepts. Learn to build intelligent systems and predictive models with our comprehensive ML course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/machine-learning",
          "courseCode": "ML101",
          "educationalLevel": "Intermediate to Advanced",
          "programmingLanguage": "Python",
          "teaches": [
            "Machine Learning Fundamentals",
            "Supervised Learning Algorithms",
            "Unsupervised Learning Algorithms",
            "Deep Learning and Neural Networks",
            "Natural Language Processing",
            "Computer Vision",
            "Reinforcement Learning",
            "TensorFlow and PyTorch Frameworks",
            "Data Preprocessing and Feature Engineering",
            "Model Evaluation and Deployment"
          ],
          "occupationalCategory": "Data Scientist, Machine Learning Engineer, AI Specialist"
        })}
      </script>
            </Helmet>
            <Header />
            <div className="hero-section">
                <h1>Machine Learning Mastery</h1>
                <p>Become a Machine Learning expert by completing a variety of projects.</p>
                <Link to="/machinelearning" className="cta-button">Get Started</Link>
            </div>

            <section className="course-overview" ref={courseOverviewRef}>
                <h2>Course Overview</h2>
                <p>This comprehensive Machine Learning course will take you from a beginner to an advanced level.</p>
                <p>Equipping you with the skills to build robust and efficient models.</p>
                <h3>Who This Course Is For</h3>
                <p>This course is designed for:</p>
                <p>Beginners with basic programming knowledge</p>
                <p>Data scientists looking to expand their machine learning skills</p>
                <p>Developers interested in AI and machine learning</p>
                <p>Anyone looking to build predictive models</p>
            </section>

            <section className="why-machinelearning" ref={whyUlearnTechRef}>
                <h2>Why Learn Machine Learning</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaBrain />, title: "Cutting-Edge Technology", description: "Machine Learning is at the forefront of technological advancements." },
                        { icon: <FaChartLine />, title: "High Demand", description: "Machine Learning experts are highly sought after in various industries." },
                        { icon: <FaCode />, title: "Innovative Applications", description: "Apply Machine Learning to solve real-world problems." }
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
                        <h3>Machine Learning Basics</h3>
                        <ul>
                            <li>Introduction to Machine Learning</li>
                            <li>Supervised Learning</li>
                            <li>Unsupervised Learning</li>
                            <li>Reinforcement Learning</li>
                            <li>Feature Engineering</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced Machine Learning</h3>
                        <ul>
                            <li>Deep Learning</li>
                            <li>Neural Networks</li>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <li>Model Optimization</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Machine Learning Frameworks</h3>
                        <ul>
                            <li>TensorFlow</li>
                            <li>PyTorch</li>
                            <li>Scikit-Learn</li>
                            <li>Keras</li>
                            <li>XGBoost</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Other Important Areas</h3>
                        <ul>
                            <li>Data Preprocessing</li>
                            <li>Model Evaluation</li>
                            <li>Hyperparameter Tuning</li>
                            <li>Deploying Models</li>
                            <li>Ethics in AI</li>
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
               <h2>Ready to Start Your Machine Learning Journey?</h2>
               <p>Enroll now and take the first step towards becoming a Machine Learning expert!</p>
               <Link to="/machinelearning" className="cta-button">Get Started</Link>
            </section>

        </div>
    </HelmetProvider>
    );
};

export default MachineLearning;
