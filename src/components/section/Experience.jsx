"use client";
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "../ui/timeline";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";

// Import images
import aibbcSite from "../../assets/aibbc-site.png";
import aibbcEvent from "../../assets/aibbc-event.jpeg";
import aiNexusDashboard from "../../assets/ainexus-dashboard.png";
import aiNexusTrading from "../../assets/ainexus-trading.png";
import safetyPlusDatabase from "../../assets/safetyplus-database.jpeg";
import safetyPlusAudit from "../../assets/safetyplus-audit.jpeg";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My efforts up to now
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>
      <Work />
    </>
  );
};

export function Work() {
  const data = [
    {
      title: "May – Jun 2025",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
            Web Developer – AI Nexus Marketplace (Hackathon Submission)
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Built and submitted a decentralized AI trading platform for Bolt AI’s global hackathon.</li>
            <li>Stack included React, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS.</li>
            <li>Integrated real-time analytics, secure smart contracts (Solidity), and wallet connectivity.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src={aiNexusDashboard} alt="AI Nexus Dashboard" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
            <img src={aiNexusTrading} alt="AI Nexus Trading View" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Jan – July 2024",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
            Full Stack Developer – Africa International Biotechnology and Biomedical Conference (AIBBC)
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Developed and maintained the official AIBBC website using WordPress with custom frontend enhancements.</li>
            <li>Integrated responsive layouts, accessibility improvements, APIs, and third-party tools for event management.</li>
            <li>Ongoing updates, performance optimization, and security maintenance.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src={aibbcSite} alt="AIBBC Website" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
            <img src={aibbcEvent} alt="Event Management Integration" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Sept – Dec 2023",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
            Safety Intern – Safety Plus Kenya
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Supported maintenance of internal systems and risk-tracking databases.</li>
            <li>Digitized and managed audit records, implemented document automation, and supported system troubleshooting.</li>
            <li>Contributed to structured backend data management and frontend tools for safety documentation.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src={safetyPlusDatabase} alt="Database Management" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
            <img src={safetyPlusAudit} alt="Audit Record System" className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default SectionWrapper(Works, "");