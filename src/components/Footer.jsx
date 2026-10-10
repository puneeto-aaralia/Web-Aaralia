import React from 'react';
import AaraliaLogo from './AaraliaLogo';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenDemoModal, onSwitchToDashboard }) {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Top Banner / Callout */}
        <div className="footer-banner-box">
          <div className="footer-banner-content">
            <span className="footer-badge">READY TO UNIFY YOUR TEAMS?</span>
            <h3 className="footer-banner-title">
              Start building a connected, intelligent organization today.
            </h3>
            <p className="footer-banner-sub">
              Talk with our product architects and see how Aaralia adapts to your custom operational architecture.
            </p>
          </div>
          <div className="footer-banner-actions">
            <button className="footer-cta-btn" onClick={onOpenDemoModal}>
              <span>Show your Interest</span>
              <ArrowRight size={16} />
            </button>
            <button className="footer-secondary-btn" onClick={onSwitchToDashboard}>
              <span>Explore Live Dashboard</span>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-brand-column">
            <AaraliaLogo variant="light" size="default" showPoweredBy={true} />
            <p className="footer-brand-bio">
              The unified operational layer connecting people, CRM, payroll, and learning into one intelligent ecosystem.
            </p>
            <div className="footer-security-pill">
              <ShieldCheck size={16} color="#0D9488" />
              <span>SOC2 Type II & GDPR Compliant</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">People & HR Platform</a></li>
              <li><a href="#solutions">Customer Context CRM</a></li>
              <li><a href="#solutions">Automated Payroll</a></li>
              <li><a href="#solutions">Continuous Learning</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Intelligence</h4>
            <ul>
              <li><a href="#ai-section">Aaralia AI Assistant</a></li>
              <li><a href="#ai-section">Predictive Retention Engine</a></li>
              <li><a href="#ai-section">Cross-System Context Sync</a></li>
              <li><a href="#ai-section">Decision Playbooks</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><button onClick={onSwitchToDashboard}>Interactive Admin Console</button></li>
              <li><a href="#dashboard-preview">Operating Layer Architecture</a></li>
              <li><button onClick={onOpenDemoModal}>Book a Custom Walkthrough</button></li>
              <li><a href="#solutions">System Integrations</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Aaralia Inc. Powered by Aaura Softwares. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#">Terms of Service</a>
            <span className="dot-sep">•</span>
            <a href="#">Security Overview</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
