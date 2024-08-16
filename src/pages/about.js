import React from 'react';
import Header from '../components/Header';

const AboutUsPage = () => {
  return (
    
    <div id="about-us" style={{ padding: '80px', maxWidth: '900px', margin: 'auto' }}>
        <Header />
      <h1>About Us</h1>

      <section>
        <h2>Our Mission</h2>
        <p>
          At u-learn tech, our mission is to empower individuals with the knowledge and skills they need to thrive in the ever-evolving tech industry. We believe that education should be accessible, practical, and transformative. Whether you are just beginning your journey or looking to advance your career, u-learn tech is here to guide you every step of the way.
        </p>
      </section>

      <section>
        <h2>Who We Are</h2>
        <p>
          u-learn tech is a team of passionate educators, industry professionals, and technology enthusiasts who are dedicated to making tech education accessible to everyone. We come from diverse backgrounds but share a common goal: to create a learning environment that is engaging, supportive, and impactful.
        </p>
        <p>
          Our courses are designed by experts who have hands-on experience in the field, ensuring that you receive up-to-date and relevant knowledge. We are committed to providing high-quality content that is both practical and applicable in real-world scenarios.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>
        <p>
          u-learn tech offers a wide range of courses that cover various aspects of technology, including web development, mobile app development, data science, artificial intelligence, and more. Our courses are structured to provide a balance between theory and practice, allowing you to gain both foundational knowledge and hands-on experience.
        </p>
        <p>
          We also provide resources like code snippets, project templates, and a supportive community where you can connect with other learners, share ideas, and seek help when needed.
        </p>
      </section>

      <section>
        <h2>Our Approach</h2>
        <p>
          We understand that learning is a personal journey, which is why we focus on creating a flexible and adaptive learning environment. Our courses are self-paced, allowing you to learn at your convenience. We also offer interactive exercises, quizzes, and projects that reinforce your learning and help you build a strong portfolio.
        </p>
        <p>
          We are continuously improving our platform and expanding our course offerings to keep pace with the latest industry trends and technologies. Your success is our priority, and we are here to support you every step of the way.
        </p>
      </section>

      <section>
        <h2>Join Us</h2>
        <p>
          Whether you're a beginner eager to explore the world of technology or a seasoned professional looking to upgrade your skills, u-learn tech is the right place for you. Join our community today and take the next step in your learning journey. Together, we can unlock your potential and shape the future of technology.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have any questions or want to learn more about us? Feel free to reach out to us at <a href="mailto:support@ulearntech.com">support@ulearntech.com</a>. We’re here to help you with any queries you may have.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
