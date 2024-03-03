import React from "react";
import { Carousel } from "@material-tailwind/react";

const images = [
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372082/samples/holiday-heavens/home-page/siaahsc3jxtpkto5ixdg.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372082/samples/holiday-heavens/home-page/vzxfmlg3hcnn56vsxekz.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372077/samples/holiday-heavens/home-page/meuiicf1ezn0vbzblnpd.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372081/samples/holiday-heavens/home-page/pwrspzhnifkih1siu1bo.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372079/samples/holiday-heavens/home-page/mdpadrug3mihovpyt9yp.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372073/samples/holiday-heavens/home-page/fwws61zrar9bcw37u9zb.jpg",
  "https://res.cloudinary.com/dcgwmpbmb/image/upload/v1709372072/samples/holiday-heavens/home-page/lgo9raykcbv5dhn0ioyp.jpg",
];

const HomeCarousel = () => {
  return (
    <div>
      <div className="mb-8 ">
        <Carousel
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          transition={{ type: "spring", duration: 0.9 }}
        >
          {images.map((src, index) => {
            return (
              <img
                key={index}
                src={src}
                alt="image 1"
                className="h-full w-full object-cover"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
