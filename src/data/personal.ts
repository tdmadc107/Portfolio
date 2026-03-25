// Personal information & contact data

export interface PersonalInfo {
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export const personalInfo: PersonalInfo = {
  fullName: 'Your Full Name',
  title: 'Full Stack Developer',
  bio: 'Passionate about building beautiful and functional web applications. Always learning and staying up-to-date with latest technologies.',
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890',
  location: 'City, Country',
  image: '/assets/images/profile.png',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/username',
    icon: '/assets/icons/github.svg',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: '/assets/icons/linkedin.svg',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/username',
    icon: '/assets/icons/twitter.svg',
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: '/assets/icons/email.svg',
  },
];
