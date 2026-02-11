import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building Scalable React Applications',
    date: '2026-02-01',
    excerpt: 'Learn best practices for building large-scale React applications that are maintainable, performant, and easy to test.',
    tags: ['React', 'Architecture', 'Best Practices'],
    readTime: '8 min read',
    slug: 'building-scalable-react-applications'
  },
  {
    id: 'post-2',
    title: 'TypeScript Tips and Tricks',
    date: '2026-01-15',
    excerpt: 'Advanced TypeScript patterns and techniques that will make your code more type-safe and maintainable.',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    readTime: '6 min read',
    slug: 'typescript-tips-and-tricks'
  },
  {
    id: 'post-3',
    title: 'Understanding Web Performance',
    date: '2025-12-20',
    excerpt: 'A deep dive into web performance optimization techniques, from code splitting to image optimization.',
    tags: ['Performance', 'Web Development', 'Optimization'],
    readTime: '10 min read',
    slug: 'understanding-web-performance'
  },
  {
    id: 'post-4',
    title: 'Modern CSS Techniques',
    date: '2025-11-10',
    excerpt: 'Explore modern CSS features like Grid, Flexbox, Custom Properties, and Container Queries.',
    tags: ['CSS', 'Frontend', 'Design'],
    readTime: '7 min read',
    slug: 'modern-css-techniques'
  },
  {
    id: 'post-5',
    title: 'API Design Best Practices',
    date: '2025-10-05',
    excerpt: 'Guidelines for designing RESTful APIs that are intuitive, scalable, and developer-friendly.',
    tags: ['API', 'Backend', 'Architecture'],
    readTime: '9 min read',
    slug: 'api-design-best-practices'
  }
];
