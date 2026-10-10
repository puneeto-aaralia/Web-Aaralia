import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Send, Bot, ShieldCheck, Zap, Compass, RefreshCw } from 'lucide-react';
import './AISmartSection.css';

const PRESET_QUERIES = [
  {
    query: 'Where should our people team focus this week?',
    lead: 'I found three priorities based on current people signals:',
    items: [
      { num: '01', title: 'Complete 4 pending onboarding plans', tag: 'High Impact', tagType: 'impact', action: 'Review Now' },
      { num: '02', Support: true, title: 'Support the Customer Success team', tag: 'Engagement', tagType: 'engagement', action: 'View Context' },
      { num: '03', title: 'Close critical skill gaps in AI readiness', tag: 'Learning', tagType: 'learning', action: 'Assign Courses' }
    ]
  },
  {
    query: 'Analyze team retention and flight risks for Q4',
    lead: 'Signal analysis completed across 142 team members:',
    items: [
      { num: '01', title: 'Schedule 1:1 check-in with Senior DevOps engineers', tag: 'High Impact', tagType: 'impact', action: 'Book Meetings' },
      { num: '02', title: 'Review compensation benchmark for CS Leads', tag: 'Compensation', tagType: 'engagement', action: 'Open Salary Data' },
      { num: '03', title: 'Celebrate 3 anniversaries on Friday standup', tag: 'Culture', tagType: 'learning', action: 'Send Kudos' }
    ]
  },
  {
    query: 'What deal blockers are slowing CRM conversions?',
    lead: 'Pipeline friction detected across 18 enterprise opportunities:',
    items: [
      { num: '01', title: 'Security review stalled on Acme Corp deal ($84k ARR)', tag: 'High Impact', tagType: 'impact', action: 'Ping SecOps' },
      { num: '02', title: 'Follow up on 5 pending stakeholder sign-offs', tag: 'Sales Velocity', tagType: 'engagement', action: 'Send Reminders' },
      { num: '03', title: 'Generate executive summary for Apex Global', tag: 'AI Assist', tagType: 'learning', action: 'Generate PDF' }
    ]
  }
];

export default function AISmartSection() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [completedActions, setCompletedActions] = useState({});
  const [isThinking, setIsThinking] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const currentPreset = PRESET_QUERIES[activeQueryIndex];

  const handleSelectPreset = (index) => {
    setIsThinking(true);
    setActiveQueryIndex(index);
    setTimeout(() => {
      setIsThinking(false);
    }, 300);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      showToast(`Aaralia synthesized answer for: "${customInput}"`);
      setCustomInput('');
    }, 600);
  };

  const handleActionClick = (itemTitle) => {
    setCompletedActions(prev => ({
      ...prev,
      [itemTitle]: !prev[itemTitle]
    }));
    showToast(completedActions[itemTitle] ? `Action reopened` : `Action executed: "${itemTitle}"`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <section className="ai-section" id="ai-section">
      <div className="ai-container">
        {/* Top Meet Pill */}
        <div className="ai-badge-wrapper">
          <div className="ai-badge">
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span className="badge-title">MEET AARALIA AI</span>
          </div>
        </div>

        {/* Section Headline */}
        <h2 className="ai-headline">
          Intelligence that works <span className="highlight-coral">with your people.</span>
        </h2>

        {/* Section Subtitle */}
        <p className="ai-subtitle">
          Not AI for automation’s sake. Aaralia understands context, surfaces what matters, and helps everyone make their next move with confidence.
        </p>

        {/* 4 Feature Pillars Grid */}
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

        {/* Interactive "Ask Aaralia" Card Terminal */}
        <div className="ai-terminal-wrapper">
          <div className="ai-terminal-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-brand-group">
                <div className="terminal-logo-box">
                  <Sparkles size={18} color="#FFFFFF" />
                </div>
                <div className="terminal-brand-info">
                  <h4 className="terminal-title">Ask Aaralia</h4>
                  <span className="terminal-subtitle">Connected to your organization</span>
                </div>
              </div>

              <div className="terminal-status-badge">
                <span className="live-pulse"></span>
                <span>Real-time Context Sync</span>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="query-switcher-row">
              <span className="switcher-label">Sample queries:</span>
              <div className="query-pill-list">
                {PRESET_QUERIES.map((item, idx) => (
                  <button
                    key={idx}
                    className={`query-pill ${activeQueryIndex === idx ? 'active' : ''}`}
                    onClick={() => handleSelectPreset(idx)}
                  >
                    {item.query}
                  </button>
                ))}
              </div>
            </div>

            {/* Query Input Box */}
            <form className="terminal-input-container" onSubmit={handleCustomSubmit}>
              <div className="terminal-input-bubble">
                <input
                  type="text"
                  className="terminal-input"
                  value={customInput ? customInput : currentPreset.query}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask Aaralia any question across your people, CRM, and payroll..."
                />
                <button type="submit" className="terminal-send-btn" aria-label="Send query">
                  <Send size={15} />
                </button>
              </div>
            </form>

            {/* Aaralia Response Section */}
            <div className="terminal-response-container">
              {isThinking ? (
                <div className="terminal-loading">
                  <RefreshCw size={20} className="spinning-icon" />
                  <span>Synthesizing cross-system intelligence...</span>
                </div>
              ) : (
                <>
                  <div className="response-lead-row">
                    <div className="response-avatar">
                      <Sparkles size={14} color="#FFFFFF" />
                    </div>
                    <span className="response-lead-text">{currentPreset.lead}</span>
                  </div>

                  {/* 3 Actionable Cards */}
                  <div className="response-cards-list">
                    {currentPreset.items.map((item, i) => {
                      const isDone = completedActions[item.title];
                      return (
                        <div
                          key={i}
                          className={`response-item-card ${isDone ? 'is-completed' : ''}`}
                          onClick={() => handleActionClick(item.title)}
                        >
                          <div className="item-left-block">
                            <span className="item-index">{item.num}</span>
                            <span className={`item-title ${isDone ? 'line-through' : ''}`}>
                              {item.title}
                            </span>
                          </div>

                          <div className="item-right-block">
                            <span className={`item-tag tag-${item.tagType}`}>
                              {item.tag}
                            </span>
                            <button
                              className={`item-action-btn ${isDone ? 'btn-done' : ''}`}
                              onClick={(e) => { e.stopPropagation(); handleActionClick(item.title); }}
                            >
                              {isDone ? (
                                <>
                                  <Check size={13} />
                                  <span>Executed</span>
                                </>
                              ) : (
                                <>
                                  <span>{item.action}</span>
                                  <ArrowRight size={13} />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Toast */}
      {toastMessage && (
        <div className="ai-toast-notification">
          <Sparkles size={16} color="var(--brand-orange)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
