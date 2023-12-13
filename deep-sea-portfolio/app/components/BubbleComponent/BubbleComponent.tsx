"use client"; // Because of the nav Link components this needs to be clientside
import Link from "next/link";
import React from "react";
import "./BubbleComponent.css";
import Image from "next/image";

// This component uses the props and just renders a bubble either to the left or right
// This contain no bussiness logic as its meant to be a building block controlled from an outside component
const BubbleComponent = (props: {
  route: string;
  align: string;
  placeholder: string;
  imgUrl: string;
}) => {
  return (
    <div className="coupledBubble">
      <div className={"bubbleContainer " + props.align}>
        <Link href={"/bubbles/" + props.route} className="bubbleParent">
          <Image
            className="mainMenu bubbleSibling"
            src={props.imgUrl}
            width={500}
            height={500}
            alt={props.placeholder}
          ></Image>
          <div className="bubbleSiblingTop hiddenTitle text-center text-3xl text-black">
            {props.placeholder}
          </div>
        </Link>
      </div>
      <div className="decorBubble"></div>
    </div>
  );
};

export default BubbleComponent;
