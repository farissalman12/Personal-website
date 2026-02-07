import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from './ui/glowing-card';
import { BackButton } from './ui/back-button';

const Resume = ({ isOpen, onClose, theme }) => {
    const variants = {
        hidden: { opacity: 0, y: 50, pointerEvents: "none", transitionEnd: { display: "none" } },
        visible: { display: "block", opacity: 1, y: 0, pointerEvents: "auto" }
    };

    const skillCategories = {
        "Development": [
            'React Native', 'Full-Stack Web Dev', 'Python', 'C++', 'JavaScript', 'OOP'
        ],
        "Security & Systems": [
            'Cybersecurity', 'Network Security', 'Linux SysAdmin', 'Computer Networking', 'IT Automation'
        ],
        "Creative": [
            'UX Design', 'Graphic Design', 'Audio Engineering', 'Video Editing'
        ],
        "Tools & Tech": [
            'Git', 'Cloud Computing', 'Generative AI', 'Digital Marketing', 'SEO'
        ]
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
            <BackButton onClick={onClose} />
            <div className="container">
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

                            {/* Education Section - Timeline Style */}
                            <div className="resume-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col-block education">
                                            <h3 className="col-title" style={{ marginBottom: '20px' }}>Education</h3>
                                            <div className="relative border-l-2 border-foreground/10 ml-3 space-y-8 pb-4">
                                                {[
                                                    { title: 'Bachelor of Science - BS, Computer Science', school: 'The University of Lahore', year: 'Feb 2022 - Feb 2026', desc: 'Skills: Computer Science, Data Structures' },
                                                    { title: 'Intermediate of Computer Science (ICS)', school: 'Punjab Group Of Colleges', year: '2020 - 2022', desc: 'Major in Computer Science' },
                                                    { title: 'Secondary School Certificate, Engineering', school: 'Aga Khan Higher Secondary School, Gilgit', year: 'Apr 2016 - May 2019', desc: 'Pre-Engineering Group' }
                                                ].map((edu, i) => (
                                                    <div key={i} className="relative pl-8">
                                                        {/* Timeline Dot */}
                                                        <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-foreground border-4 border-background"></span>
                                                        
                                                        <GlowingCard className="w-full">
                                                            <div className="p-1">
                                                                <h5 className="text-lg font-bold mb-1">{edu.title}</h5>
                                                                <div className="flex flex-wrap items-center gap-2 text-sm opacity-80 mb-2">
                                                                    <span className="font-semibold text-muted-foreground">{edu.school}</span>
                                                                    <span>•</span>
                                                                    <span>{edu.year}</span>
                                                                </div>
                                                                <p className="opacity-70 text-sm">{edu.desc}</p>
                                                            </div>
                                                        </GlowingCard>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications Section - Compact Grid */}
                            <div className="resume-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col-block experience">
                                            <h3 className="col-title" style={{ marginBottom: '20px' }}>Certifications</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                                                    <GlowingCard key={i} className="h-full">
                                                        <div className="h-full flex flex-col justify-start">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h5 className="text-md font-bold leading-tight pr-4">{cert.title}</h5>
                                                                <i className="icon ion-md-ribbon text-foreground/50 text-xl shrink-0"></i>
                                                            </div>
                                                            <span className="text-xs font-semibold text-muted-foreground mb-2 block">{cert.year}</span>
                                                            <p className="opacity-70 text-sm mt-auto">{cert.desc}</p>
                                                        </div>
                                                    </GlowingCard>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section - Categorized */}
                            <div className="skills-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">My level of knowledge in some tools</p>
                                            <h2 className="section-title">My Skills</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.entries(skillCategories).map(([category, skills]) => (
                                        <div key={category} className="mb-4">
                                            <h4 className="text-lg font-bold mb-4 border-l-4 border-foreground pl-3">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="px-3 py-1 text-xs font-medium rounded-full border border-foreground/20 text-foreground/80 bg-foreground/5 hover:bg-foreground/10 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
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

export default Resume;
