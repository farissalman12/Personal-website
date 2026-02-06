import React from 'react';
import { motion } from 'framer-motion';

const Resume = ({ isOpen, onClose, theme }) => {
    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    return (
        <motion.div 
            className="lightbox-wrapper" 
            id="resume" 
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
                                        <p className="section-description">Check out my Resume</p>
                                        <h2 className="section-title">Resume</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Education Section */}
                            <div className="resume-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col-block education">
                                            <h3 className="col-title" style={{ marginBottom: '20px' }}>Education</h3>
                                            {[
                                                { title: 'Bachelor of Science - BS, Computer Science', school: 'The University of Lahore', year: 'Feb 2022 - Feb 2026', desc: 'Skills: Computer Science, Data Structures' },
                                                { title: 'Intermediate of Computer Science (ICS)', school: 'Punjab Group Of Colleges', year: '2020 - 2022', desc: 'Major in Computer Science' },
                                                { title: 'Secondary School Certificate, Engineering', school: 'Aga Khan Higher Secondary School, Gilgit', year: 'Apr 2016 - May 2019', desc: 'Pre-Engineering Group' }
                                            ].map((edu, i) => (
                                                <div className="resume-item" key={i} style={{ marginBottom: '15px' }}>
                                                    <span className="item-arrow"></span>
                                                    <h5 className="item-title">{edu.title}</h5>
                                                    <span className="item-details">{edu.school} / {edu.year}</span>
                                                    <p className="item-description">{edu.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications Section */}
                            <div className="resume-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col-block experience">
                                            <h3 className="col-title" style={{ marginBottom: '20px' }}>Certifications</h3>
                                            <div className="resume-grid">
                                                {[
                                                    { title: 'Google Cybersecurity Professional Certificate', year: 'Google / 2024', desc: 'Network Security, Linux, SQL, Python' },
                                                    { title: 'Google UX Design Professional Certificate', year: 'Google / 2023', desc: 'UX/UI Principles, Figma, Adobe XD' },
                                                    { title: 'Google IT Automation with Python', year: 'Google / 2024', desc: 'Python Scripting, Git, IT Automation' },
                                                    { title: 'Meta Front-End Development', year: 'Meta / 2023', desc: 'React, JavaScript, HTML/CSS, UI/UX' },
                                                    { title: 'Google AI Essentials', year: 'Google / 2023', desc: 'Generative AI, LLMs, AI Ethics' },
                                                    { title: 'CS50x: Introduction to Computer Science', year: 'Harvard University / 2025', desc: 'Algorithms, Data Structures, C, Python, SQL' },
                                                    { title: 'C & C++ Specialization', year: 'University of California, Santa Cruz / 2025', desc: 'Memory Management, Advanced Programming' },
                                                    { title: 'Algorithmic Toolbox', year: 'University of California, San Diego / 2024', desc: 'Greedy Algorithms, Divide and Conquer, DP' },
                                                    { title: 'Google IT Support Professional Certificate', year: 'Google / 2023', desc: 'System Admin, Networking, Troubleshooting' },
                                                    { title: 'Fundamentals of Digital Marketing', year: 'Google / 2023', desc: 'SEO, SEM, Analytics, Strategy' }
                                                ].map((cert, i) => (
                                                    <div className="resume-item" key={i}>
                                                        <span className="item-arrow"></span>
                                                        <h5 className="item-title">{cert.title}</h5>
                                                        <span className="item-details">{cert.year}</span>
                                                        <p className="item-description">{cert.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="skills-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">My level of knowledge in some tools</p>
                                            <h2 className="section-title">My Skills</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {[
                                                'Generative AI & LLMs',
                                                'Python Programming',
                                                'Full-Stack Web Development',
                                                'Cybersecurity & Information Security',
                                                'User Experience (UX) Design',
                                                'Graphic Design',
                                                'Linux System Administration',
                                                'C++ Programming',
                                                'JavaScript Development',
                                                'IT Automation & Scripting',
                                                'Audio Engineer',
                                                'Video Editor',
                                                'Digital Marketing & SEO',
                                                'Computer Networking',
                                                'Object-Oriented Programming (OOP)',
                                                'Cloud Computing',
                                                'Version Control (Git)'
                                            ].map((skill, i) => (
                                                <span 
                                                    key={i} 
                                                    className="skill-badge"
                                                    style={{
                                                        padding: '8px 16px',
                                                        borderRadius: '30px',
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                        backgroundColor: theme === 'light' ? '#eee' : '#333',
                                                        color: theme === 'light' ? '#000' : '#fff',
                                                        border: `1px solid ${theme === 'light' ? '#ddd' : '#444'}`,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
