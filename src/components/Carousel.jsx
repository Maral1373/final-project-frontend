import React from "react";
import { Carousel } from "react-carousel-minimal";

const CarouselComponent = () => {
  const data = [
    {
      image: "/img/background1.png",
      caption: "",
    },
    {
      image: "/img/background4.jpg",
      caption: "",
    },
    {
      image: "/img/background2.jpg",
      caption: "",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  return (
    <Carousel
      data={data}
      time={2000}
      width="100%"
      height="40vh"
      captionStyle={captionStyle}
      // radius="10px"
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      style={{
        textAlign: "center",
        maxWidth: "100vw",
        maxHeight: "40vh",
        margin: "0",
      }}
    />
  );
};

export default CarouselComponent;
