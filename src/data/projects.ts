import { Project } from '@types';

export const projects: Project[] = [
  {
    id: '4',
    title: 'E-Commerce Platform',
    description:
      'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Built with React and Node.js.',
    image: '/assets/images/project-ecommerce.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://ecommerce-demo.com',
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    description:
      'Chat application with real-time messaging, user authentication, and notification system using WebSocket.',
    image: '/assets/images/project-chat.png',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    link: 'https://chat-app-demo.com',
    github: 'https://github.com/username/chat-app',
  },
  {
    id: '2',
    title: 'Personal Budget Tracker',
    description:
      'Budget tracking app with expense categorization, charts, and monthly reports. Mobile-friendly and responsive design.',
    image: '/assets/images/project-budget.png',
    technologies: ['React', 'TypeScript', 'Chart.js', 'LocalStorage'],
    link: 'https://budget-tracker-demo.com',
    github: 'https://github.com/username/budget-tracker',
  },
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'Modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: '/assets/images/project-portfolio.png',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    link: 'https://my-portfolio.com',
    github: 'https://github.com/username/portfolio',
  },
];
