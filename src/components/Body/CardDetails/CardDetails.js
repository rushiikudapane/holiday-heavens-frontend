import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CardDetailsCarousel from "./CardDetailsCarousel";
import IncludesTable from "./IncludesTable";
import Itinerary from "./Itinerary";
import PhotoGrid from "./PhotoGrid";
import PriceCard from "./PriceCard";
import BookNow from "./BookNow";
import EnquiryForm from "./EnquiryForm";
import InfoCard from "./InfoCard";
import FAQsection from "./FAQsection";
import { Typography } from "@material-tailwind/react";

const CardDetails = ({ currentDestination }) => {
  // console.log("Card Specific details: ", currentDestination);
  if (currentDestination != null) {
    localStorage.setItem("myState", JSON.stringify(currentDestination));
  }

  const savedCurrentDestination = JSON.parse(localStorage.getItem("myState"));
  console.log("savedCurrentDestination", savedCurrentDestination);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap">
        <div className="lg:w-3/5 bg-gray-100 px-5 py-5 items-center">
          <CardDetailsCarousel currentDestination={savedCurrentDestination} />
          {savedCurrentDestination.type === "camp" ? (
            <>
              <IncludesTable />
              <Itinerary />
            </>
          ) : null}
          <PhotoGrid currentDestination={savedCurrentDestination} />
        </div>

        <div className="lg:w-2/5 bg-gray-100 flex flex-col items-center lg:py-10">
          <Typography className="font-bold text-cyan-900 text-3xl my-3">
            {savedCurrentDestination.name}
          </Typography>
          <Typography className="font-thin italic text-gray-600 text-sm my-3 px-3">
            {savedCurrentDestination.overview}
          </Typography>

          <PriceCard currentDestination={savedCurrentDestination} />
          <BookNow currentDestination={savedCurrentDestination} />
          <EnquiryForm currentDestination={savedCurrentDestination} />
          {/* <MapComponent className="w-10 h-10" /> */}
          <InfoCard />
        </div>
      </div>

      {/* FAQ, Advisory, return Policy Accordian */}
      <FAQsection />
    </div>
  );
};

export default CardDetails;
