import React from "react";
import  './cardComponent.css'
import { cardProps } from "@/app/utils/projectData";




const CardComponent = (props : cardProps) => {
  return (
<div className="card w-96 bg-base-100 shadow-xl image-full ml-5 mr-5 mb-5">
  <figure><img src={'/assets/projectImg/' + props.imgUrl} alt=""  /></figure>
  <div className="card-body ">
    <h2 className="card-title">{props.title}</h2>
    <p className="font-bold">{props.subtitle}</p>
    <p className="font-bold">{props.description}</p>
  </div>
</div>
  );
};

export default CardComponent;
