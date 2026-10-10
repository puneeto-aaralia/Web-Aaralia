import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './AISmartSection.css';

export default function AISmartSection() {
  const [followUpQuery, setFollowUpQuery] = useState('');
  const [followUpSubmitted, setFollowUpSubmitted] = useState(false);

  const handleFollowUpSubmit = (e) => {
    e.preventDefault();
    if (!followUpQuery.trim()) return;
    setFollowUpSubmitted(true);
    setTimeout(() => {
      setFollowUpSubmitted(false);
      setFollowUpQuery('');
    }, 3000);
  };

  return (
    <section className="ai-section" id="ai-section">
      <div className="ai-container">
        {/* Eyebrow Pill matching Images 2 & 3 */}
        <div className="ai-badge-wrapper">
          <div className="ai-badge">
            <Sparkles size={13} className="badge-sparkle-icon" />
            <span className="badge-title">MEET AARALIA AI</span>
          </div>
        </div>

        {/* Section Headline matching Images 2 & 3 */}
        <h2 className="ai-headline">
          Intelligence that works <span className="highlight-coral">with your people.</span>
        </h2>

        {/* Section Subtitle matching Images 2 & 3 */}
        <p className="ai-subtitle">
          Not AI for automation's sake. Aaralia understands context, surfaces what matters, and helps everyone make their next move with confidence.
        </p>

        {/* 4 Feature Pillars 2x2 Grid matching Image 3 */}
        <div className="ai-pillars-grid">
          <div className="pillar-item">
            <h3 className="pillar-title">Predict what's next</h3>
            <p className="pillar-desc">Spot risks and opportunities before they become obvious.</p>
          </div>

          <div className="pillar-item">
            <h3 className="pillar-title">Personalize every path</h3>
            <p className="pillar-desc">Adapt experiences to each employee and customer.</p>
          </div>

          <div className="pillar-item">
            <h3 className="pillar-title">Turn insight into action</h3>
            <p className="pillar-desc">Move from recommendation to workflow in one click.</p>
          </div>

          <div className="pillar-item">
            <h3 className="pillar-title">Keep humans in control</h3>
            <p className="pillar-desc">Explainable intelligence with decisions in your hands.</p>
          </div>
        </div>

        {/* "Ask Aaralia" Terminal Card matching Images 3 & 4 */}
        <div className="ai-terminal-wrapper">
          <div className="ai-terminal-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-brand-group">
                <div className="terminal-logo-box">
                  <Sparkles size={17} color="#FFFFFF" />
                </div>
                <div className="terminal-brand-info">
                  <h4 className="terminal-title">Ask Aaralia</h4>
                  <span className="terminal-subtitle">Connected to your organization</span>
                </div>
              </div>
            </div>

            {/* User Prompt Bubble matching Images 3 & 4 */}
            <div className="terminal-user-bubble-row">
              <div className="terminal-user-bubble">
                <span>Where should our people team focus this week?</span>
              </div>
            </div>

            {/* Aaralia Response Lead matching Images 3 & 4 */}
            <div className="terminal-response-lead">
              <div className="response-sparkle-mark">
                <Sparkles size={14} color="#FFFFFF" />
              </div>
              <span className="response-lead-text">
                I found three priorities based on current people signals:
              </span>
            </div>

            {/* 3 Actionable Priority Rows matching Images 3 & 4 */}
            <div className="terminal-priority-list">
              <div className="priority-row-item">
                <div className="priority-left">
                  <span className="priority-num">01</span>
                  <span className="priority-title">Complete 4 pending onboarding plans</span>
                </div>
                <span className="priority-tag tag-gray">High Impact</span>
              </div>

              <div className="priority-row-item">
                <div className="priority-left">
                  <span className="priority-num">02</span>
                  <span className="priority-title">Support the Customer Success team</span>
                </div>
                <span className="priority-tag tag-gray">Engagement</span>
              </div>

              <div className="priority-row-item">
                <div className="priority-left">
                  <span className="priority-num">03</span>
                  <span className="priority-title">Close critical skill gaps in AI readiness</span>
                </div>
                <span className="priority-tag tag-gray">Learning</span>
              </div>
            </div>

            {/* Follow-up Input Box matching Image 4 */}
            <form className="terminal-followup-form" onSubmit={handleFollowUpSubmit}>
              <input
                type="text"
                className="terminal-followup-input"
                placeholder={followUpSubmitted ? "Synthesizing cross-system insights..." : "Ask a follow-up..."}
                value={followUpQuery}
                onChange={(e) => setFollowUpQuery(e.target.value)}
              />
              <button type="submit" className="terminal-followup-btn" aria-label="Send follow up">
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
