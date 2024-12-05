import React from 'react';
import { Link } from 'react-router-dom';
import './Blogpage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      date: 'August 20, 2024',
      description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.',
    },
    {
      id: 2,
      title: 'Understanding React Hooks',
      date: 'August 18, 2024',
      description: 'Dive deep into React hooks and how they can simplify your code.',
    },
    {
      id: 3,
      title: 'Getting Started with Data Science',
      date: 'August 15, 2024',
      description: 'An introduction to data science concepts and tools for beginners.',
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-page">
        <Header />
      <h1 className="blog-title">U-Learn Tech Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2 className="blog-post-title">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-description">{post.description}</p>
            <Link to='/Css' className="read-more-link">Read More</Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
