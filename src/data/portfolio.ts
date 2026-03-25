// Portfolio data file
// Update this file with your own portfolio information

import {
  Project,
  Experience,
  Education,
  Certification,
  Achievement,
} from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Job Title',
    duration: 'Month Year - Present',
    description: 'Description of your role and responsibilities',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
];

export const educations: Education[] = [
  {
    id: '1',
    school: 'University Name',
    degree: 'Degree Type',
    field: 'Field of Study',
    year: '2020',
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Certification Title',
    issuer: 'Issuer Name',
    date: 'Date',
    credentialUrl: 'https://example.com',
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Achievement Title',
    description: 'Achievement description',
    date: '2024',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description',
    image: '/assets/images/project-thumbnail.png',
    technologies: ['React', 'TypeScript'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
];
