import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
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
  // {
  //   title: 'WhirrCrew s.r.o.',
  //   location: 'Prague, Czechia',
  //   description:
  //     'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
  //   icon: React.createElement(BriefcaseBusinessIcon),
  //   date: 'Jun 2024 - Present',
  // },
  // {
  //   title: 'NAU',
  //   location: 'Kyiv, Ukraine',
  //   description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
  //   icon: React.createElement(BookIcon),
  //   date: 'Sep 2022 - Jun 2024',
  // },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  // {
  //   title: 'Audit Master',
  //   description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
  //   tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
  //   imageUrl: auditMasterImg,
  //   link: 'https://auditmaster.ai/',
  // },
  // {
  //   title: 'Demo Automation of accounting documents processing',
  //   description:
  //     'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
  //   tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
  //   imageUrl: accountingImg,
  //   link: 'https://demo.grantonai.cz/',
  // },
  // {
  //   title: 'FileDrive',
  //   description:
  //     'A platform for decentralized file storage with robust user management.',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'Convex',
  //     'Clerk',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: filedriveImg,
  //   link: 'https://github.com/bbyc4kes/file-drive',
  // },
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

  // {
  //   title: 'Surge',
  //   description:
  //     'Service that allows users to build and manage their own websites with integrated payment processing.',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'MySQL',
  //     'Clerk',
  //     'Stripe Connect',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: surgeImg,
  //   link: 'https://github.com/bbyc4kes/surge',
  // },
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
