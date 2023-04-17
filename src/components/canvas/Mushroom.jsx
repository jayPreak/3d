import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Mushroom = () => {
  const shroom = useGLTF("./stylized_mushrooms/scene.gltf");
  return (
    <primitive
      object={shroom.scene}
      scale={0.85}
      position-y={-1}
      // rotation-y={0}
      rotation={[0.1, 0, 0]}
    ></primitive>
  );
};

const MushroomCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate={false}
          autoRotate
          enableZoom
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Mushroom />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MushroomCanvas;
