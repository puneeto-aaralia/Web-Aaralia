import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero({ onShowInterest }) {
  return (
    <section className="hero-master-section">
      {/* Decorative Blush / Peach Geometric Circle in Background */}
      <div className="hero-peach-circle" aria-hidden="true" />

      <div className="hero-master-container">
        {/* Top Eyebrow Badge Pill */}
        <div className="hero-eyebrow-wrapper">
          <div className="hero-ai-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span className="hero-ai-badge-text">AI-FIRST. HUMAN ALWAYS.</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-master-title">
          Work gets better when everything{' '}
          <span className="hero-coral-accent">works together.</span>
        </h1>

        {/* Hero Descriptive Subtitle */}
        <p className="hero-master-sub">
          Aaralia brings people, customers, payroll, learning, and everyday operations into one intelligent ecosystem—so your organization can move with clarity.
        </p>

        {/* Hero CTA Button */}
        <div className="hero-cta-wrapper">
          <button className="hero-primary-cta" onClick={onShowInterest}>
            <span>Show your Interest</span>
            <ArrowRight size={17} className="cta-arrow-icon" />
          </button>
        </div>

        {/* Three Value Pillars Row with Green Dots */}
        <div className="hero-pillars-row">
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
