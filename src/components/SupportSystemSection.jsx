import React from 'react';
import { Search, Calendar, ChevronDown, Filter } from 'lucide-react';
import './SupportSystemSection.css';

const ATTENDANCE_RECORDS = [
  {
    id: 1,
    date: '14/09/2026',
    checkIn: '09:00 AM',
    status: 'Present',
    statusType: 'neutral',
    checkOut: '06:45 PM',
    breakTime: '30 Min',
    late: '32 Min',
    overtime: '20 Min',
    productionHours: '09:15 hrs'
  },
  {
    id: 2,
    date: '13/09/2026',
    checkIn: '09:15 AM',
    status: 'Present',
    statusType: 'neutral',
    checkOut: '07:10 PM',
    breakTime: '45 Min',
    late: '15 Min',
    overtime: '40 Min',
    productionHours: '09:55 hrs'
  },
  {
    id: 3,
    date: '12/09/2026',
    checkIn: '09:48 AM',
    status: 'Late',
    statusType: 'low',
    checkOut: '06:30 PM',
    breakTime: '30 Min',
    late: '48 Min',
    overtime: '15 Min',
    productionHours: '08:42 hrs'
  },
  {
    id: 4,
    date: '11/09/2026',
    checkIn: '08:55 AM',
    status: 'Present',
    statusType: 'neutral',
    checkOut: '07:30 PM',
    breakTime: '30 Min',
    late: '00 Min',
    overtime: '50 Min',
    productionHours: '10:35 hrs'
  }
];

export default function SupportSystemSection() {
  return (
    <section className="support-system-section" id="support-section">
      <div className="support-container">
        {/* Section Header matching Figma Reference */}
        <div className="support-header-block">
          <div className="support-tag-pill">
            <span>HUMAN BY DESIGN</span>
          </div>

          <h2 className="support-main-title">
            Technology should feel less like a system<br />
            —and more like support.
          </h2>

          <p className="support-main-desc">
            That belief shapes every Aaralia experience: fewer obstacles, clearer choices, and more time for the work only people can do.
          </p>
        </div>

        {/* Soft Peach Container enclosing Two Clean White Cards */}
        <div className="support-mockup-wrapper">
          {/* Card 1: Top Metrics & Colorful Timeline Card */}
          <div className="support-card-metrics">
            {/* 4 KPI Metrics */}
            <div className="support-kpi-grid">
              <div className="support-kpi-col">
                <span className="kpi-label"><i className="kpi-dot dot-grey" /> Total Working hours</span>
                <span className="kpi-val">12h 36m</span>
              </div>
              <div className="support-kpi-col">
                <span className="kpi-label"><i className="kpi-dot dot-green" /> Productive Hours</span>
                <span className="kpi-val">08h 36m</span>
              </div>
              <div className="support-kpi-col">
                <span className="kpi-label"><i className="kpi-dot dot-yellow" /> Break hours</span>
                <span className="kpi-val">22m 15s</span>
              </div>
              <div className="support-kpi-col">
                <span className="kpi-label"><i className="kpi-dot dot-blue" /> Overtime</span>
                <span className="kpi-val">02h 15m</span>
              </div>
            </div>

            {/* Segmented Timeline Bar matching Screenshot */}
            <div className="support-timeline-wrapper">
              <div className="support-timeline-segments">
                <span className="t-seg seg-green" style={{ width: '6%' }} />
                <span className="t-seg seg-yellow" style={{ width: '3.5%' }} />
                <span className="t-seg seg-green" style={{ width: '14.5%' }} />
                <span className="t-seg seg-yellow" style={{ width: '8.5%' }} />
                <span className="t-seg seg-green" style={{ width: '16%' }} />
                <span className="t-seg seg-yellow" style={{ width: '2.5%' }} />
                <span className="t-seg seg-blue" style={{ width: '2.5%' }} />
                <span className="t-seg seg-cyan" style={{ width: '2.5%' }} />
                <span className="t-seg seg-empty" style={{ width: '44%' }} />
              </div>

              {/* Hourly Ticks from 06:00 to 12:00 */}
              <div className="support-timeline-ticks">
                <span>06:00</span>
                <span>07:00</span>
                <span>08:00</span>
                <span>09:00</span>
                <span>10:00</span>
                <span>11:00</span>
                <span>12:00</span>
                <span>01:00</span>
                <span>02:00</span>
                <span>03:00</span>
                <span>04:00</span>
                <span>05:00</span>
                <span>06:00</span>
                <span>07:00</span>
                <span>08:00</span>
                <span>09:00</span>
                <span>10:00</span>
                <span>11:00</span>
                <span>12:00</span>
              </div>
            </div>
          </div>

          {/* Card 2: Records Table Card */}
          <div className="support-card-records">
            {/* Header: Records + Actions */}
            <div className="records-hdr-row">
              <h3 className="records-heading">Records</h3>
              <div className="records-actions-group">
                <button className="btn-sort-pill">
                  <span>Sort By : <b>Last 30 Days</b></span>
                  <ChevronDown size={12} />
                </button>
                <button className="btn-action-icon" title="Select Date">
                  <Calendar size={13} />
                </button>
                <button className="btn-action-icon" title="Filter Records">
                  <Filter size={13} />
                </button>
              </div>
            </div>

            {/* Sub-header Controls & Legend Row */}
            <div className="records-controls-row">
              <div className="entries-selector">
                <span>Row Per Page</span>
                <div className="entries-select-box">
                  <span>10</span>
                  <ChevronDown size={11} />
                </div>
                <span>Entries</span>
              </div>

              <div className="records-search-box">
                <Search size={13} color="#94A3B8" />
                <input type="text" placeholder="Search" readOnly />
              </div>

              <div className="records-legend-group">
                <span className="legend-item"><i className="legend-dot dot-green" /> Neutral</span>
                <span className="legend-item"><i className="legend-dot dot-red" /> Low</span>
                <span className="legend-item"><i className="legend-dot dot-blue" /> Overtime</span>
              </div>
            </div>

            {/* Table */}
            <div className="records-table-container">
              <table className="records-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Check In</th>
                    <th>Status</th>
                    <th>Check Out</th>
                    <th>Break</th>
                    <th>Late</th>
                    <th>Overtime</th>
                    <th>Production Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {ATTENDANCE_RECORDS.map((rec) => (
                    <tr key={rec.id}>
                      <td><span className="cell-date">{rec.date}</span></td>
                      <td>{rec.checkIn}</td>
                      <td>
                        <span className={`status-tag status-${rec.statusType}`}>
                          <i className="status-dot" /> {rec.status}
                        </span>
                      </td>
                      <td>{rec.checkOut}</td>
                      <td>{rec.breakTime}</td>
                      <td>{rec.late}</td>
                      <td>{rec.overtime}</td>
                      <td><strong>{rec.productionHours}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Floating Yellow Attendance Badge at Bottom Right matching Reference */}
          <div className="support-floating-yellow-badge">
            <span className="support-yellow-val">+24%</span>
            <span className="support-yellow-label">attendance this quarter</span>
          </div>
        </div>
      </div>
    </section>
  );
}
