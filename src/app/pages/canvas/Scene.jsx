import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";
import { Brand } from "./Brand";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Scene() {
  const modelRef = useRef(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    console.log(mouse.x, mouse.y);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      {/* <OrbitControls /> */}

      <motion.group rotation-x={mouse.y} rotation-y={mouse.x}>
        <Brand scale={[0.8, 0.8, 0.8]} rotation={[0, 5, 0]} />
      </motion.group>

      <Environment preset="studio" />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} levels={7} intensity={1} />
      </EffectComposer>
    </Canvas>
  );
}
