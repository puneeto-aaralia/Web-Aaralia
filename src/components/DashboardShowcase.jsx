import React, { useState } from 'react';
import AaraliaLogo from './AaraliaLogo';
import sameerAvatar from '../assets/sameer-avatar.jpg';
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
  Sparkles,
  Layers,
  ChevronRight,
  User,
  CreditCard,
  Star
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

  return (
    <section className="showcase-section" id="dashboard-preview">
      {/* Soft Decorative Blush Circle on the left matching Reference Image */}
      <div className="showcase-peach-circle-left" aria-hidden="true" />

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

          >
            <Sparkles size={13} />
            <span>Open Live App</span>
          </button>
        </div>

        {/* Mockup Canvas Wrapper with Overlapping Windows and Dual Spotlights */}
        <div className="showcase-mockup-wrapper">
          {/* Base Layer: Dual Overlapping Dashboard Windows matching Reference */}
          <div className="mockup-canvas-base" >

            {/* WINDOW 1: Admin Dashboard (Back Window) */}
            <div className="back-admin-window">
              {/* Topbar */}
              <div className="mockup-topbar">
                <div className="mockup-topbar-left">
                  <AaraliaLogo variant="dark" size="small" showPoweredBy={false} />
                  <span className="hrms-tag">HRMS</span>
                </div>

                <div className="mockup-search-pill">
                  <Search size={13} color="#64748B" />
                  <span>Search...</span>
                </div>

                <div className="mockup-topbar-right">
                  <div className="mockup-punch-pill">
                    <Clock size={12} color="#FFFFFF" />
                    <span>Punch Out <b>03:45:58 hrs</b></span>
                  </div>
                  <div className="mockup-lang">
                    <span>EN</span>
                    <ChevronDown size={11} />
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
                      <LayoutDashboard size={14} color="#E85739" />
                      <span>Dashboard</span>
                    </div>
                    <div className="sidebar-subitem active">Admin Dashboard</div>
                  </div>
                  <div className="sidebar-group">
                    <span className="sidebar-group-title">APPS</span>
                    <div className="sidebar-item"><span>Employees</span></div>
                    <div className="sidebar-item"><span>Attendance</span></div>
                    <div className="sidebar-item"><span>Leave</span></div>
                    <div className="sidebar-item"><span>Payroll</span></div>
                    <div className="sidebar-item"><span>Recruitment</span></div>
                    <div className="sidebar-item"><span>Performance</span></div>
                    <div className="sidebar-item"><span>Training</span></div>
                  </div>
                </div>

                {/* Central Content */}
                <div className="mockup-main-content">
                  <div className="mockup-content-head">
                    <div>
                      <span className="mockup-breadcrumb">Dashboard / Admin Dashboard</span>
                      <h2 className="mockup-welcome">Welcome Back, Sameer</h2>
                      <p className="mockup-approvals-sub">
                        You have <span className="highlight-coral">21 Pending Approvals</span> & <span className="highlight-coral">14 Leave Requests</span>
                      </p>
                    </div>
                    <div className="mockup-action-btns">
                      <button className="btn-mockup-sec"><Download size={12} /> Export <ChevronDown size={10} /></button>
                      <button className="btn-mockup-dark"><Calendar size={12} /> Add Schedule</button>
                      <button className="btn-mockup-orange"><Plus size={13} /> Add Employee</button>
                    </div>
                  </div>

                  {/* 4 Cards Grid */}
                  <div className="mockup-cards-row">
                    <div className="mockup-stat-card">
                      <div className="stat-head">
                        <div className="stat-icon-sq bg-teal-soft"><Calendar size={13} color="#0D9488" /></div>
                        <span className="stat-label">Attendance</span>
                      </div>
                      <div className="stat-value-line">
                        <span className="stat-num">120/154</span>
                        <span className="stat-trend trend-green"><ArrowUpRight size={11} /> +2.1%</span>
                      </div>
                      <span className="stat-foot">View Details</span>
                    </div>

                    <div className="mockup-stat-card">
                      <div className="stat-head">
                        <div className="stat-icon-sq bg-navy-soft"><ShieldCheck size={13} color="#1E293B" /></div>
                        <span className="stat-label">Compliance</span>
                      </div>
                      <div className="stat-value-line">
                        <span className="stat-num">78%</span>
                        <span className="stat-trend trend-red"><ArrowDownRight size={11} /> -2.1%</span>
                      </div>
                      <span className="stat-foot">View All</span>
                    </div>

                    <div className="mockup-stat-card">
                      <div className="stat-head">
                        <div className="stat-icon-sq bg-blue-soft"><Users size={13} color="#2563EB" /></div>
                        <span className="stat-label">Total Employee</span>
                      </div>
                      <div className="stat-value-line">
                        <span className="stat-num">580</span>
                        <span className="stat-trend trend-green"><ArrowUpRight size={11} /> +10.2%</span>
                      </div>
                      <span className="stat-foot">View Details</span>
                    </div>

                    <div className="mockup-stat-card">
                      <div className="stat-head">
                        <div className="stat-icon-sq bg-dark-soft"><Briefcase size={13} color="#475569" /></div>
                        <span className="stat-label">Total Client</span>
                      </div>
                      <div className="stat-value-line">
                        <span className="stat-num">512</span>
                        <span className="stat-trend trend-green"><ArrowUpRight size={11} /> +04%</span>
                      </div>
                      <span className="stat-foot">View All</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WINDOW 2: Employee Details (Front Overlapping Window) matching Reference */}
            <div className="front-details-window">
              <div className="details-window-header">
                <span className="details-breadcrumb">Employee / Employee Details</span>
                <h3 className="details-heading">Employee Details</h3>
              </div>
              <div className="details-tabs-bar">
                <span className="details-tab active">Personal Information</span>
                <span className="details-tab">Finance</span>
              </div>
              <div className="details-window-body">
                {/* Left Column: Personal info */}
                <div className="details-col-left">
                  <div className="details-info-row">
                    <span className="info-label">Phone</span>
                    <span className="info-val">+1 255 685 9182</span>
                  </div>
                  <div className="details-info-row">
                    <span className="info-label">Email</span>
                    <span className="info-val">sameer.raj@example.com</span>
                  </div>
                  <div className="details-info-row">
                    <span className="info-label">Gender</span>
                    <span className="info-val">Male</span>
                  </div>
                  <div className="details-info-row">
                    <span className="info-label">Birthday</span>
                    <span className="info-val">24th July 2000</span>
                  </div>
                  <div className="details-info-row">
                    <span className="info-label">Address</span>
                    <span className="info-val">380 Bayonne Ave, Solihull, West Midlands, Birmingham</span>
                  </div>
                </div>

                {/* Right Column: Bio, Bank Info, Family Info */}
                <div className="details-col-right">
                  <p className="details-bio-text">
                    I'm a UI/UX designer. I deliver exceptional quality work and bring value to your brand with intuitive, user-centric digital experiences and 350+ projects completed worldwide with satisfied customers, high approach, which helped me to create numerous brands that are relevant.
                  </p>

                  <div className="details-bank-section">
                    <h5 className="details-sub-heading">Bank Information</h5>
                    <div className="bank-info-grid">
                      <div className="bank-field">
                        <label>Bank name</label>
                        <span>Seiz International Bank</span>
                      </div>
                      <div className="bank-field">
                        <label>Bank account no</label>
                        <span>159843014641</span>
                      </div>
                      <div className="bank-field">
                        <label>IFSC Code</label>
                        <span>IC024504</span>
                      </div>
                      <div className="bank-field">
                        <label>Branch</label>
                        <span>Alabama</span>
                      </div>
                    </div>
                  </div>

                  <div className="details-family-section">
                    <h5 className="details-sub-heading">Family Information</h5>
                    <div className="family-table">
                      <div className="family-th-row">
                        <span>Name</span>
                        <span>Relationship</span>
                        <span>Date of birth</span>
                        <span>Phone</span>
                      </div>
                      <div className="family-td-row">
                        <span>Hendry Peratt</span>
                        <span>Brother</span>
                        <span>25 May 2014</span>
                        <span>+1 255 685 9182</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 1: Focus on Sameer Raj Profile matching Reference */}
          <div
            className={`magnifier-lens lens-left ${activeLens === 'left' ? 'is-active-lens' : ''}`}

            title="Tap to open interactive live dashboard"
          >
            <div className="lens-content-wrapper lens-profile-wrapper">
              {/* Dark Curved Top Header */}
              <div className="lens-dark-top-arc">
                <div className="lens-avatar-container">
                  <img
                    src={sameerAvatar}
                    alt="Sameer Raj"
                    className="lens-avatar-img"
                  />
                  <span className="lens-status-dot-online" />
                </div>
              </div>

              {/* White Card Body */}
              <div className="lens-profile-body">
                <div className="lens-name-row">
                  <h3 className="lens-profile-name">Sameer Raj</h3>
                  <span className="lens-verified-badge" title="Verified Employee">✔</span>
                </div>

                <div className="lens-profile-tags">
                  <span className="lens-tag-pill"><i className="dot-black" /> Lead UI UX Designer</span>
                  <span className="lens-tag-pill">10+ years of Experience</span>
                </div>

                {/* Key Employee Specs - full row layout */}
                <div className="lens-profile-meta-list">
                  <div className="meta-list-row">
                    <div className="meta-label-group">
                      <CreditCard size={13} color="#64748B" />
                      <span>Employee ID</span>
                    </div>
                    <strong>EMP-0001</strong>
                  </div>

                  <div className="meta-list-row">
                    <div className="meta-label-group">
                      <Star size={13} color="#64748B" />
                      <span>Team</span>
                    </div>
                    <strong>Design</strong>
                  </div>

                  <div className="meta-list-row">
                    <div className="meta-label-group">
                      <Calendar size={13} color="#64748B" />
                      <span>Date Of Join</span>
                    </div>
                    <strong>1st Jan 2026</strong>
                  </div>

                  <div className="meta-list-row">
                    <div className="meta-label-group">
                      <User size={13} color="#64748B" />
                      <span>Reporting Manager</span>
                    </div>
                    <div className="manager-chip">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                        alt="Doglas"
                        className="mgr-avatar-img"
                      />
                      <strong>Doglas Martini</strong>
                    </div>
                  </div>
                </div>

                <div className="lens-device-row">
                  <span>DELL-XPS-15</span>
                </div>

                {/* Subtle blurred background fields showing through lens bottom */}
                <div className="lens-ghost-fields">
                  <div className="ghost-line">
                    <span>Email: sameer.raj@example.com</span>
                    <span>Gender: Male</span>
                  </div>
                  <div className="ghost-line">
                    <span>Bank account no: 159843014641</span>
                    <span>IFSC: IC024504</span>
                  </div>
                  <div className="ghost-line">
                    <span>Family: Hendry Peratt (Brother)</span>
                  </div>
                </div>
              </div>

              {/* Tap to open tag on mobile */}
              <div className="lens-tap-open-tag">
                <span>Tap to open live dashboard</span>
                <ChevronRight size={13} />
              </div>
            </div>
          </div>

          {/* CIRCULAR MAGNIFIER LENS 2: Focus on Actions & Clock-In matching Reference */}
          <div
            className={`magnifier-lens lens-right ${activeLens === 'right' ? 'is-active-lens' : ''}`}

            title="Tap to open interactive live dashboard"
          >
            <div className="lens-content-wrapper lens-actions-wrapper">
              {/* Dark Topbar snippet */}
              <div className="lens-topbar-snippet">
                <div className="lens-punch-pill">
                  <Clock size={11} color="#FFFFFF" />
                  <span>Punch Out <b>03:45:58 hrs</b></span>
                </div>
                <span className="snip-lang">EN ⌄</span>
              </div>

              <div className="lens-actions-body">
                {/* Action Toolbar */}
                <div className="lens-action-toolbar">
                  <button className="lens-btn-sec"><Download size={11} /> Export <ChevronDown size={11} /></button>
                  <div className="lens-date-pill"><Calendar size={11} /> 2025 - 2026</div>
                </div>

                <div className="lens-action-primary-btns">
                  <button className="lens-btn-dark"><Calendar size={12} /> Add Schedule</button>
                  <button className="lens-btn-orange"><Plus size={13} /> Add Employee</button>
                </div>

                {/* Clock In / Out Card */}
                <div className="lens-clock-card">
                  <div className="lens-clock-header">
                    <div className="clock-hdr-left">
                      <h4>Clock-In/Out</h4>
                      <span className="lens-today-tag"><Calendar size={10} /> Today</span>
                    </div>
                    <span className="lens-view-all">View All</span>
                  </div>

                  <div className="lens-clock-list">
                    <div className="lens-emp-card">
                      <div className="lens-emp-meta">
                        <strong>Doglas Martini</strong>
                        <span>Project Manager</span>
                      </div>
                      <div className="lens-time-tag">
                        <Clock size={10} />
                        <b>09:36</b>
                      </div>
                    </div>

                    <div className="lens-emp-card">
                      <div className="lens-emp-meta">
                        <strong>Brian Villalobos</strong>
                        <span>Developer</span>
                      </div>
                      <div className="lens-time-tag-orange">
                        <Clock size={10} />
                        <b>09:15</b>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department breakdown snippet */}
                <div className="lens-dept-snippet">
                  <span className="lens-snippet-title">Employees by Department</span>
                  <div className="lens-mini-bars">
                    <div className="mini-bar-row"><span>UI/UX</span><div className="bar"><div style={{ width: '88%', background: '#0D9488' }} /></div></div>
                    <div className="mini-bar-row"><span>Developer</span><div className="bar"><div style={{ width: '76%', background: '#10B981' }} /></div></div>
                    <div className="mini-bar-row"><span>Management</span><div className="bar"><div style={{ width: '62%', background: '#1E293B' }} /></div></div>
                    <div className="mini-bar-row"><span>HR</span><div className="bar"><div style={{ width: '45%', background: '#EF4444' }} /></div></div>
                  </div>
                </div>
              </div>

              {/* Tap to open tag on mobile */}
              <div className="lens-tap-open-tag">
                <span>Tap to open live dashboard</span>
                <ChevronRight size={13} />
              </div>
            </div>
          </div>
        </div>

        {/* Operating Layer Subtitle & Tabs matching Image 3 */}

      </div>
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
    </section>
  );
}
