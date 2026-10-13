import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import './ShowInterestModal.css';

export default function ShowInterestModal({ isOpen, onClose, onOpenPrivacy }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const recipientEmail = import.meta.env.VITE_LEADS_RECIPIENT_EMAIL || 'saurabh.k@aaralia.com';
    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      let response;

      if (web3Key) {
        // Web3Forms API integration
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Aaralia Demo Request: ${formData.company} (${formData.name})`,
            from_name: 'Aaralia Web Leads',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            team_size: formData.teamSize,
            message: `Lead Submission Details:\n\n• Full Name: ${formData.name}\n• Work Email: ${formData.email}\n• Contact No: ${formData.phone}\n• Company: ${formData.company}\n• Company Size: ${formData.teamSize}`
          })
        });
      } else {
        // Direct email dispatch to saurabh.k@aaralia.com via FormSubmit AJAX endpoint
        response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Aaralia Demo Request: ${formData.company} (${formData.name})`,
            _template: 'table',
            _captcha: 'false',
            'Full Name': formData.name,
            'Work Email': formData.email,
            'Contact No': formData.phone,
            'Company Name': formData.company,
            'Company Size': formData.teamSize
          })
        });
      }

      if (response && response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Email service response was not ok');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setErrorMessage(
        'Unable to send automatically over network. Click below to send via your email client directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage('');
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
              Our enterprise team will reach out to <strong>{formData.email || formData.phone || 'you'}</strong> with an interactive sandbox demonstration tailored to your workflow.
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
                  <label>Contact No *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
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
              </div>

              <div className="interest-input-row">
                <div className="interest-field interest-field-full">
                  <label>Company Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option value="1-9">1 - 9 employees</option>
                    <option value="10-49">10 - 49 employees</option>
                    <option value="50-99">50 - 99 employees</option>
                    <option value="100-499">100 - 499 employees</option>
                    <option value="500+">500+ enterprise</option>
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
              {errorMessage && (
                <div className="interest-error-banner">
                  <AlertCircle size={16} className="error-icon" />
                  <div className="error-text">
                    <span>{errorMessage}</span>
                    <a
                      href={`mailto:saurabh.k@aaralia.com?subject=Aaralia Demo Request: ${encodeURIComponent(formData.company)}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nTeam Size: ${formData.teamSize}`
                      )}`}
                      className="error-mailto-link"
                    >
                      Send via Email App →
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="interest-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="btn-spinner" />
                    <span>Sending your details...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Your Request</span>
                    <ArrowRight size={16} />
                  </>
                )}
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
