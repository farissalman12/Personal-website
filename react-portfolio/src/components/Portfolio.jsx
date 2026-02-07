import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import { GlowingCard } from './ui/glowing-card';
import { BackButton } from './ui/back-button';

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
            <BackButton onClick={onClose} />
            <div className="container">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredItems.map((item, index) => (
                                        <div className={`single-item ${item.category} h-full`} key={item.id}>
                                            <a 
                                                className="portfolio-item block h-full group" 
                                                href={item.img} 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openLightbox(index);
                                                }}
                                            >
                                                <GlowingCard variant="white" className="h-full transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-background">
                                                    <div className="h-full flex flex-col relative overflow-hidden rounded-xl">
                                                        {/* Image Container with Overlay */}
                                                        <div className="w-full h-48 overflow-hidden relative">
                                                            <img 
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                                                                alt={item.title} 
                                                                src={item.img} 
                                                            />
                                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                                <i className="icon ion-md-expand text-white text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300"></i>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Content */}
                                                        <div className="card-content flex-grow p-5 flex flex-col justify-between">
                                                            <div>
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.category}</span>
                                                                </div>
                                                                <h6 className="card-title text-lg font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h6>
                                                            </div>
                                                            <p className="card-description opacity-70 text-sm line-clamp-3">{item.description}</p>
                                                            
                                                            <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity text-white">
                                                                View Project <i className="icon ion-md-arrow-forward ml-1"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </GlowingCard>
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
