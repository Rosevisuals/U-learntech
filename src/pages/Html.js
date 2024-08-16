import React, { useRef, useEffect } from "react";
import { FaChartLine, FaCode, FaLaptopCode, FaChalkboardTeacher, FaHandsHelping,FaPaintBrush} from "react-icons/fa";
import {Link } from 'react-router-dom';
import './Html.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Html = () => {

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
    }, []); // Empty dependency array to run once on mount and clean up on unmount

    const sliderSettings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const calculator = `<!DOCTYPE html>
    <html>
    <head>
    <style>
        .calculator {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
            width: 200px;
            margin: 0 auto;
        }
        .display {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 1.5em;
            text-align: right;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            padding: 10px;
            font-size: 1.2em;
        }
    </style>
    </head>
    <body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="button" onclick="pressKey('1')">1</button>
            <button class="button" onclick="pressKey('2')">2</button>
            <button class="button" onclick="pressKey('3')">3</button>
            <button class="button" onclick="pressKey('+')">+</button>
            <button class="button" onclick="pressKey('4')">4</button>
            <button class="button" onclick="pressKey('5')">5</button>
            <button class="button" onclick="pressKey('6')">6</button>
            <button class="button" onclick="pressKey('-')">-</button>
            <button class="button" onclick="pressKey('7')">7</button>
            <button class="button" onclick="pressKey('8')">8</button>
            <button class="button" onclick="pressKey('9')">9</button>
            <button class="button" onclick="pressKey('*')">*</button>
            <button class="button" onclick="pressKey('0')">0</button>
            <button class="button" onclick="pressKey('.')">.</button>
            <button class="button" onclick="calculate()">=</button>
            <button class="button" onclick="pressKey('/')">/</button>
        </div>
    </div>
    <script>
        function pressKey(key) {
            document.getElementById('display').value += key;
        }
        function calculate() {
            var display = document.getElementById('display');
            display.value = eval(display.value);
        }
    </script>
    </body>
    </html>`;
    const todoApp =`<!DOCTYPE html>
    <html>
    <head>
    <style>
        .todo-app {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .todo-app input {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
        }
        .todo-app ul {
            list-style: none;
            padding: 0;
        }
        .todo-app li {
            background: #f4f4f4;
            padding: 10px;
            margin-bottom: 5px;
            border-radius: 3px;
        }
    </style>
    </head>
    <body>
    <div class="todo-app">
        <input type="text" id="todo-input" placeholder="Add a new task">
        <ul id="todo-list"></ul>
    </div>
    <script>
        document.getElementById('todo-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const task = e.target.value;
                const listItem = document.createElement('li');
                listItem.textContent = task;
                document.getElementById('todo-list').appendChild(listItem);
                e.target.value = '';
            }
        });
    </script>
    </body>
    </html>`;

    const weatherApp = `<!DOCTYPE html>
    <html>
    <head>
    <style>
        .weather-app {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
        }
        .weather-app input {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
    </head>
    <body>
    <div class="weather-app">
        <input type="text" id="city-input" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <p id="weather-result"></p>
    </div>
    <script>
        async function getWeather() {
            const city = document.getElementById('city-input').value;
            const apiKey = 'your_api_key';
            const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
            const data = await response.json();
            document.getElementById('weather-result').textContent = \`Temperature in \${city}: \${data.main.temp}°C\`;
        }
    </script>
    </body>
    </html>`;

    const responsiveNav = `<!DOCTYPE html>
    <html>
    <head>
    <style>
        .nav-container {
            overflow: hidden;
            background-color: #333;
        }
        .nav-container a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .nav-container a:hover {
            background-color: #ddd;
            color: black;
        }
        .nav-container a.icon {
            display: none;
        }
        @media screen and (max-width: 600px) {
            .nav-container a:not(:first-child) {display: none;}
            .nav-container a.icon {
                float: right;
                display: block;
            }
        }
        @media screen and (max-width: 600px) {
            .nav-container.responsive {position: relative;}
            .nav-container.responsive a.icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .nav-container.responsive a {
                float: none;
                display: block;
                text-align: left;
            }
        }
    </style>
    </head>
    <body>
    <div class="nav-container" id="myNav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="javascript:void(0);" class="icon" onclick="toggleNav()">&#9776;</a>
    </div>
    <script>
        function toggleNav() {
            var x = document.getElementById("myNav");
            if (x.className === "nav-container") {
                x.className += " responsive";
            } else {
                x.className = "nav-container";
            }
        }
    </script>
    </body>
    </html>`;
    
    const projects = [
        {
            title: 'Calculator',
            description: 'Build a calculator to calculate numbers.',
            code: calculator
        },
        {
            title: 'To-Do List App',
            description: 'Create a to-do list application to manage tasks.',
            code: todoApp
        },
        {
            title: 'Weather App',
            description: 'Build a weather application to fetch and display weather information.',
            code: weatherApp
        },
        {
            title: 'Responsive Navigation Menu',
            description: 'Create a responsive navigation menu for your website.',
            code: responsiveNav
        }
    ];


    return (
        <HelmetProvider>
        <div className="html-page">
            <Helmet>
            <title>Master HTML and CSS - Web Development Fundamentals | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course at U-Learn Tech." />
      <meta name="keywords" content="HTML, CSS, Web Development, Responsive Design, Frontend, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/html-css-fundamentals" />
      <meta name="twitter:title" content="Master HTML and CSS - Web Development Fundamentals | U-Learn Tech" />
      <meta name="twitter:description" content="Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/html-css-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master HTML and CSS - Web Development Fundamentals",
          "description": "Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/html-css-fundamentals",
          "courseCode": "WEB101",
          "educationalLevel": "Beginner to Intermediate",
          "teaches": ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Web Accessibility"],
          "occupationalCategory": "Web Developer"
        })}
      </script>
            </Helmet>
            <Header/>
            <div className="hero-section">
                <h1>HTML & CSS Mastery</h1>
                <p>Become a website developer by completing a variety of projects!</p>
                <Link to="/Css" className="cta-button">Get Started</Link>
            </div>


            <section className="why-html">
      <h2>Why Learn HTML and CSS</h2>
      <div className="reasons-grid">
        {[
          { 
            icon: <FaCode />, 
            title: "Foundational Web Technology", 
            description: "HTML is the backbone of all web pages, essential for any web development career." 
          },
          { 
            icon: <FaLaptopCode />, 
            title: "Easy to Learn", 
            description: "HTML and CSS have gentle learning curves, making them accessible for beginners in coding." 
          },
          { 
            icon: <FaChartLine  />, 
            title: "High Demand", 
            description: "Web developers proficient in HTML and CSS are in high demand globally, with excellent career prospects." 
          },
          { 
            icon: <FaPaintBrush  />, 
            title: "Creative Expression", 
            description: "CSS allows you to bring designs to life, turning ideas into visually appealing websites." 
          }
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
                        <h3>HTML Basics</h3>
                        <ul>
                            <li>Introduction to HTML</li>
                            <li>HTML Elements and Structure</li>
                            <li>Attributes and Headings</li>
                            <li>Links and Images</li>
                            <li>Lists and Tables</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>CSS Basics</h3>
                        <ul>
                            <li>Introduction to CSS</li>
                            <li>Selectors and Properties</li>
                            <li>Box Model</li>
                            <li>Flexbox and Grid</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced Topics</h3>
                        <ul>
                            <li>CSS Animations</li>
                            <li>Transition Effects</li>
                            <li>CSS Variables</li>
                            <li>Advanced Flexbox Techniques</li>
                            <li>Media Queries</li>
                        </ul>
                    </div>
                    
                </div>
            </section>

           <section className="projects">
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
          
           <section className="why-ulearntech">
                <h2>Why Study at U-Learn Tech?</h2>
                <div className="reasons-container">
    
                    <div className="reason-card">
                        <FaChalkboardTeacher className="reason-icon" />
                        <h3>Comprehensive Curriculum</h3>
                        <p>Our courses cover the latest technologies and best practices, ensuring you stay ahead of the curve.</p>
                    </div>
                    <div className="reason-card">
                        <FaHandsHelping className="reason-icon" />
                        <h3>Hands-On Learning</h3>
                        <p>Engage in practical projects that give you the skills and confidence to succeed in your career.</p>
                    </div>
    
                    <div className="reason-card">
                        <FaLaptopCode className="reason-icon" />
                        <h3>Flexible Learning</h3>
                        <p>Study at your own pace with flexible schedules that fit your lifestyle.</p>
                    </div>
                </div>
            </section>
            <section className="enroll-section">
               <h2>Ready to Start Your Html and Css Journey?</h2>
               <p>Enroll now and take the first step towards becoming a Python expert!</p>
               <Link to="/Css" className="cta-button">Get Started</Link>
            </section>
        </div>
    </HelmetProvider>
    );
};

export default Html;
