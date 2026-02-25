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
        { id: 1, category: 'development', title: 'Shop360 FYP', description: 'Full-stack e-commerce platform built with React and Node.js.', img: '/img/Shop360.jpeg', link: 'https://github.com/farissalman12/Shop360', techStack: ['React Native', 'Firebase', 'ViroReact AR', 'TypeScript'] },
        { id: 2, category: 'development', title: 'Qataar Board Game', description: 'Traditional Hunza board game implemented for the web.', img: '/img/Qataar.png', link: 'https://farissalman12.github.io/QataarHunzaBoardGame/', techStack: ['React', 'Tailwind', 'Framer Motion'] },
        { id: 3, category: 'development', title: 'PhishGuard', description: 'A phishing detection tool to enhance cybersecurity.', img: '/img/PhishGuard.png', link: 'https://github.com/farissalman12/PhisingDetectionTool', techStack: ['React', 'NestJS', 'PostgreSQL', 'Prisma'] },
        { id: 4, category: 'development', title: 'Burushaski Number Converter', description: 'Utility to translate numbers into the Burushaski language.', img: '/img/Buruashki Number Translator.png', link: 'https://github.com/farissalman12/burushashki-number-converter', techStack: ['JavaScript', 'HTML/CSS'] },
        { id: 5, category: 'video-graphics', title: 'Cinematic Travel Vlog', description: 'High-energy travel montage with seamless transitions.', img: '/img/item-2.jpg', techStack: ['Premiere Pro'] },
        { id: 6, category: 'video-graphics', title: 'Corporate Promo', description: 'Professional business advertisement videos.', img: '/img/item-6.jpg', techStack: ['Premiere Pro', 'After Effects'] },
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
                                            {['development', 'video-graphics'].map(cat => (
                                                <li 
                                                    key={cat}
                                                    className={`list-inline-item ${filter === cat ? 'tab-active' : ''}`} 
                                                    onClick={() => setFilter(cat)}
                                                    style={{textTransform: 'capitalize'}}
                                                >
                                                    {cat === 'video-graphics' ? 'Video/Graphics' : cat.replace('-', ' ')}
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
                                                href={item.link || item.img} 
                                                target={item.link ? "_blank" : "_self"}
                                                rel={item.link ? "noopener noreferrer" : ""}
                                                onClick={(e) => {
                                                    if (!item.link) {
                                                        e.preventDefault();
                                                        openLightbox(index);
                                                    }
                                                }}
                                            >
                                                <GlowingCard variant="white" className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl bg-background flex flex-col overflow-hidden rounded-xl border border-border/40">
                                                    {/* Image Header */}
                                                    <div className="w-full h-52 overflow-hidden relative bg-muted/20 border-b border-border/40">
                                                        <img 
                                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] grayscale-[30%] group-hover:grayscale-0" 
                                                            alt={item.title} 
                                                            src={item.img} 
                                                        />
                                                    </div>
                                                    
                                                    {/* Clean Content Body */}
                                                    <div className="flex-grow p-6 flex flex-col justify-between bg-card">
                                                        <div>
                                                            <div className="mb-3">
                                                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                                                    {item.category === 'video-graphics' ? 'Video/Graphics' : item.category.replace('-', ' ')}
                                                                </span>
                                                            </div>
                                                            <h6 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </h6>
                                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="mt-auto">
                                                            {/* Minimalist Tech Stack */}
                                                            {item.techStack && (
                                                                <div className="flex flex-wrap gap-2 mb-6">
                                                                    {item.techStack.map((tech, i) => (
                                                                        <span key={i} className="text-[10px] font-medium tracking-wide px-2.5 py-1 bg-secondary/60 text-secondary-foreground rounded-md border border-border/50">
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            
                                                            {/* Minimalist Action Link */}
                                                            <div className="flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground group-hover:text-foreground transition-colors">
                                                                {item.link ? 'View Git Repo' : 'View Project'} 
                                                                <i className="icon ion-md-arrow-forward ml-2 opacity-50 text-base transform group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"></i>
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
