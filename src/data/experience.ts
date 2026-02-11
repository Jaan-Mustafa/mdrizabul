import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    role: 'Senior Software Engineer',
    period: '2023 - Present',
    logo: '/logos/company1.png',
    logoColor: '#4285F4',
    description: [
      'Leading development of scalable web applications using React and Node.js.',
      'Architecting microservices infrastructure and implementing CI/CD pipelines.',
      'Mentoring junior developers and conducting code reviews to maintain high code quality standards.'
    ],
    links: [
      { text: 'Company Website', url: 'https://example.com' }
    ],
    highlights: [
      'Improved application performance by 40%',
      'Led team of 5 developers',
      'Implemented automated testing suite'
    ]
  },
  {
    id: 'exp-2',
    company: 'Startup Inc',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    logo: '/logos/company2.png',
    logoColor: '#EA4335',
    description: [
      'Built and maintained full-stack applications using React, TypeScript, and Python.',
      'Collaborated with design team to implement pixel-perfect UI components.',
      'Optimized database queries and improved API response times by 60%.'
    ],
    links: [
      { text: 'Product Launch', url: 'https://example.com/launch' }
    ]
  },
  {
    id: 'exp-3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    logo: '/logos/company3.png',
    logoColor: '#34A853',
    description: [
      'Developed responsive websites and web applications for various clients.',
      'Implemented modern frontend frameworks and best practices.',
      'Worked closely with clients to understand requirements and deliver solutions.'
    ]
  }
];
