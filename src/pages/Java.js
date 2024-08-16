import React, { useRef, useEffect } from "react";
import { FaChartLine, FaCode, FaLaptopCode, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Java.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Java = () => {
    
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const bankSystemCode = `
public class BankSystem {
    private double balance;

    public BankSystem() {
        this.balance = 0.0;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: " + amount);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds");
        }
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankSystem bankSystem = new BankSystem();
        bankSystem.deposit(500);
        bankSystem.withdraw(200);
        System.out.println("Current Balance: " + bankSystem.getBalance());
    }
}
    `;

    const libraryManagementSystemCode = `
import java.util.ArrayList;
import java.util.List;

class Book {
    private String title;
    private String author;
    private boolean isAvailable;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    public String getTitle() {
        return title;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}

class Library {
    private List<Book> books;

    public Library() {
        books = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public void borrowBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title) && book.isAvailable()) {
                book.setAvailable(false);
                System.out.println("Borrowed: " + title);
                return;
            }
        }
        System.out.println("Book not available");
    }

    public void returnBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title) && !book.isAvailable()) {
                book.setAvailable(true);
                System.out.println("Returned: " + title);
                return;
            }
        }
        System.out.println("Book not recognized");
    }
}

public class LibraryManagementSystem {
    public static void main(String[] args) {
        Library library = new Library();
        Book book1 = new Book("1984", "George Orwell");
        Book book2 = new Book("To Kill a Mockingbird", "Harper Lee");

        library.addBook(book1);
        library.addBook(book2);

        library.borrowBook("1984");
        library.returnBook("1984");
    }
}
    `;

    const studentManagementSystemCode = `
import java.util.ArrayList;
import java.util.List;

class Student {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}

public class StudentManagementSystem {
    private List<Student> students;

    public StudentManagementSystem() {
        students = new ArrayList<>();
    }

    public void addStudent(String name, int grade) {
        students.add(new Student(name, grade));
    }

    public void updateGrade(String name, int newGrade) {
        for (Student student : students) {
            if (student.getName().equalsIgnoreCase(name)) {
                student.setGrade(newGrade);
                System.out.println("Updated grade for " + name);
                return;
            }
        }
        System.out.println("Student not found");
    }

    public void displayStudents() {
        for (Student student : students) {
            System.out.println("Name: " + student.getName() + ", Grade: " + student.getGrade());
        }
    }

    public static void main(String[] args) {
        StudentManagementSystem sms = new StudentManagementSystem();
        sms.addStudent("Alice", 85);
        sms.addStudent("Bob", 90);

        sms.displayStudents();

        sms.updateGrade("Alice", 95);
        sms.displayStudents();
    }
}
    `;

    const inventoryManagementSystemCode = `
import java.util.ArrayList;
import java.util.List;

class Product {
    private String name;
    private int quantity;

    public Product(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

public class InventoryManagementSystem {
    private List<Product> products;

    public InventoryManagementSystem() {
        products = new ArrayList<>();
    }

    public void addProduct(String name, int quantity) {
        products.add(new Product(name, quantity));
    }

    public void updateQuantity(String name, int newQuantity) {
        for (Product product : products) {
            if (product.getName().equalsIgnoreCase(name)) {
                product.setQuantity(newQuantity);
                System.out.println("Updated quantity for " + name);
                return;
            }
        }
        System.out.println("Product not found");
    }

    public void displayProducts() {
        for (Product product : products) {
            System.out.println("Product: " + product.getName() + ", Quantity: " + product.getQuantity());
        }
    }

    public static void main(String[] args) {
        InventoryManagementSystem ims = new InventoryManagementSystem();
        ims.addProduct("Laptop", 10);
        ims.addProduct("Phone", 20);

        ims.displayProducts();

        ims.updateQuantity("Laptop", 15);
        ims.displayProducts();
    }
}
    `;

    const chatApplicationCode = `
import java.util.ArrayList;
import java.util.List;

class Message {
    private String sender;
    private String content;

    public Message(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public String getContent() {
        return content;
    }
}

class ChatRoom {
    private List<Message> messages;

    public ChatRoom() {
        messages = new ArrayList<>();
    }

    public void addMessage(String sender, String content) {
        messages.add(new Message(sender, content));
        System.out.println(sender + ": " + content);
    }

    public void displayMessages() {
        for (Message message : messages) {
            System.out.println(message.getSender() + ": " + message.getContent());
        }
    }
}

public class ChatApplication {
    public static void main(String[] args) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.addMessage("Alice", "Hi there!");
        chatRoom.addMessage("Bob", "Hello!");
        chatRoom.displayMessages();
    }
}
    `;

    const projects = [
        {
            title: 'Bank System',
            description: 'Build a simple bank system to manage deposits and withdrawals.',
            code: bankSystemCode
        },
        {
            title: 'Library Management System',
            description: 'Create a system to manage books, members, and transactions in a library.',
            code: libraryManagementSystemCode
        },
        {
            title: 'Student Management System',
            description: 'Develop a system to manage student information and grades.',
            code: studentManagementSystemCode
        },
        {
            title: 'Inventory Management System',
            description: 'Build a system to manage product inventory.',
            code: inventoryManagementSystemCode
        },
        {
            title: 'Chat Application',
            description: 'Create a simple chat application to send and display messages.',
            code: chatApplicationCode
        }
    ];

    return(
        <HelmetProvider>
        <div className="java-page">
            <Helmet>
            <title>Master Java Programming - From Basics to Advanced | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn Java programming from fundamentals to advanced concepts. Develop robust, scalable applications with our comprehensive Java course at U-Learn Tech." />
      <meta name="keywords" content="Java, Object-Oriented Programming, JVM, Spring Framework, Android Development, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/java-programming" />
      <meta name="twitter:title" content="Master Java Programming - From Basics to Advanced | U-Learn Tech" />
      <meta name="twitter:description" content="Learn Java programming from fundamentals to advanced concepts. Develop robust, scalable applications with our comprehensive Java course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/java-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master Java Programming - From Basics to Advanced",
          "description": "Learn Java programming from fundamentals to advanced concepts. Develop robust, scalable applications with our comprehensive Java course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/java-programming",
          "courseCode": "JAVA101",
          "educationalLevel": "Beginner to Advanced",
          "programmingLanguage": "Java",
          "teaches": [
            "Java Syntax", 
            "Object-Oriented Programming", 
            "Java Virtual Machine (JVM)", 
            "Collections Framework", 
            "Multithreading",
            "Spring Framework",
            "Android Development Basics"
          ],
          "occupationalCategory": "Software Developer"
        })}
      </script>
            </Helmet>
            <Header />
            <div className="hero-section">
                <h1>Java Mastery</h1>
                <p>Become a Java developer by completing a variety of projects.</p>
                <Link to="/Jv" className="cta-button">Get Started</Link>
            </div>
            
            <section className="course-overview" ref={courseOverviewRef}>
                <h2>Course Overview</h2>
                <p>This comprehensive Java course will take you from a beginner to an advanced level.</p>
            </section>

            <section className="why-java">
                <h2>Why Learn Java</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaCode />, title: "Versatile Language", description: "Java is used in web development, mobile applications, enterprise applications, and more." },
                        { icon: <FaLaptopCode />, title: "Platform Independence", description: "Java is platform-independent, meaning you can run it on any device with a Java Virtual Machine (JVM)." },
                        { icon: <FaChartLine />, title: "High Demand", description: "Java developers are in high demand all over the world." }
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
                        <h3>Java Basics</h3>
                        <ul>
                            <li>Introduction to Java</li>
                            <li>Variables and Data Types</li>
                            <li>Operators and Expressions</li>
                            <li>Control Flow Statements</li>
                            <li>Object-Oriented Programming</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Advanced Java</h3>
                        <ul>
                            <li>Exception Handling</li>
                            <li>Collections Framework</li>
                            <li>File I/O</li>
                            <li>Concurrency</li>
                            <li>Networking</li>
                        </ul>
                    </div>
                    <div className="module">
                        <h3>Java Frameworks</h3>
                        <ul>
                            <li>Spring Framework</li>
                            <li>Hibernate</li>
                            <li>JavaServer Faces (JSF)</li>
                            <li>Apache Struts</li>
                            <li>Microservices with Spring Boot</li>
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
               <Link to="/Jv" className="cta-button">Get Started</Link>
            </section>

        </div>
    </HelmetProvider>
    );
};

export default Java;
