// Images
export const aboutImages = [
  '/images/imageSlide1.jpg',
  '/images/imageSlide2.jpg',
  '/images/imageSlide3.jpg',
];

// Legacy (keep if your UI references these)
export const appImages = [
  '/images/mindcircuit1.png',
  '/images/mindcircuit2.png',
  '/images/mindcircuit3.png',
];

// New: Thawe screenshots
export const thaweImages = [
  '/images/thawe1.png'
];

// New: Events / scraper visuals (optional)
export const eventsImages = [
  '/images/events1.png',
  '/images/events2.png',
  '/images/events3.png',
];

// Skills
export const skills = [
  // Languages
  { name: 'TypeScript', icon: '/images/tslogo.png' },
  { name: 'JavaScript', icon: '/images/jslogo.png' },
  { name: 'Python', icon: '/images/pythonImage.png' },
  { name: 'Swift', icon: '/images/swiftImage.png' },
  { name: 'C#', icon: '/images/cImage.webp' },
  { name: 'SQL', icon: '/images/SQL.png' },

  // Frontend
  { name: 'React', icon: '/images/react.png' },
  { name: 'React Native', icon: '/images/react.png' },
  { name: 'HTML/CSS', icon: '/images/htmlimage.png' },

  // Backend
  { name: 'Node.js', icon: '/images/node.png' },
];

// Experience
export const experiences = [
  {
    title: 'Software Engineer — Crete Carrier',
    bullets: [
      'Develop and maintain internal web applications that support core logistics and transportation operations.',
      'Build and integrate backend services and APIs for shipment status updates, freight tendering, and bid workflows.',
      'Work on integrations with external providers, to exchange logistic data.',
      'Transform and map complex external payloads into internal shipment and stop models with an emphasis on accuracy and traceability.',
      'Collaborate with product owners and engineers to deliver reliable features used in daily production environments.',
    ],
  },
  {
    title: 'Software Engineering Intern — Buildertrend',
    bullets: [
      'Remade a job proposal templates feature, improving UI/UX and increasing template customizability for contractors.',
      'Implemented templating using Handlebars.js and shipped iterative improvements through an Agile intern pod with a senior dev coach.',
      'Completed a two-week bootcamp covering C#, React + TypeScript, and SQL Server.',
    ],
  },
  {
    title: 'iOS Development Intern — Brain Institute of America',
    bullets: [
      'Led the product lifecycle from planning to App Store release using SwiftUI, Core Data, and Firebase.',
      'Built a cognitive training app with daily activities, scoring, and progress tracking for both patients and general users.',
      'Worked closely with clinical stakeholders and communicated progress using Agile rituals.',
    ],
  },
];

// Projects
export const projects = [
  {
    title: 'Thawe — Swipe-Style Professional Networking App',
    description:
      'Mobile app for real human professional networking with smart matching, messaging, and event discovery—built to avoid spammy “AI-feed” networking.',
    details: [
      'React Native (Expo) frontend with Firebase Auth + push notifications (FCM/APNs).',
      'Django + PostgreSQL/PostGIS backend; location-based discovery and advanced filtering.',
      'Deployed services on Google Cloud Run with Cloud Build / CI pipelines.',
    ],
    linkLabel: 'Visit thaweapp.com',
    link: 'https://thaweapp.com',
    images: thaweImages,
  },
  {
    title: 'Events Scraper Microservice (Thawe)',
    description:
      'Automated event ingestion pipeline that scrapes conference/meetup sources and converts messy pages into structured, geocoded event data.',
    details: [
      'Node.js + Playwright scraping with structured extraction for consistent event schemas.',
      'Geocoding + normalization pipeline; batch writes into a database for the Events tab.',
      'Deployed as a scheduled/triggered service on Google Cloud Run.',
    ],
    images: eventsImages,
  },
  {
    title: 'Real-Time Multiplayer Go Fish',
    description:
      'A real-time multiplayer card game with matchmaking and persistent state—built with WebSockets and a scalable backend.',
    details: [
      'React frontend + Node.js WebSocket server.',
      'Redis for session/state coordination; PostgreSQL for persistence.',
      'Focused on reconnection handling, game-state integrity, and latency-friendly updates.',
    ],
  },
  {
    title: 'IntelliBoost — Brain Training (iOS)',
    description:
      'iOS app focused on cognitive exercise with daily challenges, scoring, and progress tracking.',
    details: [
      'SwiftUI app with multiple games/trackers and category-based progress visualization.',
      'Firebase-backed user accounts and cross-game scoring data.',
      'Designed for accessibility and neuro-rehab use cases.',
    ],
    linkLabel: 'View on the App Store',
    link: 'https://apps.apple.com/us/app/mindcircuit/id6497651074',
    images: appImages,
  },
  {
    title: 'USDA-NRCS Wetland Delineation Tool',
    description:
      'WPF desktop tool that automates wetland determination paperwork and PDF generation.',
    details: [
      'Development manager for a 5-person capstone team.',
      'Automated templated document creation and PDF consolidation.',
      'Coordinated priorities in ZenHub to ship on schedule.',
    ],
  },
];
