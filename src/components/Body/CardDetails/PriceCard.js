import React from "react";

const PriceCard = ({ currentDestination }) => {
  return (
    <div>
      {currentDestination.type === "camp" ? (
        <div className="flex flex-row justify-around shadow-lg rounded-xl px-5 py-3 my-10 bg-white w-96 border-t-4 border-cyan-900">
          <div className="flex flex-col items-start my-3">
            <p className="text-cyan-600 font-normal text-lg">Veg</p>

            <p>
              <strike>₹ {currentDestination.actualVegPrice}/-</strike>
            </p>
            <h1 className="text-cyan-600 font-bold text-4xl">
              ₹ {currentDestination.discountedVegPrice}/-
            </h1>
            <p className="text-sm">per Adult</p>
          </div>
          <div className="flex flex-col items-start my-3">
            <p className="text-cyan-600 font-normal text-lg">Non-Veg</p>

            <p>
              <strike> ₹ {currentDestination.actualNonVegPrice}/-</strike>
            </p>
            <h1 className="text-cyan-600 font-bold text-4xl">
              ₹ {currentDestination.discountedNonVegPrice}/-
            </h1>
            <p className="text-sm">per Adult</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-around shadow-lg rounded-xl px-5 py-3 my-10 bg-white w-96 border-t-4 border-cyan-900">
          <div className="flex flex-col items-start my-3">
            <p className="text-cyan-600 font-normal text-lg">Starting from</p>
            <p>
              <strike>₹ {currentDestination.actualVegPrice}/-</strike>
            </p>
            <h1 className="text-cyan-600 font-bold text-4xl">
              ₹ {currentDestination.discountedVegPrice}/-
            </h1>
            <p className="text-sm">onwards per person</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceCard;
