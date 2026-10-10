import React, { useState } from 'react';
import { ArrowRight, Contact, UserPlus, CreditCard, GraduationCap, CheckCircle2, X } from 'lucide-react';
import './FeatureCards.css';

const CARDS_DATA = [
  {
    id: 'people',
    tag: 'PEOPLE & HR',
    title: 'Every employee moment, connected.',
    description: 'Recruit, onboard, engage, and develop your people with one intelligent source of truth.',
    linkText: 'Explore People & HR',
    icon: Contact,
    theme: 'peach',
    details: {
      highlights: [
        'Automated onboarding journeys with 1-click document flows',
        'Holistic 360 performance reviews with real-time feedback loops',
        'Unified employee directory synced directly across payroll and CRM',
        'Predictive retention risk alerts and engagement sentiment pulse'
      ],
      stats: '4.2x Faster Onboarding'
    }
  },
  {
    id: 'crm',
    tag: 'CRM',
    title: 'Relationships that move business forward.',
    description: 'Unify customer context, opportunities, and follow-ups so teams always know the next best action.',
    linkText: 'Explore CRM',
    icon: UserPlus,
    theme: 'mint',
    details: {
      highlights: [
        '360° Account timeline combining communication and contract states',
        'Smart deal pipeline scoring driven by Aaralia context engine',
        'Automatic cross-department handoff from Sales to Success',
        'Live opportunity tracking with predictive win-probability'
      ],
      stats: '38% Shorter Sales Cycles'
    }
  },
  {
    id: 'payroll',
    tag: 'PAYROLL',
    title: 'Accurate, compliant, and remarkably simple.',
    description: 'Turn complex payroll operations into a dependable workflow your people can trust.',
    linkText: 'Explore Payroll',
    icon: CreditCard,
    theme: 'amber',
    details: {
      highlights: [
        'Multi-entity tax compliance & automated deduction calculation',
        'Integrated attendance sync with overtime & leave policy logic',
        'Direct deposit distribution with zero-touch approval runs',
        'Instant contractor and global compliance verification'
      ],
      stats: '99.98% On-Time Precision'
    }
  },
  {
    id: 'learning',
    tag: 'LEARNING',
    title: 'Build the skills your future needs.',
    description: 'Identify gaps, personalize learning journeys, and make growth part of everyday work.',
    linkText: 'Explore Learning',
    icon: GraduationCap,
    theme: 'lilac',
    details: {
      highlights: [
        'AI skill-gap mapping tailored to organizational goals',
        'Bite-sized microlearning pathways integrated into daily work',
        'Compliance certification tracking with proactive renewal alerts',
        'Manager coaching playbooks for internal promotions'
      ],
      stats: '84% Higher Completion Rates'
    }
  }
];

export default function FeatureCards({ onExploreFeature }) {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleCardClick = (card) => {
    setSelectedModule(card);
    if (onExploreFeature) onExploreFeature(card);
  };

  return (
    <section className="features-section" id="solutions">
      <div className="features-container">
        {/* Section Header matching Figma Screenshot 1 */}
        <div className="platform-header-block">
          <div className="platform-tag-pill">
            <span className="pill-dot" />
            <span>ONE PLATFORM. EVERY POSSIBILITY.</span>
          </div>

          <div className="platform-header-grid">
            <div className="platform-title-col">
              <h2 className="platform-main-title">
                Less switching.<br />
                More moving forward.
              </h2>
            </div>
            <div className="platform-desc-col">
              <p className="platform-main-desc">
                Aaralia connects the systems your people rely on, removing the gaps between teams, data, and decisions.
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Feature Cards Grid matching Screenshots 1 & 3 */}
        <div className="features-grid">
          {CARDS_DATA.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`feature-card theme-${card.theme}`}
                onClick={() => handleCardClick(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(card); }}
              >
                {/* Icon Box */}
                <div className={`card-icon-wrapper bg-${card.theme}`}>
                  <IconComponent size={24} className={`icon-${card.theme}`} />
                </div>

                {/* Uppercase Category Tag */}
                <span className="card-tag">{card.tag}</span>

                {/* Card Title */}
                <h3 className="card-title">{card.title}</h3>

                {/* Card Subtitle */}
                <p className="card-description">{card.description}</p>

                {/* Card Action Link */}
                <div className="card-action">
                  <span className="action-label">{card.linkText}</span>
                  <ArrowRight size={16} className="action-arrow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Feature Modal Preview */}
      {selectedModule && (
        <div className="feature-modal-backdrop" onClick={() => setSelectedModule(null)}>
          <div className="feature-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedModule(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className={`modal-header-badge bg-${selectedModule.theme}`}>
              <selectedModule.icon size={22} className={`icon-${selectedModule.theme}`} />
              <span>{selectedModule.tag}</span>
            </div>
            <h3 className="modal-title">{selectedModule.title}</h3>
            <p className="modal-desc">{selectedModule.description}</p>

            <div className="modal-stat-pill">
              <span className="stat-value">{selectedModule.details.stats}</span>
              <span className="stat-label">proven organizational outcome</span>
            </div>

            <div className="modal-highlights">
              <h4>Key Capabilities</h4>
              <ul>
                {selectedModule.details.highlights.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="var(--brand-orange)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-footer-actions">
              <button className="btn-modal-primary" onClick={() => setSelectedModule(null)}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
