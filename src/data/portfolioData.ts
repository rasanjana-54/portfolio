import { Project, SkillItem, ExperienceItem, CertificateItem, ServiceItem, TestimonialItem } from '../types';
import goviSahayaImg from '../assets/images/govi_sahaya_app_1785242917976.jpg';
import lifepulseImg from '../assets/images/lifepulse_health_1785242929950.jpg';
import englishGeniusImg from '../assets/images/english_genius_lms_1785242942676.jpg';
import villaBookingImg from '../assets/images/villa_booking_web_1785242957149.jpg';

export const personalInfo = {
  fullName: 'Kodagoda Vithanage Rasanjana Nimsara',
  preferredName: 'Rasanjana Nimsara',
  title: 'Software Engineering Undergraduate',
  subTitle: 'Full-Stack & Mobile Developer | AI Systems Enthusiast',
  bio: 'Motivated Computer Science undergraduate at Informatics Institute of Technology (IIT Sri Lanka) with a strong passion for software engineering, mobile development, and AI-driven applications. Experienced in building full-stack web and mobile systems using React, Node.js, Flutter, Python, Firebase, and Gemini AI.',
  aboutDetailed: `I am a detail-oriented, proactive software developer based in Colombo, Sri Lanka. Currently pursuing my BSc (Hons) in Computer Science at IIT Sri Lanka (affiliated with the University of Westminster, UK), I bridge the gap between frontend elegance and robust backend architecture. My project portfolio spans AI-powered agriculture mobile apps, health management systems, e-learning platforms, and cloud REST APIs.`,
  location: 'Colombo, Sri Lanka',
  email: 'rasanjananimsara4@gmail.com',
  phone: '+94 71 559 2319',
  github: 'https://github.com/rasanjana-54',
  linkedin: 'https://www.linkedin.com/in/kodagoda-nimsara',
  educationSummary: 'BSc (Hons) in Computer Science @ IIT Sri Lanka (2023 - Present)',
  availability: 'Open for Software Engineering Internships & Freelance Projects',
  stats: [
    { label: 'Completed Projects', value: '7+' },
    { label: 'Tech Stack Skills', value: '15+' },
    { label: 'Certifications', value: '7' },
    { label: 'Expected Graduation', value: '2027' },
  ],
  strengths: [
    'Clean Modular Architecture & Type Safety',
    'AI Integration (Google Gemini AI, Computer Vision)',
    'Mobile & Web Cross-Platform Development',
    'Agile Team Collaboration & Problem Solving',
    'Fast Learner & Adaptable Mindset',
    'UI/UX Polish & Modern Responsive Design',
  ],
  careerObjective: 'To contribute technical expertise, problem-solving abilities, and a growth mindset to an innovative software engineering team where I can solve real-world problems and scale cutting-edge products.',
  interests: ['Artificial Intelligence', 'Full-Stack Development', 'Mobile App Crafting', 'Cloud & API Systems', 'Open Source', 'UI/UX Design'],
  references: [
    {
      name: 'Mr. K.L. Pushpika Prasad Liyanaarachchi',
      title: 'Senior Lecturer (Department of Computer Science)',
      institution: 'Informatics Institute of Technology, Colombo',
      phone: '+94 76 149 0860',
      email: 'prasad.l@iit.ac.lk',
    },
    {
      name: 'Mr. Sandipa Deshan Senadhira',
      title: 'Intern Software Engineer',
      institution: 'Informatics Institute of Technology, Colombo',
      phone: '+94 76 434 8334',
      email: 'sandipa.20232316@iit.ac.lk',
    },
  ]
};

export const skillsData: SkillItem[] = [
  // Frontend
  { id: '1', name: 'React.js', category: 'frontend', level: 92, iconName: 'Code2', description: 'Modern React with Hooks, Context API, state management & performance optimizations', featured: true },
  { id: '2', name: 'TypeScript', category: 'frontend', level: 88, iconName: 'FileCode2', description: 'Strict type safety, custom interfaces, generic components, and scalable architecture', featured: true },
  { id: '3', name: 'JavaScript (ES6+)', category: 'frontend', level: 90, iconName: 'Braces', description: 'Asynchronous JS, promises, DOM manipulation, functional paradigms', featured: true },
  { id: '4', name: 'Tailwind CSS', category: 'frontend', level: 94, iconName: 'Palette', description: 'Utility-first styling, glassmorphism, responsive design, dark mode, custom keyframes', featured: true },
  { id: '5', name: 'Flutter & Dart', category: 'frontend', level: 85, iconName: 'Smartphone', description: 'Cross-platform mobile apps, state management, native API integrations, AI mobile tools', featured: true },
  { id: '6', name: 'HTML5 & CSS3', category: 'frontend', level: 95, iconName: 'Layout', description: 'Semantic markup, Flexbox, Grid, CSS animations, WCAG accessibility standards' },

  // Backend
  { id: '7', name: 'Node.js', category: 'backend', level: 86, iconName: 'Server', description: 'Event-driven server applications, middleware, asynchronous I/O streams', featured: true },
  { id: '8', name: 'Express.js', category: 'backend', level: 88, iconName: 'Cpu', description: 'RESTful API endpoints, request validation, middleware routing, CORS setup', featured: true },
  { id: '9', name: 'Java', category: 'backend', level: 80, iconName: 'Coffee', description: 'Object-Oriented Programming (OOP), Data Structures, Algorithms, enterprise patterns', featured: true },
  { id: '10', name: 'Python', category: 'backend', level: 85, iconName: 'Terminal', description: 'Scripting, backend services, Tkinter GUIs, data analysis, CLI tools', featured: true },
  { id: '11', name: 'REST APIs', category: 'backend', level: 90, iconName: 'Network', description: 'API architecture, Postman testing, JSON validation, authentication handlers' },

  // Databases
  { id: '12', name: 'Firebase Firestore', category: 'databases', level: 88, iconName: 'Flame', description: 'NoSQL real-time document store, authentication rules, security policies', featured: true },
  { id: '13', name: 'MySQL', category: 'databases', level: 82, iconName: 'Database', description: 'Relational database schema design, SQL queries, joins, indexes, foreign keys', featured: true },
  { id: '14', name: 'MongoDB', category: 'databases', level: 80, iconName: 'Database', description: 'Document schemas, aggregation pipelines, Mongoose ODM integration' },
  { id: '15', name: 'SQLite', category: 'databases', level: 84, iconName: 'HardDrive', description: 'Lightweight embedded relational database for desktop & Node.js backends' },

  // Tools & Platforms
  { id: '16', name: 'Git & GitHub', category: 'tools', level: 92, iconName: 'GitBranch', description: 'Version control, branch workflows, pull requests, collaborative development', featured: true },
  { id: '17', name: 'Postman', category: 'tools', level: 88, iconName: 'Send', description: 'API endpoint testing, collection runs, environment variables, automated validation', featured: true },
  { id: '18', name: 'VS Code & Android Studio', category: 'tools', level: 92, iconName: 'Monitor', description: 'IDE setup, extensions, mobile emulators, debugging tools' },
  { id: '19', name: 'Vercel & Cloud Hosting', category: 'tools', level: 86, iconName: 'Cloud', description: 'Continuous deployment, serverless hosting, environment secrets management' },
  { id: '20', name: 'Figma', category: 'tools', level: 82, iconName: 'Figma', description: 'UI wireframing, component design systems, prototyping, recruiter pitch decks' },

  // Soft Skills
  { id: '21', name: 'Problem Solving', category: 'soft', level: 92, iconName: 'Lightbulb', description: 'Analytical debugging, algorithmic thinking, efficient system design' },
  { id: '22', name: 'Teamwork & Communication', category: 'soft', level: 94, iconName: 'Users', description: 'Agile team collaboration, technical writing, effective presentation' },
  { id: '23', name: 'Adaptability & Learning', category: 'soft', level: 95, iconName: 'Zap', description: 'Rapidly learning new frameworks, libraries, and AI technologies' },
];

export const projectsData: Project[] = [
  {
    id: 'govi-sahaya',
    title: 'Govi Sahaya – AI Agriculture Support App',
    category: 'mobile_ai',
    subtitle: 'AI-powered Flutter Mobile App for Crop Disease Detection',
    image: goviSahayaImg,
    tags: ['Flutter', 'Dart', 'Firebase', 'AI Image Processing', 'Mobile App'],
    description: 'An AI-powered mobile application designed for Sri Lankan farming communities to detect crop diseases instantly using image recognition, weather alerts, and multilingual farming insights.',
    fullDetails: 'Govi Sahaya is a mobile solution built specifically for agricultural decision-making. Using smartphone camera integration and computer vision AI model processing, farmers can capture a picture of an unhealthy crop leaf and instantly receive diagnosis, recommended organic or chemical treatments, and severity levels. It features a real-time Firebase database for weather updates, regional agricultural alerts, and a offline-friendly knowledge base.',
    features: [
      'Instant crop disease detection with computer vision image recognition',
      'Multilingual interface (Sinhala, Tamil, English) tailored for local farmers',
      'Firebase backend for real-time weather alerts and advisory broadcasts',
      'Farmer knowledge base with disease prevention & soil care guides',
      'Offline caching for rural connectivity resilience'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2025',
    role: 'Full-Stack Mobile Developer',
    featured: true,
    highlights: [
      'Empowers Sri Lankan agriculture with AI accessibility',
      'Supports real-time Firebase Auth and Firestore data syncing',
      'User-friendly accessible UX for non-technical users'
    ]
  },
  {
    id: 'lifepulse',
    title: 'LifePulse – Lifelong Health Navigator',
    category: 'fullstack',
    subtitle: 'Full-Stack Patient Records System with Google Gemini AI Insights',
    image: lifepulseImg,
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Google Gemini AI', 'SQLite', 'Tailwind CSS'],
    description: 'Comprehensive health management dashboard that securely stores lifelong patient records, analyzes medical vitals, and leverages Google Gemini AI for predictive health recommendations.',
    fullDetails: 'LifePulse is a full-stack digital health system built with React, Node.js, and SQLite. It provides interactive medical dashboards using Recharts to visualize vitals like blood pressure, blood glucose, and heart rate history over time. Integrating Google Gemini AI, it parses patient health logs to provide personalized wellness suggestions, symptom trends, and preventive health advice.',
    features: [
      'Interactive health dashboards & real-time monitoring charts with Recharts',
      'Google Gemini AI integration for predictive medical insights and wellness tips',
      'Structured record management for prescriptions, allergies, and diagnostic reports',
      'Secure Node.js & Express REST API with SQLite database persistence',
      'Sleek dark glassmorphic UI built with React and Tailwind CSS'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2025',
    role: 'Full-Stack Developer',
    featured: true,
    highlights: [
      'Integrated Google Gemini AI for automated health trend analysis',
      'Built custom REST APIs with Node.js & Express',
      'Responsive interactive dashboard with patient timeline'
    ]
  },
  {
    id: 'english-genius',
    title: 'English Genius LMS',
    category: 'fullstack',
    subtitle: 'Interactive E-Learning Platform with Role-Based Firebase Auth',
    image: englishGeniusImg,
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Context API'],
    description: 'Full-stack Learning Management System offering interactive language lessons, document sharing, assignment tracking, and role-based student/teacher dashboards.',
    fullDetails: 'English Genius LMS is an online education platform constructed with React 19, TypeScript, and Firebase. It features multi-role authentication distinguishing between students, instructors, and administrators. Instructors can publish video/PDF lessons, host online quizzes, and upload course materials, while students can track course progress through interactive visual dashboards.',
    features: [
      'Role-based access control (Student, Teacher, Admin) with Firebase Auth',
      'Interactive lesson modules, progress tracking, and quiz scorecards',
      'Document sharing, downloadable resources, and assignment submissions',
      'Responsive student dashboard crafted with React Hooks and Context API',
      'Real-time Firestore syncing for instant notifications and course updates'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2025',
    role: 'Full-Stack Developer',
    featured: true,
    highlights: [
      'Seamless multi-role Firebase authentication flow',
      'Intuitive UX with custom progress meters and lesson readers',
      'Used by language learners for interactive study'
    ]
  },
  {
    id: 'villa-booking',
    title: 'Serene Villa & Hotel Booking Platform',
    category: 'frontend',
    subtitle: 'Luxury Hotel & Villa Reservation Web Application',
    image: villaBookingImg,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    description: 'An Awwwards-styled luxury villa booking website featuring interactive room filters, dynamic date availability picker, high-res image galleries, and instant reservation inquiry handling.',
    fullDetails: 'Designed for high-end boutique hotels and Sri Lankan beach villas, this web application delivers an immersive booking experience. It includes photo carousels, amenity tags, location map previews, guest reviews, and interactive booking modal forms with automated confirmation summaries.',
    features: [
      'Interactive room filter by category, price, and guest count',
      'Date picker with instant total cost calculation',
      'High-resolution gallery sliders and video walkthrough modal',
      'Mobile-first responsive architecture with buttery smooth animations',
      'Direct WhatsApp and email inquiry booking triggers'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2025',
    role: 'Frontend Developer',
    featured: true,
    highlights: [
      'High-converting luxury hospitality design aesthetic',
      'Flawless responsive layouts for smartphone and desktop views',
      'Optimized image loading and smooth scroll transitions'
    ]
  },
  {
    id: 'smart-campus-api',
    title: 'Smart Campus REST API Platform',
    category: 'backend',
    subtitle: 'Backend Microservices Architecture & Postman Test Suite',
    image: lifepulseImg,
    tags: ['Node.js', 'Express.js', 'Postman', 'REST API', 'JSON Validation'],
    description: 'Robust backend REST API suite built for university campus management including student enrollment, course registration, attendance logging, and automated API validation.',
    fullDetails: 'Engineered as a clean Node.js / Express backend service for campus administration. Features modular endpoint routing, thorough HTTP status validation, request payload sanitization, and a complete Postman collection test runner ensuring zero breaking regressions across CRUD operations.',
    features: [
      'Modular REST endpoints for campus management and student lifecycle',
      'Thorough payload validation, error middleware, and CORS configuration',
      'Postman test collections with automated assertions and CRUD validation',
      'Swagger / Postman API documentation for easy developer integration',
      'Fast, lightweight execution built on Node.js asynchronous architecture'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2026',
    role: 'Backend Developer',
    featured: false,
    highlights: [
      'Clean separation of routes, controllers, and services',
      'Extensive test coverage via Postman Automated Collections',
      'Designed for scalability and integration readiness'
    ]
  },
  {
    id: 'task-manager-gui',
    title: 'Personal Task Manager Application',
    category: 'backend',
    subtitle: 'Python Desktop GUI with Persistent Data Storage',
    image: englishGeniusImg,
    tags: ['Python', 'Tkinter', 'JSON', 'Desktop GUI'],
    description: 'A feature-rich Python desktop application with full CRUD task management, priority tags, deadline reminders, and JSON-based file persistence.',
    fullDetails: 'Built using Python and Tkinter for cross-platform desktop task organization. Allows users to categorize tasks, mark priorities (High, Medium, Low), filter by status, and save state reliably across sessions using structured JSON database handling.',
    features: [
      'Intuitive Tkinter GUI menu layout with dark/light visual modes',
      'Full CRUD operations for task creation, editing, and archiving',
      'JSON file-based persistent local storage engine',
      'Priority categorization, due date sorting, and search filter'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2025',
    role: 'Python Developer',
    featured: false
  },
  {
    id: 'student-attendance-cli',
    title: 'Student Attendance Management System',
    category: 'backend',
    subtitle: 'Command Line Python System for Attendance Tracking',
    image: lifepulseImg,
    tags: ['Python', 'CLI', 'Data Structures'],
    description: 'Command line tool engineered in Python for student enrollment, class attendance logging, statistical filtering, and automated report generation.',
    fullDetails: 'Efficient CLI system implementing robust dictionary data handling, input sanitization, and text report exports for academic institutions.',
    features: [
      'Interactive command terminal interface with menu navigation',
      'Student profile enrollment, class roster logs, and status checks',
      'Filtering reports by date, attendance percentage, and ID',
      'Input validation preventing duplicate records and invalid inputs'
    ],
    githubUrl: 'https://github.com/rasanjana-54',
    year: '2024',
    role: 'Python Developer',
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Software Engineering Undergraduate',
    organization: 'Informatics Institute of Technology (IIT), Sri Lanka',
    period: '2023 June – Present (Expected Graduation 2027)',
    location: 'Colombo, Sri Lanka',
    type: 'education',
    description: 'Pursuing BSc (Hons) in Computer Science in partnership with University of Westminster (UK). Mastering core software engineering disciplines, algorithms, mobile app engineering, full-stack web, and database architecture.',
    achievements: [
      'Maintained strong academic standing across Data Structures, OOP, Web Development & Mobile Apps',
      'Led agile student project teams in full-stack software development projects',
      'Participated actively in IIT hackathons, workshops, and IEEE student chapter events'
    ],
    techStack: ['Java', 'Python', 'React', 'TypeScript', 'Flutter', 'MySQL', 'Node.js'],
    badge: 'Higher Education'
  },
  {
    id: 'exp-2',
    title: 'Collaborative Frontend Developer',
    organization: 'Collaborative Web Development Project',
    period: '2025',
    location: 'Colombo, Sri Lanka',
    type: 'experience',
    description: 'Worked in a team environment to design and develop modern, accessible, and responsive web pages complying with international web standards and mobile-first principles.',
    achievements: [
      'Developed reusable UI components using HTML5, CSS3, and JavaScript',
      'Enforced accessibility (WCAG), cross-browser compatibility, and modular CSS layout',
      'Collaborated via Git and GitHub for branch management and code reviews'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git'],
    badge: 'Web Project'
  },
  {
    id: 'exp-3',
    title: 'Freelance & Independent Software Developer',
    organization: 'Personal Client Projects',
    period: '2024 – Present',
    location: 'Remote / Sri Lanka',
    type: 'experience',
    description: 'Delivering tailored full-stack solutions, custom business websites, villa booking engines, and mobile application prototypes for local Sri Lankan clients and academic peers.',
    achievements: [
      'Designed and deployed custom landing pages and hotel booking platforms',
      'Integrated Firebase auth, Firestore, and AI endpoints into production client apps',
      'Provided end-to-end consulting from UI mockups in Figma to live cloud deployment'
    ],
    techStack: ['React', 'Node.js', 'Firebase', 'Flutter', 'Tailwind CSS', 'Vercel'],
    badge: 'Freelance'
  },
  {
    id: 'exp-4',
    title: 'IEEE Student Member & Algorand Workshop Participant',
    organization: 'IEEE Student Branch & Algorand Foundation IIT',
    period: '2025 – Present',
    location: 'IIT Colombo',
    type: 'volunteer',
    description: 'Active member participating in technical workshops, blockchain fundamentals, hackathons, and developer community events held at IIT Sri Lanka.',
    achievements: [
      'Participated in Algorand Foundation IIT Developer Workshop (2025)',
      'Networked with senior industry engineers and alumni mentors',
      'Organized peer tech sharing sessions and coding study groups'
    ],
    badge: 'Community'
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Advanced Multimedia Web & Development Techniques',
    issuer: 'University of Colombo',
    year: '2024',
    category: 'web',
    skills: ['Web Development', 'Multimedia Systems', 'UI/UX Design', 'Modern Frontend']
  },
  {
    id: 'cert-2',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa (Open Learning Platform)',
    year: '2024',
    category: 'programming',
    skills: ['Python Basics', 'Data Structures', 'Control Logic', 'Problem Solving']
  },
  {
    id: 'cert-3',
    title: 'The AI Ecosystem for Developers: Models, Datasets & APIs',
    issuer: 'LinkedIn Learning',
    year: '2025',
    category: 'ai',
    skills: ['Generative AI', 'Gemini APIs', 'Prompt Engineering', 'AI Architecture']
  },
  {
    id: 'cert-4',
    title: 'Advanced Python',
    issuer: 'LinkedIn Learning',
    year: '2024',
    category: 'programming',
    skills: ['Object Oriented Python', 'Decorators', 'Generators', 'File Handling']
  },
  {
    id: 'cert-5',
    title: 'Python Essential Training',
    issuer: 'LinkedIn Learning',
    year: '2024',
    category: 'programming',
    skills: ['Core Language Mechanics', 'Functional Python', 'Error Handling']
  },
  {
    id: 'cert-6',
    title: 'Certificate in English Languages',
    issuer: 'British Council',
    year: '2024',
    category: 'languages',
    skills: ['Professional Communication', 'Technical Writing', 'Verbal Fluency']
  },
  {
    id: 'cert-7',
    title: 'Certificate in English Languages',
    issuer: 'NIBM (National Institute of Business Management)',
    year: '2023',
    category: 'languages',
    skills: ['Academic Writing', 'Public Speaking', 'Business English']
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Full Stack Web Applications',
    description: 'Custom React, Node.js & Firebase web applications engineered with modular architecture, high performance, and robust API endpoints.',
    icon: 'Layers',
    features: ['React 19 & TypeScript', 'Node.js / Express REST API', 'Database setup (Firebase/MySQL)', 'Authentication & Security'],
    deliverables: 'Production-ready full stack web app with source code & setup docs'
  },
  {
    id: 'serv-2',
    title: 'Hotel & Villa Booking Websites',
    description: 'Aesthetic, high-converting booking websites for villas, luxury resorts, and boutique stays in Sri Lanka with booking inquiry integration.',
    icon: 'Hotel',
    features: ['Interactive Room Showcase', 'Reservation Date Picker', 'High-Res Photo Galleries', 'Direct WhatsApp / Email Enquiries'],
    deliverables: 'Custom mobile-friendly website with instant client booking leads'
  },
  {
    id: 'serv-3',
    title: 'Landing Pages & Business Websites',
    description: 'Award-winning quality landing pages designed to showcase your brand, products, or services with fast load times and clean UI.',
    icon: 'Layout',
    features: ['Modern Glassmorphism Design', 'SEO Optimization', 'Mobile First Responsiveness', 'Contact Form Integration'],
    deliverables: 'Sleek responsive website deployed on Vercel or your domain'
  },
  {
    id: 'serv-4',
    title: 'Mobile App Development & AI Tools',
    description: 'Cross-platform mobile applications in Flutter or React with smart AI feature integration like image processing and Google Gemini AI.',
    icon: 'Smartphone',
    features: ['Flutter & Dart Development', 'AI / Gemini API Integration', 'Offline Data Caching', 'Real-Time Firebase Backend'],
    deliverables: 'Functional Android / iOS mobile app build with API backend'
  },
  {
    id: 'serv-5',
    title: 'REST API Development & Testing',
    description: 'Clean backend microservices using Node.js, Express, and Postman test automation for robust backend operations.',
    icon: 'Cpu',
    features: ['Clean Architecture Routes', 'Postman Automated Test Suites', 'Payload Validation & Middleware', 'Database ORM Integration'],
    deliverables: 'Documented REST API server with Postman test collection'
  }
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'K.L. Pushpika Prasad',
    role: 'Senior Lecturer',
    company: 'Informatics Institute of Technology',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: 'Rasanjana stands out as a highly diligent, enthusiastic computer science student. His project work on health management systems and AI integration showcases exceptional technical maturity and problem-solving drive.',
    rating: 5,
    date: '2025'
  },
  {
    id: 't-2',
    name: 'Sri Lankan Villa Client',
    role: 'Boutique Hotel Owner',
    company: 'Serene Coastal Villas',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Rasanjana delivered our villa reservation platform ahead of schedule. The website design is stunning, lightning fast on mobile phones, and our guests find booking effortless. Highly recommended!',
    rating: 5,
    date: '2025'
  },
  {
    id: 't-3',
    name: 'Peer Project Lead',
    role: 'Full Stack Engineer',
    company: 'Academic Collaborative Team',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: 'Collaborating with Rasanjana on frontend architecture was a pleasure. He writes extremely clean TypeScript code, adheres to design specifications, and always steps up to support the team.',
    rating: 5,
    date: '2025'
  }
];
