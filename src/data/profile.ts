/**
 * All portfolio content lives here. Edit this file only to update the site.
 *
 * Any field set to `null` (or an empty array) is HIDDEN on the site.
 * Fill in the TODO items once the real values are confirmed.
 */

export interface Project {
  title: string
  tagline?: string
  category: string
  description: string
  /** Heading shown above the feature list (keep it accurate: built vs. explored). */
  featuresLabel?: string
  features?: string[]
  technologies: string[]
  extra?: { label: string; items: string[] }
  /** TODO: real GitHub repository URL; null hides the button. */
  repoUrl: string | null
  liveUrl: string | null
}

export interface Certification {
  title: string
  issuer: string
  date: string | null
  url: string | null
}

export const profile = {
  firstName: 'Chaitanya',
  lastName: 'Muley',
  initials: 'CM',
  headline: 'Computer Engineering Student | Aspiring Software Developer',
  tagline:
    'Building practical Android and Python projects, and looking for a six-month software development internship.',

  email: 'chaitanya.muley2005@gmail.com',
  githubUrl: 'https://github.com/chaitanya-720',
  linkedinUrl: 'https://www.linkedin.com/in/chaitanya-muley-9a1a73394' as string | null,
  /** Resume PDF in /public; null hides the resume button. */
  resumeUrl: '/Chaitanya_Muley_Resume.pdf' as string | null,

  about: [
    'I am a third-year Diploma Computer Engineering student at Government Polytechnic Pune with an interest in software development, Android application development, Python programming, and emerging technologies.',
    'I enjoy building practical projects, learning new technologies, and developing solutions to real-world problems. My projects include CareerNest, a career guidance Android application, and NeuroDrive, a driver drowsiness detection and fleet telematics project.',
    'I am looking for a six-month internship where I can apply my technical knowledge, gain industry experience, and develop my software engineering skills.',
  ],
  languages: ['English', 'Hindi', 'Marathi'],
  interests: [
    'Software Development',
    'Programming',
    'Learning New Technologies',
    'Building Projects',
    'Exploring Emerging Technologies',
    'Gaming',
  ],

  internship: {
    duration: 'Six months',
    expectedStart: 'November–December 2026',
    roles: ['Software Development', 'Full-Stack Development'],
    workArrangement: 'On-site or hybrid',
    summary:
      'I am interested in opportunities that provide practical software development experience, mentorship, and exposure to real-world projects.',
  },

  education: [
    {
      title: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic Pune',
      period: 'Third Year · Fifth Semester · AY 2026–2027',
      /** TODO: add the confirmed semester/aggregate % (e.g. 'Aggregate: xx.xx%'); null hides it. */
      score: null as string | null,
    },
    {
      title: 'SSC (10th Standard)',
      institution: null as string | null,
      period: null as string | null,
      score: '88%' as string | null,
    },
  ],

  skills: [
    { title: 'Programming', icon: 'code', items: ['Java', 'Python'] },
    {
      title: 'Android Development',
      icon: 'mobile',
      items: ['Android Studio', 'XML Layouts', 'Activities', 'Intents', 'SharedPreferences', 'SQLite Fundamentals'],
    },
    { title: 'Web', icon: 'web', items: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Database', icon: 'db', items: ['SQL', 'SQLite', 'Relational Database Fundamentals'] },
    {
      title: 'Cloud Computing',
      icon: 'cloud',
      items: ['Google Cloud Platform Fundamentals', 'Microsoft Azure Fundamentals'],
    },
    { title: 'Tools', icon: 'tools', items: ['GitHub', 'Android Studio', 'IntelliJ IDEA', 'Google Cloud SDK'] },
    {
      title: 'Other Skills',
      icon: 'layers',
      items: ['Object-Oriented Programming', 'UI Implementation', 'Debugging', 'Problem-Solving', 'Application Development'],
    },
  ] as const,

  projects: [
    {
      title: 'CareerNest',
      tagline: 'Your Career Starts Here',
      category: 'Android Application Development',
      description:
        'A career guidance Android application that helps students explore career opportunities, understand the skills required for different professions, and follow structured learning roadmaps.',
      featuresLabel: 'Features',
      features: [
        'User registration and login interfaces',
        'Career exploration and detailed career information',
        'Career-specific skills and technologies',
        'Learning roadmaps',
        'Career quizzes and quiz results',
        'Saved careers',
        'Dark mode',
      ],
      technologies: ['Java', 'Android Studio', 'XML', 'SharedPreferences'],
      extra: {
        label: 'Careers Covered',
        items: [
          'Software Developer',
          'AI/ML Engineer',
          'Data Analyst',
          'Cybersecurity Professional',
          'Cloud Engineer',
          'Android Developer',
          'UI/UX Designer',
          'Database Administrator',
        ],
      },
      repoUrl: null,
      liveUrl: null,
    },
    {
      title: 'NeuroDrive',
      tagline: 'Drowsiness Detection & Fleet Telematics',
      category: 'IoT / Driver Safety / Mobile Application Development',
      description:
        'A driver safety project exploring drowsiness detection through facial monitoring, sensor data, and automated alerts.',
      // TODO: once confirmed, split into "Implemented" and "Planned" lists.
      featuresLabel: 'Features & Components Explored',
      features: [
        'Eye-blink duration monitoring',
        'PERCLOS-based monitoring concepts',
        'Gaze direction tracking',
        'Yawning detection',
        'Sensor data integration',
        'Driver safety alerts',
        'Safety score display',
        'Trip history',
      ],
      technologies: [
        'Java',
        'Android Studio',
        'Google ML Kit / Face Mesh (concepts)',
        'IMU Sensors',
        'Spring Boot (architecture)',
        'WebSocket',
        'SharedPreferences',
      ],
      repoUrl: null,
      liveUrl: null,
    },
    {
      title: 'Personal Portfolio Website',
      category: 'Web Development',
      description:
        'This website — built to showcase my education, technical skills, projects, and contact information.',
      featuresLabel: 'Features',
      features: [
        'Responsive design',
        'About, education and skills sections',
        'Project showcase',
        'GitHub profile links',
        'Contact section',
        'Automated GitHub Pages deployment via GitHub Actions',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages'],
      repoUrl: 'https://github.com/chaitanya-720/chaitanya-720.github.io',
      liveUrl: null,
    },
    {
      title: 'Cloud-Based Serverless Image Processing',
      category: 'Cloud Computing',
      description: 'Cloud project exploring image processing through a serverless, event-driven workflow.',
      technologies: ['Serverless', 'Event-Driven Architecture'],
      repoUrl: null,
      liveUrl: null,
    },
    {
      title: 'Python Music Player',
      category: 'Desktop Application',
      description: 'Python desktop application for music playback.',
      technologies: ['Python'],
      repoUrl: null,
      liveUrl: null,
    },
    {
      title: 'Bomberman — Java Game',
      category: 'Game Development',
      description: 'Java game project inspired by classic Bomberman gameplay.',
      technologies: ['Java'],
      repoUrl: null,
      liveUrl: null,
    },
  ] as Project[],

  /** As listed on the resume PDF. TODO: add dates / credential URLs if available. */
  certifications: [
    { title: 'Artificial Intelligence Certificate', issuer: 'IBM', date: null, url: null },
    { title: 'AI Passport Certificate', issuer: 'Microsoft & EY', date: null, url: null },
  ] as Certification[],
}

export type SkillIcon = (typeof profile.skills)[number]['icon']
