import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'TNP Portal',
    description: 'Architected a Full-stack Campus Placement Management System using NextJs, NestJs, and PostgreSQL with JSON Web Token (JWT) authentication and role-based access control. Engineered automated eligibility checks based on academic data, helping the placement cell manage 500+ student applications with 70% less manual effort. Crafted intuitive dashboards for students and admins with status tracking, resume uploads, and analytics—improving application tracking efficiency by 80%.',
    tags: ['NextJS', 'NestJS', 'TypeScript', 'PostgreSQL', 'JWT'],
    links: {
      github: 'https://github.com/JaanMustafa'
    },
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Stock Exchange',
    description: 'Designed and implemented a real-time Stock Exchange platform using Next.js, TypeScript, Express, TimescaleDB, Redis, and WebSocket, following a microservices architecture for scalability and maintainability. Developed high-performance, in-memory systems for orderbook management, user balances, and trade matching, leveraging Redis Pub/Sub and Node.js to ensure instant updates and low-latency trading operations. Integrated TimescaleDB and WebSocket for time-series analytics and real-time candlestick charting, delivering seamless, responsive market data and trading experiences to users.',
    tags: ['NextJS', 'Express', 'TypeScript', 'TimescaleDB', 'Redis', 'WebSocket'],
    links: {
      github: 'https://github.com/JaanMustafa'
    },
    featured: true
  },
  {
    id: 'proj-3',
    title: "Rubik's Cube Solver - Korf's IDA* Algorithm",
    description: "Modeled a virtual Rubik's Cube (3x3) in 2 different Models/classes using standard Data Structures present in C++. Implemented and compared BFS, DFS, and IDDFS algorithms for Rubik's Cube solving, achieving sub-3-second solutions for 8-move configurations. Designed and optimized the Korf's IDA* algorithm implementation, solving complex 13-move configurations in under 10 seconds with 95% efficiency improvement over basic search methods.",
    tags: ['C++', 'Algorithms', 'Data Structures', 'IDA*', 'BFS', 'DFS'],
    links: {
      github: 'https://github.com/JaanMustafa'
    },
    featured: true
  }
];
