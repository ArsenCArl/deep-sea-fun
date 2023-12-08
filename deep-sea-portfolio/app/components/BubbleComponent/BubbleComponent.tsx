"use client";
import Link from "next/link";
import React from "react";

const BubbleComponent = (props: { route: string; align: string,placeholder: string }) => {
  return (
    <div className="coupledBubble">
      <div className={"bubbleContainer " + props.align}>
        <Link href={'/gizmos/'+ props.route} className="">{props.placeholder}</Link>
      </div>

      <div className="decorBubble"></div>
    </div>
  );
};

export default BubbleComponent;
