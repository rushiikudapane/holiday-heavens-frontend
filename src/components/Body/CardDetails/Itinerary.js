import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Itinerary = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="my-7 rounded-xl shadow-lg border-t-4 border-cyan-900">
        <div className="bg-cyan-700 rounded-t-xl py-4">
          <h1 className="font-bold text-xl">Itinerary</h1>
        </div>
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-bold text-cyan-700 flex flex-col items-center"
          >
            <p> Day 1 </p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-row justify-around items-start border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-check-2 text-cyan-900"
                >
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m16 20 2 2 4-4" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">4pm</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Reach the campsite and have a welcome drink
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around items-start border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-tent-tree text-cyan-900"
                >
                  <circle cx="4" cy="4" r="2" />
                  <path d="m14 5 3-3 3 3" />
                  <path d="m14 10 3-3 3 3" />
                  <path d="M17 14V2" />
                  <path d="M17 14H7l-5 8h20Z" />
                  <path d="M8 14v8" />
                  <path d="m9 14 5 8" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">4pm</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Explore scenic campsite and lake.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-tent text-cyan-900"
                >
                  <path d="M3.5 21 14 3" />
                  <path d="M20.5 21 10 3" />
                  <path d="M15.5 21 12 15l-3.5 6" />
                  <path d="M2 21h20" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">5pm</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Begin orientation, secure your exclusive tent.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-coffee text-cyan-900"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">5:30pm</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Enjoy tea, snacks, and engaging games.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-utensils text-cyan-900"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">8:30 PM</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Savor BBQ delights, a symphony of flavors.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-flame-kindling text-cyan-900"
                >
                  <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
                  <path d="m5 22 14-4" />
                  <path d="m5 18 14 4" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">10:00pm - 11:00pm</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Enjoy evening with flavors, melodies, bonfire.
                </p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="font-bold text-cyan-700 flex flex-col items-center"
          >
            <p> Day 2 </p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-utensils-crossed text-cyan-900"
                >
                  <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                  <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                  <path d="m2.1 21.8 6.4-6.3" />
                  <path d="m19 5-7 7" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">7am onwards</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Breakfast, Enjoy the sunrise.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mountain-snow text-cyan-900"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">10am</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Leisure time – explore surrounding nature and lake
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-around border-cyan-700 shadow-lg px-3 py-3 mx-5 my-3 bg-cyan-50">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-log-out text-cyan-900"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              </div>
              <div className="flex flex-col items-start w-9/12">
                <p className="text-lg text-cyan-700">11am</p>
                <p className="text-xl text-cyan-700 font-bold text-left">
                  Checkout
                </p>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Itinerary;
