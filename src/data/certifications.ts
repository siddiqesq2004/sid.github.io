import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'aws-genai',
    title: 'AWS – Generative AI & Cloud Computing',
    issuer: 'Amazon Web Services',
    skills: ['AWS Cloud', 'Generative AI', 'Cloud Architecture', 'Serverless']
  },
  {
    id: 'full-stack',
    title: 'Full Stack Development Certification',
    issuer: 'Professional Technical Certification',
    skills: ['React', 'Node.js', 'REST APIs', 'Database Design']
  },
  {
    id: 'python-prog',
    title: 'Python – Programming Certification',
    issuer: 'Technical Certification',
    skills: ['Python', 'OOP', 'Data Structures', 'Algorithms']
  },
  {
    id: 'sql-db',
    title: 'SQL – Database Certification',
    issuer: 'Database Authority',
    skills: ['SQL Queries', 'Relational Schemas', 'Indexing', 'Transactions']
  },
  {
    id: 'c-prog',
    title: 'C – Programming Certification',
    issuer: 'Technical Certification',
    skills: ['C Language', 'Pointers', 'Memory Management', 'Data Structures']
  },
  {
    id: 'cpp-mooc',
    title: 'C++ (CPP) and 7+ MOOC Courses',
    issuer: 'Technical MOOC Platform',
    skills: ['C++', 'Algorithms', 'Software Engineering', 'Problem Solving']
  },
  {
    id: 'nptel-rapid-mfg',
    title: 'NPTEL – Rapid Manufacturing',
    issuer: 'IIT / NPTEL',
    score: 'Score: 72%',
    skills: ['Additive Manufacturing', 'Industrial Automation', 'Engineering Design']
  }
];

export const educationData = {
  degree: 'B.E. Mechatronics Engineering',
  institution: 'SNS College of Technology',
  location: 'Coimbatore, India',
  period: '2021 – Present',
  gpa: '8.5 / 10',
  gpaNote: 'CGPA up to 7th Semester',
  description: 'Specialized interdisciplinary engineering combining Computer Science, Robotics, Embedded Systems, IoT, Control Engineering, and Electronics.',
  schooling: [
    { level: 'HSC (Class XII)', school: 'National Public School, Namakkal', score: '80%' },
    { level: 'SSLC (Class X)', school: 'National Public School, Namakkal', score: '75%' }
  ]
};
