import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import './ShowInterestModal.css';

export default function ShowInterestModal({ isOpen, onClose, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '50-200',
    modules: {
      people: true,
      crm: false,
      payroll: false,
      learning: false,
    }
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const _handleCheckboxChange = (module) => {
    setFormData(prev => ({
      ...prev,
      modules: {
        ...prev.modules,
        [module]: !prev.modules[module]
      }
    }));
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="interest-modal-backdrop" onClick={onClose}>
      <div className="interest-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="interest-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="interest-success-state">
            <div className="success-icon-badge">
              <CheckCircle2 size={36} color="#10B981" />
            </div>
            <h3>Thank You for Showing Interest!</h3>
            <p>
              We've received your request for <strong>{formData.company || 'your organization'}</strong>.
              Our enterprise team will reach out with an interactive sandbox demonstration tailored to your workflow.
            </p>
            <button className="btn-success-close" onClick={handleReset}>
              Return to Website
            </button>
          </div>
        ) : (
          <div className="interest-form-state">
            <div className="interest-modal-badge">
              <Sparkles size={14} color="#E85739" />
              <span>EARLY ACCESS & DEMO</span>
            </div>

            <h3 className="interest-modal-title">Experience the unified power of Aaralia</h3>
            <p className="interest-modal-sub">
              Connect your people, operations, payroll, and customer relationships in one intelligent platform.
            </p>

            <form onSubmit={handleSubmit} className="interest-form">
              <div className="interest-input-row">
                <div className="interest-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="interest-field">
                  <label>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="interest-input-row">
                <div className="interest-field">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Global Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="interest-field">
                  <label>Company Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option value="1-9">1 -  employees</option>
                    <option value="10-49">10 - 49 employees</option>
                    <option value="50-99">50 - 99 employees</option>
                    {/* <option value="1000+">1,00+ enterprise</option> */}
                  </select>
                </div>
              </div>

              {/* <div className="interest-modules-group">
                <label className="group-label">Select solutions of interest:</label>
                <div className="modules-checkboxes">
                  <label className={`checkbox-pill ${formData.modules.people ? 'is-selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={formData.modules.people}
                      onChange={() => handleCheckboxChange('people')}
                    />
                    <span>People & HR</span>
                  </label>
                  <label className={`checkbox-pill ${formData.modules.crm ? 'is-selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={formData.modules.crm}
                      onChange={() => handleCheckboxChange('crm')}
                    />
                    <span>CRM</span>
                  </label>
                  <label className={`checkbox-pill ${formData.modules.payroll ? 'is-selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={formData.modules.payroll}
                      onChange={() => handleCheckboxChange('payroll')}
                    />
                    <span>Payroll</span>
                  </label>
                  <label className={`checkbox-pill ${formData.modules.learning ? 'is-selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={formData.modules.learning}
                      onChange={() => handleCheckboxChange('learning')}
                    />
                    <span>Learning</span>
                  </label>
                </div>
              </div> */}
              {/* saurabh */}
              <button type="submit" className="interest-submit-btn">
                <span>Submit Your Request</span>
                <ArrowRight size={16} />
              </button>

              <p className="interest-privacy-disclaimer">
                By submitting, you agree to our{' '}
                <button
                  type="button"
                  className="interest-privacy-link-btn"
                  onClick={() => {
                    if (onOpenPrivacy) onOpenPrivacy();
                  }}
                >
                  Privacy Policy
                </button>
                .
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
