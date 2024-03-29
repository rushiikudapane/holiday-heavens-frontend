import { React, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Carousel,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const testimonialData = [
  {
    name: "Sumit Marathe",
    img: "",
    profession: "Traveller",
    desc: "Pawana Camps offered an unforgettable experience! The serene environment and friendly staff made our stay truly special.",
  },
  {
    name: "Karan Dhide",
    img: "",
    profession: "IT Engineer",
    desc: "The perfect getaway! Pawana Camps blend adventure and tranquility in a unique way.",
  },
  {
    name: "Amit Marathe",
    img: "",
    profession: "Trekker",
    desc: "Our trip to Pawana Camps was a refreshing retreat. The natural beauty and warm hospitality exceeded all expectations!",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-10 w-full">
      <hr className="h-px mx-8 my-8 bg-cyan-900 border-0" />
      <Typography variant="h2" className="my-10">
        Testimonials
      </Typography>
      <div className="mx-8 items-center flex justify-center">
        {window.innerWidth < 960 ? (
          <Carousel
            className=""
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
          >
            {testimonialData.map((data, index) => (
              <div className="flex justify-center items-center">
                <Card
                  color="transparent"
                  shadow={false}
                  className="w-full max-w-[26rem]"
                  key={index}
                  value={index}
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                    <div className="flex w-full flex-col justify-center gap-0.5">
                      <Typography variant="h5" color="blue-gray">
                        {data.name}
                      </Typography>

                      <Typography color="blue-gray">
                        {data.profession}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                    <Typography>&quot;{data.desc}&quot;</Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            className=""
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
          >
            {testimonialData.map((data, index) => (
              <div className="flex justify-center items-center">
                <Card
                  color="transparent"
                  shadow={false}
                  className="w-full max-w-[26rem]"
                  key={index}
                  value={index}
                >
                  <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                    <div className="flex w-full flex-col justify-center gap-0.5">
                      <Typography variant="h5" color="blue-gray">
                        {data.name}
                      </Typography>

                      <Typography color="blue-gray">
                        {data.profession}
                      </Typography>
                    </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                    <Typography>&quot;{data.desc}&quot;</Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <hr className="h-px mx-8 my-8 bg-cyan-900 border-0" />
    </div>
  );
};

export default Testimonials;
