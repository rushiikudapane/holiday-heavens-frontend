import React from "react";
import { Carousel } from "@material-tailwind/react";

const CardDetailsCarousel = ({ currentDestination }) => {
  const carouselImages = currentDestination.carouselImages;
  console.log(carouselImages);

  return (
    <div>
      <Carousel
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        transition={{ type: "spring", duration: 0.9 }}
        className="rounded-xl h-96 mb-8"
      >
        {carouselImages.map((data, index) => (
          <img
            src={data}
            alt="image 1"
            className="h-full w-full object-cover"
            key={index}
            value={index}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CardDetailsCarousel;
