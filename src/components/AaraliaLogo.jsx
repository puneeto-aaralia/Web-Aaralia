import React from 'react';
import logoDark from '../assets/aaralia-logo-dark.png';
import markOnly from '../assets/aaralia-mark-only.png';

export default function AaraliaLogo({ variant = 'light', size = 'default', showPoweredBy = false }) {
  const isDark = variant === 'dark';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';
  const companyColor = isDark ? '#F1F5F9' : '#0F172A';
  const dividerColor = isDark ? 'rgba(255, 255, 255, 0.22)' : '#CBD5E1';

  const logoHeight = size === 'small' ? 24 : size === 'large' ? 36 : 28;
  const dividerHeight = size === 'small' ? 18 : size === 'large' ? 24 : 20;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', userSelect: 'none' }}>
      {isDark ? (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={markOnly}
            alt="Aaralia"
            style={{
              height: `${logoHeight}px`,
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              flexShrink: 0
            }}
          />
          <span
            style={{
              color: '#FFFFFF',
              fontSize: size === 'small' ? '20px' : size === 'large' ? '28px' : '23px',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              lineHeight: 1,
              fontFamily: 'var(--font-family)',
            }}
          >
            aralia
          </span>
        </div>
      ) : (
        <img
          src={logoDark}
          alt="Aaralia"
          style={{
            height: `${logoHeight}px`,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            flexShrink: 0
          }}
        />
      )}

      {showPoweredBy && (
        <>
          <div
            style={{
              width: '1px',
              height: `${dividerHeight}px`,
              backgroundColor: dividerColor,
              margin: '0 2px'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span
              style={{
                fontSize: '9.5px',
                color: subtextColor,
                fontWeight: 500,
                letterSpacing: '0.2px',
              }}
            >
              powered by
            </span>
            <span
              style={{
                fontSize: '11px',
                color: companyColor,
                fontWeight: 700,
                letterSpacing: '-0.2px',
              }}
            >
              Aaura Softwares
            </span>
          </div>
        </>
      )}
    </div>
  );
}
