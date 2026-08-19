import { SkillNode } from '@/types';

export const skillsData: SkillNode[] = [
  // AI & Automation
  {
    name: 'LLM Development',
    level: 'Core',
    category: 'AI & Automation',
    description: 'Prompt engineering, structured manuscript generation, function calling, and contextual response pipelines.',
    projects: ['Research Copilot', 'NeuroHire', 'Interview AI Agent'],
    highlight: true
  },
  {
    name: 'AI Agent Development',
    level: 'Core',
    category: 'AI & Automation',
    description: 'Autonomous multi-turn conversational agents with real-time feedback and dynamic scoring.',
    projects: ['Interview AI Agent', 'NeuroHire'],
    highlight: true
  },
  {
    name: 'Agentic AI Systems',
    level: 'Advanced',
    category: 'AI & Automation',
    description: 'Autonomous goal-driven systems that plan, evaluate, and execute end-to-end workflows.',
    projects: ['Agentic AI Email Automation', 'Interview AI Agent'],
    highlight: true
  },
  {
    name: 'n8n Workflow Automation',
    level: 'Advanced',
    category: 'AI & Automation',
    description: 'Complex multi-step workflow automation connecting chatbots, webhooks, and email dispatchers.',
    projects: ['Agentic AI Email Automation'],
    highlight: true
  },

  // Frameworks & Libraries
  {
    name: 'Next.js',
    level: 'Core',
    category: 'Frameworks',
    description: 'Production App Router, Server Components, dynamic routing, and high-performance frontend architecture.',
    projects: ['NeuroHire', 'Research Copilot', 'Interview AI Agent', 'LMS Platform'],
    highlight: true
  },
  {
    name: 'React',
    level: 'Core',
    category: 'Frameworks',
    description: 'Modern component-driven architecture, custom hooks, dynamic state, and high-fidelity interactive UIs.',
    projects: ['NeuroHire', 'School ERP', 'LMS Platform', 'Conference SaaS', 'Amazon Clone'],
    highlight: true
  },
  {
    name: 'Node.js',
    level: 'Core',
    category: 'Frameworks',
    description: 'Scalable backend API development, asynchronous pipelines, and server-side business logic.',
    projects: ['NeuroHire', 'Interview AI Agent', 'LMS Platform', 'Amazon Clone'],
    highlight: true
  },
  {
    name: 'Laravel',
    level: 'Core',
    category: 'Frameworks',
    description: 'Robust MVC architecture, multi-tenant databases, Eloquent ORM, authentication, and REST APIs.',
    projects: ['School ERP', 'Conference SaaS'],
    highlight: true
  },

  // Languages
  {
    name: 'JavaScript (ES6+)',
    level: 'Core',
    category: 'Languages',
    description: 'Modern asynchronous JavaScript, functional patterns, DOM manipulation, and TypeScript typing.',
    projects: ['NeuroHire', 'LMS Platform', 'Amazon Clone'],
    highlight: true
  },
  {
    name: 'Python',
    level: 'Core',
    category: 'Languages',
    description: 'AI integration, data science modeling, Pandas/NumPy ETL scripts, and autonomous simulation logic.',
    projects: ['Research Copilot', 'AV Simulation', 'ZIDIO Analysis', 'Unified Mentor Dashboards'],
    highlight: true
  },
  {
    name: 'PHP',
    level: 'Core',
    category: 'Languages',
    description: 'Backend web development, server routing, database interaction, and multi-tenant SaaS logic.',
    projects: ['School ERP', 'Conference SaaS'],
    highlight: false
  },
  {
    name: 'Java',
    level: 'Proficient',
    category: 'Languages',
    description: 'Object-oriented programming, data structures, and foundational algorithms.',
    projects: [],
    highlight: false
  },
  {
    name: 'C / C++',
    level: 'Proficient',
    category: 'Languages',
    description: 'Embedded systems development, sensor drivers, Arduino robotics programming, and memory efficiency.',
    projects: ['Voice Controlled Robot', 'Vision Bot', 'Line Follower Robot'],
    highlight: false
  },

  // Databases & Cloud
  {
    name: 'MySQL',
    level: 'Core',
    category: 'Databases',
    description: 'Relational schema design, multi-tenant database isolation, complex indexing, and query optimization.',
    projects: ['School ERP', 'NeuroHire', 'LMS Platform', 'Conference SaaS', 'Amazon Clone'],
    highlight: true
  },
  {
    name: 'Multi-Tenant Architecture',
    level: 'Core',
    category: 'Cloud & SaaS',
    description: 'Designing cloud SaaS with strict tenant data isolation, subscription tiers, and granular RBAC.',
    projects: ['School ERP', 'Conference SaaS'],
    highlight: true
  },
  {
    name: 'AWS (GenAI & Cloud)',
    level: 'Advanced',
    category: 'Cloud & SaaS',
    description: 'Cloud deployment, Generative AI services, serverless workflows, and scalable web hosting.',
    projects: ['School ERP', 'NeuroHire'],
    highlight: true
  },
  {
    name: 'MVP Development',
    level: 'Core',
    category: 'Cloud & SaaS',
    description: 'Rapidly translating UI/UX wireframes and business specs into high-velocity production applications.',
    projects: ['6+ Shipped Platforms'],
    highlight: true
  },

  // Data Integration
  {
    name: 'REST API Integration',
    level: 'Core',
    category: 'Data Integration',
    description: 'Consuming, securing, and authoring RESTful endpoints across distributed SaaS and AI platforms.',
    projects: ['NeuroHire', 'Research Copilot', 'Conference SaaS', 'LMS Platform'],
    highlight: true
  },
  {
    name: 'SQL & Data Pipelines',
    level: 'Core',
    category: 'Data Integration',
    description: 'Data transformation, ingestion pipelines, automated ETL, and aggregation queries.',
    projects: ['Unified Mentor', 'ZIDIO Development', 'SakthiLishanth Solar'],
    highlight: true
  },
  {
    name: 'Python (Pandas & NumPy)',
    level: 'Advanced',
    category: 'Data Integration',
    description: 'Data manipulation, statistical analysis, array computing, and automated data cleaning.',
    projects: ['ZIDIO Development', 'Unified Mentor', 'AV Simulation'],
    highlight: true
  },
  {
    name: 'Tableau',
    level: 'Advanced',
    category: 'Data Integration',
    description: 'Building interactive executive business intelligence dashboards and statistical visualization.',
    projects: ['Unified Mentor Data Dashboards'],
    highlight: false
  },

  // Hardware & Tools
  {
    name: 'Git & GitHub',
    level: 'Core',
    category: 'Hardware & Tools',
    description: 'Version control, branching workflows, collaborative repositories, and CI/CD basics.',
    projects: ['All Projects'],
    highlight: false
  },
  {
    name: 'Arduino & Microcontrollers',
    level: 'Advanced',
    category: 'Hardware & Tools',
    description: 'Embedded programming, analog/digital sensors, motor drivers, and RF communication.',
    projects: ['Voice Controlled Robot (1st Prize)', 'Vision Bot (1st Prize)', 'Line Follower Robot'],
    highlight: true
  },
  {
    name: 'PyCharm & VS Code',
    level: 'Core',
    category: 'Hardware & Tools',
    description: 'Full-stack IDE debugging, environment profiling, and development workflows.',
    projects: [],
    highlight: false
  }
];

export const skillCategories = [
  'All',
  'AI & Automation',
  'Frameworks',
  'Languages',
  'Cloud & SaaS',
  'Data Integration',
  'Databases',
  'Hardware & Tools'
] as const;

export const humanLanguages = [
  { language: 'English', proficiency: 'Fluent (Read / Write / Speak)', badge: 'Professional Working' },
  { language: 'Tamil', proficiency: 'Native (Read / Write / Speak)', badge: 'Native' },
  { language: 'Japanese', proficiency: 'Read / Write / Speak', badge: 'Foreign Language' },
  { language: 'Hindi', proficiency: 'Spoken Proficiency', badge: 'Conversational' }
];
