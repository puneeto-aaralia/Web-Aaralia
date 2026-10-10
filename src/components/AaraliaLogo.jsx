import React from 'react';

export default function AaraliaLogo({ variant = 'light', size = 'default', showPoweredBy = true }) {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B1320';
  const subtextColor = isDark ? '#94A3B8' : '#64748B';
  const dividerColor = isDark ? 'rgba(255, 255, 255, 0.2)' : '#CBD5E1';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}>
      {/* Brand Icon Mark - Coral / Orange Folded Ribbon */}
      <svg
        width={size === 'small' ? 28 : size === 'large' ? 44 : 36}
        height={size === 'small' ? 28 : size === 'large' ? 44 : 36}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="40" height="40" rx="10" fill="#EA580C" fillOpacity="0.08" />
        {/* Soft coral organic folded A / ribbon shape matching Figma */}
        <path
          d="M12 28.5L20 8.5L28 28.5H23.5L20 19.5L16.5 28.5H12Z"
          fill="#EA580C"
        />
        <circle cx="20" cy="24.5" r="2.4" fill="#EA580C" />
      </svg>

      {/* Brand Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            color: textColor,
            fontSize: size === 'small' ? '20px' : size === 'large' ? '28px' : '23px',
            fontWeight: 800,
            letterSpacing: '-0.7px',
            lineHeight: 1,
            fontFamily: 'var(--font-family)',
          }}
        >
          aralia
        </span>

        {showPoweredBy && (
          <>
            <div
              style={{
                width: '1px',
                height: size === 'small' ? '18px' : '22px',
                backgroundColor: dividerColor,
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
                  color: isDark ? '#E2E8F0' : '#1E293B',
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
