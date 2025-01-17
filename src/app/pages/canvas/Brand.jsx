/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Brand(props) {
  const { nodes, materials } = useGLTF("/models/brand.glb");
  return (
    <group {...props} dispose={null}>
      <group
        name="Node_1"
        position={[0, 0, 0.573]}
        rotation={[-0.474, 1.455, 0.471]}
      >
        <mesh
          name="Shape001"
          castShadow
          receiveShadow
          geometry={nodes.Shape001.geometry}
          position={[-0.062, 0.085, 0.025]}
          rotation={[0, 0.084, 0.004]}
        >
          <meshStandardMaterial color={"#ff4d00"} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/brand.glb");
