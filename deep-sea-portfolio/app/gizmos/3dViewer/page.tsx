'use client'
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh} scale={25}>
      <primitive object={gltf.scene} />
    </mesh>
  );}

const page = () => {
  return (
    <div>
      <div></div>
      <div>
      <Canvas className='min-h-full min-w-full'>
        <MeshComponent />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      </div>
    </div>
  );
};

export default page;
