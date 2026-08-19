import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'radinfo-tech',
    company: 'RadInfo Tech',
    role: 'Software Developer Intern',
    period: 'Nov 2025 – Present',
    duration: 'Current Role',
    location: 'Remote / Hybrid',
    type: 'Internship',
    current: true,
    highlights: [
      'Designed, developed, and deployed 6 production SaaS and AI-powered platforms serving real users across education, recruitment, and research.',
      'Built a multi-tenant School ERP SaaS with subscription tier management, strict tenant database isolation, and role-based access control (RBAC).',
      'Engineered NeuroHire (neurohire.rademics.ai), an AI recruitment SaaS conducting automated assessments and conversational AI candidate evaluation.',
      'Built AI Interview Agent (interview-agent.rademics.ai) for resume parsing, job-match scoring, and interactive AI mock interviews with real-time feedback.',
      'Developed Research Copilot (copilot.rademics.com), an LLM manuscript tool assisting researchers in structured academic paper writing and citation management.',
      'Developed LMS platform (internship.rademics.com) for online course delivery, progress tracking, and placement exam modules.',
      'Built Conference Management SaaS (tarbiat.ac) with event publishing, attendee registration, and integrated payment gateway.',
      'Integrated third-party APIs and data pipelines across all platforms, ensuring high scalability and responsive UX.'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Laravel', 'MySQL', 'LLM Development', 'AI Agents', 'REST APIs', 'AWS']
  },
  {
    id: 'zidio-development',
    company: 'ZIDIO Development',
    role: 'Data Science & Analyst Intern',
    period: 'Aug 2025 – Nov 2025',
    duration: '4 Months',
    location: 'Remote',
    type: 'Internship',
    current: false,
    highlights: [
      'Applied Python and industry-standard tools to solve real-world data science problem statements.',
      'Performed exploratory data analysis (EDA), data cleaning, feature engineering, and statistical modeling.',
      'Built predictive machine learning models to deliver actionable business insights and trend forecasts.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'EDA', 'Predictive Modeling', 'Data Preprocessing']
  },
  {
    id: 'sakthilishanth-solar',
    company: 'SakthiLishanth Solar',
    role: 'Software & Data Intern',
    period: 'Jun 2025',
    duration: '1 Month',
    location: 'Coimbatore, India',
    type: 'Internship',
    current: false,
    highlights: [
      'Applied solar performance monitoring techniques and data analysis workflows to energy telemetry.',
      'Engineered web development practices and data visualization interfaces to improve internal performance visibility.'
    ],
    technologies: ['Python', 'Web Development', 'Data Analysis', 'Telemetry Monitoring', 'Data Visualization']
  },
  {
    id: 'unified-mentor',
    company: 'Unified Mentor Pvt. Ltd',
    role: 'Data Analyst Intern',
    period: 'Mar 2024 – Jun 2024',
    duration: '4 Months',
    location: 'Remote',
    type: 'Internship',
    current: false,
    highlights: [
      'Utilized Tableau alongside Python to perform end-to-end data analysis across diverse relational datasets.',
      'Designed and deployed interactive executive dashboards communicating high-impact business metrics.',
      'Delivered analytical insights to support strategic decision-making processes.'
    ],
    technologies: ['Tableau', 'Python', 'SQL', 'Interactive Dashboards', 'Business Intelligence', 'Data Storytelling']
  },
  {
    id: 'internshala-training',
    company: 'Internshala',
    role: 'Data Scientist Training',
    period: 'Dec 2022 – Jan 2023',
    duration: '2 Months',
    location: 'Online',
    type: 'Training Program',
    current: false,
    highlights: [
      'Completed comprehensive structured training in Python for data science and statistical computing.',
      'Mastered complex data manipulation, exploratory data visualization, and foundational predictive modeling techniques.'
    ],
    technologies: ['Python', 'Data Manipulation', 'Data Visualization', 'Statistical Analysis', 'Predictive Modeling']
  }
];
