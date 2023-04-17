import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Dog = ({ isMobile }) => {
  const dog = useGLTF("./shiba/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={dog.scene}
        scale={isMobile ? 4 : 4.3}
        position={[0, -0.5, 0]}
        // rotation={[0, -5, 0]}
      />
    </mesh>
  );
};

const DogCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableDamping={true}
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          // rotation={[10, -5, 20]}
          // attach={true}
          // minAzimuthAngle={-Math.PI}
          // maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Dog isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default DogCanvas;
