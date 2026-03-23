import React from "react";

type SvgProps = { className?: string };

export const svgMap: Record<string, React.FC<SvgProps>> = {
  tower: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="90" y="60" width="120" height="300" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="110" y="20" width="80" height="40" stroke="currentColor" strokeWidth="0.5"/>
      <polygon points="110,20 150,0 190,20" stroke="#c8874a" strokeWidth="0.7" fill="none"/>
      <line x1="90" y1="140" x2="210" y2="140" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="90" y1="220" x2="210" y2="220" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="90" y1="300" x2="210" y2="300" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="150" y1="60" x2="150" y2="360" stroke="currentColor" strokeWidth="0.25"/>
      <rect x="100" y="80" width="35" height="45" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="165" y="80" width="35" height="45" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="100" y="155" width="35" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="165" y="155" width="35" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="100" y="235" width="35" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="165" y="235" width="35" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="120" y="310" width="60" height="50" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="50" y1="360" x2="250" y2="360" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="40" y1="60" x2="40" y2="360" stroke="#c8874a" strokeWidth="0.3" strokeDasharray="4 4"/>
      <line x1="260" y1="20" x2="260" y2="360" stroke="#c8874a" strokeWidth="0.3" strokeDasharray="4 4"/>
    </svg>
  ),
  cultural: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="120" width="220" height="240" stroke="currentColor" strokeWidth="0.6"/>
      <polygon points="40,120 150,30 260,120" stroke="#c8874a" strokeWidth="0.7" fill="none"/>
      <line x1="40" y1="200" x2="260" y2="200" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="40" y1="280" x2="260" y2="280" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="150" y1="120" x2="150" y2="360" stroke="currentColor" strokeWidth="0.25"/>
      <rect x="60" y="145" width="70" height="40" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="170" y="145" width="70" height="40" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="60" y="215" width="60" height="50" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="180" y="215" width="60" height="50" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="110" y="295" width="80" height="65" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="20" y1="360" x2="280" y2="360" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  ),
  precinct: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="60" width="100" height="300" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="145" y="120" width="120" height="240" stroke="currentColor" strokeWidth="0.6"/>
      <line x1="30" y1="360" x2="265" y2="360" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="130" y1="60" x2="130" y2="360" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="40" y="80" width="50" height="45" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="40" y="145" width="50" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="40" y="205" width="50" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="40" y="265" width="50" height="40" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="155" y="140" width="98" height="70" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="155" y="225" width="98" height="65" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="155" y="305" width="98" height="55" stroke="currentColor" strokeWidth="0.4"/>
      <line x1="20" y1="360" x2="10" y2="360" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="10" y1="60" x2="10" y2="360" stroke="#c8874a" strokeWidth="0.3" strokeDasharray="4 4"/>
    </svg>
  ),
  waterfront: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 360 Q150 60 260 360" stroke="currentColor" strokeWidth="0.6" fill="none"/>
      <path d="M65 360 Q150 100 235 360" stroke="currentColor" strokeWidth="0.4" fill="none"/>
      <path d="M90 360 Q150 160 210 360" stroke="#c8874a" strokeWidth="0.5" fill="none"/>
      <line x1="20" y1="360" x2="280" y2="360" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="150" cy="100" r="16" stroke="#c8874a" strokeWidth="0.6" fill="none"/>
      <line x1="150" y1="60" x2="150" y2="360" stroke="currentColor" strokeWidth="0.25" strokeDasharray="5 4"/>
      <line x1="40" y1="240" x2="260" y2="240" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="60" y1="290" x2="240" y2="290" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="20" y1="380" x2="280" y2="380" stroke="currentColor" strokeWidth="0.4" strokeDasharray="6 3"/>
      <line x1="20" y1="390" x2="280" y2="390" stroke="currentColor" strokeWidth="0.2" strokeDasharray="4 5"/>
    </svg>
  ),
  residence: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 200 L30 380 L270 380 L270 200 L150 80 Z" stroke="currentColor" strokeWidth="0.6" fill="none"/>
      <line x1="30" y1="380" x2="270" y2="380" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="30" y1="290" x2="270" y2="290" stroke="currentColor" strokeWidth="0.35"/>
      <rect x="50" y="220" width="65" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="185" y="220" width="65" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="115" y="300" width="70" height="80" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="150" y1="80" x2="150" y2="380" stroke="currentColor" strokeWidth="0.25"/>
      <ellipse cx="150" cy="150" rx="30" ry="18" stroke="#c8874a" strokeWidth="0.5" fill="none"/>
      <line x1="50" y1="220" x2="30" y2="200" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="250" y1="220" x2="270" y2="200" stroke="currentColor" strokeWidth="0.3"/>
    </svg>
  ),
  arts: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="80" width="260" height="280" stroke="currentColor" strokeWidth="0.6"/>
      <ellipse cx="150" cy="80" rx="80" ry="35" stroke="#c8874a" strokeWidth="0.6" fill="none"/>
      <line x1="20" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="20" y1="280" x2="280" y2="280" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="150" y1="80" x2="150" y2="360" stroke="currentColor" strokeWidth="0.25"/>
      <rect x="35" y="100" width="80" height="60" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="185" y="100" width="80" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="35" y="195" width="80" height="70" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="185" y="195" width="80" height="70" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="110" y="295" width="80" height="65" stroke="#c8874a" strokeWidth="0.5"/>
      <line x1="10" y1="360" x2="290" y2="360" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  ),
  library: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="150" cy="220" rx="130" ry="80" stroke="currentColor" strokeWidth="0.6" fill="none"/>
      <ellipse cx="150" cy="220" rx="95" ry="55" stroke="#c8874a" strokeWidth="0.5" fill="none"/>
      <line x1="20" y1="220" x2="280" y2="220" stroke="currentColor" strokeWidth="0.3"/>
      <line x1="150" y1="140" x2="150" y2="300" stroke="currentColor" strokeWidth="0.3"/>
      <rect x="115" y="290" width="70" height="70" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="20" y1="360" x2="280" y2="360" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="150" cy="360" rx="130" ry="15" stroke="currentColor" strokeWidth="0.3" fill="none"/>
      <line x1="20" y1="370" x2="280" y2="370" stroke="currentColor" strokeWidth="0.2" strokeDasharray="5 3"/>
      <line x1="20" y1="378" x2="280" y2="378" stroke="currentColor" strokeWidth="0.15" strokeDasharray="4 4"/>
      <circle cx="150" cy="180" r="20" stroke="#c8874a" strokeWidth="0.5" fill="none"/>
    </svg>
  ),
  parliament: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="140" width="260" height="220" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="20" y="140" width="260" height="70" stroke="#c8874a" strokeWidth="0.5"/>
      <ellipse cx="150" cy="80" rx="60" ry="60" stroke="currentColor" strokeWidth="0.6" fill="none"/>
      <line x1="90" y1="80" x2="90" y2="140" stroke="currentColor" strokeWidth="0.4"/>
      <line x1="210" y1="80" x2="210" y2="140" stroke="currentColor" strokeWidth="0.4"/>
      <line x1="150" y1="20" x2="150" y2="80" stroke="#c8874a" strokeWidth="0.5"/>
      <line x1="20" y1="280" x2="280" y2="280" stroke="currentColor" strokeWidth="0.35"/>
      <rect x="40" y="165" width="50" height="30" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="125" y="165" width="50" height="30" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="210" y="165" width="50" height="30" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="100" y="300" width="100" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <line x1="10" y1="360" x2="290" y2="360" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="40" y="215" width="50" height="55" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="210" y="215" width="50" height="55" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="130" y="205" width="40" height="65" stroke="currentColor" strokeWidth="0.4"/>
    </svg>
  ),
  hotel: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="60" width="220" height="300" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="40" y="60" width="220" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <line x1="40" y1="180" x2="260" y2="180" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="40" y1="280" x2="260" y2="280" stroke="currentColor" strokeWidth="0.35"/>
      <line x1="150" y1="120" x2="150" y2="360" stroke="currentColor" strokeWidth="0.25"/>
      <rect x="55" y="80" width="42" height="22" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="115" y="80" width="70" height="22" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="203" y="80" width="42" height="22" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="55" y="195" width="42" height="60" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="115" y="195" width="70" height="60" stroke="#c8874a" strokeWidth="0.5"/>
      <rect x="203" y="195" width="42" height="60" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="55" y="295" width="42" height="55" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="203" y="295" width="42" height="55" stroke="currentColor" strokeWidth="0.4"/>
      <rect x="120" y="295" width="60" height="65" stroke="currentColor" strokeWidth="0.5"/>
      <line x1="20" y1="360" x2="280" y2="360" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  ),
};
