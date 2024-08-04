import React, {useEffect,useRef} from "react";
import { FaChartLine, FaCode, FaLaptopCode, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Javascript.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";


const Javascript = () => {
    const whyUlearnTechRef = useRef(null);
    
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

        
        const reasonItemsElements = reasonItemsRef.current;
        const projectsElement = projectsRef.current;
        const whyUlearnTechElement = whyUlearnTechRef.current;

        

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const quizapp = `
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'Berlin', isCorrect: false },
                { answerText: 'Madrid', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Lisbon', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    
    let currentQuestion = 0;
    let score = 0;
    
    const questionCountElement = document.getElementById('question-count');
    const questionTextElement = document.getElementById('question-text');
    const answerSectionElement = document.getElementById('answer-section');
    const scoreSectionElement = document.getElementById('score-section');
    
    function showQuestion() {
        const current = questions[currentQuestion];
        questionCountElement.textContent = 'Question {currentQuestion + 1} of {questions.length}';
        questionTextElement.textContent = current.questionText;
    
        answerSectionElement.innerHTML = '';
        current.answerOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.answerText;
            button.onclick = () => handleAnswer(option.isCorrect);
            answerSectionElement.appendChild(button);
        });
    }
    
    function handleAnswer(isCorrect) {
        if (isCorrect) {
            score++;
        }
    
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    function showScore() {
        questionCountElement.style.display = 'none';
        questionTextElement.style.display = 'none';
        answerSectionElement.style.display = 'none';
        scoreSectionElement.textContent = 'You scored {score} out of {questions.length}';
    }
    
    showQuestion();
    
    `;

    const recipeapp = `
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key from a recipe API service
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    
    document.getElementById('searchButton').addEventListener('click', searchRecipes);
    
    async function searchRecipes() {
        const query = document.getElementById('searchInput').value;
        if (!query) return;
    
        const url = '{apiUrl}?query={query}&number=10&apiKey={apiKey}'';
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data.results);
    }
    
    function displayRecipes(recipes) {
        const container = document.getElementById('recipesContainer');
        container.innerHTML = '';
        
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
    
            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;
    
            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.title;
    
            const recipeDescription = document.createElement('p');
            recipeDescription.textContent = 'Ready in {recipe.readyInMinutes} minutes. Servings: {recipe.servings}';
    
            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeDescription);
    
            container.appendChild(recipeCard);
        });
    }
    
    `;

    const weatherApp = `
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key from OMDB
    const apiUrl = 'https://www.omdbapi.com/';
    
    document.getElementById('searchButton').addEventListener('click', searchMovies);
    
    async function searchMovies() {
        const query = document.getElementById('searchInput').value;
        if (!query) return;
    
        const url = '{apiUrl}?s={query}&apikey={apiKey}';
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.Search);
    }
    
    function displayMovies(movies) {
        const container = document.getElementById('moviesContainer');
        container.innerHTML = '';
        
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
    
            const movieImage = document.createElement('img');
            movieImage.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'; // Placeholder image if no poster is available
            movieImage.alt = movie.Title;
    
            const movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.Title;
    
            const movieYear = document.createElement('p');
            movieYear.textContent = 'Year: {movie.Year}';
    
            const movieType = document.createElement('p');
            movieType.textContent = 'Type: {movie.Type}';
    
            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieYear);
            movieCard.appendChild(movieType);
    
            container.appendChild(movieCard);
        });
    }
    
    `;

    const projects = [
        {
            title: 'Quiz App',
            description: 'Build a calculator to calculate numbers.',
            code: quizapp
        },
        {
            title: 'Recipe App',
            description: 'Create a simple to-do list application to keep track of tasks.',
            code: recipeapp
        },
        {
            title: 'Weather App',
            description: 'Build a weather application that fetches and displays weather information.',
            code: weatherApp
        },
    ];

    return (
        <div className="javascript-page">
            <Header />
            <div className="hero-section">
                <h1>JavaScript Mastery</h1>
                <p>Become a JavaScript developer by completing a variety of projects.</p>
                <Link to="/Script" className="cta-button">Get Started</Link>
            </div>

            
            <section className="why-javascript">
                <h2>Why Learn Javascript</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaCode />, title: "Versatile Language", description: "JavaScript is used for web development, server-side applications, mobile applications, and more."  },
                        { icon: <FaLaptopCode />, title: "Client-Side and Server-Side", description: "JavaScript runs on both the client-side and the server-side, making it a full-stack development language." },
                        { icon: <FaChartLine />, title: "High Demand", description: "JavaScript developers are in high demand worldwide, with excellent career prospects." }
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
                        <h3>JavaScript Basics</h3>
                        <ul>
                            <li>Introduction to JavaScript</li>
                            <li>Variables and Data Types</li>
                            <li>Operators and Expressions</li>
                            <li>Functions and Scope</li>
                            <li>Events and DOM Manipulation</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced JavaScript</h3>
                        <ul>
                            <li>Asynchronous JavaScript</li>
                            <li>Promises and Async/Await</li>
                            <li>APIs and Fetch</li>
                            <li>Error Handling</li>
                            <li>Modern JavaScript (ES6+)</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>JavaScript Frameworks</h3>
                        <ul>
                            <li>Introduction to React</li>
                            <li>React Components and State</li>
                            <li>React Hooks</li>
                            <li>Routing in React</li>
                            <li>State Management with Redux</li>
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
               <h2>Ready to Start Your JavaScript Journey?</h2>
               <p>Enroll now and take the first step towards becoming a JavaScript expert!</p>
               <button className="cta-button">Get Started</button>
            </section>
        </div>
    );
};

export default Javascript;
