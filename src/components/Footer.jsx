import React from 'react';
import AaraliaLogo from './AaraliaLogo';
import { ChevronUp, Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenDemoModal, onSwitchToDashboard, onOpenPrivacyModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-master-root">
      {/* 1. Dark CTA Banner matching Image 1 */}
      <div className="footer-cta-container">
        <div className="dark-cta-card">
          {/* Subtle concentric ripple background circles matching Image 1 */}
          <div className="cta-concentric-rings" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="ring ring-4" />
          </div>

          <div className="dark-cta-inner-content">
            <span className="dark-cta-eyebrow">YOUR SMARTER WAY OF WORKING STARTS HERE</span>

            <h2 className="dark-cta-title">
              Register now to unlock<br />
              exclusive launch pricing.
            </h2>

            <p className="dark-cta-subtitle">
              See how Aaralia can simplify operations, empower your people,<br className="hide-mobile" />
              and help your business become more human.
            </p>

            <div className="dark-cta-btn-wrapper">
              <button
                type="button"
                className="dark-cta-talk-btn"
                onClick={onOpenDemoModal}
              >
                Show Your Interest
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Clean White Footer matching Image 1 */}
      <div className="white-footer-wrapper">
        <div className="white-footer-container">
          {/* Main Links Row */}
          <div className="footer-main-row">
            {/* Left Brand Column */}
            <div className="footer-left-brand-col">
              <div
                className="footer-logo-wrap"
                onClick={scrollToTop}
                style={{ cursor: 'pointer' }}
              >
                <AaraliaLogo variant="light" size="default" showPoweredBy={false} />
              </div>
              <p className="footer-companion-text">
                The intelligent business companion for people, processes, and performance.
              </p>
            </div>

            {/* Right Navigation Links Columns matching Image 1 */}
            <div className="footer-right-nav-col">
              <div className="footer-nav-columns-grid">
                {/* Column 1 */}
                <div className="nav-col-item">
                  <a href="#dashboard-preview" className="footer-nav-link">Platform</a>
                  <a href="#support-section" className="footer-nav-link">Why Aaralia</a>
                </div>

                {/* Column 2 */}
                <div className="nav-col-item">
                  <a href="#ai-section" className="footer-nav-link">Aaralia AI</a>
                  <button type="button" className="footer-nav-link-btn" onClick={onOpenDemoModal}>
                    Contact
                  </button>
                </div>
                <div className="nav-col-item">
                  <button
                    type="button"
                    className="footer-nav-link-btn"
                    onClick={onOpenPrivacyModal}
                    id="footer-nav-privacy-btn"
                  >
                    Privacy Policy
                  </button>
                </div>

                {/* Column 3 */}
                <div className="nav-col-item">
                  <a href="#solutions" className="footer-nav-link">Solutions</a>
                </div>
              </div>

              {/* Scroll To Top Chevron Arrow matching Image 1 */}
              <button
                type="button"
                className="footer-scroll-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                title="Back to top"
              >
                <ChevronUp size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Thin Horizontal Divider Line matching Image 1 */}
          <div className="footer-horizontal-divider" />

          {/* Bottom Bar Info Row matching Image 1 */}
          <div className="footer-bottom-info-row">
            <div className="footer-bottom-left-group">
              <span className="footer-copyright-text">
                © 2026 Aaura Softwares. All rights reserved.
              </span>
              <span className="footer-meta-divider">•</span>
              <button
                type="button"
                className="footer-bottom-privacy-btn"
                onClick={onOpenPrivacyModal}
                id="footer-bottom-privacy-btn"
              >
                Privacy Policy
              </button>
            </div>

            <div className="footer-contact-emails">
              <a href="tel:+14375232758" className="footer-email-link" title="Call Aaralia">
                <Phone size={13} className="footer-contact-icon" />
                <span>+1 437-523-2758</span>
              </a>
              <a href="mailto:info@aaralia.com" className="footer-email-link" title="Email Aaralia">
                <Mail size={13} className="footer-contact-icon" />
                <span>info@aaralia.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
