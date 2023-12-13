import React from "react";
import  './cardComponent.css'


export interface cardProps {
title : string,
subtitle : string,
description : string,
techs : string[]
}

const CardComponent = (props : cardProps) => {
  return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="bg-amber-400">           {props.title}
</figure>
  <div className="card-body">
    <h2 className="card-title">
    {props.subtitle}
    </h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
    {props.techs.map((tech) => (
      <div className="badge badge-outline"> {tech}</div> 
          ))}
    </div>
  </div>
</div>
  );
};

export default CardComponent;
