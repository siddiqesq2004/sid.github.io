import { Project, Experiment } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: 'neurohire',
    number: '01',
    title: 'NeuroHire',
    category: 'AI Recruitment SaaS',
    tagline: 'End-to-End AI-Powered Hiring & Candidate Assessment Platform',
    description: 'An enterprise-grade AI hiring platform where companies post jobs and an AI agent evaluates candidates through automated assessments and conversational voice/text interviews, assessing technical fit, fluency, and behavioral suitability.',
    highlights: [
      'Automated conversational AI interviews with real-time technical evaluation',
      'Intelligent scoring on candidate fluency, problem-solving, and role fit',
      'Streamlined employer dashboard for applicant tracking and automatic shortlisting',
      'Secure multi-role platform with real-time assessment reports'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'LLM Integration', 'AI Agents', 'MySQL', 'Tailwind CSS', 'REST APIs'],
    metrics: [
      { label: 'Evaluation Speed', value: 'Instant' },
      { label: 'Interview Mode', value: 'Conversational AI' },
      { label: 'Candidate Fit Score', value: 'Multi-Metric' }
    ],
    liveUrl: 'https://neurohire.rademics.ai',
    featured: true,
    visualType: 'neural-network',
    badge: 'Flagship AI Product'
  },
  {
    id: 'research-copilot',
    number: '02',
    title: 'Research Copilot',
    category: 'LLM / Research SaaS',
    tagline: 'LLM Manuscript Assistant for Academic & Scientific Publishing',
    description: 'An advanced LLM-powered research tool designed to guide researchers and academics through structured academic manuscript creation, automated reference citation workflows, and journal-standard formatting.',
    highlights: [
      'Structured academic manuscript generator tailored for peer-reviewed formats',
      'Automated citation formatting, literature cross-referencing, and bibliography synthesis',
      'Section-by-section academic reasoning and clarity enhancement pipelines',
      'Export support for scientific publishing standards'
    ],
    techStack: ['React', 'Next.js', 'LLM Orchestration', 'Node.js', 'Python', 'REST APIs', 'Markdown Parser'],
    metrics: [
      { label: 'Manuscript Generation', value: 'Structured' },
      { label: 'Citation Formats', value: 'IEEE / APA / MLA' },
      { label: 'Latency', value: 'Streamed' }
    ],
    liveUrl: 'https://copilot.rademics.com',
    featured: true,
    visualType: 'knowledge-graph',
    badge: 'Live SaaS Tool'
  },
  {
    id: 'interview-ai-agent',
    number: '03',
    title: 'Interview AI Agent',
    category: 'AI Agent / Job Matching',
    tagline: 'Intelligent Resume-to-Job Matching & Simulated Mock Interviews',
    description: 'An autonomous AI agent platform that parses candidate resumes, computes contextual match scores against active job listings, and conducts interactive AI-simulated mock interview sessions with immediate actionable feedback.',
    highlights: [
      'Deep resume parsing and semantic job-match scoring engine',
      'Interactive AI mock interview simulator with dynamic contextual follow-up questions',
      'Actionable performance breakdown across communication, technical depth, and confidence',
      'Personalized improvement roadmap generated after each interview round'
    ],
    techStack: ['Next.js', 'React', 'LLM APIs', 'Agentic AI', 'Node.js', 'MySQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Resume Match', value: 'Semantic Vector' },
      { label: 'Feedback Mode', value: 'Real-Time' },
      { label: 'Simulation Type', value: 'Dynamic Multi-Turn' }
    ],
    liveUrl: 'https://interview-agent.rademics.ai',
    featured: true,
    visualType: 'audio-waveform',
    badge: 'AI Agent'
  },
  {
    id: 'school-erp',
    number: '04',
    title: 'School ERP Platform',
    category: 'Multi-Tenant SaaS',
    tagline: 'Cloud-Based School Management with Tenant Isolation & Subscription Billing',
    description: 'Architected a cloud-based multi-tenant SaaS ERP for educational institutions featuring strict tenant isolation, subscription tier management, and granular role-based access control (RBAC) for administrators, teachers, and students.',
    highlights: [
      'Robust multi-tenant database architecture with strict data isolation per school',
      'Granular RBAC system with customized portals for Admins, Teachers, and Students',
      'Automated subscription management, invoice billing, and renewal reminders',
      'Comprehensive student attendance, grading, fee tracking, and academic scheduling'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'React', 'REST APIs', 'Cloud Architecture', 'AWS'],
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Role Portals', value: 'Admin / Staff / Student' },
      { label: 'Security', value: 'Tenant-Isolated' }
    ],
    featured: true,
    visualType: 'erp-dashboard',
    badge: 'Enterprise SaaS'
  },
  {
    id: 'lms-platform',
    number: '05',
    title: 'LMS & Exam System',
    category: 'EdTech / SaaS',
    tagline: 'Online Course Delivery, Student Progress & Live Examination Portal',
    description: 'Full-featured Learning Management System built for online course delivery, live examination modules, student cohort progress tracking, and placement training assessments.',
    highlights: [
      'Comprehensive course curriculum delivery with interactive video and resource modules',
      'Timed examination and placement assessment engine with automated grading',
      'Student progress analytics, attendance logging, and cohort performance dashboards',
      'Secure assessment environment with randomized question banks'
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'Next.js', 'REST APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'Modules', value: 'Courses & Live Exams' },
      { label: 'Tracking', value: 'Real-time Progress' },
      { label: 'Use Case', value: 'Placement Cohorts' }
    ],
    liveUrl: 'https://internship.rademics.com',
    featured: true,
    visualType: 'lms-modules',
    badge: 'EdTech Platform'
  },
  {
    id: 'conference-saas',
    number: '06',
    title: 'Conference Management SaaS',
    category: 'SaaS / Event Payments',
    tagline: 'Full-Featured Conference Portal with Event Publishing & Payment Gateway',
    description: 'End-to-end conference management SaaS platform allowing organizers to publish academic and industry events while attendees register, pay securely, and manage their participation via an interactive dashboard.',
    highlights: [
      'Event publishing portal with customizable agenda, speakers, and ticketing tiers',
      'Seamless payment gateway integration for instant registration fee processing',
      'Interactive attendee dashboard for session tracking, invoice receipt, and ticket badges',
      'Admin analytics dashboard for revenue tracking, ticket sales, and attendance validation'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'React', 'Payment Gateway Integration', 'REST APIs'],
    metrics: [
      { label: 'Payments', value: 'Integrated Gateway' },
      { label: 'Features', value: 'Ticketing & Registration' },
      { label: 'Dashboard', value: 'Admin & Attendee' }
    ],
    liveUrl: 'https://tarbiat.ac',
    featured: true,
    visualType: 'conference-portal',
    badge: 'Fintech & SaaS'
  }
];

export const labExperiments: Experiment[] = [
  {
    id: 'voice-robot',
    title: 'Voice Controlled Robot',
    category: 'Applied Robotics & Speech Processing',
    award: '🏆 First Prize Winner — Project Expo (SNSCT)',
    description: 'Designed and built a voice-controlled autonomous robot that processes audio speech commands via voice recognition to execute hands-free, directional motor movements in real time.',
    techStack: ['Arduino', 'Speech Recognition', 'C/C++', 'Motor Drivers', 'Embedded Systems'],
    status: 'Prize Winner',
    iconName: 'Mic'
  },
  {
    id: 'vision-bot',
    title: 'Vision Bot — Hand Gesture Controlled Robot',
    category: 'Embedded Systems & Computer Vision',
    award: '🏆 First Prize Winner — DSCE Competition',
    description: 'Engineered a gesture-controlled robot using sensor-based movement interpretation, combining embedded microcontrollers with wireless communication for latency-free physical robot control.',
    techStack: ['Arduino', 'Gesture Sensors', 'Wireless RF/Bluetooth', 'C++', 'Embedded Hardware'],
    status: 'Prize Winner',
    iconName: 'HandMetal'
  },
  {
    id: 'agentic-email-n8n',
    title: 'Agentic AI Email Automation',
    category: 'Agentic AI & Workflow Automation',
    description: 'Architected an autonomous Agentic AI system connected with a conversational chatbot that automatically analyzes customer intent, generates professionally worded responses, and dispatches e-commerce emails via n8n.',
    techStack: ['n8n', 'LLM Agent', 'Webhooks', 'REST APIs', 'Workflow Automation', 'JSON'],
    status: 'Production',
    iconName: 'Bot'
  },
  {
    id: 'av-simulation',
    title: 'AI-Driven Autonomous Vehicle Simulation',
    category: 'AI Simulation & Intelligent Agents',
    description: 'Engineered an AI-driven simulation platform recreating realistic driving environments, LIDAR/camera sensor inputs, and intelligent vehicle agent behaviors to accelerate AV testing and safety validation.',
    techStack: ['Python', 'Simulation Physics', 'Agent Behaviors', 'NumPy', 'Data Modeling'],
    status: 'Research Prototype',
    iconName: 'Car'
  },
  {
    id: 'line-follower',
    title: 'Line Follower Robot with Obstacle Detection',
    category: 'Assistive Robotics & Sensors',
    description: 'Built an autonomous line-following robot with ultrasonic obstacle detection designed to assist differently-abled individuals in safe, collision-free indoor navigation.',
    techStack: ['Arduino', 'IR Sensors', 'Ultrasonic Sensors', 'C/C++', 'Mechatronics'],
    status: 'Completed',
    iconName: 'Navigation'
  },
  {
    id: 'amazon-clone',
    title: 'Amazon E-Commerce Architecture Clone',
    category: 'Full-Stack Web Development',
    description: 'Developed a full-stack e-commerce platform replicating core Amazon functionality: dynamic product listings, multi-filter search, shopping cart state management, user authentication, and relational database management.',
    techStack: ['React', 'Node.js', 'MySQL', 'REST APIs', 'CSS3', 'Authentication'],
    status: 'Completed',
    iconName: 'ShoppingCart'
  }
];
