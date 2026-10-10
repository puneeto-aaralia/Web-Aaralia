import React from 'react';
import markOnly from '../assets/aaralia-mark-only.png';

export default function AaraliaLogo({ variant = 'light', size = 'default', showPoweredBy = true }) {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B1320';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';
  const companyColor = isDark ? '#F1F5F9' : '#0F172A';
  const dividerColor = isDark ? 'rgba(255, 255, 255, 0.22)' : '#CBD5E1';

  const markHeight = size === 'small' ? 26 : size === 'large' ? 42 : 32;
  const fontSize = size === 'small' ? '20px' : size === 'large' ? '28px' : '23px';
  const dividerHeight = size === 'small' ? '18px' : size === 'large' ? '26px' : '22px';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
      {/* Official Aaralia Mark from User Upload */}
      <img
        src={markOnly}
        alt="Aaralia"
        style={{
          height: `${markHeight}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          flexShrink: 0
        }}
      />

      {/* Brand Text 'aaralia' with aa after icon */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            color: textColor,
            fontSize: fontSize,
            fontWeight: 850,
            letterSpacing: '-0.7px',
            lineHeight: 1,
            fontFamily: 'var(--font-family)',
          }}
        >
          aaralia
        </span>

        {showPoweredBy && (
          <>
            <div
              style={{
                width: '1px',
                height: dividerHeight,
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
    </div>
  );
}
