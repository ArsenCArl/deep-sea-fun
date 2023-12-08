import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";


export interface meshControls {
    rotateRight? : boolean,
    rotateLeft? : boolean
  }
  function MeshComponent(props : meshControls) {
    const fileUrl = "/scene.gltf";
    const textureFileUrl = "/textures/squid1_baseColor.png";
  
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    const textMap = useLoader(TextureLoader, textureFileUrl);
  
  
    useFrame(() => {
      if(props.rotateRight){
        mesh.current.rotation.y += 0.02;
      }
      if(props.rotateLeft){
        mesh.current.rotation.y -= 0.02;
      }
  
  
    });
  
    return (
      <mesh ref={mesh} scale={20} rotation={[0, 0, 0]} position={new Vector3(0,-2,0)} >
        <primitive object={gltf.scene} />
        <meshStandardMaterial map={textMap}></meshStandardMaterial>
        <ambientLight />
      </mesh>
    );
  }
  
  export default MeshComponent