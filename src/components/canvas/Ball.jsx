import React, { Suspense, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../ui/Loader"; 
import * as THREE from 'three'; 

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  // Create a gradient texture
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;

    // Create the gradient
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, '#0b090a'); // Start color
    gradient.addColorStop(1, '#ffffff'); // End color

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create a texture from the canvas
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <Float rotationIntensity={0.6} speed={1.1} floatIntensity={1.4}>
      <hemisphereLight intensity={0.4} groundColor={new THREE.Color('#222222')} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 4]} intensity={0.9} />
      <mesh castShadow receiveShadow scale={1.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={gradientTexture} // Apply the gradient texture
          metalness={0.1}
          roughness={0.4}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.85}
          map={decal}
          transparent
          flatShading
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;