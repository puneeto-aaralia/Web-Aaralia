import React, { useState, useEffect } from 'react';
import AaraliaLogo from './AaraliaLogo';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeView: _activeView, setActiveView, onOpenDemo, onOpenPrivacy }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Black Announcement Bar matching Image 2 */}
      <div className="top-announcement-bar">
        <a href="#ai-section" className="announcement-content">
          <span className="announcement-pill">Coming Soon</span>
          <span className="announcement-text">
            Meet Aaralia AI—intelligence designed around your people
          </span>
          <span className="announcement-arrow">→</span>
        </a>
      </div>

      {/* Main Navbar Header matching Image 2 */}
      <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo with powered by Aaura Softwares matching Image 2 */}
          <div
            className="navbar-brand"
            onClick={() => {
              if (setActiveView) setActiveView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <AaraliaLogo size="default" showPoweredBy={true} />
          </div>

          {/* Hamburger Menu Icon Button matching Image 2 */}
          <button
            type="button"
            className="navbar-menu-btn"
            
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        
      </header>
    </>
  );
}
