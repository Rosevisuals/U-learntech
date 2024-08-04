// src/Contact.js
import React, { useState } from 'react';
import Header from '../components/Header';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <Header />
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Our Office</h2>
                    <p>123 U-Learntech Street</p>
                    <p>Kampala, Uganda</p>
                    <p>Email: info@u-learntech.com</p>
                    <p>Phone: +256 123 456 789</p>
                    <h2>Follow Us</h2>
                    <p>
                        <a href="https://facebook.com/ulearntech">Facebook</a> | 
                        <a href="https://twitter.com/ulearntech">Twitter</a> | 
                        <a href="https://linkedin.com/company/ulearntech">LinkedIn</a>
                    </p>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
