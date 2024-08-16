import React from 'react';
import './help.css';

const Help= () => {
  return (
    <div id="help-support">
      <h1>Help & Support</h1>

      <section id="welcome">
        <h2>Welcome to u-learn tech Help Center</h2>
        <p>
          At u-learn tech, we're committed to empowering you with the skills and knowledge to succeed in the tech industry. Whether you're a beginner just starting your journey or an experienced developer looking to expand your expertise, we're here to support you every step of the way.
        </p>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <h3>1. Exploring Our Courses</h3>
        <p>
          Browse through our wide range of IT tech courses, covering topics from web development to advanced machine learning. Each course is structured to provide both theoretical knowledge and practical application, ensuring you can confidently apply what you learn.
        </p>

        <h3>2. Understanding Course Content</h3>
        <p>
          Our courses are divided into modules that include comprehensive lessons, quizzes, and practical exercises. You'll find code snippets and examples throughout the lessons to help you understand the concepts in real-world scenarios.
        </p>

        <h3>3. Using Code Snippets</h3>
        <p>
          Throughout our courses, you'll encounter code snippets that demonstrate how to implement specific functionalities or solve problems. You can copy these snippets directly into your development environment to test and modify as you learn.
        </p>
      </section>

      <section id="faqs">
        <h2>Frequently Asked Questions (FAQs)</h2>

        <h3>1. How do I enroll in a course?</h3>
        <p>
          Simply navigate to the course you’re interested in and click the "Enroll Now" button. If you’re new to u-learn tech, you’ll need to create an account first.
        </p>

        <h3>2. Can I access the courses on mobile?</h3>
        <p>
          Yes! Our platform is fully responsive, so you can access all content on your mobile device, whether you're at home or on the go.
        </p>

        <h3>3. How do I get support during a course?</h3>
        <p>
          If you need help while taking a course, you can reach out to our support team by clicking on the "Contact Support" button found in the course dashboard. Additionally, you can join our community forums where you can ask questions, share knowledge, and connect with other learners.
        </p>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>

        <h3>1. I’m having trouble accessing a course.</h3>
        <p>
          Ensure that you are logged in to your account. Check your internet connection and try refreshing the page. If the problem persists, contact our support team for further assistance.
        </p>

        <h3>2. The code snippets aren't working as expected.</h3>
        <p>
          Make sure you are copying the entire snippet without any missing parts. Verify that you have the correct environment set up as required by the course (e.g., the right programming language version or libraries installed). If you’re still encountering issues, you can post your question on our forums or contact a course instructor directly.
        </p>
      </section>

      <section id="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><strong>Community Forums:</strong> Engage with other learners and share knowledge. Our forums are a great place to ask questions, offer advice, and learn from others in the community.</li>
          <li><strong>Documentation:</strong> Access detailed documentation for each course, including setup guides, additional readings, and references to external resources.</li>
          <li><strong>Blog:</strong> Stay up-to-date with the latest trends in tech, tips and tricks, and success stories from our learners.</li>
        </ul>
      </section>

      <section id="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you can't find the answer you're looking for, our support team is here to help. Contact us via email at <a href="mailto:support@ulearntech.com">support@ulearntech.com</a>, or use the live chat feature available on our website.
        </p>
      </section>
    </div>
  );
};

export default Help;
