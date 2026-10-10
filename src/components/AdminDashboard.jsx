import React, { useState, useEffect } from 'react';
import AaraliaLogo from './AaraliaLogo';
import {
  Search,
  Bell,
  Clock,
  ChevronDown,
  Calendar,
  Download,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  ShieldCheck,
  UserPlus,
  Briefcase,
  Check,
  X,
  Filter,
  CheckCircle,
  MoreVertical,
  Layers,
  ArrowLeft
} from 'lucide-react';
import './AdminDashboard.css';

const INITIAL_EMPLOYEES = [
  { id: 1, name: 'Doglas Martini', role: 'Project Manager', dept: 'Management', inTime: '09:02 AM', outTime: '05:30 PM', status: 'In', avatar: 'DM' },
  { id: 2, name: 'Villalobos', role: 'Lead Architect', dept: 'Intelligence', inTime: '09:15 AM', outTime: '--', status: 'In', avatar: 'VL' },
  { id: 3, name: 'Sara Mendes', role: 'HR Specialist', dept: 'HR', inTime: '08:55 AM', outTime: '05:00 PM', status: 'In', avatar: 'SM' },
  { id: 4, name: 'Alex Chen', role: 'Product Designer', dept: 'Marketing', inTime: '09:30 AM', outTime: '--', status: 'In', avatar: 'AC' },
  { id: 5, name: 'Elena Rostova', role: 'SecOps Analyst', dept: 'Legal', inTime: '08:45 AM', outTime: '04:55 PM', status: 'In', avatar: 'ER' },
  { id: 6, name: 'Marcus Bell', role: 'Account Exec', dept: 'Sales', inTime: '10:05 AM', outTime: '--', status: 'In', avatar: 'MB' }
];

const INITIAL_APPROVALS = [
  { id: 101, title: 'Annual Leave Request (5 days)', employee: 'Sara Mendes', date: 'Oct 14 - Oct 19', type: 'Leave' },
  { id: 102, title: 'Equipment Reimbursement ($480)', employee: 'Villalobos', date: 'Submitted Today', type: 'Expense' },
  { id: 103, title: 'Overtime Claim (8.5 hrs)', employee: 'Doglas Martini', date: 'Submitted Yesterday', type: 'Overtime' }
];

export default function AdminDashboard({ onBackToLanding }) {
  // Live Punch timer state
  const [punchSeconds, setPunchSeconds] = useState(13558); // ~03:45:58 hrs
  const [isPunchedIn, setIsPunchedIn] = useState(true);

  // Data states
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [pendingApprovals, setPendingApprovals] = useState(INITIAL_APPROVALS);
  const [leaveCount, setLeaveCount] = useState(14);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Panels
  const [activeModal, setActiveModal] = useState(null); // 'addEmployee' | 'approvals' | 'leave' | 'export'
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpRole, setNewEmpRole] = useState('');
  const [newEmpDept, setNewEmpDept] = useState('Intelligence');
  const [toast, setToast] = useState(null);

  // Timer ticker
  useEffect(() => {
    if (!isPunchedIn) return;
    const interval = setInterval(() => {
      setPunchSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPunchedIn]);

  const formatTimer = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs} hrs`;
  };

  const handlePunchToggle = () => {
    if (isPunchedIn) {
      setIsPunchedIn(false);
      showToast('Punched out successfully.');
    } else {
      setIsPunchedIn(true);
      showToast('Punched in. Timer resumed.');
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddEmployeeSubmit = (e) => {
    e.preventDefault();
    if (!newEmpName.trim()) return;

    const initials = newEmpName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newEmp = {
      id: Date.now(),
      name: newEmpName,
      role: newEmpRole || 'Associate',
      dept: newEmpDept,
      inTime: 'Just now',
      outTime: '--',
      status: 'In',
      avatar: initials || 'EM'
    };

    setEmployees([newEmp, ...employees]);
    setNewEmpName('');
    setNewEmpRole('');
    setActiveModal(null);
    showToast(`Added ${newEmp.name} to team roster!`);
  };

  const handleApprove = (id) => {
    setPendingApprovals(prev => prev.filter(item => item.id !== id));
    showToast('Approval confirmed and recorded in audit log.');
  };

  const handleReject = (id) => {
    setPendingApprovals(prev => prev.filter(item => item.id !== id));
    showToast('Request dismissed.');
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-root">
      {/* Top Application Bar */}
      <header className="dash-topbar">
        <div className="dash-topbar-left">
          <button className="dash-back-btn" onClick={onBackToLanding} title="Back to Landing Page">
            <ArrowLeft size={16} />
            <span>Landing Page</span>
          </button>
          <div className="dash-brand-divider"></div>
          <AaraliaLogo variant="dark" size="default" />
        </div>

        {/* Global Search Bar */}
        <div className="dash-search-container">
          <Search size={16} className="dash-search-icon" />
          <input
            type="text"
            className="dash-search-input"
            placeholder="Search employees, approvals, metrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Top Right Controls matching Figma */}
        <div className="dash-topbar-right">
          <button
            className={`dash-punch-btn ${isPunchedIn ? 'punched-in' : 'punched-out'}`}
            onClick={handlePunchToggle}
            title="Click to Punch In / Punch Out"
          >
            <Clock size={15} />
            <span>{isPunchedIn ? 'Punch Out' : 'Punch In'}</span>
            <span className="punch-timer-digits">{formatTimer(punchSeconds)}</span>
          </button>

          <div className="dash-lang-selector">
            <span>EN</span>
            <ChevronDown size={14} />
          </div>

          <div className="dash-user-avatar" title="Sameer (Admin)">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Sameer"
              className="user-img"
            />
            <span className="user-online-dot"></span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="dash-main-area">
        {/* Breadcrumb & Welcome Bar */}
        <div className="dash-header-section">
          <div className="dash-header-info">
            <div className="dash-breadcrumb">
              <span>Dashboard</span>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Admin Dashboard</span>
            </div>

            <h1 className="dash-welcome-title">Welcome Back, Sameer</h1>

            <p className="dash-welcome-sub">
              You have{' '}
              <button className="highlight-link" onClick={() => setActiveModal('approvals')}>
                {pendingApprovals.length + 18} Pending Approvals
              </button>{' '}
              &{' '}
              <button className="highlight-link" onClick={() => setActiveModal('leave')}>
                {leaveCount} Leave Requests
              </button>
            </p>
          </div>

          {/* Action Toolbar matching Figma */}
          <div className="dash-toolbar-actions">
            <button className="dash-btn-secondary" onClick={() => setActiveModal('export')}>
              <Download size={15} />
              <span>Export</span>
              <ChevronDown size={13} />
            </button>

            <button className="dash-btn-secondary" onClick={() => showToast('Schedule template loaded')}>
              <Calendar size={15} />
              <span>Add Schedule</span>
            </button>

            <button className="dash-btn-primary" onClick={() => setActiveModal('addEmployee')}>
              <Plus size={16} />
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* 4 Stat KPI Cards Grid */}
        <div className="dash-kpi-grid">
          {/* 1. Attendance */}
          <div className="kpi-card">
            <div className="kpi-card-header">
              <div className="kpi-icon-pill icon-teal">
                <Calendar size={16} />
              </div>
              <span className="kpi-label">Attendance</span>
            </div>
            <div className="kpi-metric-row">
              <span className="kpi-value">{employees.length + 114}/154</span>
              <span className="kpi-trend trend-up">
                <ArrowUpRight size={14} />
                <span>+2.1%</span>
              </span>
            </div>
            <div className="kpi-footer-link">
              <button onClick={() => showToast('Viewing complete attendance logs')}>View Details</button>
            </div>
          </div>

          {/* 2. Compliance */}
          <div className="kpi-card">
            <div className="kpi-card-header">
              <div className="kpi-icon-pill icon-navy">
                <ShieldCheck size={16} />
              </div>
              <span className="kpi-label">Compliance</span>
            </div>
            <div className="kpi-metric-row">
              <span className="kpi-value">78%</span>
              <span className="kpi-trend trend-down">
                <ArrowDownRight size={14} />
                <span>-2.1%</span>
              </span>
            </div>
            <div className="kpi-footer-link">
              <button onClick={() => showToast('Opened security compliance breakdown')}>View All</button>
            </div>
          </div>

          {/* 3. New Recruits */}
          <div className="kpi-card">
            <div className="kpi-card-header">
              <div className="kpi-icon-pill icon-indigo">
                <UserPlus size={16} />
              </div>
              <span className="kpi-label">Recruits This Month</span>
            </div>
            <div className="kpi-metric-row">
              <span className="kpi-value">16</span>
              <span className="kpi-trend trend-up">
                <ArrowUpRight size={14} />
                <span>+10.2%</span>
              </span>
            </div>
            <div className="kpi-footer-link">
              <button onClick={() => showToast('Viewing 16 newly onboarded profiles')}>View Details</button>
            </div>
          </div>

          {/* 4. Bench Employees */}
          <div className="kpi-card">
            <div className="kpi-card-header">
              <div className="kpi-icon-pill icon-dark">
                <Briefcase size={16} />
              </div>
              <span className="kpi-label">Bench Employees</span>
            </div>
            <div className="kpi-metric-row">
              <span className="kpi-value">17</span>
              <span className="kpi-trend trend-up">
                <ArrowUpRight size={14} />
                <span>+4.1%</span>
              </span>
            </div>
            <div className="kpi-footer-link">
              <button onClick={() => showToast('Opening unassigned talent resource pool')}>View All</button>
            </div>
          </div>
        </div>

        {/* Dashboard Main Visual Layout (Charts + Live Clock In/Out feed) */}
        <div className="dash-visual-grid">
          {/* Left Column: Attendance Overview & Department Analytics */}
          <div className="dash-visual-col-left">
            {/* Speedometer Gauge Attendance Overview Card */}
            <div className="dash-panel-card">
              <div className="panel-card-head">
                <div>
                  <h3 className="panel-title">Attendance Overview</h3>
                  <p className="panel-sub">Real-time workplace presence distribution</p>
                </div>
                <div className="panel-badge-pill">
                  <span className="panel-pill-dot"></span>
                  <span>120 Active Now</span>
                </div>
              </div>

              {/* Speedometer Half-Gauge SVG */}
              <div className="gauge-chart-container">
                <div className="gauge-svg-wrapper">
                  <svg viewBox="0 0 200 115" className="gauge-svg">
                    {/* Background Arc */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#EEF2F6"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    {/* Green Segment (Active - 78%) */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 125 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    {/* Yellow Segment (On Leave - 12%) */}
                    <path
                      d="M 130 26 A 80 80 0 0 1 162 55"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    {/* Red Segment (Absent/Late - 10%) */}
                    <path
                      d="M 166 60 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Center Metric */}
                  <div className="gauge-center-content">
                    <span className="gauge-main-number">120</span>
                    <span className="gauge-sub-label">Total In-Office</span>
                  </div>
                </div>

                {/* Gauge Legend */}
                <div className="gauge-legend-row">
                  <div className="legend-item">
                    <span className="legend-dot bg-emerald"></span>
                    <span className="legend-name">Active (68%)</span>
                    <strong className="legend-count">112</strong>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot bg-teal"></span>
                    <span className="legend-name">Remote (18%)</span>
                    <strong className="legend-count">21</strong>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot bg-amber"></span>
                    <span className="legend-name">On Leave (10%)</span>
                    <strong className="legend-count">12</strong>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot bg-rose"></span>
                    <span className="legend-name">Bench (4%)</span>
                    <strong className="legend-count">04</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Employees By Department Breakdown */}
            <div className="dash-panel-card">
              <div className="panel-card-head">
                <div>
                  <h3 className="panel-title">Employees by Department</h3>
                  <p className="panel-sub">Capacity utilization and staffing health</p>
                </div>
                <button className="dash-pill-btn" onClick={() => showToast('Synced latest department weights')}>
                  <Filter size={13} />
                  <span>All Depts</span>
                </button>
              </div>

              <div className="dept-bars-list">
                {[
                  { dept: 'Legal & Risk', count: 18, pct: 88, color: '#0D9488' },
                  { dept: 'Intelligence & AI', count: 32, pct: 76, color: '#10B981' },
                  { dept: 'Management', count: 14, pct: 62, color: '#3B82F6' },
                  { dept: 'People & HR', count: 12, pct: 45, color: '#F59E0B' },
                  { dept: 'Sales & Revenue', count: 28, pct: 91, color: '#EF4444' },
                  { dept: 'Marketing & Brand', count: 16, pct: 70, color: '#8B5CF6' },
                ].map((item, idx) => (
                  <div key={idx} className="dept-bar-row">
                    <div className="dept-label-col">
                      <span className="dept-name">{item.dept}</span>
                      <span className="dept-count">{item.count} staff</span>
                    </div>
                    <div className="dept-bar-track">
                      <div
                        className="dept-bar-fill"
                        style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                    <span className="dept-pct">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clock-In/Out Live Stream */}
          <div className="dash-visual-col-right">
            <div className="dash-panel-card">
              <div className="panel-card-head">
                <div>
                  <h3 className="panel-title">Clock-In/Out</h3>
                  <p className="panel-sub">Real-time attendance stream</p>
                </div>
                <div className="panel-date-badge">
                  <Calendar size={13} />
                  <span>Today</span>
                </div>
              </div>

              <div className="clock-in-list">
                {filteredEmployees.map((emp) => (
                  <div key={emp.id} className="clock-in-row">
                    <div className="clock-avatar-col">
                      <div className="emp-avatar-circle">{emp.avatar}</div>
                    </div>

                    <div className="clock-info-col">
                      <div className="emp-name-line">
                        <strong className="emp-name">{emp.name}</strong>
                        <span className="emp-dept-tag">{emp.dept}</span>
                      </div>
                      <span className="emp-role">{emp.role}</span>
                    </div>

                    <div className="clock-time-col">
                      <div className="in-time-badge">
                        <span className="time-label">In:</span>
                        <span className="time-val">{emp.inTime}</span>
                      </div>
                      {emp.outTime !== '--' && (
                        <div className="out-time-badge">
                          <span className="time-label">Out:</span>
                          <span className="time-val">{emp.outTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="panel-bottom-action">
                <button
                  className="full-list-btn"
                  onClick={() => showToast('Loaded 142 total employees for today')}
                >
                  View All Attendance Logs
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL: Add Employee */}
      {activeModal === 'addEmployee' && (
        <div className="dash-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="dash-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="dash-modal-header">
              <h3>Add New Employee</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}><X size={18} /></button>
            </div>
            <form onSubmit={handleAddEmployeeSubmit} className="dash-modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Jordan Vance"
                  value={newEmpName}
                  onChange={(e) => setNewEmpName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Frontend Architect"
                  value={newEmpRole}
                  onChange={(e) => setNewEmpRole(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select value={newEmpDept} onChange={(e) => setNewEmpDept(e.target.value)}>
                  <option value="Intelligence">Intelligence & AI</option>
                  <option value="Management">Management</option>
                  <option value="HR">People & HR</option>
                  <option value="Sales">Sales & CRM</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Legal">Legal</option>
                </select>
              </div>
              <div className="dash-modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setActiveModal(null)}>Cancel</button>
                <button type="submit" className="btn-save">Confirm & Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Pending Approvals Drawer */}
      {activeModal === 'approvals' && (
        <div className="dash-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="dash-modal-box wide" onClick={(e) => e.stopPropagation()}>
            <div className="dash-modal-header">
              <h3>Pending Approvals ({pendingApprovals.length})</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}><X size={18} /></button>
            </div>
            <div className="approvals-list-modal">
              {pendingApprovals.length === 0 ? (
                <p className="empty-state">All approvals processed! Great job.</p>
              ) : (
                pendingApprovals.map((item) => (
                  <div key={item.id} className="approval-row-item">
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.employee} • {item.date}</p>
                    </div>
                    <div className="approval-btns">
                      <button className="btn-approve" onClick={() => handleApprove(item.id)}>
                        <Check size={14} /> Approve
                      </button>
                      <button className="btn-reject" onClick={() => handleReject(item.id)}>
                        <X size={14} /> Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Leave Requests */}
      {activeModal === 'leave' && (
        <div className="dash-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="dash-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="dash-modal-header">
              <h3>Leave Requests Queue</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}><X size={18} /></button>
            </div>
            <p style={{ fontSize: '14px', color: '#5A6980', marginBottom: '16px' }}>
              Currently 14 leave requests awaiting department review.
            </p>
            <button
              className="btn-save"
              style={{ width: '100%' }}
              onClick={() => {
                setLeaveCount(prev => Math.max(0, prev - 1));
                showToast('Next leave request in queue approved.');
                setActiveModal(null);
              }}
            >
              Approve Next in Queue
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Export Menu */}
      {activeModal === 'export' && (
        <div className="dash-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="dash-modal-box small" onClick={(e) => e.stopPropagation()}>
            <div className="dash-modal-header">
              <h3>Export Report</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}><X size={18} /></button>
            </div>
            <div className="export-options">
              <button
                className="export-opt-btn"
                onClick={() => {
                  showToast('Exported Attendance CSV to downloads');
                  setActiveModal(null);
                }}
              >
                CSV Attendance Ledger (.csv)
              </button>
              <button
                className="export-opt-btn"
                onClick={() => {
                  showToast('Exported Compliance PDF summary');
                  setActiveModal(null);
                }}
              >
                Executive Compliance PDF (.pdf)
              </button>
              <button
                className="export-opt-btn"
                onClick={() => {
                  showToast('Synced to Payroll API endpoint');
                  setActiveModal(null);
                }}
              >
                Sync Directly to Aaralia Payroll
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Toast Notification */}
      {toast && (
        <div className="dash-live-toast">
          <CheckCircle size={16} color="#10B981" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
