import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaRocket, FaGraduationCap, FaBriefcase, FaUsers, FaLaptopCode, FaChartLine,  FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/pagination';
import Header from '../components/Header';


import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Accelerated Learning",
      description: "Fast-track your tech skills with our cutting-edge, immersive programs designed for rapid proficiency",
    },
    {
      icon: <FaGraduationCap />,
      title: "Industry-Leading Instructors",
      description: "Learn from seasoned professionals who have shaped the tech landscape and stay ahead of industry trends",
    },
    {
      icon: <FaBriefcase />,
      title: "Career-Defining Skills",
      description: "Master in-demand technologies and soft skills that will set you apart in today's competitive job market",
    },
    {
      icon: <FaUsers />,
      title: "Vibrant Learning Ecosystem",
      description: "Immerse yourself in a diverse community of innovators, mentors, and lifelong learners",
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-On Projects",
      description: "Build an impressive portfolio with real-world projects that showcase your newly acquired skills",
    },
    {
      icon: <FaChartLine />,
      title: "Personalized Growth Tracking",
      description: "Monitor your progress with advanced analytics and tailored feedback to optimize your learning journey",
    }
  ];

  return (
    <HelmetProvider>
    <div className="home-page">
      <Helmet>
        <title>U-Learn Tech - Unlock Your Tech Potential</title>
        <meta name="description" content="Discover cutting-edge tech courses designed to launch your tech career. Learn from industry-leading instructors, work on hands-on projects, and join a vibrant learning community." />
        <meta name="keywords" content="tech courses, accelerated learning, industry-leading instructors, hands-on projects, tech career, U-Learn Tech" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "U-Learn Tech",
              "url": "http://www.u-learntech.com",
              "logo": "http://www.u-learntech.com/logo.png",
              "sameAs": [
                "http://www.facebook.com/u-learntech",
                "http://www.twitter.com/u-learntech",
              ]
            }
          `}
        </script>
      </Helmet>

      <Header />
      <div className="main-contents">
        <header className="hero">
          <div className="hero-content">
            <h1 className='unlock'>Unlock Your Tech Potential with U-Learn</h1>
            <p>Discover cutting-edge courses designed to launch your tech career</p>
            <Link to="/Courses" className="cta-button">Explore Courses</Link>
          </div>
          <div className="hero-image">
            <img src="image/study-group-african-people.jpg" alt="Students learning tech" />
          </div>
        </header>

        <main>
          <section className="features-carousel">
            <h2 className="section-title">Why Choose Us?</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="feature-item" style={{ '--feature-index': index }}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="featured-courses">
            <h2 className='section-title'>Top-Rated Courses</h2>
            <div className="course-grid">
              {[
                {
                  title: 'Full-Stack Web Development',
                  description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.',
                  duration: '24 weeks',
                  level: 'Beginner to Advanced',
                  studentsEnrolled: 15000,
                  image: 'image/study-group-african-people.jpg'
                },
                {
                  title: 'Data Science & Analytics',
                  description: 'Learn Python, SQL, data visualization, machine learning, and statistical analysis for data-driven insights.',
                  duration: '20 weeks',
                  level: 'Intermediate',
                  studentsEnrolled: 12000,
                  image: 'image/study-group-african-people.jpg'
                },
                {
                  title: 'Mobile App Development',
                  description: 'Create iOS and Android apps using React Native and Flutter. Cover UI/UX design principles and app deployment.',
                  duration: '16 weeks',
                  level: 'Intermediate to Advanced',
                  studentsEnrolled: 9000,
                  image: 'image/study-group-african-people.jpg'
                },
                {
                  title: 'Machine Learning & AI',
                  description: 'Explore neural networks, deep learning, NLP, and computer vision using TensorFlow and PyTorch.',
                  duration: '22 weeks',
                  level: 'Advanced',
                  studentsEnrolled: 7500,
                  image: 'image/study-group-african-people.jpg'
                }
              ].map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-content">
                    <h3 className='course-title'>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-details">
                      <span className="course-duration"><i className="fas fa-clock"></i> {course.duration}</span>
                      <span className="course-level"><i className="fas fa-signal"></i> {course.level}</span>
                    </div>
                    {/*<Link to={`/science/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="cta-button">
                      Learn More
                      <FaArrowRight className="feature-icons" />
              </Link>*/}
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-courses">
              <Link to="/courses" className="view-all-button">View All Courses</Link>
            </div>
          </section>

          <section className="testimonials">
            <h2 className="section-title">What Our Students Say</h2>
            <div className="testimonial-carousel">
              {[
                {
                  name: "Sarah J.",
                  role: "Software Engineer",
                  quote: "U-Learn Tech transformed my career. I landed my dream job as a full-stack developer!",
                  journey: "I started with zero coding knowledge. The courses were well-structured, and the instructors were very supportive. The hands-on projects helped me build a strong portfolio. Within a month of graduating, I received multiple job offers.",
                  courseLink: "/courses/full-stack-web-development",
                  courseTitle: "Full-Stack Web Development",
                  icon: <FaLaptopCode />
                },
                {
                  name: "John D.",
                  role: "Web Developer",
                  quote: "The instructors at U-Learn Tech are amazing. They provided great insights and practical advice.",
                  journey: "Coming from a non-tech background, I found the bootcamp challenging but rewarding. The learning environment was very motivating, and the career support was invaluable. I’m now working as a web developer and loving every bit of it.",
                  courseLink: "/courses/web-development",
                  courseTitle: "Web Development",
                  icon: <FaGraduationCap />
                }
              ].map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <div className="testimonial-icon">{testimonial.icon}</div>
                  <p className="quote"><FaQuoteLeft /> {testimonial.quote} <FaQuoteRight /></p>
                  <cite>- {testimonial.name}, {testimonial.role}</cite>
                  <p className="journey">{testimonial.journey}</p>
                  <Link to="/Css" className="course-link">
                    Learn more about the {testimonial.courseTitle} course
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="learning-path">
            <h2>Your Path to Success</h2>
            <div className="path-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3 className='choose'>Choose Your Course</h3>
                <p>Select from our wide range of tech courses</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3 className='choose'>Learn at Your Pace</h3>
                <p>Access course materials anytime, anywhere</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3 className='choose'>Practice with Projects</h3>
                <p>Apply your skills to real-world scenarios</p>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <div className="container">
              <h2 className="section-title">Latest from Our Blog</h2>
              <div className="blog-grid">
                <article className="blog-card">
                  <div className="blog-card-image">
                    <img src="image/data scientist.jpg" alt="Blog post 1" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">The Future of AI in Education</h3>
                    <p className="blog-card-excerpt">Explore how artificial intelligence is revolutionizing the way we learn and teach...</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">July 13, 2024</span>
                      <span className="blog-card-author">By Admin</span>
                    </div>
                    <Link to="/Blog" className="blog-card-link">Read More</Link>
                  </div>
                </article>

                <article className="blog-card">
                  <div className="blog-card-image">
                    <img src="image/data scientist.jpg" alt="Blog post 2" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">5 Essential Skills for Data Scientists in 2024</h3>
                    <p className="blog-card-excerpt">Stay ahead of the curve with these must-have skills for aspiring data scientists...</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">July 13, 2024</span>
                      <span className="blog-card-author">By Admin</span>
                    </div>
                    <Link to="/Blog" className="blog-card-link">Read More</Link>
                  </div>
                </article>

                <article className="blog-card">
                  <div className="blog-card-image">
                    <img src="image/remote worker.jpg" alt="Blog post 3" />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">The Rise of Remote Work in Tech</h3>
                    <p className="blog-card-excerpt">Discover how the tech industry is adapting to the new normal of remote work...</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">July 13, 2024</span>
                      <span className="blog-card-author">By Admin</span>
                    </div>
                    <Link to="/Blog" className="blog-card-link">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="blog-cta">
                <Link to="/Blog" className="view-all-button">View all posts</Link>
              </div>
            </div>
          </section>

          <section className="cta">
            <h2>Ready to Start Your Tech Journey?</h2>
            <p>Join thousands of successful graduates who have transformed their careers with U-Learn Tech</p>
            <Link to="/signup" className="cta-button">Enroll Now</Link>
          </section>
          
          <div className='footer-content'>
          <div className="footer-links">
            <Link to='/help' className="view-course-button">Help</Link>
            <Link to='/faq' className="view-course-button">FAQ</Link>
            <Link to='/privacy' className="view-course-button">Privacy Policy</Link>
          </div>
          <div className="copy">&copy; 2024 U-Learn Tech</div>
          </div >
        </main>
      </div>
    </div>  
  </HelmetProvider>
  );
};

export default Home;
