import React, { useState } from 'react';
import { Clock, CheckCircle2, Search, Download, ChevronDown, Calendar, ArrowUpRight } from 'lucide-react';
import './SupportSystemSection.css';

const ATTENDANCE_RECORDS = [
  {
    id: 1,
    name: 'Doglas Martini',
    role: 'Project Manager',
    avatar: 'DM',
    checkIn: '09:02 AM',
    checkOut: '06:45 PM',
    hours: '09:43 hrs',
    status: 'On Time',
    statusTheme: 'green'
  },
  {
    id: 2,
    name: 'Villalobos',
    role: 'Lead Architect',
    avatar: 'VL',
    checkIn: '09:15 AM',
    checkOut: '07:10 PM',
    hours: '09:55 hrs',
    status: 'On Time',
    statusTheme: 'green'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Senior Engineer',
    avatar: 'SJ',
    checkIn: '09:48 AM',
    checkOut: '06:30 PM',
    hours: '08:42 hrs',
    status: 'Late',
    statusTheme: 'amber'
  },
  {
    id: 4,
    name: 'Michael Chang',
    role: 'Product Analyst',
    avatar: 'MC',
    checkIn: '08:55 AM',
    checkOut: '07:30 PM',
    hours: '10:35 hrs',
    status: 'Overtime',
    statusTheme: 'blue'
  }
];

export default function SupportSystemSection() {
  const [filterActive, setFilterActive] = useState('All');

  return (
    <section className="support-system-section" id="support-section">
      <div className="support-container">
        {/* Section Header matching Image 2 */}
        <div className="support-header-block">
          <div className="support-tag-pill">
            <span>INTUITIVE OPERATIONS</span>
          </div>

          <h2 className="support-main-title">
            Technology should feel less like a system<br />
            —and more like support.
          </h2>

          <p className="support-main-desc">
            Work shouldn't depend on heavy training or complex navigation. Aaralia adapts to how your people naturally work, so every interaction feels effortless.
          </p>
        </div>

        {/* Dashboard Mockup Card matching Image 2 bottom */}
        <div className="support-mockup-wrapper">
          <div className="support-dashboard-card">
            {/* Top 4 KPI Metrics Bar */}
            <div className="support-kpi-grid">
              <div className="support-kpi-box">
                <span className="kpi-label">Total Working Hours</span>
                <div className="kpi-val-row">
                  <span className="kpi-num">19:31h</span>
                  <span className="kpi-badge badge-green"><ArrowUpRight size={12} /> +2.4%</span>
                </div>
              </div>

              <div className="support-kpi-box">
                <span className="kpi-label">Productive Hours</span>
                <div className="kpi-val-row">
                  <span className="kpi-num">08:15h</span>
                  <span className="kpi-sub-tag tag-teal">85% Active</span>
                </div>
              </div>

              <div className="support-kpi-box">
                <span className="kpi-label">Break Hours</span>
                <div className="kpi-val-row">
                  <span className="kpi-num">21.2h</span>
                  <span className="kpi-sub-tag tag-amber">Policy Norm</span>
                </div>
              </div>

              <div className="support-kpi-box">
                <span className="kpi-label">Overtime Hours</span>
                <div className="kpi-val-row">
                  <span className="kpi-num">32.2h</span>
                  <span className="kpi-sub-tag tag-blue">Logged</span>
                </div>
              </div>
            </div>

            {/* Horizontal Timeline Strip */}
            <div className="support-timeline-strip">
              <div className="timeline-bar">
                <span className="seg-productive" style={{ width: '60%' }} title="Productive Hours: 60%" />
                <span className="seg-break" style={{ width: '15%' }} title="Break Time: 15%" />
                <span className="seg-overtime" style={{ width: '15%' }} title="Overtime: 15%" />
                <span className="seg-idle" style={{ width: '10%' }} title="Buffer: 10%" />
              </div>
              <div className="timeline-ticks">
                <span>09:00</span>
                <span>11:00</span>
                <span>13:00</span>
                <span>15:00</span>
                <span>17:00</span>
                <span>19:00</span>
              </div>
            </div>

            {/* Attendance Records Table */}
            <div className="support-records-panel">
              <div className="records-hdr">
                <div className="records-hdr-left">
                  <h3>Records</h3>
                  <div className="date-picker-chip">
                    <Calendar size={13} />
                    <span>Today, Oct 2026</span>
                  </div>
                </div>

                <div className="records-hdr-right">
                  <div className="records-search-pill">
                    <Search size={13} color="#94A3B8" />
                    <input type="text" placeholder="Search..." readOnly />
                  </div>
                  <button className="btn-table-export">
                    <Download size={13} />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Table Data */}
              <div className="records-table-wrap">
                <table className="records-table">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Check-In</th>
                      <th>Check-Out</th>
                      <th>Total Hours</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ATTENDANCE_RECORDS.map((rec) => (
                      <tr key={rec.id}>
                        <td>
                          <div className="employee-info-cell">
                            <div className="cell-avatar">{rec.avatar}</div>
                            <div>
                              <strong>{rec.name}</strong>
                              <small>{rec.role}</small>
                            </div>
                          </div>
                        </td>
                        <td>{rec.checkIn}</td>
                        <td>{rec.checkOut}</td>
                        <td><strong>{rec.hours}</strong></td>
                        <td>
                          <span className={`status-pill status-${rec.statusTheme}`}>
                            {rec.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn-row-action">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
