"use client"; // Because of the nav Link components this needs to be clientside
import Link from "next/link";
import React from "react";
import './BubbleComponent.css'

// This component uses the props and just renders a bubble either to the left or right
// This contain no bussiness logic as its meant to be a building block controlled from an outside component
const BubbleComponent = (props: { route: string; align: string,placeholder: string }) => {
  return (
    <div className="coupledBubble">
      <div className={"bubbleContainer " + props.align}>
        <Link href={'/bubbles/'+ props.route} className="">{props.placeholder}</Link>
      </div>

      <div className="decorBubble"></div>
    </div>
  );
};

export default BubbleComponent;
