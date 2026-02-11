import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Clear',
    role: 'SDE Intern',
    period: 'January 2026 - Present',
    logo: '/clearofficial_logo.jpeg',
    logoColor: '#4285F4',
    description: [
      'Engineered a self-healing CI/CD pipeline using GitHub Actions to automatically detect, analyze, and recover from flaky test and deployment failures by leveraging AI-driven root-cause analysis with RAG pipelines, vector databases, and LLM agents.',
      'Developed automation workflows with JavaScript and Playwright to auto-rerun, debug, and remediate failing test cases, reducing overall pipeline failure rate by 40% and significantly improving release reliability across services.'
    ],
    highlights: [
      'Reduced pipeline failure rate by 40%',
      'Implemented AI-driven root-cause analysis',
      'Built self-healing automation workflows'
    ]
  },
  {
    id: 'exp-2',
    company: 'ensuredit',
    role: 'SDE Intern',
    period: 'May 2025 - July 2025',
    logo: '/ensureditoff_logo.jpeg',
    logoColor: '#EA4335',
    description: [
      'Constructed and optimized 10+ backend APIs for leading clients like Chubb, IndMoney, Spinny, and PayU using NestJS, delivering end-to-end insurance workflows and modernizing legacy code for better scalability.',
      'Debugged complex backend logic to resolve critical client issues, improving API response speed by 40% and ensuring smooth policy processing.',
      'Reduced support tickets by 60% for 5,000+ users by engineering and deploying an AI-powered Insurance chatbot utilizing OpenAI, LangGraph, and a RAG pipeline with ChromaDB and PostgreSQL.'
    ],
    highlights: [
      'Built 10+ backend APIs for major clients',
      'Improved API response speed by 40%',
      'Reduced support tickets by 60% for 5,000+ users'
    ]
  },
  {
    id: 'exp-3',
    company: 'Microsoft for Startups',
    role: 'Microsoft Founders Hub Member',
    period: 'April 2024 - May 2025',
    logo: '/microsoftforstartups_logo.jpeg',
    logoColor: '#00A4EF',
    description: [
      'Our startup got selected in Microsoft Founder Hub, gaining access to Azure credits, technical support, and mentorship from Microsoft experts.'
    ]
  },
  {
    id: 'exp-4',
    company: 'Bharat Saarthi',
    role: 'Full-stack Developer',
    period: 'April 2024 - May 2025',
    logo: '/1714496853077.jpeg',
    logoColor: '#34A853',
    description: [
      'Built a Web Application for Bharat Saarthi using modern full-stack technologies.',
      'Tech stack used: ReactJS and ExpressJS for building scalable and performant web solutions.'
    ]
  }
];
