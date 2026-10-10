import React from 'react';
import './HRSuiteSection.css';

export default function HRSuiteSection() {
  return (
    <section className="hr-suite-section">
      <div className="hr-suite-container">
        {/* Eyebrow Pill matching Image 4 */}
        <div className="hr-suite-badge">
          <span>THE COMPLETE HR SUITE</span>
        </div>

        {/* 2-Column Header matching Image 4 */}
        <div className="hr-suite-header-grid">
          <div className="hr-suite-title-col">
            <h2 className="hr-suite-title">
              One place for every<br />
              people operation.
            </h2>
          </div>

          <div className="hr-suite-desc-col">
            <p className="hr-suite-desc">
              From workforce planning to payroll and performance, every HR workflow shares the same secure employee record and intelligent context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
