import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Courses.css';
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
    type:'Php'
  },
  {
    id:8,
    title:'Learn to Code with C#',
    type:'C#'
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
  {
    id: 9,
    title:'Tensor Flow',
    type:'tensor'
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
      courseLink = `/UIUX/${course.id}`;
      break;
    case 'tensor':
      courseLink = `/TensorFlow/${course.id}`;
      break;
    default:
      courseLink = `/courses/${course.id}`;
  }

  return (
    <div className="course-cards">
      <div className="course-info">
        <h4>{course.title}</h4>
        <div className="course-buttons">
          <Link to={courseLink} className="view-course-button">View Course</Link>
        </div>
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
    <div className="courses-page" style={{ backgroundImage: `url(${futureAIImage})` }}>
      <Header />
      <div className="courses-header">
        <h1>Explore Our Wide Range of In-Demand Tech Courses</h1>
      </div>

      <div className="courses-container">
        <h2>Courses Recommended for You</h2>
        <Slider {...settings}>
          {coursesRecommended.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Slider>
      </div>

      <div className="courses-container2">
        <h2>Newly Released Courses</h2>
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
    </div>
  );
};

export default Courses;
