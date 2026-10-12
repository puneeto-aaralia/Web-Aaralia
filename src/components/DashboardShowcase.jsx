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
      {/* Figma SVG preview with full responsive scaling */}
      <div
        className="showcase-svg-wrapper"
        onClick={onLaunchFullDashboard}
        title="Click to explore interactive Admin Dashboard"
        role="button"
        tabIndex={0}
        aria-label="Aaralia HR dashboard preview - click to launch interactive dashboard"
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onLaunchFullDashboard) {
            e.preventDefault();
            onLaunchFullDashboard();
          }
        }}
        style={{ cursor: onLaunchFullDashboard ? 'pointer' : 'default' }}
      >
        <img
          src={dashboardShowcaseSvg}
          alt="Aaralia HR dashboard preview"
          className="showcase-svg-image"
          loading="lazy"
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
