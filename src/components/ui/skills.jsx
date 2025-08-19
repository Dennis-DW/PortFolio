"use client";

import { technologies } from "../../constants";
import { BallCanvas } from "../canvas";
import { styles } from "../../styles";

export default function Skills() {
  return (
    <section
      className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-gray-200 dark:border-gray-700 p-6 rounded-3xl"
      style={{
        background: 'radial-gradient(ellipse at top right, #1a1a1a, #0b090a 120%)',
      }}
    >
      {/* Left Side */}
      <div>
        <h2 className={styles.sectionSubText}>Tools I Work With</h2>
        <p className={styles.sectionHeadText}>Skills & Technologies</p>
        <p className="text-primary text-lg font-medium text-violet-100 tracking-tight">
          A collection of programming languages, frameworks, and technologies that I leverage to craft modern, responsive, and scalable applications. These tools fuel my creativity and enable me to transform ideas into impactful digital solutions.
        </p>
      </div>

      {/* Right Side */}
      <div className="relative w-full min-h-[50vh] flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-[600px] w-full">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex justify-center items-center hover:scale-110 transition-transform duration-300"
              style={{ width: 72, height: 72 }}
            >
              <BallCanvas icon={technology.icon || "/logo.png"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}