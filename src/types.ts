export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  liveUrl: string;
  theme: {
    accentColor: string;
    bgTone: string;
    badgeText: string;
  };
  details: {
    year: string;
    role: string;
    deliverables: string[];
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  focus: string;
}

export interface NavItem {
  label: string;
  href: string;
}
