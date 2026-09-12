import React from 'react';

export const SubtleMaroonFlowLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="w-full h-auto opacity-35"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q360,10 720,45 T1440,35"
          stroke="#8B1417"
          strokeWidth="0.75"
          strokeDasharray="4 8"
        />
        <path
          d="M0,45 Q360,20 720,40 T1440,30"
          stroke="#8B1417"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
        <circle cx="720" cy="42" r="2.5" fill="#8B1417" fillOpacity="0.8" />
      </svg>
    </div>
  );
};
