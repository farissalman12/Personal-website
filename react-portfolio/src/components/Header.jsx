import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ activeSection, setActiveSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    return (
        <nav className="navbar-expand-md navbar fixed-top justify-content-center" id="navbar">
            <span 
                className="navbar-menu ml-auto" 
                data-toggle="collapse" 
                onClick={toggleMenu}
                role="button"
            >
                <span className="btn-line"></span>
            </span>
            <div className={`collapse navbar-collapse order-1 order-lg-0 ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
                        <li className="nav-item" key={item}>
                            <a 
                                className="nav-link" 
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
