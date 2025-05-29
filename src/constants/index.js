
import { desc } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  cont,
  plumbing,
  apple,
  ecom,
  tripguide,
  threejs,
   // <-- add this
} from "../assets";

export const navLinks = [

  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Developer",
    icon: web,
  },
  {
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "Tailwind CSS Specialist",
    icon: backend,
  },
  {
    title: "Component Library Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Apple Clone",
    description:
      "A responsive clone of the Apple website built with Next.js and Tailwind CSS, featuring a modern UI, smooth transitions, and consistent layout across all devices for an authentic feel.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: apple,
    source_code_link: "https://apple-clone-beta.vercel.app/",
  },
  {
    name: "E Commerce Website",
    description:
      "A modern shopping site with product browsing, cart features, and responsive design. Built using Next.js and Tailwind CSS to offer a smooth and intuitive user experience across devices.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://e-commerce-chi-eight-35.vercel.app/",
  },
  {
    name: "E commerce Website",
    description:
      "Next.js-based ecommerce frontend with REST API integration, allowing users to browse products, manage cart items, and enjoy a responsive UI designed for all screen sizes.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: ecom,
    source_code_link: "https://foreverecommerce-eta.vercel.app/",
  },
  {
    name: "World Atlas",
    description:
      "An interactive world map app built with Next.js and Framer Motion, providing country details and region filters in a responsive UI, ideal for exploring global geography visually.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://worldatlas-dusky.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio site using Next.js and Tailwind CSS. It highlights skills and projects with smooth Framer Motion animations for a professional user experience.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://romeogfx.vercel.app/",
  },
  {
    name: "Contagious",
    description:
      "A web app displaying a global map with country insights and filter options. Developed using Next.js and Tailwind CSS, it delivers a smooth and engaging interface with Framer Motion.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: cont,
    source_code_link: "https://contagiouswebsite.vercel.app/",
  },
  {
    name: "Plumbing",
    description:
      "A clean and responsive plumbing service site powered by Next.js. Includes region-based service details with a user-friendly layout and animations powered by Framer Motion and Tailwind.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: plumbing,
    source_code_link: "https://plumbing-nine.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };