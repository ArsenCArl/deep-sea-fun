"use client";
import React, { useState } from "react";
import "./projectShowcase.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { projectsData } from "../utils/projectData";
import CardComponent from "../components/CarouselCard/cardComponent";

const page = () => {
  const [cardsData, setCardData] = useState(projectsData);

  return (
    <div className="oceanBg text-black ">
      <div className="projectSideBg fullScreen fullScreen flex flex-col items-center ">
      <div className="text-center text-3xl "> Professional Projects</div>
        <div className="text-center text flex items-center p-6 mr-2">
          <Link
            href="/"
            className="text-slate-950 hover:text-slate-800 hover:text-4xl text-3xl mb-10">
            Back to the sea
          </Link>
        </div>
        <div className=" w-56 min-w-max min-h-min m-12 scroll-smooth overflow-y-scroll hideScrollbar">

          <div className="grid lg:grid-cols-2 grid-cols-1">
          {cardsData.map((project) => (
          <CardComponent
            key={project.title}
            title={project.title}
            description={project.description}
            subtitle={project.subtitle}
            techs={project.techs}
            imgUrl={project.imgUrl}
          ></CardComponent>
        ))}
            <div>a</div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default page;
