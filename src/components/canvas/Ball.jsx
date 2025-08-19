import React, { Suspense, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../ui/Loader';
import * as THREE from 'three';

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;

    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, '#0b090a');
    gradient.addColorStop(1, '#ffffff');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <Float rotationIntensity={0.6} speed={1.1} floatIntensity={1.4}>
      <hemisphereLight intensity={0.6} groundColor={new THREE.Color('#333333')} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 4]} intensity={1.5} />
      <mesh castShadow receiveShadow scale={1.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={gradientTexture}
          metalness={0.2}
          roughness={0.5}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.0}
            map={decal}
            transparent
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  icon: PropTypes.string.isRequired,
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
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default React.memo(BallCanvas);