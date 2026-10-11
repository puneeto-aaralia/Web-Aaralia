import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HRSuiteSection.css';

const HR_SUITE_CARDS = [
  {
    num: '01',
    title: 'Core HR & employee records',
    desc: 'A single, dependable source for profiles, documents, policies, and organization structures.'
  },
  {
    num: '02',
    title: 'Recruitment & onboarding',
    desc: 'Move from requisition to a thoughtful, consistent first day with less manual coordination.'
  },
  {
    num: '03',
    title: 'Attendance & leave',
    desc: 'Manage time, shifts, holidays, and approvals with real-time visibility across teams.'
  },
  {
    num: '04',
    title: 'Payroll & compliance',
    desc: 'Run accurate payroll with connected attendance, benefits, deductions, and statutory workflows.'
  },
  {
    num: '05',
    title: 'Performance management',
    desc: 'Align goals, feedback, check-ins, and reviews so great work is seen and supported.'
  },
  {
    num: '06',
    title: 'Learning & development',
    desc: 'Close skill gaps with personalized learning paths, assessments, and certifications.'
  },
  {
    num: '07',
    title: 'Employee engagement',
    desc: 'Understand sentiment, recognize contributions, and build a culture people want to grow with.'
  },
  {
    num: '08',
    title: 'Workflows & service desk',
    desc: 'Give employees one intuitive place for requests, letters, approvals, and HR support.'
  },
  {
    num: '09',
    title: 'People analytics & AI',
    desc: 'Turn workforce data into clear answers, predictive signals, and confident decisions.'
  }
];

export default function HRSuiteSection() {
  return (
    <section className="hr-suite-section" id="hr-suite">
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

        {/* 3x3 Grid of 9 Cards matching Image 4 */}
        <div className="hr-suite-grid-card">
          {HR_SUITE_CARDS.map((card) => (
            <div key={card.num} className="hr-grid-cell">
              <span className="cell-num">{card.num}</span>
              <div className="cell-content">
                <h3 className="cell-title">{card.title}</h3>
                <p className="cell-desc">{card.desc}</p>
              </div>
              <div className="cell-action">
                <ArrowRight size={17} className="cell-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

