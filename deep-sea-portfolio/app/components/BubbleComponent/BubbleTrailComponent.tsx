import React from "react";
import BubbleComponent from "./BubbleComponent";
import { gizmo, gizmoList } from "@/app/utils/gizmosData";
import Image from "next/image";
import Link from "next/link";


//Used to create a trail of bubbles, manages the logic behind making each bubble sway in different directions
//This is created by and odd number terniary operator, cool!

const BubbleTrailComponent = () => {
  const gizmosList: gizmo[] = gizmoList; 
  // As of right now there is really no need for a databsase on this app so this data fetch is atended internally
  // it points to an utils file with a list of the different projects
  // this const could easily be conected to a database in the future and as long as we pased the same type of object the app would work perfectly
  const imgUrl: string = "/chest.png";
  const treasureChest: string = "/projectShowcase";

  return (
    <div className="flex flex-col ">
      {gizmosList.map((gizmo, index) => (
        <BubbleComponent
          key={gizmo.id}
          route={gizmo.pageUrl}
          align={index % 2 === 0 ? "Left" : "Right"}
          placeholder={gizmo.placeholder}
        ></BubbleComponent>
      ))}

      <Link href={treasureChest}>
        <Image
          className="Left"
          src={imgUrl}
          width={200}
          height={200}
          alt="treasure chest that leads to project section"
        ></Image>
      </Link>
    </div>
  );
};

export default BubbleTrailComponent;
