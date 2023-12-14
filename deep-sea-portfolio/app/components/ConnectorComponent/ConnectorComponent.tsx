import Image from "next/image";
import React from "react";

interface props {
  urlLogo: string;
  message: string;
  hrefUrl: string;
}
const ConnectorComponent = (prop: props) => {
  return (
    <div className="w-48 h-56">
      <div className="">{prop.message}</div>
        <div className="relative w-full h-2/3">
        <a  href={prop.hrefUrl} target="_blank">
        <Image
          src={prop.urlLogo}
          alt={prop.message + "image"}
          fill={true}
        ></Image>
      </a>
        </div>

    </div>
  );
};

export default ConnectorComponent;
