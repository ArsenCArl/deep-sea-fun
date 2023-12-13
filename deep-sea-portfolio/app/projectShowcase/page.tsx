"use client";
import React from "react";
import "./projectShowcase.css";
import CardComponent, {
  cardProps,
} from "../components/CarouselCard/cardComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const cardsData: cardProps[] = [
  {
    title: "AXA",
    subtitle : 'Human Rersources Tracker',
    description: "fast fast fast refresh is one of the things",
    techs: ["hello", "java"],
  },
  {
    title: "2",
    subtitle : 'Human Rersources Tracker',
    description: "fast fast fast refresh is one of the things",
    techs: ["hello", "java"],
  },
];

const page = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="treasureChestBg flex flex-col items-center justify-center stre">
      <div className="cardContainer">
        <Slider {...settings}>
          {cardsData.map((card) => (
            <CardComponent
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              techs={card.techs}
            ></CardComponent>
          ))}
        </Slider>
      </div>
      <div className="self-end mt-24">
        <Link href="/">
          <div className="text-3xl hover:text-4xl text-amber-300 text-center mr-12">
            Back
          </div>
        </Link>
      </div>
      <div className="carousel w-full"></div>
    </div>
  );
};

export default page;
