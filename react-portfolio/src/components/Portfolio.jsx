import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";

const Portfolio = ({ isOpen, onClose }) => {
    const [filter, setFilter] = useState('development');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { id: 1, category: 'development', title: 'React Native App', description: 'Cross-platform mobile application for secure messaging.', img: '/img/item-1.jpg' },
        { id: 2, category: 'video-editing', title: 'Cinematic Travel Vlog', description: 'High-energy travel montage with seamless transitions.', img: '/img/item-2.jpg' },
        { id: 3, category: 'development', title: 'E-commerce Website', description: 'Full-stack online store with payment integration.', img: '/img/item-3.jpg' },
        { id: 4, category: 'video-editing', title: 'Tech Review Edit', description: 'Snappy editing for gadget review video.', img: '/img/item-4.jpg' },
        { id: 5, category: 'development', title: 'Portfolio Website', description: 'Personal brand showcase with interactive animations.', img: '/img/item-5.jpg' },
        { id: 6, category: 'video-editing', title: 'Corporate Promo', description: 'Professional business advertisement videos.', img: '/img/item-6.jpg' },
    ];

    const filteredItems = filter === '*' ? items : items.filter(item => item.category === filter);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    }

    const slides = filteredItems.map(item => ({ src: item.img }));

    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    return (
        <motion.div 
            className="lightbox-wrapper" 
            id="portfolio" 
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
                                        <p className="section-description">Showcasing some of my best work</p>
                                        <h2 className="section-title">Portfolio</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Portfolio Section */}
                            <div className="portfolio-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-inline filter-control" role="group" aria-label="Filter Control">
                                            {['development', 'video-editing'].map(cat => (
                                                <li 
                                                    key={cat}
                                                    className={`list-inline-item ${filter === cat ? 'tab-active' : ''}`} 
                                                    onClick={() => setFilter(cat)}
                                                    style={{textTransform: 'capitalize'}}
                                                >
                                                    {cat.replace('-', ' ')}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="portfolio-grid row">
                                    {filteredItems.map((item, index) => (
                                        <div className={`single-item col-6 col-lg-4 ${item.category}`} key={item.id}>
                                            <a 
                                                className="portfolio-item" 
                                                href={item.img} 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openLightbox(index);
                                                }}
                                            >
                                                <div className="portfolio-card">
                                                    <img className="img-fluid" alt="Item" src={item.img} />
                                                    <div className="card-content">
                                                        <h6 className="card-title">{item.title}</h6>
                                                        <span className="card-description">{item.description}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={currentIndex}
                slides={slides}
            />
        </motion.div>
    );
};

export default Portfolio;
