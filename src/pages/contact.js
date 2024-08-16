import React from 'react';

const ContactPage = () => {
  return (
    <div id="contact-us" style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
      <h1>Contact Us</h1>

      <section>
        <h2>We'd Love to Hear From You!</h2>
        <p>
          Whether you have a question about our courses, need assistance, or just want to share your thoughts, we’re here to help. Reach out to us using the information below, and we’ll get back to you as soon as possible.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:support@ulearntech.com">support@ulearntech.com</a><br />
          <strong>Phone:</strong> +256 755 154 227<br />
          <strong>Address:</strong> Kyobe Lane, Kawempe, Kampala, Uganda.<br />
          <strong>Telegram channel:</strong> <a href="https://t.me/youlearntech" target="_blank" rel="noopener noreferrer">t.me/youlearntech</a>
        </p>
      </section>

      <section>
        <h2>Support</h2>
        <p>
          For any technical issues or questions regarding our courses, our support team is ready to assist you. Please email us at <a href="mailto:support@ulearntech.com">support@ulearntech.com</a>, and include as much detail as possible so we can resolve your issue quickly.
        </p>
      </section>

      <section>
        <h2>Business Inquiries</h2>
        <p>
          If you’re interested in partnering with us, or have other business-related inquiries, please reach out to our business development team at <a href="mailto:business@ulearntech.com">business@ulearntech.com</a>.
        </p>
      </section>

      <section>
        <h2>Follow Us</h2>
        <p>
          Stay connected with us on social media to get the latest updates, news, and tips from u-learn tech.
        </p>
        <ul>
          
          <strong>Telegram:</strong> <a href="https://t.me/youlearntech" target="_blank" rel="noopener noreferrer">t.me/youlearntech</a>
        </ul>
      </section>

      <section>
        <h2>Send Us a Message</h2>
        <p>
          If you prefer, you can send us a message directly using the form below. We’ll do our best to respond within 24-48 hours.
        </p>
        <form action="submit" method="post">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
