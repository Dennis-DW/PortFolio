"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My efforts up to now</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <Work />
    </>
  );
};

export function Work() {
  const data = [
    {
      title: "Dec 2025 – Jan 2026",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
            Data Analyst Intern – Excelerate
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Transformed a raw dataset of 285,000 outreach attempts into a strategic executive dashboard using SQL, Looker Studio, and Power BI, serving as the primary tool for recruitment performance tracking.</li>
            <li>Uncovered a hidden 26.4% agent engagement rate (previously reported as 1%) by cleaning data and redefining success metrics, which shifted company strategy from agent retraining to lead-list optimization.</li>
            <li>Built advanced visualizations (funnels, trend lines, and heatmaps) to track daily KPIs, identifying key productivity trends and regional opportunities in real-time.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jan 2024 – present",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-gray-800 dark:text-gray-200 font-bold">
            Full Stack Developer – Sowerved Tech
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li>Managed and maintained 5+ client business applications (WordPress), optimizing performance by 25% through custom API integrations.</li>
            <li>Ensured effective application function by collaborating directly with users and stakeholders to translate business requirements into technical specifications.</li>
            <li>Optimized software deployment processes by implementing CI/CD pipelines (GitHub Actions, Docker), reducing deployment time by 40% and enhancing system reliability.</li>
            <li>Managed the full lifecycle of 3 full-stack software systems (Node.js/React), creating robust RESTful APIs and ensuring effective application operations.</li>
          </ul>
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