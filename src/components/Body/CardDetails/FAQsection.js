import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQsection = () => {
  const [open2, setOpen2] = useState(0);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);
  return (
    <div>
      <div className="mx-10 mb-20 rounded-lg shadow-lg border-t-4 border-cyan-900">
        <Accordion open={open2 === 1}>
          <AccordionHeader
            onClick={() => handleOpen2(1)}
            className="bg-cyan-700 rounded-t-lg text-white flex flex-col items-center"
          >
            Frequently Asked Questions (FAQ)
          </AccordionHeader>
          <AccordionBody className="text-start">
            <h1 className="font-bold">Q) How to reach the campsite?</h1>
            <ul className="list-none space-y-2 pl-5">
              <li className="list-disc">
                Take a train from Mumbai or Pune to Lonavla or Kamshet station.
              </li>
              <li className="list-disc">
                Hire a private cab or connect with a recommended driver.
              </li>
              <li className="list-disc">
                Select the 'Cab Details' add-on at the time of booking for
                driver information.
              </li>
              <li className="list-disc">
                From Lonavla Station: Rs. 2400 (up to 6 people), Rs. 3000 (7-14
                adults).
              </li>
              <li className="list-disc">
                From Kamshet Station: Rs. 2000 (up to 6 people), Rs. 2400 (7-14
                adults).
              </li>
              <li className="list-disc">
                Public bus available to Kale Colney from Kamshet; campsite is a
                5-min walk from Kale Colney.
              </li>
              <li className="list-disc">
                Common autos are available from Kamshet.
              </li>
            </ul>

            <h1 className="font-bold">
              Q) Is washroom available at the campsite?
            </h1>
            <p>Washroom facilities (common) are available during the stay.</p>

            <h1 className="font-bold">Q) Is the campsite safe for women?</h1>
            <p>
              The campsite is completely safe for women & children. The campsite
              staff is present at all times to assist you.
            </p>

            <h1 className="font-bold">Q) Is Jain food available?</h1>
            <p>
              Yes, Jain food is available. Just select Jain food at the time of
              booking.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open2 === 2}>
          <AccordionHeader
            onClick={() => handleOpen2(2)}
            className="bg-cyan-700 text-white flex flex-col items-center"
          >
            Things to carry
          </AccordionHeader>
          <AccordionBody className="text-start">
            <ul className="list-none space-y-2 pl-5">
              <li className="list-disc">Winter wear (sweater)</li>
              <li className="list-disc">Portable Charger/Power Bank</li>
              <li className="list-disc">Personal medicines</li>
              <li className="list-disc">Toiletries</li>
              <li className="list-disc">
                Carry Odomos to keep you protected from mosquito bites.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open2 === 3}>
          <AccordionHeader
            onClick={() => handleOpen2(3)}
            className="bg-cyan-700 text-white flex flex-col items-center rounded-b-lg"
          >
            Advisory
          </AccordionHeader>
          <AccordionBody className="text-start">
            <ul className="list-none space-y-2 pl-5">
              <li className="list-disc">
                All tents are allotted on a first-come, first-serve basis.
              </li>
              <li className="list-disc">
                This location welcomes a diverse crowd, including families and
                bachelors. It’s a versatile spot that caters to all group types.
              </li>
              <li className="list-disc">
                The washroom facilities are shared and accessible to all guests.
              </li>
              <li className="list-disc">
                A communal bonfire is available for everyone to enjoy.
              </li>
              <li className="list-disc">
                Charging points for mobiles and laptops are conveniently located
                in the common areas of the campsite.
              </li>
              <li className="list-disc">
                Please pay attention to and follow the instructions provided by
                the tour organizers for a smooth experience.
              </li>
              <li className="list-disc">
                We request all our guests to maintain the cleanliness of the
                campsite and refrain from littering.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
