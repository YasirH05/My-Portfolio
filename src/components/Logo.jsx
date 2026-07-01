import React from 'react';

const Logo = ({ size = 32, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="yGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b685ff" />
          <stop offset="100%" stopColor="#7db4ff" />
        </linearGradient>
      </defs>

      {/* H Letter */}
      <path 
        d="M 105 85 L 125 85 L 125 105 L 155 105 L 155 85 L 175 85 L 175 145 L 155 145 L 155 125 L 125 125 L 125 145 L 105 145 Z" 
        fill="var(--text-heading, #fff)" 
      />
      
      {/* Y Letter Cutout (creates the gap slice) */}
      <path 
        d="M 60 70 L 100 120 M 140 70 L 70 155" 
        stroke="var(--bg-color, #0F1720)" 
        strokeWidth="32" 
        strokeLinecap="butt" 
      />
      
      {/* Y Letter Foreground */}
      <path 
        d="M 60 70 L 100 120 M 140 70 L 70 155" 
        stroke="url(#yGrad)" 
        strokeWidth="20" 
        strokeLinecap="butt" 
      />
    </svg>
  );
};

export default Logo;
