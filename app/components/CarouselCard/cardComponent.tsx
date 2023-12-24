import React from "react";
import  './cardComponent.css'
import { cardProps } from "@/app/utils/projectData";
import Image from "next/image";




const CardComponent = (props : cardProps) => {
  return (
<div className="card w-72 lg:w-96 bg-base-100 shadow-xl image-full ml-5 mr-5 mb-5 ">
  <figure>
      <Image
      src={'/assets/projectImg/' + props.imgUrl}
      fill
      alt='decorative background image representative of multiple jobs'></Image>
      </figure>
  <div className="card-body ">
    <h2 className="card-title text-white">{props.title}</h2>
    <p className="font-bold text-white">{props.subtitle}</p>
    <p className="font-bold text-white">{props.description}</p>
  </div>
</div>
  );
};

export default CardComponent;
