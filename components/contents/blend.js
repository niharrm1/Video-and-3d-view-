import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import Blend from '../../public/jail.gltf'; // Assuming it's a GLB file

const Model = () => {
  return (
    <Suspense fallback={null}>
      <mesh rotation={[0, 0, 0]}>
        <ModelContent />
      </mesh>
    </Suspense>
  );
};

const ModelContent = () => {
  const gltf = useGLTF(Blend); // Use useGLTF to load the model
  
  return (
    <primitive object={gltf.scene} />
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Model />
    </Canvas>
  );
};

export default Scene;
