import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader"; 
import * as THREE from 'three'; 

// Define a functional component to render the ball
const Ball = ({ imgUrl }) => {
  // Load the texture image using the provided URL
  const [decal] = useTexture([imgUrl]);

  return (
    // Float component adds floating and rotation effects to the ball
    <Float rotationIntensity={1} speed={1.75} floatIntensity={2}>
      <ambientLight intensity={0.25} /> 
      <directionalLight position={[0, 0, 0.05]} /> 
      <mesh castShadow receiveShadow scale={2.75}> 
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#EEEEEE' 
          polygonOffset
          polygonOffsetFactor={-5} 
          flatShading 
        />
        {/* Decal component to apply the texture on the ball */}
        <Decal
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          scale={1} 
          map={decal} 
          flatShading 
        />
      </mesh>
    </Float>
  );
};

// Define prop types for the Ball component
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

// Define the BallCanvas component to create and render the 3D scene
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Define prop types for the BallCanvas component
BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;