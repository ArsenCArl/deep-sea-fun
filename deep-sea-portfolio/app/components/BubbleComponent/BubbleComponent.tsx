"use client";
import Link from "next/link";
import React from "react";

const BubbleComponent = (props: { route: string; align: string }) => {
  return (
    <div className="coupledBubble">
      <div className={"bubbleContainer " + props.align}>
        <div className="text-sm align-bottom">Placeholder</div>
        <Link href={'/gizmos/'+ props.route} className="btn"></Link>
      </div>

      <div className="decorBubble"></div>
    </div>
  );
};

export default BubbleComponent;
