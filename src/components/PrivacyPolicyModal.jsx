import React, { useEffect } from 'react';
import { X, Shield, Mail, Check } from 'lucide-react';
import AaraliaLogo from './AaraliaLogo';
import logoDark from '../assets/aaralia-logo-dark.png';
import './PrivacyPolicyModal.css';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  // Close on Escape key press and prevent background scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="policy-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div
        className="policy-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="policy-modal-header">
          <div className="policy-brand-row">
            <AaraliaLogo size="small" showPoweredBy={true} />
            <span className="policy-badge">
              <Shield size={12} className="policy-badge-icon" />
              Official Policy
            </span>
          </div>

          <button
            type="button"
            className="policy-modal-close"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="policy-modal-scroll-area">
          <div className="policy-document-sheet">
            {/* Background Watermark Logo matching document design */}
            <div className="policy-watermark" aria-hidden="true">
              <img src={logoDark} alt="" className="policy-watermark-img" />
            </div>

            <div className="policy-content-body">
              <h1 id="policy-modal-title" className="policy-title">
                Privacy Policy
              </h1>

              <p className="policy-lead-intro">
                Aaralia, powered by Aaura Softwares and operated by Aaura Softwares Inc., respects your privacy.
              </p>

              <div className="policy-sections-list">
                <div className="policy-clause-item">
                  <span className="policy-clause-label">Information we collect:</span>
                  <p className="policy-clause-text">
                    We collect contact and account details, information you or your organization provide through our HR, CRM, payroll, and learning tools, and technical information such as device details and usage activity.
                  </p>
                </div>

                <div className="policy-clause-item">
                  <span className="policy-clause-label">How we use it:</span>
                  <p className="policy-clause-text">
                    We use information to deliver our services, operate enabled AI features, provide support, improve performance, maintain security, and meet legal obligations. When your organization provides your information, we process it according to its instructions and our agreement.
                  </p>
                </div>

                <div className="policy-clause-item">
                  <span className="policy-clause-label">Sharing and storage:</span>
                  <p className="policy-clause-text">
                    We may share information with service providers and authorized integrations as needed to deliver our services, or where legally required. Information may be processed in Canada.
                  </p>
                </div>

                <div className="policy-clause-item">
                  <span className="policy-clause-label">Cookies and security:</span>
                  <p className="policy-clause-text">
                    We use cookies to support functionality and analytics, if applicable, requesting consent where required. We apply reasonable safeguards and retain personal information only as long as needed for service delivery and legal requirements.
                  </p>
                </div>

                <div className="policy-clause-item">
                  <span className="policy-clause-label">Your choices:</span>
                  <p className="policy-clause-text">
                    Subject to applicable law, you may request access, correction, or deletion of your information and withdraw consent where applicable. For organization-managed records, contact your employer or account administrator. You may unsubscribe from marketing emails at any time.
                  </p>
                </div>

                <div className="policy-clause-item policy-contact-item">
                  <span className="policy-clause-label">Contact:</span>
                  <p className="policy-clause-text">
                    For privacy questions or requests, email{' '}
                    <a href="mailto:info@aaralia.com" className="policy-email-link">
                      <Mail size={13} className="inline-mail-icon" />
                      info@aaralia.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="policy-footer-note">
                <p>
                  We may update this policy and will post changes on this page, with additional notice where required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="policy-modal-footer">
          <div className="policy-footer-meta">
            <span>Operated by Aaura Softwares Inc.</span>
            <span className="meta-bullet">•</span>
            <span>Effective 2026</span>
          </div>
          <button
            type="button"
            className="policy-modal-acknowledge-btn"
            onClick={onClose}
          >
            <Check size={16} />
            <span>I Understand</span>
          </button>
        </div>
      </div>
    </div>
  );
}
