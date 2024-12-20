import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    firebase,
    git,
    figma,
    safetyplus,
    station,
    eth,
    kejani,
    template,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
    
  export const technologies = [
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  export const experiences = [
    {
      title: "Web Developer",
      company_name: "Safety Plus",
      icon: safetyplus,
      iconBg: "#383E56",
      date: "September 2023 - December 2023",
      points: [
        "Developed and maintained web applications using React.js and related technologies.",
        "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
  ];
  
  export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dennis proved me wrong.",
      name: "Dr. Otuke",
      designation: "CEO",
      company: "Safety Plus",
      image:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?w=740&t=st=1723586732~exp=1723587332~hmac=0f42d81f4736e0e389456257bea5f685587a58113378492fe7a2b9900f57a4ed",
    },
    {
      testimonial:
        "Dennis developed an outstanding mobile application for his final course project, exceeding expectations with his dedication, creativity, and technical skills..",
      name: "Waphuka",
      designation: "CEO",
      company: "Zao Tech",
      image:
        "https://img.freepik.com/premium-photo/young-mans-portrait-digital-simplicity_96461-12697.jpg?w=740",
    },
    {
      testimonial:
        "Collaborated with Dennis on projects like Morphosis and SPRBS; his technical expertise and problem-solving skills were invaluable..",
      name: "Carlos",
      designation: "Freelancer",
      company: "Sowerved",
      image:
        "https://img.freepik.com/premium-photo/young-smiling-african-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1240525-16005.jpg?w=740",
    },
  ];
  
  export const projects = [
    {
      name: "StationScout",
      description:
        "StationScout helps users find nearby gas stations quickly using modern technologies, APIs, and a user-friendly interface.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "google API",
          color: "blue-text-gradient",
        },
      ],
      image: station,
      source_code_link: "https://github.com/Dennis-DW/StationScout",
    },
    {
      name: "Ethereum Sender",
      description:
        "Web3.0 React and Vite project with MetaMask, smart contracts, and Ethereum transactions on the blockchain.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "hardhat",
          color: "pink-text-gradient",
        },
      ],
      image: eth,
      source_code_link: "https://github.com/adrianhajdin/project_web3.0",
    },
    {
      name: "Kejani Homes",
      description:
        "Kejani Homes is a MERN web app using Refine for full CRUD, streamlining real estate operations.",
      tags: [
        {
          name: "refine",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: kejani,
      source_code_link: "https://github.com/Dennis-DW/Kejani-homes-Refine",
    },
    {
      name: "E-commerce Template",
      description:
        "A responsive e-commerce landing page using Tailwind CSS, React, and Vite with fast load times and modern design.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: template,
      source_code_link: "https://github.com/Dennis-DW/react_template-Design",
    },
  ];
  