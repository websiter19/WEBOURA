import { Project, ServiceItem, ProcessStep, NavItem } from '../types';

export const STUDIO_CONFIG = {
  name: 'WEBOURA',
  tagline: 'BUILDING DIGITAL EXPERIENCES.',
  subline: 'WE BUILD DIGITAL EXPERIENCES.',
  email: 'webouraa@gmail.com',
  instagramUsername: '@weboura',
  instagramUrl: 'https://www.instagram.com/weboura/',
  location: 'AVAILABLE INTERNATIONALLY',
  status: 'CURRENTLY ACCEPTING SELECT PROJECTS',
  year: '2026',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ember-cafe',
    number: '01',
    category: '01 / WEB EXPERIENCE',
    title: 'EMBER CAFÉ PORTFOLIO',
    description: 'A warm and visually engaging digital experience designed for a modern café.',
    liveUrl: 'https://ember-cafe-protofilo.lovable.app',
    theme: {
      accentColor: '#4E121D',
      bgTone: '#F4ECE4',
      badgeText: 'ARTISANAL & HOSPITALITY',
    },
    details: {
      year: '2025',
      role: 'Creative Direction & Full-Stack Development',
      deliverables: ['Editorial Web Layout', 'Artisanal Coffee Menu UI', 'Mobile Experience'],
    },
  },
  {
    id: 'hospital',
    number: '02',
    category: '02 / WEB EXPERIENCE',
    title: 'HOSPITAL PORTFOLIO',
    description: 'A clean and functional healthcare platform designed around accessibility and appointment booking.',
    liveUrl: 'https://hospital-booking-38.preview.emergentagent.com',
    theme: {
      accentColor: '#1B3B36',
      bgTone: '#EBF1F0',
      badgeText: 'HEALTHCARE & SYSTEMS',
    },
    details: {
      year: '2025',
      role: 'Interface Architecture & System Design',
      deliverables: ['Care Accessibility', 'Appointment Scheduling', 'Patient Portal'],
    },
  },
  {
    id: 'gym',
    number: '03',
    category: '03 / WEB EXPERIENCE',
    title: 'GYM PORTFOLIO',
    description: 'A bold and energetic website experience built for a modern fitness brand.',
    liveUrl: 'https://iron-strength-hub-16.preview.emergentagent.com/',
    theme: {
      accentColor: '#361519',
      bgTone: '#EAE6E1',
      badgeText: 'PERFORMANCE & ATHLETICS',
    },
    details: {
      year: '2025',
      role: 'Brand Digitalization & High-Impact Web Design',
      deliverables: ['Dynamic Class Timetable', 'Membership Funnel', 'Bold Kinetic Typography'],
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'DESIGN',
    description: 'Creating distinctive, modern website experiences.',
    deliverables: [
      'Art direction & creative strategy',
      'Editorial visual identities',
      'Interactive prototyping',
      'Design systems & typography hierarchy',
    ],
  },
  {
    number: '02',
    title: 'DEVELOP',
    description: 'Building responsive and functional digital experiences.',
    deliverables: [
      'Modern bespoke frontend engineering',
      'Fluid micro-interactions & motion',
      'Cross-device performance & accessibility',
      'Clean, maintainable architecture',
    ],
  },
  {
    number: '03',
    title: 'MAINTAIN',
    description: 'Keeping websites updated, improved, and running smoothly.',
    deliverables: [
      'Continuous performance tuning',
      'Feature updates & iteration',
      'Security audits & uptime monitoring',
      'Ongoing technical stewardship',
    ],
  },
  {
    number: '04',
    title: 'GROW',
    description: 'Helping your digital presence evolve as your business grows.',
    deliverables: [
      'Conversion optimization & refinement',
      'New capability integration',
      'Search discoverability & semantic SEO',
      'Long-term brand scaling',
    ],
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understanding your business, goals, audience, and vision.',
    focus: 'Strategic foundation & creative alignment',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Creating the visual direction and digital experience.',
    focus: 'Editorial exploration & bespoke layout systems',
  },
  {
    number: '03',
    title: 'DEVELOP',
    description: 'Turning the design into a responsive and functional website.',
    focus: 'Meticulous engineering, motion & clean code',
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'Testing, refining, and preparing everything for launch.',
    focus: 'Cross-browser assurance & seamless deployment',
  },
];
