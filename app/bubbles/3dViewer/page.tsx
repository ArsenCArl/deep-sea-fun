"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import MeshComponent from "./meshComponent";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowUturnUpIcon } from "@heroicons/react/20/solid";

const Viewer3d = () => {
  const [counter, setCounter] = useState(0);
  const [rotateLeftSignal, setRotateLeft] = useState(false);
  const [rotateRightSignal, setRotateRight] = useState(false);
  // Two of this states are to control rotation of the object, we need to keep track of both directions aswell as stopped
  // Because this is three States it could not be simply stored in a boolean so i choosed to use two,


  const promptList: string[] = [ //List of things the chat says, may move it to an util file to clean up and make it more readable
    "Hi, My name is Wiggly",
    "I am a 3d Rendered Object using Three.Js",
    "I can be rotated using the controls",
    "I can also be animated!",
    'My model was done by carlin.chu on Sketchfab!',
    'Three.Js can help making more dynamic pages, using 3d Technology'
  ];



  const handleChatFoward = (e: React.MouseEvent<SVGSVGElement>) => { //Moves the chat foward 
    setCounter(counter + 1);
  };


  // This is the function that gets activated if the mouse is left click
  // every button has a different direction and it gets managed from a string 
  const handleMouseDown = (direction: string) => 
  (e: React.MouseEvent<SVGSVGElement>) => //Typing for a mouse event so it accepts it
   {
      if (direction === "left") {
        setRotateLeft(true);
      } else if (direction === "right") {
        setRotateRight(true);
      } else {// It also manages if the mouse leaves the buttons sending a empty signal wich goes here
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
              onClick={handleChatFoward}
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

export default Viewer3d;
