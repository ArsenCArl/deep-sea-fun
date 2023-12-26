import React from "react";
import "./SeaComponent.css";

import BubbleTrailComponent from "../BubbleComponent/BubbleTrailComponent";
import ConnectorComponent from "../ConnectorComponent/ConnectorComponent";

// This component just composes everything visually and renders the bubble trail inside
// Separation of concerns is important and this component should not have any code on it if that could be avoided
const SeaComponent = () => {
  return (
    <div className="relative seaGrid">
      <div className="topSea"></div>
      <div className="middleSea selectSea min-h-screen flex flex-col lg:flex-row ">
        <div className="aboutMe m-auto">
          <div className="text-4xl lg:text-5xl text-center mb-5 ">
            Hello there! I am <b className="text-sky-100">Arsenio</b>
            <br /> a Full Stack developer!
          </div>
          <div className="text-xl lg:text-2xl text-center">
            <p>
              On the bubble menu you can check some of my experiments with
              <b className="text-cyan-400"> NextJS</b>
              <br />
              Check the treasure chest to see my latest professional projects
              <br />
            </p>
            <p className="mt-10">
              This project is entirely uploaded and documented in <a className="text-purple-400 hover:text-purple-200" target="_blank" href="https://github.com/ArsenCArl/deep-sea-fun">Github</a>,
              <br />
              All graphics in this page were designed by <b className="text-sky-100">me</b>
              <br />
              For the Hosting i have used <b className="text-amber-400">AWS</b>,
              <br />
            </p>

            <div className="linkedin justify-center flex mt-10 text-xl">
                <ConnectorComponent
                  message="Connect with me!"
                  urlLogo="/icons/linkedin.png"
                  hrefUrl="https://www.linkedin.com/in/arsenio-sanchez01/"
                ></ConnectorComponent>
              </div>

          </div>
        </div>
        <div className="bubbleMenu">
          <BubbleTrailComponent></BubbleTrailComponent>
        </div>
      </div>
      <div className="seaBed">
        <div className="bedBg"></div>
      </div>
    </div>
  );
};

export default SeaComponent;
