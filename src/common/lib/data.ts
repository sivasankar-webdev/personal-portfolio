import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import ThemesImg from '@/../public/images/themeimg.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'UK Info Tech',
    location: 'Pudukkottai, Tamil Nadu',
    experience : '6 Months',
    description:
      'Full Stack Developer (Intern).  Developed responsive and dynamic user interfaces using React.js and Bootstrap, ensuring seamless user experience across devices.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2023 - July 2023',
  },
  {
    title: 'Nisko Pinnacle Telematics Pvt Ltd',
    location: 'Coimbatore, Tamil Nadu',
    experience : '2.5 Yrs',
    description: 'Junior Software Developer. •	Developed dynamic frontend components using React.js and Vite for fast development and real-time visualization of historical and live data from various IoT meters',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'July 2023 - Dec 2025',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Personal Portfolio',
    description: `Built a modern, responsive portfolio website using Next.js to showcase my projects and skills. Focused on performance optimization, smooth animations to deliver an user experience.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://sivasankar-dev-portfolio.vercel.app/',
  },

  {
    title: 'React Multi theme E-com App',
    description:
      'Built a multi-theme e-commerce application with dynamic theme switching, React Router based navigation, and persistent UI state using React and Vite.',
    tags: [
      'React',
      'Tailwind',
      'React Router'
    ],
    imageUrl: ThemesImg,
    link: 'https://github.com/sivasankar-webdev/react-multi-theme-ecommerce',
  },
] as const;

export const skillsData = [
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Redux Toolkit', '/svgs/redux-original.svg'],
  ['MUI', '/svgs/materialui.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  // ['MySQL', '/svgs/MySQL.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  // ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
