import React from "react";

const InfoCard = () => {
  const data = [
    {
      heading: "Breathtaking Scenery:",
      desc: "Immerse yourself in the beauty of nature with panoramic views and stunning landscapes.",
    },
    {
      heading: "Exclusive Camping Spots:",
      desc: "Discover unique and secluded camping spots for a more intimate and personalized experience.",
    },
    {
      heading: "Family-Friendly Environment:   ",
      desc: "Enjoy a safe and welcoming atmosphere suitable for families, including kid-friendly activities.",
    },
    {
      heading: "Eco-Friendly Practices:",
      desc: "Support sustainable tourism with our commitment to eco-friendly and responsible camping practices.",
    },
    {
      heading: "Star-Gazing Nights:",
      desc: "Experience the magic of starry nights in clear skies away from city lights.",
    },
    {
      heading: "Campfire Gatherings:",
      desc: "Create lasting memories around the campfire with storytelling, music, and delicious treats.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col mx-10 my-10 rounded-lg shadow-lg border-t-4 border-cyan-900">
        <div className="bg-cyan-700 py-2 font-bold rounded-t-lg">
          <h1>Why Holiday Heavens?</h1>
        </div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col px-3 py-3 rounded-b-lg shadow-inner"
            >
              <div className="flex flex-row my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle text-green-700"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="px-2">
                  <p>
                    {item.heading} <br />
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCard;
