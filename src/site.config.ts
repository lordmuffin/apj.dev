// Single source of truth for site-wide content. Edit here, the whole site updates.
export const site = {
  name: 'Andrew Jackson',
  shortMark: 'andrew',
  domain: 'andrewjackson.dev',
  email: 'andrew@example.com',
  location: 'Minneapolis, MN',
  role: 'Manager, Enterprise Platform',
  company: 'Inspire Medical Systems',
  tagline: 'Platform engineering, team topology, and the work between them.',
  intro:
    "I'm Andrew Jackson — Manager of Enterprise Platform at Inspire Medical Systems. I build internal platforms that let product teams ship without rediscovering Kubernetes every sprint.",
  ctaBadge: 'Open to platform leadership conversations',
  socials: {
    linkedin: 'https://www.linkedin.com/in/ajack/',
    github: 'https://github.com/ajack',
    email: 'mailto:andrew@example.com'
  },
  stats: [
    { k: 'Role', v: 'Manager, Platform', sub: 'Inspire' },
    { k: 'Location', v: 'Minneapolis, MN' },
    { k: 'Focus', v: 'Enterprise K8s' },
    { k: 'Currently writing', v: 'Beyond DevOps', sub: 'book' }
  ],
  experience: [
    {
      role: 'Manager, Enterprise Platform',
      org: 'Inspire Medical Systems',
      when: '2020 — Present',
      summary:
        'Lead the platform engineering function. Internal developer platform, enterprise Kubernetes, team topology design.'
    },
    {
      role: 'Senior Systems Engineer',
      org: 'Inspire Medical Systems',
      when: '2015 — 2020',
      summary:
        'Office 365 migration, ADFS 3.0, F5 web infrastructure consolidation, Cisco UCS deployment.'
    },
    {
      role: 'Parent Board Member',
      org: 'Seven Hills Preparatory Academy',
      when: '2024 — Present',
      summary: 'Governance, strategy, and education. Pursuing Board Chair role.'
    },
    {
      role: 'Founder',
      org: 'Healing Organics',
      when: 'Side project',
      summary: 'Brand and side business in development.'
    }
  ],
  certifications: [
    { name: 'Professional Scrum Master I', org: 'Scrum.org', year: '2024' },
    { name: 'Implementing Cisco Data Center Unified Computing (DCUCI)', org: 'Cisco', year: '' }
  ],
  skills: [
    'Kubernetes',
    'Platform Engineering',
    'Internal Developer Platforms',
    'Team Topologies',
    'Reverse Conway',
    'Terraform',
    'Linux',
    'People Leadership'
  ]
};
