import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Model } from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, N8AO, Bloom } from "@react-three/postprocessing";

export default function Scene({ hoveredNode }) {
  return (
    <Canvas shadows>
      <ambientLight intensity={1} />
      <Model scale={[0.1, 0.1, 0.1]} hoveredNode={hoveredNode} />
      <Environment preset="studio" />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} levels={7} intensity={1} />
      </EffectComposer>
    </Canvas>
  );
}
