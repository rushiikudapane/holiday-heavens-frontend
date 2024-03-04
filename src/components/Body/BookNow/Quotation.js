import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Input,
  Typography,
  Card,
  Textarea,
  CardHeader,
  Checkbox,
} from "@material-tailwind/react";
import logo from "../../../assets/holiday-heavens-logo.png";
import tempImg from "../../../assets/tempDestImg.jpeg";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const printDocument = () => {
  const input = document.getElementById("quotation");
  html2canvas(input, {
    windowWidth: input.scrollWidth,
    windowHeight: input.scrollHeight,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "pt", [canvas.height, canvas.width]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("holiday-heavens-quotation.pdf");
  });
};

const Quotation = ({ currentDestination }) => {
  // const [adultCount, setAdultCount] = useState(0);
  // const [childCount, setChildCount] = useState(0);
  // const [totalCount, setTotalCount] = useState(0);
  // const [totalCountFood, setTotalCountFood] = useState(0);
  // const [vegCount, setVegCount] = useState(0);
  // const [nonVegCount, setNonVegCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const userData = location.state;
  console.log("Data from book now.js: ", location.state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="quotation">
      <div className="flex flex-row flex-wrap bg-blue-50">
        <div className="lg:w-2/5 px-5 py-5 flex flex-col items-center">
          <div>
            <img src={currentDestination.set1Images[0]} className="w-96 h-80" />
          </div>
          <div className="my-8">
            <Typography variant="h3">{userData.destinationName}</Typography>
            <Typography variant="h6" className="font-normal">
              Check-in Date: {userData.trimmedDate} 03:00 PM
            </Typography>
            <Typography variant="h6" className="font-normal">
              Check-out Date: Next Day 11:00 AM
            </Typography>
          </div>
          <div className="rounded-lg border-t-4 border-cyan-900 w-full bg-white">
            <div className="bg-cyan-700 text-white rounded-t-lg py-2">
              <Typography variant="h4" className="font-normal">
                Total Count
              </Typography>
            </div>
            <div className="">
              <div className="flex flex-row items-center justify-around my-3 py-3">
                <div className="w-2/5">
                  <Typography variant="h5">Adult (10+ years)</Typography>
                  <Typography variant="h6" className="font-normal">
                    ₹999/- per person
                  </Typography>
                </div>
                <div className="flex flex-row items-start w-2/5">
                  <Typography variant="h4" className="font-normal text-start">
                    {userData.adultCount}
                  </Typography>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-around items-center my-3 py-3">
                  <div className="w-2/5">
                    <Typography variant="h5">Child (5-10 years)</Typography>
                    <Typography variant="h6" className="font-normal">
                      ₹999/- per person
                    </Typography>
                  </div>
                  <div className="flex flex-row items-start w-2/5">
                    <Typography variant="h4" className="font-normal text-start">
                      {userData.childCount}
                    </Typography>
                  </div>
                </div>
              </div>
              <hr className="mb-5 mx-8 border-black" />
              <div>
                <div className="flex flex-row justify-around items-center my-1 py-1 mb-4">
                  <div className="w-2/5">
                    <Typography variant="h5">Total Count</Typography>
                    <Typography variant="h6" className="font-normal">
                      Adult + Child
                    </Typography>
                  </div>
                  <div className="flex flex-row items-start w-2/5">
                    <Typography variant="h4" className="font-normal text-start">
                      {userData.totalCount}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="py-6 my-3">
                <Typography variant="h4" className="font-bold">
                  Thanks for choosing
                  <Typography
                    variant="h1"
                    className="font-bold text-5xl text-cyan-800 underline decoration-orange-600"
                  >
                    Holiday Heavens
                  </Typography>
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 px-5 py-5 flex flex-col items-center">
          <div className="bg-white rounded-lg border-t-4 border-cyan-900 w-full">
            <Card color="transparent" className="px-5 py-5">
              <CardHeader
                floated={false}
                className="bg-cyan-700 text-white shadow-inner"
              >
                <Typography variant="h4" className="mt-1 font-normal">
                  Customer Details
                </Typography>
              </CardHeader>

              <form className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6 items-start">
                  <div className="flex flex-row flex-wrap justify-around w-full ">
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-5 flex flex-row">
                        <Typography
                          variant="h5"
                          className="font-normal text-black"
                        >
                          Name:
                        </Typography>
                        <Typography
                          variant="h5"
                          className="font-normal text-black px-2"
                        >
                          {userData.name}
                        </Typography>
                      </div>

                      <div className="my-5 flex flex-row">
                        <Typography
                          variant="h5"
                          className="font-normal text-black"
                        >
                          Contact:
                        </Typography>
                        <Typography
                          variant="h5"
                          className="font-normal text-black px-2"
                        >
                          {userData.contact}
                        </Typography>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-5 flex flex-row">
                        <Typography
                          variant="h5"
                          className="font-normal text-black"
                        >
                          Email:
                        </Typography>
                        <Typography
                          variant="h5"
                          className="font-normal text-black px-2"
                        >
                          {userData.mailid}
                        </Typography>
                      </div>
                      <div className="my-5 flex flex-row">
                        <Typography
                          variant="h5"
                          className="font-normal text-black"
                        >
                          Whatsapp no.:
                        </Typography>
                        <Typography
                          variant="h5"
                          className="font-normal text-black px-2"
                        >
                          {userData.whatsapp}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <CardHeader
                floated={false}
                className="bg-cyan-700 text-white shadow-inner"
              >
                <Typography variant="h4" className="mt-1 font-normal">
                  Food Preferences
                </Typography>
              </CardHeader>

              <div className="flex flex-row flex-wrap justify-around">
                <div className="w-full lg:w-1/2 my-3">
                  <div className="flex flex-row items-center justify-around my-3 py-3">
                    <div className="w-2/5 text-black">
                      <Typography variant="h5">Veg Count:</Typography>
                    </div>
                    <div className="flex flex-row items-start w-2/5">
                      <Typography
                        variant="h4"
                        className="font-normal text-start text-black"
                      >
                        {userData.vegCount}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:my-3">
                  <div className="flex flex-row items-center justify-around my-3 py-3">
                    <div className="w-2/5 text-black">
                      <Typography variant="h5">Non-Veg Count:</Typography>
                    </div>
                    <div className="flex flex-row items-start w-2/5">
                      <Typography
                        variant="h4"
                        className="font-normal text-start text-black"
                      >
                        {userData.nonVegCount}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 mx-5 my-5 shadow-inner text-black">
                <div className="text-start">
                  <Typography variant="h5" className="pt-5 px-5 font-normal">
                    Total Amount: <b>₹{userData.amount}</b>
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-thin text-xs text-gray-500 px-5"
                  >
                    *Inclusive all taxes
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Adavance Amount: <b>₹{userData.amount * 0.5}</b>
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Remaining Amount: <b>₹{userData.amount * 0.5}</b>
                  </Typography>
                </div>
                <div className="px-5 py-5 mb-5 mt-2">
                  <Typography
                    variant="h6"
                    className="text-red-600 italic font-normal text-xs"
                  >
                    This quotation is a comprehensive overview of the services
                    we offer tailored to your needs. It includes all the
                    necessary details for your convenience. Make sure that you
                    look onto detailed itinerary for your stay on our official
                    website, ensuring you have a clear understanding of what to
                    expect during your time with us.
                  </Typography>
                </div>
              </div>
              <div className="flex flex-row item-center justify-around">
                <div>
                  <img src={logo} alt="logo-ct" className="w-72" />
                </div>
                <div className="pt-10">
                  <div className="items-center">
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className=" font-bold font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                    >
                      CONTACT INFO
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className=" font-bold text-sm pt-2 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                    >
                      WE ARE AVAILABLE EVERYDAY 10AM-5PM
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className=" font-bold text-sm pt-2 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                    >
                      <hr className="text-black border-gray-600 my-4" />
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className=" font-normal font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                    >
                      support@holidayheavens.com
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className=" font-bold text-sm pt-1 text-gray-600 font-poppins transition-colors hover:text-cyan-900 focus:text-blue-500"
                    >
                      9130003737
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex items-end justify-end w-full">
          <div className="px-10 py-5">
            <Link to="/">
              <Button variant="outlined" color="red" className="mr-1">
                <span>Back</span>
              </Button>
            </Link>
            <Button variant="gradient" color="green" onClick={printDocument}>
              <span>Download</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
