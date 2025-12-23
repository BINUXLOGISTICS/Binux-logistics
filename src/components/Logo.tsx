import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  lightMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 200, lightMode = false }) => {
  const darkBlue = lightMode ? '#ffffff' : '#1A365D';
  const mediumBlue = lightMode ? '#cccccc' : '#2B4C7E';
  const orange = '#F68B1E';
  const textColor = lightMode ? '#ffffff' : 'black';
  const subtitleColor = lightMode ? '#cccccc' : '#A0AEC0';
  const frameColor = lightMode ? '#aaaaaa' : '#CBD5E0';
  const chassisColor = lightMode ? '#333333' : '#0F172A';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      width={width} 
      height={height}
      style={{ display: 'block' }}
    >
      <circle cx="400" cy="380" r="190" fill="none" stroke={darkBlue} strokeWidth="12" strokeDasharray="800 400" transform="rotate(-10 400 380)"/>
      <circle cx="400" cy="380" r="210" fill="none" stroke={darkBlue} strokeWidth="8" strokeDasharray="1000 300" transform="rotate(20 400 380)"/>

      <g id="truck" transform="translate(180, 280)">
        <rect x="10" y="50" width="40" height="8" fill={darkBlue} />
        <rect x="25" y="65" width="35" height="8" fill={orange} />
        <rect x="5" y="80" width="50" height="8" fill={darkBlue} />
        <rect x="30" y="95" width="25" height="8" fill={darkBlue} />
        
        <path d="M60,40 L160,40 L160,140 L60,140 Z" fill={mediumBlue} />
        
        <path d="M165,40 L280,40 Q300,40 305,60 L315,140 L165,140 Z" fill={darkBlue} />
        <path d="M210,50 L285,50 L295,85 L210,85 Z" fill={orange} />
        <rect x="300" y="95" width="50" height="40" rx="5" fill={frameColor} />
        <rect x="310" y="100" width="30" height="30" fill={orange} />
        <path d="M60,140 L350,140 L350,160 L60,160 Z" fill={chassisColor} />

        <circle cx="120" cy="165" r="25" fill={darkBlue} stroke={frameColor} strokeWidth="5" />
        <circle cx="120" cy="165" r="10" fill={orange} />
        <circle cx="230" cy="165" r="28" fill={darkBlue} stroke={frameColor} strokeWidth="6" />
        <circle cx="230" cy="165" r="12" fill={orange} />
      </g>

      <g transform="translate(400, 560)">
        <text x="0" y="0" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="100" fill={textColor} textAnchor="middle">BINUX</text>
        <text x="0" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="50" fill={subtitleColor} textAnchor="middle" letterSpacing="2">Logistics</text>
      </g>
    </svg>
  );
};

export default Logo;
