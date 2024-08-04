import React, { useRef, useEffect } from "react";
import { FaChartLine, FaCode, FaLaptopCode,FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Kotlin.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";

const Kotlin = () => {
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

    const project1 = `
fun main() {
    while (true) {
        println("Enter first number:")
        val num1 = readLine()?.toDoubleOrNull()
        println("Enter second number:")
        val num2 = readLine()?.toDoubleOrNull()
        if (num1 == null || num2 == null) {
            println("Invalid input. Please enter numeric values.")
            continue
        }

        println("Choose an operation (+, -, *, /):")
        val operation = readLine()

        val result = when (operation) {
            "+" -> num1 + num2
            "-" -> num1 - num2
            "*" -> num1 * num2
            "/" -> num1 / num2
            else -> {
                println("Invalid operation.")
                continue
            }
        }

        println("The result is: $result")
    }
}
`;


const project2 = `
fun main() {
    val todoList = mutableListOf<String>()
    while (true) {
        println("To-Do List Menu:")
        println("1. Add item")
        println("2. Remove item")
        println("3. View items")
        println("4. Exit")

        when (readLine()) {
            "1" -> {
                println("Enter item to add:")
                val item = readLine()
                if (item != null && item.isNotBlank()) {
                    todoList.add(item)
                    println("Item added.")
                } else {
                    println("Invalid item.")
                }
            }
            "2" -> {
                println("Enter item number to remove:")
                val index = readLine()?.toIntOrNull()
                if (index != null && index in 1..todoList.size) {
                    todoList.removeAt(index - 1)
                    println("Item removed.")
                } else {
                    println("Invalid item number.")
                }
            }
            "3" -> {
                println("To-Do List:")
                todoList.forEachIndexed { index, item -> println("{index + 1}. $item") }
            }
            "4" -> {
                println("Exiting...")
                return
            }
            else -> println("Invalid option.")
        }
    }
}
`;


const project3 = `
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.respondText("Hello, Kotlin!", ContentType.Text.Plain)
            }
        }
    }.start(wait = true)
}
`;


const project4 = `
data class Contact(val name: String, val phone: String)

fun main() {
    val contacts = mutableListOf<Contact>()

    while (true) {
        println("Contact Manager Menu:")
        println("1. Add contact")
        println("2. Remove contact")
        println("3. View contacts")
        println("4. Exit")

        when (readLine()) {
            "1" -> {
                println("Enter contact name:")
                val name = readLine()
                println("Enter contact phone:")
                val phone = readLine()
                if (name != null && phone != null && name.isNotBlank() && phone.isNotBlank()) {
                    contacts.add(Contact(name, phone))
                    println("Contact added.")
                } else {
                    println("Invalid contact details.")
                }
            }
            "2" -> {
                println("Enter contact number to remove:")
                val index = readLine()?.toIntOrNull()
                if (index != null && index in 1..contacts.size) {
                    contacts.removeAt(index - 1)
                    println("Contact removed.")
                } else {
                    println("Invalid contact number.")
                }
            }
            "3" -> {
                println("Contacts List:")
                contacts.forEachIndexed { index, contact -> println("{index + 1}. {contact.name} - {contact.phone}") }
            }
            "4" -> {
                println("Exiting...")
                return
            }
            else -> println("Invalid option.")
        }
    }
}
`;


    const projects = [
        {
            title: 'Basic calculator',
            description: 'A simple calculator that performs basic arithmetic operations.',
            code: project1
        },
        {
            title: 'To do list',
            description: 'A command line based to do list manager.',
            code: project2
        },
        {
            title: 'Simple HTTP Server',
            description: 'Demonstrates how to create a basic HTTP server using the Ktor framework.',
            code: project3
        },
        {
            title: 'Basic Contact Manager',
            description: 'A basic contact management system that allows users to add, remove, and view contacts.',
            code: project4
        }
    ];

    return(
         <div className="kotlin-page">
            <Header />
            <div className="hero-section">
                <h1>Kotlin Mastery</h1>
                <p>Become a mobile app developer by completing a variety of projects.</p>
                <Link to="/Kt" className="cta-button">Get Started</Link>
            </div>

            <section className="course-overview" ref={courseOverviewRef}>
                <h2>Course Overview</h2>
                <p>This comprehensive Kotlin course will take you from a beginner to an advanced level.</p>
                <p>Equipping you with the skills  to build robust and efficient applications.</p>
                <h3>Who This Course Is For</h3>
                <p>This course is designed for:</p>
                
                <p>Beginners with basic programming knowledge</p>
                <p>Java developers looking to transition to Kotlin</p>
                <p>Mobile app developers interested in Android development</p>
                <p>Backend developers wanting to learn a modern JVM language</p>
      
            </section>

            <section className="why-kotlin" ref={whyUlearnTechRef}>
                <h2>Why Learn Kotlin</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaCode />, title: "Modern Language", description: "Kotlin is a modern, expressive, and concise language." },
                        { icon: <FaLaptopCode />, title: "Interoperability", description: "Kotlin is fully interoperable with Java, making it a versatile choice for development." },
                        { icon: <FaChartLine />, title: "High Demand", description: "Kotlin developers are in high demand, especially in the Android development industry." }
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
                        <h3>Kotlin Basics</h3>
                        <ul>
                            <li>Introduction to Kotlin</li>
                            <li>Variables and Data Types</li>
                            <li>Operators and Expressions</li>
                            <li>Control Flow Statements</li>
                            <li>Object-Oriented Programming</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced Kotlin</h3>
                        <ul>
                            <li>Exception Handling</li>
                            <li>Collections Framework</li>
                            <li>File I/O</li>
                            <li>Concurrency</li>
                            <li>Networking</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Kotlin Frameworks</h3>
                        <ul>
                            <li>Ktor Framework</li>
                            <li>Jetpack Compose</li>
                            <li>Android Development</li>
                            <li>Spring Boot with Kotlin</li>
                            <li>Kotlin Coroutines</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Other Important Areas</h3>
                        <ul>
                            <li>Kotlin Standard Library</li>
                            <li>Functional Programming</li>
                            <li>Testing</li>
                            <li>Kotlin Multiplatform</li>
                            <li>Domain-Specific Languages (DSL)</li>
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
               <h2>Ready to Start Your Java Journey?</h2>
               <p>Enroll now and take the first step towards becoming a Java expert!</p>
               <Link to="/Kt" className="cta-button">Get Started</Link>
            </section>

         </div>
    );
};

export default Kotlin;
