// src/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogList = ({ posts }) => {
    return (
        <div className="blog-list">
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id} className="blog-post">
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
