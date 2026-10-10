import React, { useState, useEffect } from 'react';
import AaraliaLogo from './AaraliaLogo';
import { ArrowRight, LayoutDashboard, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeView, setActiveView, onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand" onClick={() => { setActiveView('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
          <AaraliaLogo size="default" />
        </div>

        {/* Desktop Nav Items */}
        <nav className="navbar-nav">
          <div className="nav-dropdown-wrapper" onMouseLeave={() => setSolutionsOpen(false)}>
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => setSolutionsOpen(true)}
            >
              Solutions <ChevronDown size={14} className={`chevron-icon ${solutionsOpen ? 'rotate' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="dropdown-menu">
                <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }} className="dropdown-item">
                  <span className="dot dot-peach"></span>
                  <div>
                    <strong>People & HR</strong>
                    <p>Every employee moment, connected</p>
                  </div>
                </a>
                <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }} className="dropdown-item">
                  <span className="dot dot-mint"></span>
                  <div>
                    <strong>CRM</strong>
                    <p>Relationships that move business forward</p>
                  </div>
                </a>
                <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }} className="dropdown-item">
                  <span className="dot dot-amber"></span>
                  <div>
                    <strong>Payroll</strong>
                    <p>Accurate, compliant, and remarkably simple</p>
                  </div>
                </a>
                <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }} className="dropdown-item">
                  <span className="dot dot-lilac"></span>
                  <div>
                    <strong>Learning</strong>
                    <p>Build the skills your future needs</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <button className="nav-link" onClick={() => scrollToSection('ai-section')}>
            <Sparkles size={14} color="#FF5A36" />
            <span>Aaralia AI</span>
          </button>

          <button className="nav-link" onClick={() => scrollToSection('dashboard-preview')}>
            Operating Layer
          </button>

          {/* Quick Switch to Full Live Admin Dashboard */}
          <button
            className={`nav-link live-app-badge ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => {
              setActiveView(activeView === 'dashboard' ? 'landing' : 'dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <LayoutDashboard size={15} />
            <span>{activeView === 'dashboard' ? 'Back to Landing' : 'Live Dashboard App'}</span>
            <span className="pulse-indicator"></span>
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          <button
            className="btn-text"
            onClick={() => {
              setActiveView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Sign In
          </button>
          <button
            className="btn-primary"
            onClick={onOpenDemoModal}
          >
            <span>Book a Demo</span>
            <ArrowRight size={15} />
          </button>
          
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-link" onClick={() => scrollToSection('solutions')}>
            Solutions & Products
          </button>
          <button className="mobile-link" onClick={() => scrollToSection('ai-section')}>
            <Sparkles size={16} color="#FF5A36" /> Aaralia AI Intelligence
          </button>
          <button className="mobile-link" onClick={() => scrollToSection('dashboard-preview')}>
            Dashboard Showcase
          </button>
          <button
            className="mobile-link highlight"
            onClick={() => {
              setActiveView(activeView === 'dashboard' ? 'landing' : 'dashboard');
              setMobileMenuOpen(false);
            }}
          >
            <LayoutDashboard size={16} />
            {activeView === 'dashboard' ? 'Return to Landing View' : 'Launch Interactive Admin Dashboard'}
          </button>
          <div className="mobile-actions">
            <button className="btn-primary full-width" onClick={() => { onOpenDemoModal(); setMobileMenuOpen(false); }}>
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
