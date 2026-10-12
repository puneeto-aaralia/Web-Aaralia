import React, { useState } from 'react';
import './DashboardShowcase.css';
import dashboardShowcaseSvg from "../assets/dashboard-showcase.svg";
const DEPARTMENT_TABS = [
  { id: 'people', label: 'People' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'finance', label: 'Finance' },
  { id: 'learning', label: 'Learning' },
  { id: 'operations', label: 'Operations' }
];

export default function DashboardShowcase({ onLaunchFullDashboard }) {
  const [activeTab, setActiveTab] = useState('people');

  return (
    <section className="showcase-section" id="dashboard-preview">
      {/* Figma SVG replaces the previous HTML dashboard mockup */}
      <div className="showcase-svg-wrapper">
        <img
          src={dashboardShowcaseSvg}
          alt="Aaralia HR dashboard preview"
          className="showcase-svg-image"
        />
      </div>

      {/* Operating Layer */}
      <div className="operating-layer-row">
        <p className="operating-layer-label">
          One intelligent operating layer for every team<br />
          that keeps your business moving.
        </p>

        <div className="operating-layer-tabs">
          {DEPARTMENT_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`operating-tab-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
