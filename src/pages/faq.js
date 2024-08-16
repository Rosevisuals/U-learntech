import React from 'react';

const FAQPage = () => {
  return (
    <div id="faq-page" style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
      <h1>Frequently Asked Questions (FAQs)</h1>

      <section>
        <h2>General Questions</h2>
        <h3>1. What is u-learn tech?</h3>
        <p>
          u-learn tech is an online learning platform that offers a wide range of IT and tech-related courses, from web development to advanced machine learning. Our goal is to empower individuals with the skills needed to succeed in the tech industry.
        </p>

        <h3>2. How do I sign up for u-learn tech?</h3>
        <p>
          Signing up is easy! Simply click on the "Sign Up" button at the top right corner of our homepage, fill in your details, and you're ready to start learning.
        </p>

        <h3>3. Is u-learn tech free to use?</h3>
        <p>
          We offer both free and paid courses. While some of our content is accessible for free, premium courses with advanced features and certifications require a subscription or one-time payment.
        </p>
      </section>

      <section>
        <h2>Courses and Learning</h2>
        <h3>1. How do I enroll in a course?</h3>
        <p>
          To enroll in a course, simply browse our course catalog, select the course you’re interested in, and click the "Enroll Now" button. If the course requires payment, you will be guided through the checkout process.
        </p>

        <h3>2. Can I access the courses on mobile devices?</h3>
        <p>
          Yes! Our platform is fully responsive, meaning you can access all courses and content on your mobile device, whether you're at home or on the go.
        </p>

        <h3>3. How long do I have access to a course?</h3>
        <p>
          Once you enroll in a course, you will have lifetime access to the content. This allows you to learn at your own pace without any time constraints.
        </p>
      </section>

      <section>
        <h2>Support and Assistance</h2>
        <h3>1. What should I do if I forget my password?</h3>
        <p>
          If you forget your password, click on the "Forgot Password" link on the login page. You will receive an email with instructions on how to reset your password.
        </p>

        <h3>2. How can I contact support?</h3>
        <p>
          You can reach our support team by emailing <a href="mailto:support@ulearntech.com">support@ulearntech.com</a> or by using the live chat feature available on our website. We are here to help you with any issues or questions you may have.
        </p>

        <h3>3. Can I get a refund for a course?</h3>
        <p>
          We offer a 14-day refund policy for our paid courses. If you are not satisfied with your purchase, please contact our support team within 14 days of your purchase, and we will process your refund.
        </p>
      </section>

      <section>
        <h2>Technical Questions</h2>
        <h3>1. What are the system requirements to use u-learn tech?</h3>
        <p>
          u-learn tech is a web-based platform, so all you need is a modern web browser (like Chrome, Firefox, or Safari) and a stable internet connection. Some courses may have specific software requirements, which will be listed on the course page.
        </p>

        <h3>2. How do I report a technical issue?</h3>
        <p>
          If you encounter a technical issue, please contact our support team via email or live chat. Provide as much detail as possible, including screenshots if applicable, to help us resolve the issue quickly.
        </p>

        <h3>3. How can I provide feedback on a course?</h3>
        <p>
          We value your feedback! After completing a course, you will have the opportunity to rate and review it. Your feedback helps us improve our content and serve you better.
        </p>
      </section>
    </div>
  );
};

export default FAQPage;
