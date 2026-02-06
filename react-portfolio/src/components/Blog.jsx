import React from 'react';
import { motion } from 'framer-motion';

const Blog = ({ isOpen, onClose }) => {
    const posts = [
        { title: 'Top tools for Photographers', date: '11 Dec, 20', img: '/img/post-1.jpg' },
        { title: 'Take a tour of my office', date: '12 Aug, 20', img: '/img/post-2.jpg' },
        { title: 'How i became a Web Designer', date: '4 Feb, 20', img: '/img/post-3.jpg' },
        { title: 'How to improve work performance', date: '11 Dec, 19', img: '/img/post-4.jpg' },
        { title: 'How to work from home', date: '15 Nov, 19', img: '/img/post-5.jpg' },
        { title: 'How to enjoy your business trip', date: '8 Aug, 19', img: '/img/post-6.jpg' },
    ];

    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    return (
        <motion.div 
            className="lightbox-wrapper" 
            id="blog" 
            variants={variants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, overflowY: 'auto' }}
        >
            <div className="container">
                <div className="lightbox-close">
                    <div className="close-btn" onClick={onClose}>
                        <span className="btn-line"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="lightbox-content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading page-heading">
                                        <p className="section-description">Check out my latest blog posts</p>
                                        <h2 className="section-title">My Blog</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-section single-section">
                                <div className="row justify-content-center">
                                    {posts.map((post, i) => (
                                        <div className="col-12 col-sm-8 col-lg-4" key={i}>
                                            <div className="card single-post">
                                                <a className="post-img" href="#0" onClick={(e) => e.preventDefault()}>
                                                    <img className="card-img-top" src={post.img} alt="Blog post" />
                                                    <span className="content-date">{post.date}</span>
                                                </a>
                                                <div className="card-body post-content">
                                                    <a href="#0" onClick={(e) => e.preventDefault()}>
                                                        <h5 className="card-title content-title">{post.title}</h5>
                                                    </a>
                                                    <p className="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;
