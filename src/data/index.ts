import { GitHubIcon } from '@/components/icons/github';
import { InstagramIcon } from '@/components/icons/instagram';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { XIcon } from '@/components/icons/x';

export const SocialMedia = [
  { name: 'Twitter', link: 'https://x.com/StatmanAartt', icon: XIcon },
  { name: 'Instagram', link: 'https://www.instagram.com/arthuronit/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/ebarthur', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ebarthur', icon: LinkedInIcon },
] as const;

export const Skills = {
  skills: ['JavaScript', 'TypeScript', 'React/Next.js', 'Node.js/Express', 'Go'],
};

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export const CurrentProjects: Project[] = [
  {
    title: 'Dumsor Tracker',
    techStack: ['Open Source Project', 'TypeScript', 'Next.js', 'Supabase'],
    description: 'A platform to track the pattern of power outages across Ghana',
    link: {
      label: 'github.com',
      href: 'https://github.com/OpenSource-GH/dumsor-tracker-frontend',
    },
  },
  {
    title: 'Changelog API',
    techStack: ['Side Project', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM'],
    description: 'Backend API for documenting software product changelogs',
    link: {
      label: 'github.com',
      href: 'https://github.com/ebarthur/changelog-api',
    },
  },
  {
    title: 'Game Coin API',
    techStack: ['Side Project', 'Go'],
    description: 'A game coin retrieval API built with Golang',
    link: {
      label: 'github.com',
      href: 'https://github.com/ebarthur/go-api',
    },
  },
  {
    title: 'Lasagna',
    techStack: ['Side Project', 'Next.js'],
    description: 'My portfolio website, the one you are currently on',

    link: {
      label: 'github.com',
      href: 'https://github.com/ebarthur/lasagna',
    },
  },
  {
    title: 'Mafia II',
    techStack: ['Side Project', 'React', 'Vite'],
    description: "Portfolio of 2K's Mafia II game ",
    link: {
      label: 'vercel.app',
      href: 'https://mafia-amber.vercel.app/',
    },
  },
];

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

type About = {
  content: string;
  handle: string;
};

export const AboutMe: About = {
  content: 'Farming would have been better tbvh.',
  handle: '— @lasagna',
};
