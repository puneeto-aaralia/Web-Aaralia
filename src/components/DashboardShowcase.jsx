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
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import './DashboardShowcase.css';

const DEPARTMENT_TABS = [
  { id: 'people', label: 'People', description: 'Real-time headcounts, retention risk signals, and auto-synced org structures.' },
  { id: 'revenue', label: 'Revenue', description: 'Unify sales velocity, CRM pipeline health, and employee quota achievements.' },
  { id: 'finance', label: 'Finance', description: 'Automated payroll distribution, tax filing compliance, and contractor payouts.' },
  { id: 'learning', label: 'Learning', description: 'Close skill gaps, track certifications, and integrate growth into daily workflows.' },
  { id: 'operations', label: 'Operations', description: 'Biometric time clocks, leave requests, shift schedules, and operational workflows.' }
];

export default function DashboardShowcase({ onLaunchFullDashboard }) {
  const [activeTab, setActiveTab] = useState('people');
  const [activeLens, setActiveLens] = useState('left'); // 'left' | 'right'

  const activeTabData = DEPARTMENT_TABS.find(t => t.id === activeTab) || DEPARTMENT_TABS[0];

  return (
    <section className="showcase-section" id="dashboard-preview">
      {/* Soft Decorative Blush Glow matching Screenshot 5 */}
      <div className="showcase-blush-blob" aria-hidden="true" />

      <div className="showcase-container">
        {/* Mobile Spotlight Focus Switcher */}
        <div className="showcase-mobile-lens-tabs">
          <button
            type="button"
            className={`mobile-lens-btn ${activeLens === 'left' ? 'active' : ''}`}
            onClick={() => setActiveLens('left')}
          >
            <span>1. Sameer Raj Profile</span>
          </button>
          <button
            type="button"
            className={`mobile-lens-btn ${activeLens === 'right' ? 'active' : ''}`}
            onClick={() => setActiveLens('right')}
          >
            <span>2. Actions & Clock-In</span>
          </button>
          <button
            type="button"
            className="mobile-lens-btn launch-direct"
            onClick={onLaunchFullDashboard}
          >
            <Sparkles size={13} />
            <span>Open Live App</span>
          </button>
        </div>

        {/* Mockup Frame Wrapper with Responsive Magnifying Lens Overlays matching Screenshot 5 */}
        <div className="showcase-mockup-wrapper">
          {/* Base Dashboard Canvas */}
          <div className="mockup-canvas-base" onClick={onLaunchFullDashboard} role="button" tabIndex={0} title="Click to open interactive dashboard">
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
                    alt="Sameer"
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
                    <LayoutDashboard size={15} color="#E85739" />
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
                      <span className="stat-label">Total Employee</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">580</span>
                      <span className="stat-trend trend-green"><ArrowUpRight size={12} /> +10.2%</span>
                    </div>
                    <span className="stat-foot">View Details</span>
                  </div>

                  <div className="mockup-stat-card">
                    <div className="stat-head">
                      <div className="stat-icon-sq bg-dark-soft"><Briefcase size={14} color="#475569" /></div>
                      <span className="stat-label">Total Client</span>
                    </div>
                    <div className="stat-value-line">
                      <span className="stat-num">512</span>
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
                  </div>

                  <div className="mockup-dept-panel">
                    <div className="panel-hdr">
                      <strong>Employees by Department</strong>
                    </div>
                    <div className="dept-bars-mini">
                      <div className="dept-bar-item"><span>Legal</span><div className="track"><div className="fill" style={{ width: '88%', background: '#0D9488' }} /></div></div>
                      <div className="dept-bar-item"><span>Intelligence</span><div className="track"><div className="fill" style={{ width: '76%', background: '#10B981' }} /></div></div>
                      <div className="dept-bar-item"><span>Management</span><div className="track"><div className="fill" style={{ width: '62%', background: '#3B82F6' }} /></div></div>
                      <div className="dept-bar-item"><span>HR</span><div className="track"><div className="fill" style={{ width: '45%', background: '#EF4444' }} /></div></div>
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
                        <span className="time-badge">09:36</span>
                      </div>
                      <div className="clock-emp-row">
                        <div className="avatar-mini">VL</div>
                        <div>
                          <strong>Villalobos</strong>
                          <small>Developer</small>
                        </div>
                        <span className="time-badge">09:15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 1: Focus on Sameer Raj Profile & Details (Screenshot 5) */}
          <div
            className={`magnifier-lens lens-left ${activeLens === 'left' ? 'is-active-lens' : ''}`}
            onClick={onLaunchFullDashboard}
            title="Tap to open interactive live dashboard"
          >
            <div className="lens-content-wrapper lens-profile-wrapper">
              {/* Profile Header */}
              <div className="lens-profile-head">
                <div className="lens-avatar-ring">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Sameer Raj"
                    className="lens-avatar-img"
                  />
                  <span className="lens-status-dot-online" />
                </div>
                <div className="lens-profile-identity">
                  <div className="lens-name-row">
                    <h3 className="lens-profile-name">Sameer Raj</h3>
                    <span className="lens-verified-badge" title="Verified Employee">✔</span>
                  </div>
                  <div className="lens-profile-tags">
                    <span className="lens-tag-pill"><i className="dot-green" /> Lead UI UX Designer</span>
                    <span className="lens-tag-pill">10+ years of Experience</span>
                  </div>
                </div>
              </div>

              {/* Grid of Key Employee Specs */}
              <div className="lens-profile-meta-grid">
                <div className="meta-row">
                  <div className="meta-label-group">
                    <Users size={12} color="#64748B" />
                    <span>Employee ID</span>
                  </div>
                  <strong>EMP-0001</strong>
                </div>

                <div className="meta-row">
                  <div className="meta-label-group">
                    <Briefcase size={12} color="#64748B" />
                    <span>Team</span>
                  </div>
                  <strong>Design</strong>
                </div>

                <div className="meta-row">
                  <div className="meta-label-group">
                    <Calendar size={12} color="#64748B" />
                    <span>Date Of Join</span>
                  </div>
                  <strong>1st Jan 2026</strong>
                </div>

                <div className="meta-row">
                  <div className="meta-label-group">
                    <Users size={12} color="#64748B" />
                    <span>Reporting Manager</span>
                  </div>
                  <div className="manager-chip">
                    <div className="mgr-avatar">DM</div>
                    <strong>Doglas Martini</strong>
                  </div>
                </div>

                <div className="meta-row">
                  <div className="meta-label-group">
                    <Layers size={12} color="#64748B" />
                    <span>Device</span>
                  </div>
                  <strong>DELL-XPS-15</strong>
                </div>
              </div>

              {/* Form tabs snippet at bottom */}
              <div className="lens-sub-tabs-strip">
                <span className="sub-tab active">Personal Information</span>
                <span className="sub-tab">Bank Details</span>
                <span className="sub-tab">Family Information</span>
                <span className="sub-tab">Experience</span>
              </div>

              {/* Tap to open tag on mobile */}
              <div className="lens-tap-open-tag">
                <span>Tap to open live dashboard</span>
                <ChevronRight size={13} />
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 2: Focus on Actions & Clock-In Stream (Screenshot 5) */}
          <div
            className={`magnifier-lens lens-right ${activeLens === 'right' ? 'is-active-lens' : ''}`}
            onClick={onLaunchFullDashboard}
            title="Tap to open interactive live dashboard"
          >
            <div className="lens-content-wrapper lens-actions-wrapper">
              <div className="lens-action-toolbar">
                <button className="lens-btn-sec"><Download size={13} /> Export <ChevronDown size={11} /></button>
                <div className="lens-date-pill">2025 - 2026</div>
              </div>

              <div className="lens-action-primary-btns">
                <button className="lens-btn-dark"><Calendar size={13} /> Add Schedule</button>
                <button className="lens-btn-orange"><Plus size={13} /> Add Employee</button>
              </div>

              <div className="lens-clock-header">
                <div className="clock-hdr-left">
                  <h4>Clock-In/Out</h4>
                  <span className="lens-today-tag"><Calendar size={11} /> Today</span>
                </div>
                <span className="lens-view-all">View All</span>
              </div>

              <div className="lens-clock-list">
                <div className="lens-emp-card">
                  <div className="lens-avatar">DM</div>
                  <div className="lens-emp-meta">
                    <strong>Doglas Martini</strong>
                    <span>Project Manager</span>
                  </div>
                  <div className="lens-time-tag">
                    <Clock size={11} />
                    <b>09:36</b>
                  </div>
                </div>

                <div className="lens-emp-card">
                  <div className="lens-avatar">VL</div>
                  <div className="lens-emp-meta">
                    <strong>Villalobos</strong>
                    <span>Developer</span>
                  </div>
                  <div className="lens-time-tag">
                    <Clock size={11} />
                    <b>09:15</b>
                  </div>
                </div>
              </div>

              {/* Department breakdown snippet */}
              <div className="lens-dept-snippet">
                <span className="lens-snippet-title">Employees by Department</span>
                <div className="lens-mini-bars">
                  <div className="mini-bar-row"><span>Legal</span><div className="bar"><div style={{ width: '88%', background: '#0D9488' }} /></div></div>
                  <div className="mini-bar-row"><span>Intelligence</span><div className="bar"><div style={{ width: '76%', background: '#10B981' }} /></div></div>
                  <div className="mini-bar-row"><span>Management</span><div className="bar"><div style={{ width: '62%', background: '#1E293B' }} /></div></div>
                  <div className="mini-bar-row"><span>HR</span><div className="bar"><div style={{ width: '45%', background: '#EF4444' }} /></div></div>
                </div>
              </div>

              {/* Tap to open tag on mobile */}
              <div className="lens-tap-open-tag">
                <span>Tap to open live dashboard</span>
                <ChevronRight size={13} />
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
        <div className="operating-layer-row">
          <p className="operating-layer-label">
            One intelligent operating layer for every team<br />
            that keeps your business moving.
          </p>

          <div className="operating-layer-tabs">
            {DEPARTMENT_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`operating-tab-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Description subtext */}
        <div className="operating-layer-desc">
          <span>{activeTabData.description}</span>
        </div>
      </div>
    </section>
  );
}

