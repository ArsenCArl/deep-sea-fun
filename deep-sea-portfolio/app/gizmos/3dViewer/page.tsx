"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Mesh, TextureLoader, Vector3 } from "three";
import MeshComponent from "./meshComponent";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowUturnUpIcon } from "@heroicons/react/20/solid";

const page = () => {
  const [counter, setCounter] = useState(0);
  const promptList: string[] = [
    "Hi, My name is Wiggly",
    "I am a 3d Rendered Object using Three.Js",
    "I can be rotated using the controls",
    "I can also be animated!",
  ];
  const [rotateLeftSignal, setRotateLeft] = useState(false);
  const [rotateRightSignal, setRotateRight] = useState(false);

  const handleClik = (e: React.MouseEvent<SVGSVGElement>) => {
    setCounter(counter + 1);
  };
  const handleMouseDown =
    (direction: string) => (e: React.MouseEvent<SVGSVGElement>) => {
      if (direction === "left") {
        setRotateLeft(true);
      } else if (direction === "right") {
        setRotateRight(true);
      } else {
        setRotateRight(false);
        setRotateLeft(false);
      }
    };

  return (
    <div className="flex justify-center flex-row min-h-min">
      <div className="h-72 w-72">
        <Canvas className="min-h-full min-w-full">
          <MeshComponent
            rotateLeft={rotateLeftSignal}
            rotateRight={rotateRightSignal}
          />
        </Canvas>
        <div className="flex justify-center flex-row justify-items-stretch min-h-min">
          <ArrowUturnUpIcon
            transform="scale(-1,1)"
            width={20}
            height={20}
            className="text-slate-50 hover:text-teal-400"
            onMouseDown={handleMouseDown("left")}
            onMouseUp={handleMouseDown("up")}
            onMouseLeave={handleMouseDown("up")}
          ></ArrowUturnUpIcon>
          <ArrowUturnUpIcon
            className="text-slate-50 hover:text-teal-400"
            width={20}
            height={20}
            onMouseDown={handleMouseDown("right")}
            onMouseUp={handleMouseDown("up")}
            onMouseLeave={handleMouseDown("up")}
          ></ArrowUturnUpIcon>
        </div>
      </div>
      <div className="chat chat-start self-start mt-36">
        <div className="chat-bubble text-1xl p-3 pr-6 chatText shadow-2xl">
          {promptList[counter]}
          {counter === promptList.length - 1 ? (
            <></>
          ) : (
            <ArrowRightIcon
              onClick={handleClik}
              width={15}
              height={15}
              className="text-slate-50 hover:text-teal-400 "
            ></ArrowRightIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
