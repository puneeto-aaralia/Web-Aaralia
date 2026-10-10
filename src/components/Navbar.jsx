import React, { useState, useEffect } from 'react';
import AaraliaLogo from './AaraliaLogo';
import './Navbar.css';

export default function Navbar({ activeView, setActiveView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo matching Figma Screenshot */}
        <div
          className="navbar-brand"
          onClick={() => {
            if (setActiveView) setActiveView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer' }}
        >
          <AaraliaLogo size="default" />
        </div>
      </div>
    </header>
  );
}
