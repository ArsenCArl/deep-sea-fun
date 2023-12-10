import React from "react";
import "./SeaComponent.css";

import BubbleTrailComponent from "../BubbleComponent/BubbleTrailComponent";

// This component just composes everything visually and renders the bubble trail inside
// Separation of concerns is important and this component should not have any code on it if that could be avoided
const SeaComponent = () => {
  return (
    <div className="relative seaGrid">
      <div className="topSea"></div>
      <div className="middleSea selectSea min-h-screen flex flex-col items-center">
        <BubbleTrailComponent></BubbleTrailComponent>
      </div>
      <div className="seaBed min-h-screen">
        <div className="bedBg"></div>
      </div>
    </div>
  );
};

export default SeaComponent;
