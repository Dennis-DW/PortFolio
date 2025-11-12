import React, { useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";  // ✅ Correct source
import { Decal, useTexture } from "@react-three/drei"; // ✅ Drei utilities
import * as THREE from "three";


export const Ball = ({ icon, position = [0, 0, 0], scale = 1.0 }) => {
  const meshRef = useRef();
  const [decal] = useTexture([icon || "/logo.png"]);

  // Add random values for a unique, smooth animation for each ball
  const randomFactors = useMemo(() => ({
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    phaseZ: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.4,
  }), []);

  // Create gradient background
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 256;
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "#0b090a");
    gradient.addColorStop(1, "#ffffff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Billboard effect (face camera)
  useFrame(({ clock, camera }) => {
    if (meshRef.current) {
      // Billboard effect to make the icon always face the camera
      meshRef.current.lookAt(camera.position);

      // Smooth floating animation
      const elapsedTime = clock.getElapsedTime();
      const { phaseX, phaseY, phaseZ, speed } = randomFactors;
      const amplitude = 0.1; // Keep amplitude consistent for a gentle float

      meshRef.current.position.x = position[0] + Math.sin(elapsedTime * speed + phaseX) * amplitude;
      meshRef.current.position.y = position[1] + Math.cos(elapsedTime * speed + phaseY) * amplitude;
      meshRef.current.position.z = position[2] + Math.sin(elapsedTime * speed + phaseZ) * amplitude;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={gradientTexture}
        metalness={0.3}
        roughness={0.5}
        flatShading
      />
      {decal && (
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.9}
          map={decal}
          transparent
          flatShading
        />
      )}
    </mesh>
  );
};

Ball.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.array,
  scale: PropTypes.number,
};
