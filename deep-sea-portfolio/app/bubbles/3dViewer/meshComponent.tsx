import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

//This is the squid object

export interface meshControls {//Prop that has the two signals for rotation, if we needed to move it in any other axis it should be added here
    rotateRight? : boolean,
    rotateLeft? : boolean
  }
  function MeshComponent(props : meshControls) {
// Urls
    const fileUrl = "/3dObject/scene.gltf";
    const textureFileUrl = "/3dObject/textures/squid1_baseColor.png";
// Loaders
    const gltf = useLoader(GLTFLoader, fileUrl); //Loader for the 3d mesh
    const textMap = useLoader(TextureLoader, textureFileUrl); // Loader for the texture of the 3d mesh

    const mesh = useRef<Mesh>(null!);
  
  
    useFrame(() => { //Controls that trigger every frame and check for the rotation signals
      if(props.rotateRight){
        mesh.current.rotation.y += 0.02;
      }
      if(props.rotateLeft){
        mesh.current.rotation.y -= 0.02;
      }
  
  
    });
  
    //scale is 20 to make it bigger and i adjusted in the Y axis with -2 so it gets centered on camera
    // 
    return (
      <mesh ref={mesh} scale={20} rotation={[0, 0, 0]} position={new Vector3(0,-2,0)} >
        <primitive object={gltf.scene} />
        <meshStandardMaterial map={textMap}></meshStandardMaterial>
        <ambientLight />
      </mesh>
    );
  }
  
  export default MeshComponent