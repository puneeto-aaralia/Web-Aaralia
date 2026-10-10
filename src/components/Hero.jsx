import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ onShowInterest }) {
  return (
    <section className="hero-master-section">
      {/* Decorative Blush / Peach Geometric Circle matching Screenshot */}
      <div className="hero-peach-circle" aria-hidden="true" />

      <div className="hero-master-container">
        {/* Eyebrow Badge Pill */}
        <div className="hero-eyebrow-wrapper">
          <div className="hero-ai-badge">
            <Sparkles size={13} className="hero-sparkle-icon" />
            <span className="hero-ai-badge-text">AI-FIRST. HUMAN ALWAYS.</span>
          </div>
        </div>

        {/* Hero Main Headline with exact line breaks */}
        <h1 className="hero-master-title">
          Work gets better when everything<br />
          <span className="hero-coral-accent">works together.</span>
        </h1>

        {/* Hero Descriptive Subtitle */}
        <p className="hero-master-sub">
          Aaralia brings people, customers, payroll, learning, and everyday operations into one intelligent ecosystem—so your organization can move with clarity.
        </p>

        {/* Horizontally Centered CTA Button Container */}
        <div className="hero-cta-center-wrapper">
          <button className="hero-primary-cta" onClick={onShowInterest}>
            <span>Show your Interest</span>
            <ArrowRight size={17} className="cta-arrow-icon" />
          </button>
        </div>

        {/* Horizontally Centered Three Value Pillars Row */}
        <div className="hero-pillars-center-row">
          <div className="pillar-bullet">
            <span className="pillar-teal-dot" />
            <span className="pillar-bullet-text">One connected platform</span>
          </div>
          <div className="pillar-bullet">
            <span className="pillar-teal-dot" />
            <span className="pillar-bullet-text">Built around your people</span>
          </div>
          <div className="pillar-bullet">
            <span className="pillar-teal-dot" />
            <span className="pillar-bullet-text">Intelligence in every workflow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
