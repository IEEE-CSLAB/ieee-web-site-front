import React from 'react';

export type IconProps = { className?: string };

export const IconPeople: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M4 18c0-2.5 2-4.5 5-4.5s5 2 5 4.5" />
    <path d="M14.5 18c.3-1.7 1.7-3 3.5-3 2 0 3.5 1.5 3.5 3.5" />
  </svg>
);

export const IconUsersGroup: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="8" cy="9" r="2.7" />
    <circle cx="16" cy="9" r="2.7" />
    <path d="M3.5 18c0-2.4 1.9-4.2 4.5-4.2s4.5 1.8 4.5 4.2" />
    <path d="M12.5 18c.3-2.1 2-3.7 4.3-3.7 2.7 0 4.2 2 4.2 4.2" />
  </svg>
);

export const IconCalendar: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16" />
    <path d="M9 3v4" />
    <path d="M15 3v4" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

export const IconTrophy: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
    <path d="M10 18h4" />
    <path d="M9 22h6" />
    <path d="M10 18v-2.2" />
    <path d="M14 18v-2.2" />
    <path d="M4 6h3v2a4 4 0 0 1-4-4v-.5h2" />
    <path d="M20 6h-3v2a4 4 0 0 0 4-4v-.5h-2" />
  </svg>
);

export const IconHandshake: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 8.5 8 5l4 2.5 4-2.5 5 3.5-2.5 3-3.5-2-3 2-3-2-3.5 2L3 8.5Z" />
    <path d="m8 15 2.2 1.7" />
    <path d="m11 14.2 2.2 1.8" />
    <path d="m14 13.8 2.2 1.7" />
  </svg>
);

export const IconLightbulb: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="9" r="4.5" />
    <path d="M9.5 14.5c.3 1.3 1.3 2.5 2.5 2.5s2.2-1.2 2.5-2.5" />
    <path d="M10 19h4" />
    <path d="M10.5 21h3" />
  </svg>
);

export const IconStarCircle: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="m12 7 1.4 3.1 3.1.4-2.4 2.2.7 3.2L12 14.7 9.2 16l.7-3.2L7.5 10.5l3.1-.4L12 7Z" />
  </svg>
);

export const IconMapPin: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-6-5.2-6-10A6 6 0 0 1 18 11c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.3" />
  </svg>
);

export const IconMail: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m5 7 7 5 7-5" />
  </svg>
);

export const IconPhone: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5 9.5 4l1.8 3.2-1.7 1.4a10.5 10.5 0 0 0 5.8 5.8l1.4-1.7 3.2 1.8-.5 2.5c-.2 1-1 1.7-2 1.7A13 13 0 0 1 5.3 6.5c0-1 .7-1.8 1.7-2Z" />
  </svg>
);

