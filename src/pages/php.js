import React, { useRef, useEffect } from "react";
import { FaChartLine, FaCode, FaLaptopCode, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './php.css'; // Ensure you create this CSS file
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadOnlyCodeSnippet from "../components/ReadOnlyCodeSnippet";

const Php = () => {
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
            title: 'Simple Login System',
            description: 'A basic login system with user authentication.',
            code: `<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Mock user credentials
    $validUsername = "user";
    $validPassword = "password";

    if ($username === $validUsername && $password === $validPassword) {
        $_SESSION["loggedin"] = true;
        header("Location: welcome.php");
        exit;
    } else {
        echo "Invalid username or password";
    }
}
?>
<form method="POST" action="">
    Username: <input type="text" name="username" required>
    Password: <input type="password" name="password" required>
    <button type="submit">Login</button>
</form>`
        },
        {
            title: 'CRUD Operations',
            description: 'Create, Read, Update, and Delete operations using PHP and MySQL.',
            code: `<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["create"])) {
    $name = $_POST["name"];
    $sql = "INSERT INTO users (name) VALUES ('$name')";
    $conn->query($sql);
}

// Read
$sql = "SELECT id, name FROM users";
$result = $conn->query($sql);

// Update
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $sql = "UPDATE users SET name='$name' WHERE id=$id";
    $conn->query($sql);
}

// Delete
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    $id = $_POST["id"];
    $sql = "DELETE FROM users WHERE id=$id";
    $conn->query($sql);
}
?>

<form method="POST" action="">
    <input type="text" name="name" placeholder="Name" required>
    <button type="submit" name="create">Create</button>
</form>

<?php if ($result->num_rows > 0): ?>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo $row["id"]; ?></td>
                <td><?php echo $row["name"]; ?></td>
                <td>
                    <form method="POST" action="" style="display:inline;">
                        <input type="hidden" name="id" value="<?php echo $row["id"]; ?>">
                        <input type="text" name="name" value="<?php echo $row["name"]; ?>" required>
                        <button type="submit" name="update">Update</button>
                    </form>
                    <form method="POST" action="" style="display:inline;">
                        <input type="hidden" name="id" value="<?php echo $row["id"]; ?>">
                        <button type="submit" name="delete">Delete</button>
                    </form>
                </td>
            </tr>
        <?php endwhile; ?>
    </table>
<?php else: ?>
    <p>No records found</p>
<?php endif; ?>
`
        },
        {
            title: 'File Upload System',
            description: 'A simple file upload system using PHP.',
            code: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["fileToUpload"])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename($_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

<form action="" method="post" enctype="multipart/form-data">
    Select file to upload:
    <input type="file" name="fileToUpload" id="fileToUpload" required>
    <button type="submit">Upload File</button>
</form>`
        },
    ];

    return (
        <HelmetProvider>
            <div className="php-page">
                <Helmet>
                <title>Master PHP Programming - Web Development and Server-Side Scripting | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course at U-Learn Tech." />
      <meta name="keywords" content="PHP, Web Development, Server-Side Scripting, MySQL, Laravel, WordPress, RESTful APIs, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/php-programming" />
      <meta name="twitter:title" content="Master PHP Programming - Web Development and Server-Side Scripting | U-Learn Tech" />
      <meta name="twitter:description" content="Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/php-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master PHP Programming - Web Development and Server-Side Scripting",
          "description": "Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/php-programming",
          "courseCode": "PHP101",
          "educationalLevel": "Beginner to Advanced",
          "programmingLanguage": "PHP",
          "teaches": [
            "PHP Fundamentals",
            "Object-Oriented Programming in PHP",
            "MySQL Database Integration",
            "PHP Data Objects (PDO)",
            "PHP Security Best Practices",
            "RESTful API Development with PHP",
            "Laravel Framework Basics",
            "WordPress Theme and Plugin Development",
            "PHP Performance Optimization",
            "Modern PHP Features and Standards"
          ],
          "occupationalCategory": "Web Developer, Backend Developer, Full Stack Developer"
        })}
      </script>
                </Helmet>
                <Header />
                <div className="hero-section">
                    <h1>PHP Mastery</h1>
                    <p>Become a PHP developer by completing a variety of projects.</p>
                    <Link to="/ph" className="cta-button">Get Started</Link>
                </div>

                <section className="course-overview" ref={courseOverviewRef}>
                    <h2>Course Overview</h2>
                    <p>This comprehensive PHP course will take you from a beginner to an advanced level.</p>
                    <p>Equipping you with the skills to build robust and efficient web applications.</p>
                    <h3>Who This Course Is For</h3>
                    <p>This course is designed for:</p>
                    <p>Beginners with basic programming knowledge</p>
                    <p>Web developers looking to expand their backend skills</p>
                    <p>Developers interested in server-side programming</p>
                    <p>Anyone looking to build dynamic websites</p>
                </section>

                <section className="why-php" ref={whyUlearnTechRef}>
                    <h2>Why Learn PHP</h2>
                    <div className="reasons-grid">
                        {[
                            { icon: <FaCode />, title: "Widely Used", description: "PHP is a popular language for web development." },
                            { icon: <FaLaptopCode />, title: "Server-Side Scripting", description: "PHP is designed for server-side scripting, making it a great choice for backend development." },
                            { icon: <FaChartLine />, title: "High Demand", description: "PHP developers are in high demand, especially for web development projects." }
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
                            <h3>PHP Basics</h3>
                            <ul>
                                <li>Introduction to PHP</li>
                                <li>Variables and Data Types</li>
                                <li>Operators and Expressions</li>
                                <li>Control Flow Statements</li>
                                <li>Functions and Arrays</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>Advanced PHP</h3>
                            <ul>
                                <li>Object-Oriented Programming</li>
                                <li>Exception Handling</li>
                                <li>File Handling</li>
                                <li>Sessions and Cookies</li>
                                <li>Security Practices</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>PHP Frameworks</h3>
                            <ul>
                                <li>Laravel Framework</li>
                                <li>Symfony Framework</li>
                                <li>CodeIgniter Framework</li>
                                <li>Yii Framework</li>
                                <li>Zend Framework</li>
                            </ul>
                        </div>
                        <div className="module">
                            <h3>Other Important Areas</h3>
                            <ul>
                                <li>PHP Standard Library</li>
                                <li>RESTful APIs</li>
                                <li>Testing with PHPUnit</li>
                                <li>PHP and MySQL</li>
                                <li>Web Services</li>
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
                   <h2>Ready to Start Your PHP Journey?</h2>
                   <p>Enroll now and take the first step towards becoming a PHP expert!</p>
                   <Link to="/ph" className="cta-button">Get Started</Link>
                </section>

            </div>
        </HelmetProvider>
    );
};

export default Php;
