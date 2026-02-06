import React from 'react';
import ClipAnimation from './ClipAnimation';
import PhysicsBackground from './PhysicsBackground';

const Hero = ({ theme, toggleTheme, activeSection }) => {
  return (
    <section className="home-area element-cover-bg" id="home" style={{backgroundImage: 'none', backgroundColor: theme === 'light' ? '#ffffff' : '#000'}}>
        <PhysicsBackground theme={theme} activeSection={activeSection} />
      <div className="container h-100" style={{position: 'relative', zIndex: 10, pointerEvents: 'none'}}>
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-8 home-content text-center">
            <h1 className="home-name" style={{color: theme === 'light' ? '#000' : '#fff'}}>Faris <span>Salman</span></h1>
            <h4 className="cd-headline clip home-headline" style={{color: theme === 'light' ? '#000' : '#fff'}}>
                I’m{' '}
                <span className="cd-words-wrapper single-headline">
                    <ClipAnimation 
                        words={[
                            'a Developer',
                            'a CyberSecurity Enthusiast',
                            'a Graphic Designer',
                            'a Video Editor',
                            'an Audio Engineer',
                            'a Musician'
                        ]}
                        theme={theme}
                    />
                </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="fixed-wrapper" style={{zIndex: 10}}>
        <div className="fixed-block block-left">
          <ul className="list-unstyled languages-list">
            <li>
                <button 
                    onClick={toggleTheme}
                    className="btn btn-link single-language theme-toggle-btn" 
                    style={{
                        background: theme === 'light' ? '#333' : '#fff', // Contrasting background
                        border: 'none', 
                        cursor: 'pointer', 
                        color: theme === 'light' ? '#fff' : '#000', // Contrasting icon
                        textDecoration: 'none',
                        padding: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}
                >
                     <i className={`icon ${theme === 'dark' ? 'ion-md-sunny' : 'ion-md-moon'}`} style={{ fontSize: '20px', transform: theme === 'light' ? 'rotate(-80deg)' : 'none', transition: 'transform 0.3s ease' }}></i>
                </button>
            </li>
          </ul>
        </div>
        <div className="fixed-block block-right">
          <ul className="list-unstyled social-icons">
            <li>
                <a href="http://www.hackerrank.com/profile/farishunzai" target="_blank" rel="noopener noreferrer" title="HackerRank">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', fill: theme === 'light' ? '#000' : '#fff'}}>
                        <title>HackerRank</title>
                        <path d="M0 0v24h24V0zm9.95 8.002h1.805c0.061 0 0.111 0.05 0.111 0.111v7.767c0 0.061 -0.05 0.111 -0.11 0.111H9.95c-0.061 0 -0.111 -0.05 -0.111 -0.11v-2.87H7.894v2.87c0 0.06 -0.05 0.11 -0.11 0.11H5.976a0.11 0.11 0 0 1 -0.11 -0.11V8.112c0 -0.06 0.05 -0.11 0.11 -0.11h1.806c0.061 0 0.11 0.05 0.11 0.11v2.869H9.84v-2.87c0 -0.06 0.05 -0.11 0.11 -0.11zm2.999 0h5.778c0.061 0 0.111 0.05 0.111 0.11v7.767a0.11 0.11 0 0 1 -0.11 0.112h-5.78a0.11 0.11 0 0 1 -0.11 -0.11v-7.77c0 -0.06 0.05 -0.11 0.11 -0.11z" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://leetcode.com/u/farishunzai/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                     <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', fill: theme === 'light' ? '#000' : '#fff'}}>
                        <title>LeetCode</title>
                        <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
                    </svg>
                </a>
            </li>
            <li><a href="https://www.linkedin.com/in/faris-salman-b493b21a4/" target="_blank" rel="noopener noreferrer"><i className="icon ion-logo-linkedin"></i></a></li>
            <li><a href="https://github.com/farissalman12" target="_blank" rel="noopener noreferrer"><i className="icon ion-logo-github"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
