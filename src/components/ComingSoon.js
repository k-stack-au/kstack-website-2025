import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import ParticleBackground from './ParticleBackground';
import './ComingSoon.css';

const ComingSoon = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="coming-soon-container">
      <ParticleBackground />
      
      <div className={`content-wrapper ${loaded ? 'loaded' : ''}`}>
        <div className="logo-placeholder">
          {/* Logo placeholder - can be replaced with actual logo */}
          <div className="logo-circle"></div>
        </div>
        
        <div className="text-content">
          <div className="main-title-container">
            <AnimatedText text="COMING" className="main-title" delay={300} />
            <span className="title-spacer"></span>
            <AnimatedText text="SOON" className="main-title" delay={800} />
          </div>
          <h2 className="subtitle">Something Exciting is on the Way!</h2>
        </div>
        
        {/* Floating shapes */}
        <div className="shapes-container">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2025 K Stack</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
