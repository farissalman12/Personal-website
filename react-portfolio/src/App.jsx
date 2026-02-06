import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import { AnimatePresence } from 'framer-motion';

// Lazy load heavy modal sections
const About = React.lazy(() => import('./components/About'));
const Resume = React.lazy(() => import('./components/Resume'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    setTimeout(() => setLoading(false), 1000);

    // Hash handling
    const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setActiveSection(hash);
        } else {
            setActiveSection('home');
        }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeOverlay = () => {
      setActiveSection('home');
      window.history.pushState(null, null, ' '); // Clear hash
  };

  // Update hash when activeSection changes (if not triggered by hashchange? tricky loop)
  // Actually, better to let Header just change hash, and let listener update state.
  // But Header currently updates state directly.
  // Let's refactor Header to plain links? or keep as is and just pushState.


  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    } else {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-block">
          <div className="preloader-icon">
            <span className="loading-dot loading-dot-1"></span>
            <span className="loading-dot loading-dot-2"></span>
            <span className="loading-dot loading-dot-3"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`theme-${theme}`}>
        <div id="overlay-effect"></div>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
            <Hero theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
            
            <React.Suspense fallback={<div />}>
                <About isOpen={activeSection === 'about'} onClose={closeOverlay} />
                <Resume isOpen={activeSection === 'resume'} onClose={closeOverlay} theme={theme} />
                <Portfolio isOpen={activeSection === 'portfolio'} onClose={closeOverlay} />
                <Contact isOpen={activeSection === 'contact'} onClose={closeOverlay} />
            </React.Suspense>

        </main>
    </div>
  );
}

export default App;
