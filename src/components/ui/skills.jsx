"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";
import { technologies } from "../../constants";
import { styles } from "../../styles";
import { Ball } from "../canvas/Ball";
import CanvasLoader from "../ui/Loader";
import { Suspense } from "react";

export default function Skills() {
  // Responsive layout constants
  const textRef = useRef(null);
  const [radius, setRadius] = useState(5.5);

  useEffect(() => {
    const updateRadius = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const textHeight = textRef.current.offsetHeight;
        const fov = 50;
        const distance = 15;
        const aspect = window.innerWidth / window.innerHeight;
        const visibleHeight = 2 * Math.tan((fov / 2) * (Math.PI / 180)) * distance;
        const visibleWidth = visibleHeight * aspect;
        const sceneUnitsPerPixelX = visibleWidth / window.innerWidth;
        const sceneUnitsPerPixelY = visibleHeight / window.innerHeight;

        // Calculate radius based on text width in scene units, plus padding
        const radiusX = (textWidth / 2) * sceneUnitsPerPixelX + 2.5;
        const radiusY = (textHeight / 2) * sceneUnitsPerPixelY + 2.0;

        // Use the larger of the two radii to ensure the sphere encapsulates the text
        const newRadius = Math.max(radiusX, radiusY);
        setRadius(newRadius);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section
      className="max-w-7xl mx-auto my-24 px-6 relative border border-gray-200 dark:border-gray-700 p-8 rounded-3xl overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top right, #1a1a1a, #0b090a 120%)",
        minHeight: "75vh",
      }}
    >
      {/* Text Overlay */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-10 text-center pointer-events-none"
      >
        <h2 className={styles.sectionSubText}>Tools I Work With</h2>
        <p className={styles.sectionHeadText}>Skills & Technologies</p>
        <p className=" text-lg font-medium text-violet-100/90 tracking-tight max-w-4xl mx-auto">
          A collection of programming languages, frameworks, and technologies
          that I leverage to craft modern, responsive, and scalable applications.
          These tools fuel my creativity and enable me to transform ideas into
          impactful digital solutions.
        </p>
      </div>

      {/* Canvas Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 15], fov: 50 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* Lights */}
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={1.3} />
            <pointLight position={[-5, -3, -5]} intensity={0.5} />

            {/* Allow orbit to view from different angles */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
            />

            {/* Layout the balls in a 3D grid pattern with spacing */}
            {technologies.map((tech, i) => {
              // Distribute points evenly on a sphere using the Fibonacci lattice method
              const n = technologies.length;
              const phi = Math.acos(-1 + (2 * i) / (n - 1));
              const theta = Math.sqrt(n * Math.PI) * phi;

              const x = Math.cos(theta) * Math.sin(phi) * radius;
              const y = Math.sin(theta) * Math.sin(phi) * radius;
              const z = Math.cos(phi) * radius;

              const scale = 0.9;

              return (
                <Ball
                  key={tech.name}
                  icon={tech.icon}
                  position={[x, y, z]}
                  scale={scale}
                />
              );
            })}
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </section>
  );
}
