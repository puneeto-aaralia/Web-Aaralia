import React, { useState } from 'react';
import AaraliaLogo from './AaraliaLogo';
import {
  Calendar,
  Download,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  ShieldCheck,
  Briefcase,
  Search,
  Clock,
  ChevronDown,
  LayoutDashboard,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import './DashboardShowcase.css';

const DEPARTMENT_TABS = [
  { id: 'people', label: 'People', description: 'Real-time headcounts, retention risk signals, and auto-synced org structures.' },
  { id: 'revenue', label: 'Revenue', description: 'Unify sales velocity, CRM pipeline health, and employee quota achievements.' },
  { id: 'finance', label: 'Finance', description: 'Automated payroll distribution, tax filing compliance, and contractor payouts.' },
  { id: 'operations', label: 'Operations', description: 'Biometric time clocks, leave requests, shift schedules, and operational workflows.' },
  { id: 'intelligence', label: 'Intelligence', description: 'Cross-functional predictive recommendations powered by Aaralia AI context engine.' }
];

export default function DashboardShowcase({ onLaunchFullDashboard }) {
  const [activeTab, setActiveTab] = useState('people');
  const [lensHovered, setLensHovered] = useState(null);

  const activeTabData = DEPARTMENT_TABS.find(t => t.id === activeTab) || DEPARTMENT_TABS[0];

  return (
    <section className="showcase-section" id="dashboard-preview">
      <div className="showcase-container">
        {/* Mockup Frame Wrapper with Magnifying Lens Overlays */}
        <div className="showcase-mockup-wrapper">
          {/* Background Blurred Base Dashboard Canvas */}
          <div className="mockup-canvas-base">
            {/* Top Bar */}
            <div className="mockup-topbar">
              <div className="mockup-topbar-left">
                <AaraliaLogo variant="dark" size="small" showPoweredBy={true} />
              </div>
              <div className="mockup-search-pill">
                <Search size={14} color="#64748B" />
                <span>Search employees, approvals, metrics...</span>
              </div>
              <div className="mockup-topbar-right">
                <div className="mockup-punch-pill">
                  <Clock size={13} color="#FFFFFF" />
                  <span>Punch Out</span>
                  <strong>03:45:58 hrs</strong>
                </div>
                <div className="mockup-lang">
                  <span>EN</span>
                  <ChevronDown size={12} />
                </div>
                <div className="mockup-user-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                    alt="User"
                  />
                </div>
              </div>
            </div>

            {/* Main Body */}
            <div className="mockup-body">
              {/* Sidebar */}
              <div className="mockup-sidebar">
                <div className="sidebar-group">
                  <span className="sidebar-group-title">MAIN MENU</span>
                  <div className="sidebar-item active">
                    <LayoutDashboard size={15} color="#EA580C" />
                    <span className="text-active">Dashboard</span>
                  </div>
                  <div className="sidebar-subitem active">Admin Dashboard</div>
                </div>
                <div className="sidebar-group">
                  <span className="sidebar-group-title">APPS</span>
                  <div className="sidebar-item"><span>Employees</span></div>
                  <div className="sidebar-item"><span>Attendance</span></div>
                  <div className="sidebar-item"><span>Leave Management</span></div>
                  <div className="sidebar-item"><span>Payroll</span></div>
                  <div className="sidebar-item"><span>Recruitment</span></div>
                  <div className="sidebar-item"><span>Performance</span></div>
                  <div className="sidebar-item"><span>Training</span></div>
                </div>
              </div>

              {/* Central Content */}
              <div className="mockup-main-content">
                {/* Header */}
                <div className="mockup-content-head">
                  <div>
                    <span className="mockup-breadcrumb">Dashboard / Admin Dashboard</span>
                    <h2 className="mockup-welcome">Welcome Back, Sameer</h2>
                    <p className="mockup-approvals-sub">
                      You have <span className="highlight-coral">21 Pending Approvals</span> & <span className="highlight-coral">14 Leave Requests</span>
                    </p>
                  </div>
                  <div className="mockup-action-btns">
                    <button className="btn-mockup-sec"><Download size={13} /> Export <ChevronDown size={11} /></button>
                    <button className="btn-mockup-dark"><Calendar size={13} /> Add Schedule</button>
                    <button className="btn-mockup-orange"><Plus size={14} /> Add Employee</button>
                  </div>
                </div>

                {/* 4 Cards Grid */}
                <div className="mockup-cards-row">
                  <div className="mockup-stat-card">
                    <div className="stat-head">
                      <div className="stat-icon-sq bg-teal-soft"><Calendar size={14} color="#0D9488" /></div>
                      <span className="stat-label">Attendance</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">120/154</span>
                      <span className="stat-trend trend-green"><ArrowUpRight size={12} /> +2.1%</span>
                    </div>
                    <span className="stat-foot">View Details</span>
                  </div>

                  <div className="mockup-stat-card">
                    <div className="stat-head">
                      <div className="stat-icon-sq bg-navy-soft"><ShieldCheck size={14} color="#1E293B" /></div>
                      <span className="stat-label">Compliance</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">78%</span>
                      <span className="stat-trend trend-red"><ArrowDownRight size={12} /> -2.1%</span>
                    </div>
                    <span className="stat-foot">View All</span>
                  </div>

                  <div className="mockup-stat-card">
                    <div className="stat-head">
                      <div className="stat-icon-sq bg-blue-soft"><Users size={14} color="#2563EB" /></div>
                      <span className="stat-label">Payouts This Month</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">112</span>
                      <span className="stat-trend trend-green"><ArrowUpRight size={12} /> +10.2%</span>
                    </div>
                    <span className="stat-foot">View Details</span>
                  </div>

                  <div className="mockup-stat-card">
                    <div className="stat-head">
                      <div className="stat-icon-sq bg-dark-soft"><Briefcase size={14} color="#475569" /></div>
                      <span className="stat-label">Bench Employees</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">17</span>
                      <span className="stat-trend trend-green"><ArrowUpRight size={12} /> +04%</span>
                    </div>
                    <span className="stat-foot">View All</span>
                  </div>
                </div>

                {/* Lower Row: Charts & Clock-In */}
                <div className="mockup-lower-row">
                  <div className="mockup-gauge-panel">
                    <div className="panel-hdr">
                      <strong>Attendance Overview</strong>
                      <span className="badge-today">Today</span>
                    </div>
                    <div className="gauge-circle-art">
                      <svg viewBox="0 0 160 90" className="mini-gauge">
                        <path d="M 15 80 A 65 65 0 0 1 145 80" fill="none" stroke="#E2E8F0" strokeWidth="18" strokeLinecap="round" />
                        <path d="M 15 80 A 65 65 0 0 1 100 20" fill="none" stroke="#10B981" strokeWidth="18" strokeLinecap="round" />
                        <path d="M 104 22 A 65 65 0 0 1 130 45" fill="none" stroke="#F59E0B" strokeWidth="18" strokeLinecap="round" />
                        <path d="M 134 50 A 65 65 0 0 1 145 80" fill="none" stroke="#EF4444" strokeWidth="18" strokeLinecap="round" />
                      </svg>
                      <div className="gauge-center-val">
                        <span className="gauge-big-num">120</span>
                        <span className="gauge-sub">Present</span>
                      </div>
                    </div>
                    <div className="gauge-legend-mini">
                      <span><b style={{ color: '#10B981' }}>●</b> Active: 112</span>
                      <span><b style={{ color: '#0D9488' }}>●</b> Remote: 21</span>
                      <span><b style={{ color: '#F59E0B' }}>●</b> Leave: 12</span>
                      <span><b style={{ color: '#EF4444' }}>●</b> Bench: 04</span>
                    </div>
                  </div>

                  <div className="mockup-dept-panel">
                    <div className="panel-hdr">
                      <strong>Employees by Department</strong>
                    </div>
                    <div className="dept-bars-mini">
                      <div className="dept-bar-item"><span>Legal</span><div className="track"><div className="fill" style={{ width: '88%', background: '#0D9488' }} /></div></div>
                      <div className="dept-bar-item"><span>Intelligence</span><div className="track"><div className="fill" style={{ width: '76%', background: '#10B981' }} /></div></div>
                      <div className="dept-bar-item"><span>Management</span><div className="track"><div className="fill" style={{ width: '62%', background: '#3B82F6' }} /></div></div>
                      <div className="dept-bar-item"><span>HR</span><div className="track"><div className="fill" style={{ width: '45%', background: '#F59E0B' }} /></div></div>
                      <div className="dept-bar-item"><span>Sales</span><div className="track"><div className="fill" style={{ width: '91%', background: '#EF4444' }} /></div></div>
                    </div>
                  </div>

                  <div className="mockup-clock-panel">
                    <div className="panel-hdr">
                      <strong>Clock-In/Out</strong>
                      <span className="badge-today">Today</span>
                    </div>
                    <div className="clock-stream-mini">
                      <div className="clock-emp-row">
                        <div className="avatar-mini">DM</div>
                        <div>
                          <strong>Doglas Martini</strong>
                          <small>Project Manager</small>
                        </div>
                        <span className="time-badge">09:02 AM</span>
                      </div>
                      <div className="clock-emp-row">
                        <div className="avatar-mini">VL</div>
                        <div>
                          <strong>Villalobos</strong>
                          <small>Lead Architect</small>
                        </div>
                        <span className="time-badge">09:15 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 1: Focus on Welcome, Approvals & KPIs (Screenshot 4) */}
          <div
            className={`magnifier-lens lens-left ${lensHovered === 'left' ? 'is-active' : ''}`}
            onMouseEnter={() => setLensHovered('left')}
            onMouseLeave={() => setLensHovered(null)}
            title="Focus Lens: Executive KPI Hub"
          >
            <div className="lens-content-wrapper">
              <div className="lens-inner-header">
                <span className="lens-badge">Overview Focus</span>
                <span className="lens-sub">Admin / Workspace</span>
              </div>
              <h3 className="lens-welcome-title">Welcome Back, Sameer</h3>
              <p className="lens-approvals-line">
                You have <span className="coral-bold">21</span> Pending Approvals & <span className="coral-bold">14</span> Leave Requests
              </p>

              <div className="lens-kpis-mini-grid">
                <div className="lens-stat-box">
                  <div className="lens-stat-icon-row">
                    <div className="lens-icon-dot bg-teal" />
                    <span>Attendance</span>
                  </div>
                  <div className="lens-stat-num-row">
                    <strong>120/154</strong>
                    <span className="trend-badge-up"><ArrowUpRight size={13} /> +2.1%</span>
                  </div>
                  <span className="lens-link">View Details</span>
                </div>

                <div className="lens-stat-box">
                  <div className="lens-stat-icon-row">
                    <div className="lens-icon-dot bg-navy" />
                    <span>Compliance</span>
                  </div>
                  <div className="lens-stat-num-row">
                    <strong>78%</strong>
                    <span className="trend-badge-down"><ArrowDownRight size={13} /> -2.1%</span>
                  </div>
                  <span className="lens-link">View All</span>
                </div>
              </div>

              {/* Gauge and legend snippet inside circle */}
              <div className="lens-gauge-snippet">
                <div className="lens-gauge-visual">
                  <svg viewBox="0 0 120 70" className="lens-gauge-svg">
                    <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 10 60 A 50 50 0 0 1 76 14" fill="none" stroke="#10B981" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 79 16 A 50 50 0 0 1 98 34" fill="none" stroke="#F59E0B" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 101 38 A 50 50 0 0 1 110 60" fill="none" stroke="#EF4444" strokeWidth="14" strokeLinecap="round" />
                  </svg>
                  <span className="lens-gauge-center">120</span>
                </div>
                <div className="lens-gauge-pills">
                  <span className="pill-metric"><i style={{ background: '#10B981' }} /> Active <b>112</b></span>
                  <span className="pill-metric"><i style={{ background: '#0D9488' }} /> Remote <b>21</b></span>
                  <span className="pill-metric"><i style={{ background: '#F59E0B' }} /> Leave <b>12</b></span>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 2: Focus on Actions & Clock-In Stream (Screenshot 4 & 5) */}
          <div
            className={`magnifier-lens lens-right ${lensHovered === 'right' ? 'is-active' : ''}`}
            onMouseEnter={() => setLensHovered('right')}
            onMouseLeave={() => setLensHovered(null)}
            title="Focus Lens: Live Operations & Attendance"
          >
            <div className="lens-content-wrapper">
              <div className="lens-action-toolbar">
                <button className="lens-btn-sec"><Download size={13} /> Export <ChevronDown size={11} /></button>
                <button className="lens-btn-dark"><Calendar size={13} /> Add Schedule</button>
                <button className="lens-btn-primary"><Plus size={13} /> Add</button>
              </div>

              <div className="lens-clock-header">
                <h4>Clock-In/Out</h4>
                <span className="lens-today-tag"><Calendar size={12} /> Today</span>
              </div>

              <div className="lens-clock-list">
                <div className="lens-emp-card">
                  <div className="lens-avatar">DM</div>
                  <div className="lens-emp-meta">
                    <strong>Doglas Martini</strong>
                    <span>Project Manager</span>
                  </div>
                  <div className="lens-time-tag">
                    <small>In</small>
                    <b>09:02 AM</b>
                  </div>
                </div>

                <div className="lens-emp-card">
                  <div className="lens-avatar">VL</div>
                  <div className="lens-emp-meta">
                    <strong>Villalobos</strong>
                    <span>Lead Architect</span>
                  </div>
                  <div className="lens-time-tag">
                    <small>In</small>
                    <b>09:15 AM</b>
                  </div>
                </div>
              </div>

              {/* Department breakdown snippet */}
              <div className="lens-dept-snippet">
                <span className="lens-snippet-title">Department Distribution</span>
                <div className="lens-mini-bars">
                  <div className="mini-bar-row"><span>Intelligence</span><div className="bar"><div style={{ width: '76%', background: '#10B981' }} /></div></div>
                  <div className="mini-bar-row"><span>Sales</span><div className="bar"><div style={{ width: '91%', background: '#EF4444' }} /></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Floating Trigger Button to launch live dashboard */}
          <div className="showcase-floating-cta">
            <button className="btn-launch-full-app" onClick={onLaunchFullDashboard}>
              <Sparkles size={16} />
              <span>Launch Interactive Admin Dashboard</span>
              <ExternalLink size={15} />
            </button>
          </div>
        </div>

        {/* Operating Layer Subtitle & Tabs matching Screenshot 5 */}
        <div className="operating-layer-footer">
          <h2 className="operating-layer-title">
            One intelligent operating layer for every team
          </h2>

          <div className="operating-tabs-bar">
            {DEPARTMENT_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="tab-explanation-sub">
            {activeTabData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
