import React from 'react';
import { GlowingCard } from './ui/glowing-card';
import { motion } from 'framer-motion';
import { BackButton } from './ui/back-button';
import { SiLeetcode, SiHackerrank } from "react-icons/si";

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
            <BackButton onClick={onClose} />
            <div className="container">
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
                            
                            {/* Info Section - Bento Grid */}
                            <div className="info-section single-section">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    {/* Bio Card - Spans 8 cols on desktop */}
                                    <div className="md:col-span-8">
                                        <GlowingCard className="h-full">
                                            <div className="h-full flex flex-col justify-center">
                                                <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">Who am i?</span>
                                                <h3 className="text-2xl font-bold mb-4">I'm Faris Salman, a Creative Tech Professional</h3>
                                                <div className="opacity-90 space-y-4">
                                                    <p>I sit at the intersection of creative design and robust engineering.</p>
                                                    <p>Fueled by a tech obsession that began in childhood, I don't just write code; I craft experiences. With a strong foundation in <strong>Mobile & Web Development</strong> and <strong>Cybersecurity</strong>, I architect intelligent systems that are as secure as they are powerful. But my work doesn't stop at the terminal, I bring ideas to life through <strong>Graphics Design</strong>, <strong>Video Editing</strong>, and <strong>Audio Engineering</strong>.</p>
                                                    <p>Whether I’m troubleshooting a custom <strong>Arch Linux</strong> environment, booting into <strong>Kali</strong> to test system defenses, or designing a brand identity, my goal is the same: to build digital products that function flawlessly and look exceptional.</p>
                                                </div>
                                                <div className="mt-6 flex flex-wrap gap-4">
                                                    <a className="btn content-download button-main button-scheme px-6 py-2 rounded-full inline-block" href="#" role="button">Download CV</a>
                                                </div>
                                            </div>
                                        </GlowingCard>
                                    </div>

                                    {/* Personal Info - Spans 4 cols on desktop */}
                                    <div className="md:col-span-4 flex flex-col gap-6">
                                         <GlowingCard className="flex-grow">
                                            <div className="flex flex-col justify-center h-full space-y-6">
                                                <div className="flex items-center space-x-4">
                                                     <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                                                        <i className="icon ion-md-person text-foreground text-xl"></i>
                                                     </div>
                                                     <div>
                                                        <span className="block text-xs uppercase opacity-70">Name</span>
                                                        <span className="font-semibold">Faris Salman</span>
                                                     </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                     <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                                                        <i className="icon ion-md-mail text-foreground text-xl"></i>
                                                     </div>
                                                     <div className="overflow-hidden">
                                                        <span className="block text-xs uppercase opacity-70">Email</span>
                                                        <span className="font-semibold truncate block"><a href="mailto:farishunzai@gmail.com" className="hover:text-muted-foreground transition-colors">farishunzai@gmail.com</a></span>
                                                     </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                     <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                                                        <i className="icon ion-md-map text-foreground text-xl"></i>
                                                     </div>
                                                     <div>
                                                        <span className="block text-xs uppercase opacity-70">From</span>
                                                        <span className="font-semibold">Lahore, Pakistan</span>
                                                     </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                     <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                                                        <i className="icon ion-md-calendar text-foreground text-xl"></i>
                                                     </div>
                                                     <div>
                                                        <span className="block text-xs uppercase opacity-70">Availability</span>
                                                        <span className="font-semibold text-green-500">Open for Work</span>
                                                     </div>
                                                </div>
                                            </div>
                                         </GlowingCard>

                                        {/* Socials Card */}
                                        <GlowingCard>
                                            <div className="flex justify-around items-center h-full py-2">
                                                 <a href="https://www.linkedin.com/in/faris-salman-b493b21a4/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-foreground transition-colors"><i className="icon ion-logo-linkedin"></i></a>
                                                 <a href="https://github.com/farissalman12" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-foreground transition-colors"><i className="icon ion-logo-github"></i></a>
                                                 <a href="http://www.hackerrank.com/profile/farishunzai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-foreground transition-colors flex items-center justify-center"><SiHackerrank /></a>
                                                 <a href="https://leetcode.com/u/farishunzai/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-foreground transition-colors flex items-center justify-center"><SiLeetcode /></a>
                                            </div>
                                        </GlowingCard>
                                    </div>
                                </div>
                            </div>

                            
                            {/* Services Section */}
                            <div className="services-section single-section mt-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">Services i offer to my clients</p>
                                            <h2 className="section-title">My Services</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Mobile App Dev', icon: 'ion-logo-android', desc: 'Building cross-platform mobile applications using React Native.' },
                                        { title: 'CyberSecurity', icon: 'ion-md-lock', desc: 'Vulnerability Assessment, Risk Management, and Network Security.' },
                                        { title: 'IT Support', icon: 'ion-md-desktop', desc: 'System Administration, Troubleshooting, and Infrastructure Services.' },
                                        { title: 'Web Development', icon: 'ion-md-globe', desc: 'Front-End Development and Responsive Web Design.' },
                                        { title: 'Graphic Design', icon: 'ion-md-brush', desc: 'UI/UX Design, Branding, and Visual Identity.' },
                                        { title: 'Media Editing', icon: 'ion-md-videocam', desc: 'Audio and Video editing using Premiere Pro and FL Studio.' },
                                    ].map((service, index) => (
                                        <GlowingCard key={index} className="h-full">
                                            <div className="text-center p-4">
                                                <i className={`icon service-icon ${service.icon} text-4xl text-foreground mb-4 block`}></i>
                                                <h6 className="service-title font-bold text-lg mb-2">{service.title}</h6>
                                                <p className="service-description opacity-80 text-sm">{service.desc}</p>
                                            </div>
                                        </GlowingCard>
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
