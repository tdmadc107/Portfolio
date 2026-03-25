import { Skill, SkillCategory } from '@types';

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'CSS/SCSS', level: 'advanced' },
      { name: 'HTML', level: 'expert' },
      { name: 'Vue.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'REST API', level: 'expert' },
      { name: 'GraphQL', level: 'intermediate' },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'Vite', level: 'advanced' },
      { name: 'Webpack', level: 'intermediate' },
      { name: 'Jest', level: 'advanced' },
    ],
  },
];
