import React from 'react';
import { motion } from 'framer-motion';


const About = ({ isOpen, onClose }) => {
    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    return (
        <motion.div 
            className="lightbox-wrapper" 
            id="about" 
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
                                        <p className="section-description">Get to know me</p>
                                        <h2 className="section-title">About Me</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Info Section */}
                            <div className="info-section single-section">
                                <div className="row align-items-center">
                                    <div className="col-12 info-content text-center">
                                        <div className="about-card">
                                            <span className="about-subtitle">Who am i?</span>
                                            <h3 className="about-title">I'm Faris Salman, a Creative Tech Professional</h3>
                                            <div className="about-description">
                                                <p>I sit at the intersection of creative design and robust engineering.</p>
                                                <p>Fueled by a tech obsession that began in childhood, I don't just write code; I craft experiences. With a strong foundation in <strong>Mobile & Web Development</strong> and <strong>Cybersecurity</strong>, I architect intelligent systems that are as secure as they are powerful. But my work doesn't stop at the terminal, I bring ideas to life through <strong>Graphics Design</strong>, <strong>Video Editing</strong>, and <strong>Audio Engineering</strong>.</p>
                                                <p>Whether I’m troubleshooting a custom <strong>Arch Linux</strong> environment, booting into <strong>Kali</strong> to test system defenses, or designing a brand identity, my goal is the same: to build digital products that function flawlessly and look exceptional.</p>
                                            </div>
                                            
                                            <div className="info-grid">
                                                <div className="row justify-content-center">
                                                    <div className="col-12 col-md-6 col-lg-5">
                                                        <div className="info-item">
                                                            <i className="icon ion-md-person info-icon"></i>
                                                            <span className="info-label">Name:</span>
                                                            <span className="info-value">Faris Salman</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-5">
                                                        <div className="info-item">
                                                            <i className="icon ion-md-mail info-icon"></i>
                                                            <span className="info-label">Email:</span>
                                                            <span className="info-value"><a href="mailto:farishunzai@gmail.com">farishunzai@gmail.com</a></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-5">
                                                        <div className="info-item">
                                                            <i className="icon ion-md-map info-icon"></i>
                                                            <span className="info-label">From:</span>
                                                            <span className="info-value">Lahore, Pakistan</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-5">
                                                        <div className="info-item">
                                                            <i className="icon ion-md-calendar info-icon"></i>
                                                            <span className="info-label">Availability:</span>
                                                            <span className="info-value">Open for Opportunities</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-block d-sm-flex align-items-center mt-4 justify-content-center">
                                                <a className="btn content-download button-main button-scheme" href="#" role="button">Download CV</a>
                                                <ul className="list-unstyled list-inline content-follow">
                                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/faris-salman-b493b21a4/" target="_blank" rel="noopener noreferrer"><i className="icon ion-logo-linkedin"></i></a></li>
                                                    <li className="list-inline-item"><a href="https://github.com/farissalman12" target="_blank" rel="noopener noreferrer"><i className="icon ion-logo-github"></i></a></li>
                                                    <li className="list-inline-item"><a href="http://www.hackerrank.com/profile/farishunzai" target="_blank" rel="noopener noreferrer"><i className="icon ion-md-code"></i></a></li>
                                                    <li className="list-inline-item"><a href="https://leetcode.com/u/farishunzai/" target="_blank" rel="noopener noreferrer"><i className="icon ion-md-code-working"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            {/* Services Section */}
                            <div className="services-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">Services i offer to my clients</p>
                                            <h2 className="section-title">My Services</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Services Grid */}
                                    {[
                                        { title: 'Mobile App Dev', icon: 'ion-logo-android', desc: 'Building cross-platform mobile applications using React Native.' },
                                        { title: 'CyberSecurity', icon: 'ion-md-lock', desc: 'Vulnerability Assessment, Risk Management, and Network Security.' },
                                        { title: 'IT Support', icon: 'ion-md-desktop', desc: 'System Administration, Troubleshooting, and Infrastructure Services.' },
                                        { title: 'Web Development', icon: 'ion-md-globe', desc: 'Front-End Development and Responsive Web Design.' },
                                        { title: 'Graphic Design', icon: 'ion-md-brush', desc: 'UI/UX Design, Branding, and Visual Identity.' },
                                        { title: 'Media Editing', icon: 'ion-md-videocam', desc: 'Audio and Video editing using Premiere Pro and FL Studio.' },
                                    ].map((service, index) => (
                                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                                            <div className="single-service">
                                                <i className={`icon service-icon ${service.icon}`}></i>
                                                <h6 className="service-title">{service.title}</h6>
                                                <p className="service-description">{service.desc}</p>
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

export default About;
