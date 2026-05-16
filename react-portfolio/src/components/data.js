// Images
export const aboutImages = [
  '/images/imageSlide1.jpg',
  '/images/imageSlide2.jpg',
  '/images/imageSlide3.jpg',
];

export const appImages = [
  '/images/mindcircuit1.png',
  '/images/mindcircuit2.png',
  '/images/mindcircuit3.png',
];

export const thaweImages = [
  '/images/thawe1.png',
];

// Skills
export const skills = [
  { name: 'TypeScript',    icon: '/images/tslogo.png' },
  { name: 'JavaScript',   icon: '/images/jslogo.png' },
  { name: 'Python',       icon: '/images/pythonImage.png' },
  { name: 'Swift',        icon: '/images/swiftImage.png' },
  { name: 'C#',           icon: '/images/cImage.webp' },
  { name: 'SQL',          icon: '/images/SQL.png' },
  { name: 'React',        icon: '/images/react.png' },
  { name: 'React Native', icon: '/images/react.png' },
  { name: 'HTML/CSS',     icon: '/images/htmlimage.png' },
  { name: 'Node.js',      icon: '/images/node.png' },
];

// Experience
export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Crete Carrier',
    period: '2025 — Present',
    bullets: [
      'Develop and maintain internal web applications supporting core logistics and transportation operations.',
      'Build and integrate backend services and APIs for shipment status updates, freight tendering, and bid workflows.',
      'Work on integrations with external providers to exchange logistics data.',
      'Transform and map complex external payloads into internal shipment and stop models with an emphasis on accuracy and traceability.',
      'Collaborate with product owners and engineers to deliver reliable features used in daily production environments.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Buildertrend',
    period: '2024',
    bullets: [
      'Redesigned the job proposal templates feature, improving usability and increasing customizability for contractors.',
      'Implemented templating with Handlebars.js; shipped iterative improvements through an Agile intern pod with a senior dev coach.',
      'Completed a two-week bootcamp covering C#, React + TypeScript, and SQL Server.',
    ],
  },
  {
    role: 'iOS Development Intern',
    company: 'Brain Institute of America',
    period: '2024',
    bullets: [
      'Led the full product lifecycle from planning to App Store release using SwiftUI, Core Data, and Firebase.',
      'Built a cognitive training app with daily challenges, scoring, and progress tracking for patients and general users.',
      'Worked closely with clinical stakeholders using Agile rituals to communicate progress.',
    ],
  },
];

// Projects
export const projects = [
  {
    id: 'surveyops',
    featured: true,
    title: 'SurveyOps — Land Surveying Job Management',
    description:
      'A cloud-based job management platform built specifically for land surveying firms. Consolidates job tracking, crew coordination, and deliverable management into one system — built independently in spare time.',
    bullets: [
      'Native PLSS (Public Land Survey System) tracking with map views and satellite overlays for location intelligence.',
      'Mobile-first crew dispatching with real-time field updates and mandatory checklists.',
      'Centralized deliverables management for field notes, DWGs, and PDFs with QA approval workflows.',
      'Multi-tenant architecture with role-based access, scaling from solo surveyors to multi-crew operations.',
    ],
    tags: ['Side Project', 'iOS', 'Web'],
    links: [
      { label: 'survey-ops.com', href: 'https://survey-ops.com' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/surveyops-field-management/id6764725671' },
    ],
    images: ['/images/surveyopsmobile.png'],
  },
  {
    id: 'thawe',
    title: 'Thawe — Professional Networking App',
    description:
      'Mobile app for genuine professional networking with smart matching, messaging, and event discovery. Built to cut through the noise of feed-based platforms.',
    bullets: [
      'React Native (Expo) frontend with Firebase Auth and push notifications (FCM/APNs).',
      'Django + PostgreSQL/PostGIS backend with location-based discovery and advanced filtering.',
      'Deployed on Google Cloud Run with Cloud Build CI pipelines.',
    ],
    tags: ['React Native', 'Django', 'PostgreSQL', 'Firebase', 'GCP'],
    links: [{ label: 'thaweapp.com', href: 'https://thaweapp.com' }],
    images: thaweImages,
  },
  {
    id: 'gofish',
    title: 'Real-Time Multiplayer Go Fish',
    description:
      'A real-time multiplayer card game with matchmaking and persistent state built on WebSockets.',
    bullets: [
      'React frontend + Node.js WebSocket server.',
      'Redis for session and state coordination; PostgreSQL for persistence.',
      'Focused on reconnection handling, game-state integrity, and latency-friendly updates.',
    ],
    tags: ['React', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'intelliboost',
    title: 'IntelliBoost — Brain Training (iOS)',
    description:
      'iOS cognitive training app with daily challenges, scoring, and progress tracking — built for both general users and neuro-rehab use cases.',
    bullets: [
      'SwiftUI with multiple mini-games and category-based progress visualization.',
      'Firebase-backed user accounts and cross-game scoring data.',
    ],
    tags: ['Swift', 'SwiftUI', 'Firebase', 'Core Data'],
    linkLabel: 'View on App Store',
    link: 'https://apps.apple.com/us/app/mindcircuit/id6497651074',
    images: appImages,
  },
  {
    id: 'wetland',
    title: 'USDA-NRCS Wetland Delineation Tool',
    description:
      'WPF desktop tool that automates wetland determination paperwork and PDF generation for NRCS field staff.',
    bullets: [
      'Development manager for a 5-person senior capstone team.',
      'Automated templated document creation and PDF consolidation pipelines.',
      'Tracked priorities in ZenHub to ship on schedule.',
    ],
    tags: ['.NET', 'WPF', 'C#'],
  },
];
