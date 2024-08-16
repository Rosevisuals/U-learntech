import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import futureAIImage from '../images/future-ai.jpg';
import Header from '../components/Header';

const coursesRecommended = [
  {
    id: 1,
    title: 'Introduction to Python',
    type: 'Python'
  },
  {
    id: 2,
    title: 'HTML and CSS for Beginners',
    type: 'Html'
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    type: 'Javascript'
  },
  {
    id: 4,
    title: 'Introduction to Web Development',
    type: 'WebDevelopment'
  },
  {
    id: 5,
    title: 'Learn to Code with Java',
    type: 'Java'
  },
  {
    id: 6,
    title: 'Mobile App Development',
    type: 'Kotlin'
  },
  {
    id: 7,
    title: 'Learn to Code with PHP',
    type: 'Php'
  },
  {
    id: 8,
    title: 'Learn to Code with C#',
    type: 'C#'
  }
];

const newlyReleasedCourses = [
  {
    id: 6,
    title: 'Data Science',
    type: 'science'
  },
  {
    id: 7,
    title: 'Machine Learning',
    type: 'machine'
  },
  {
    id: 8,
    title: 'UI/UX Design Principles',
    type: 'ux'
  },
  
];

const CourseCard = ({ course }) => {
  let courseLink;
  switch (course.type) {
    case 'Python':
      courseLink = `/Python/${course.id}`;
      break;
    case 'Html':
      courseLink = `/Html/${course.id}`;
      break;
    case 'Javascript':
      courseLink = `/JavaScript/${course.id}`;
      break;
    case 'WebDevelopment':
      courseLink = `/Html/${course.id}`;
      break;
    case 'Java':
      courseLink = `/Java/${course.id}`;
      break;
    case 'Kotlin':
      courseLink = `/Kotlin/${course.id}`;
      break;
    case 'Php':
      courseLink = `/Php/${course.id}`;
      break;
    case 'C#':
      courseLink = `/Csharp/${course.id}`;
      break;
    case 'science':
      courseLink = `/DataScience/${course.id}`;
      break;
    case 'machine':
      courseLink = `/MachineLearning/${course.id}`;
      break;
    case 'ux':
      courseLink = `/UX/${course.id}`;
      break;
    
    default:
      courseLink = `/courses/${course.id}`;
  }

  return (
    <div className="course-cards">
      <div className="course-info">
        <h4>{course.title}</h4>
        <Link to={courseLink} className="view-course-button">View Course</Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <HelmetProvider>
      <div className="courses-page" style={{ backgroundImage: `url(${futureAIImage})` }}>
        <Helmet>
        <title>U-Learn Tech - Master In-Demand Tech Skills Online</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Explore our wide range of in-demand tech courses, including Python, HTML, CSS, JavaScript, and more. Learn from industry experts at U-Learn Tech." />
      <meta name="keywords" content="tech courses, Python, HTML, CSS, JavaScript, web development, data science, machine learning, UI/UX design" />
      <meta name="author" content="U-Learn Tech" />
      <link rel="canonical" href="https://www.u-learntech.com" />

      

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "U-Learn Tech",
          "url": "https://www.u-learntech.com",
          "description": "U-Learn Tech offers comprehensive online courses in various technology fields, including Python, HTML, CSS, JavaScript, web development, data science, machine learning, and UI/UX design.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.u-learntech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
        </Helmet>
        <Header />
        <div className="courses-header">
          <h1 className='explore'>Explore Our Wide Range of In-Demand Tech Courses</h1>
        </div>

        <div className="courses-container">
          <h2 className='you'>Courses Recommended for You</h2>
          <Slider {...settings}>
            {coursesRecommended.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Slider>
        </div>

        <div className="courses-container2">
          <h2 className='you'>Newly Released Courses</h2>
          <Slider {...settings}>
            {newlyReleasedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Slider>
        </div>

        <div className="about-section">
          <h2>About Our Courses</h2>
          <p>
            At U-Learn Tech, we offer a diverse range of courses to help you achieve your career goals.
            Our courses are designed by industry experts and cover the latest technologies and best practices.
          </p>
          <p>
            Whether you're a beginner looking to start a new career or a seasoned professional looking to
            advance your skills, we have something for everyone. Our courses are flexible and can be taken
            at your own pace, allowing you to balance your learning with other commitments.
          </p>
        </div>
        <section className='footer-content'>
          <div className="footer-links">
            <Link to='/help' className="view-course-button">Help</Link>
            <Link to='./faq' className="view-course-button">FAQ</Link>
            <Link to='./privacy' className="view-course-button">Privacy Policy</Link>
          </div>
          <div className="copy">&copy; 2024 U-Learn Tech</div>
          </section>
      </div>
      
  </HelmetProvider>
  );
};

export default Courses;
