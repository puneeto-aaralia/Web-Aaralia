import React, { useState, useEffect } from 'react';
import AaraliaLogo from './AaraliaLogo';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeView, setActiveView, onOpenDemo }) {
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

        {/* Hamburger Menu Icon Button matching Screenshot 2 */}
        <button
          className="navbar-menu-btn"
          // onClick={() => setMenuOpen(!menuOpen)}
          // aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Menu when clicked */}
      {/* {menuOpen && (
        <div className="navbar-dropdown-menu">
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#ai-section" onClick={() => setMenuOpen(false)}>Meet Aaralia AI</a>
          <a href="#hr-suite" onClick={() => setMenuOpen(false)}>The Complete HR Suite</a>
          <a href="#dashboard-preview" onClick={() => setMenuOpen(false)}>Operating Layer</a>
          <button
            className="navbar-dropdown-cta"
            onClick={() => {
              setMenuOpen(false);
              if (setActiveView) setActiveView('dashboard');
            }}
          >
            Launch Interactive Admin App
          </button>
        </div>
      )} */}
    </header>
  );
}

