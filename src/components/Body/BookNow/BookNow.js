import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import tempImg from "../../../assets/tempDestImg.jpeg";
import {
  Button,
  Input,
  Typography,
  Card,
  Textarea,
  CardHeader,
} from "@material-tailwind/react";
import axios from "axios";

const BookNow = ({ currentDestination }) => {
  const location = useLocation();
  let date = location.state;
  let parts = date.toString().split(" ");
  let trimmedDate = parts.slice(0, 4).join(" ");
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [totalCountFood, setTotalCountFood] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegCount, setNonVegCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [mailid, setMailid] = useState("");
  const [contact, setContact] = useState();
  const [whatsapp, setWhatsapp] = useState();
  const [question, setQuestion] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(typeof location.state);
    console.log(location.state);
  }, []);
  const changeAdultCount = async (event) => {
    let newTotalCount = totalCount;
    if (event === "decrement") {
      if (adultCount != 0) {
        setAdultCount(adultCount - 1);
        newTotalCount = totalCount - 1;
        setTotalCount(newTotalCount);
        setTotalCountFood(newTotalCount);
        setAmount(newTotalCount * currentDestination.discountedVegPrice);
      }
    }
    if (event === "increment") {
      setAdultCount(adultCount + 1);
      newTotalCount = totalCount + 1;
      setTotalCount(newTotalCount);
      setAmount(newTotalCount * currentDestination.discountedVegPrice);
      setTotalCountFood(newTotalCount);
    }
  };

  const changeChildCount = (event) => {
    let newTotalCount = totalCount;
    if (event === "decrement") {
      if (childCount != 0) {
        setChildCount(childCount - 1);
        newTotalCount = totalCount - 1;
        setTotalCount(newTotalCount);
        setAmount(newTotalCount * currentDestination.discountedVegPrice);
        setTotalCountFood(newTotalCount);
      }
    }
    if (event === "increment") {
      setChildCount(childCount + 1);
      newTotalCount = totalCount + 1;
      setTotalCount(newTotalCount);
      setAmount(newTotalCount * currentDestination.discountedVegPrice);
      setTotalCountFood(newTotalCount);
    }
  };

  const changeVegCount = (event) => {
    let newTotalCountFood = totalCountFood;
    if (event === "decrement") {
      if (vegCount > 0) {
        setVegCount(vegCount - 1);
        newTotalCountFood = totalCountFood + 1;
        setTotalCountFood(newTotalCountFood);
      }
    }
    if (event === "increment") {
      if (totalCountFood > 0) {
        setVegCount(vegCount + 1);
        newTotalCountFood = totalCountFood - 1;
        setTotalCountFood(newTotalCountFood);
      }
    }
  };

  const changeNonVegCount = (event) => {
    let newTotalCountFood = totalCountFood;
    if (event === "decrement") {
      if (nonVegCount > 0) {
        setNonVegCount(nonVegCount - 1);
        newTotalCountFood = totalCountFood + 1;
        setTotalCountFood(newTotalCountFood);
      }
    }
    if (event === "increment") {
      if (totalCountFood > 0) {
        setNonVegCount(nonVegCount + 1);
        newTotalCountFood = totalCountFood - 1;
        setTotalCountFood(newTotalCountFood);
      }
    }
  };

  const changeEnquiryData = (e, label) => {
    if (label == "name") {
      setName(e.target.value);
    }
    if (label == "mailid") {
      setMailid(e.target.value);
    }
    if (label == "contact") {
      setContact(e.target.value);
    }
    if (label == "whatsapp") {
      setWhatsapp(e.target.value);
    }
    if (label == "question") {
      setQuestion(e.target.value);
    }
  };

  const validateFields = () => {
    console.log("veg count: ", vegCount);
    console.log("non veg count: ", nonVegCount);
    console.log("Total Count: ", totalCount);
    console.log("addition: ", vegCount + nonVegCount);

    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !re.test(mailid) ||
      contact.length > 10 ||
      whatsapp.length > 10 ||
      name === "" ||
      mailid === "" ||
      vegCount + nonVegCount != totalCount
    ) {
      return false;
    }
    return true;
  };

  const sendEmailandPrint = () => {
    const destinationName = currentDestination.name;
    const data = {
      name,
      mailid,
      contact,
      whatsapp,
      question,
      destinationName,
      vegCount,
      nonVegCount,
      adultCount,
      childCount,
      totalCount,
      trimmedDate,
      amount,
    };

    if (validateFields()) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/api/quotation/getQuotation`,
          {
            name,
            mailid,
            contact,
            whatsapp,
            question,
            destinationName,
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/getQuotation", { state: data });
        });
    } else {
      alert(
        "Failed to get quotation. Please make sure that fields entered are correct."
      );
    }
    // navigate("/getQuotation", { state: data });

    // navigate("/getQuotation");
  };

  return (
    <div className="h-full">
      <div className="flex flex-row flex-wrap bg-gray-100 h-full">
        <div className="lg:w-2/5 px-5 py-5 flex flex-col items-center">
          <div>
            <img src={tempImg} className="w-96 h-80" />
          </div>
          <div className="my-8">
            <Typography variant="h3">{currentDestination.name}</Typography>
            <Typography variant="h6" className="font-normal">
              Check-in Date: {trimmedDate} 03:00 PM
            </Typography>
            <Typography variant="h6" className="font-normal">
              Check-out Date: Next day 11:00 AM
            </Typography>
          </div>
          <div className="rounded-lg border-t-4 border-cyan-900 shadow-xl bg-white">
            <div className="bg-cyan-700 rounded-t-lg w-full py-2">
              <Typography variant="h4">Select Count</Typography>
            </div>
            <div>
              <div className="flex flex-row items-center justify-around my-3 py-3">
                <div className="w-2/4">
                  <Typography variant="h5">Adult (10+ years)</Typography>
                  <Typography variant="h6" className="font-normal">
                    ₹{currentDestination.discountedVegPrice}/- per person
                  </Typography>
                </div>
                <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                  <Button
                    size="sm"
                    className="my-2 mx-2 bg-cyan-800"
                    onClick={() => changeAdultCount("decrement")}
                  >
                    <Typography variant="h5" className="font-bold">
                      -
                    </Typography>
                  </Button>
                  <Typography variant="h6" className="font-normal">
                    {adultCount}
                  </Typography>
                  <Button
                    size="sm"
                    className="my-2 mx-2 bg-cyan-800"
                    onClick={() => changeAdultCount("increment")}
                  >
                    <Typography variant="h5" className="font-bold">
                      +
                    </Typography>
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-around items-center my-3 py-3">
                  <div className="w-2/4">
                    <Typography variant="h5">Child (5-10 years)</Typography>
                    <Typography variant="h6" className="font-normal">
                      ₹{currentDestination.discountedVegPrice}/- per person
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                    <Button
                      size="sm"
                      className="my-2 mx-2 bg-cyan-800"
                      onClick={() => changeChildCount("decrement")}
                    >
                      <Typography variant="h5" className="font-bold">
                        -
                      </Typography>
                    </Button>
                    <Typography variant="h6" className="font-normal">
                      {childCount}
                    </Typography>
                    <Button
                      size="sm"
                      className="my-2 mx-2 bg-cyan-800"
                      onClick={() => changeChildCount("increment")}
                    >
                      <Typography variant="h5" className="font-bold">
                        +
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 mx-5 my-5 shadow-inner">
                <div className="text-start">
                  <Typography variant="h5" className="pt-5 px-5 font-normal">
                    Total Amount: <b>₹{amount}</b>
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-thin text-xs text-gray-500 px-5"
                  >
                    *Inclusive all taxes
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Adavance Amount: <b>₹{amount * 0.5}</b>
                  </Typography>
                  <Typography variant="h5" className="py-2 px-5 font-normal">
                    Remaining Amount: <b>₹{amount * 0.5}</b>
                  </Typography>
                </div>
                <div className="px-5 py-5 mb-5 mt-2">
                  <Typography
                    variant="h6"
                    className="text-red-600 italic font-normal text-xs"
                  >
                    We accept UPI, Credit Card, Debit Card, Net Banking, Google
                    Pay, PhonePe at the time of payment.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 px-5 py-5 flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-lg border-t-4 border-cyan-900 w-full">
            <Card
              color="transparent"
              shadow={true}
              className="px-5 py-5 shadow-lg"
            >
              <CardHeader
                floated={false}
                className="bg-cyan-700 text-white shadow-inner"
              >
                <Typography variant="h4" className="mt-1 font-normal">
                  Booking Details
                </Typography>
              </CardHeader>

              <form className="mt-8 mb-2">
                <div className="mb-1 flex flex-col gap-6 items-start">
                  <div className="flex flex-row flex-wrap justify-around w-full ">
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-4">
                        <Input
                          size="lg"
                          placeholder="Your Name"
                          variant="outlined"
                          label="Name"
                          color="blue"
                          className="rounded-xl"
                          onChange={(e) => {
                            changeEnquiryData(e, "name");
                          }}
                        />
                      </div>

                      <div className="my-4">
                        <Input
                          type="number"
                          size="lg"
                          placeholder="Your Contact Number"
                          variant="outlined"
                          label="Contact No."
                          color="blue"
                          className="rounded-xl"
                          onChange={(e) => {
                            changeEnquiryData(e, "contact");
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-5">
                      <div className="my-4">
                        <Input
                          size="lg"
                          placeholder="your-mail-id@mail.com"
                          variant="outlined"
                          label="Mail ID"
                          color="blue"
                          className="rounded-xl"
                          onChange={(e) => {
                            changeEnquiryData(e, "mailid");
                          }}
                        />
                      </div>
                      <div className="my-4">
                        <Input
                          type="number"
                          size="lg"
                          placeholder="Your Whatsapp Number"
                          variant="outlined"
                          label="Whatsapp No."
                          color="blue"
                          className="rounded-xl"
                          onChange={(e) => {
                            changeEnquiryData(e, "whatsapp");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:mx-5">
                  <div className="my-4">
                    <Textarea
                      type="text-box"
                      size="lg"
                      variant="outlined"
                      label="Any Queries or Questions"
                      color="blue"
                      className="rounded-xl"
                      onChange={(e) => {
                        changeEnquiryData(e, "question");
                      }}
                    />
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
                <div className="w-full lg:w-1/2 my-5">
                  <div className="flex flex-row justify-around items-center">
                    <Typography variant="h5" className="font-normal text-black">
                      Veg
                    </Typography>
                    <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                      <Button
                        size="sm"
                        className="my-2 mx-2 bg-cyan-800"
                        onClick={() => changeVegCount("decrement")}
                      >
                        <Typography variant="h5" className="font-bold">
                          -
                        </Typography>
                      </Button>
                      <Typography variant="h6" className="font-normal">
                        {vegCount}
                      </Typography>
                      <Button
                        size="sm"
                        className="my-2 mx-2 bg-cyan-800"
                        onClick={() => changeVegCount("increment")}
                      >
                        <Typography variant="h5" className="font-bold">
                          +
                        </Typography>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:my-5">
                  <div className="flex flex-row justify-around items-center">
                    <Typography variant="h5" className="font-normal text-black">
                      Non-Veg
                    </Typography>
                    <div className="flex flex-row items-center bg-gray-300 rounded-lg">
                      <Button
                        size="sm"
                        className="my-2 mx-2 bg-cyan-800"
                        onClick={() => changeNonVegCount("decrement")}
                      >
                        <Typography variant="h5" className="font-bold">
                          -
                        </Typography>
                      </Button>
                      <Typography variant="h6" className="font-normal">
                        {nonVegCount}
                      </Typography>
                      <Button
                        size="sm"
                        className="my-2 mx-2 bg-cyan-800"
                        onClick={() => changeNonVegCount("increment")}
                      >
                        <Typography variant="h5" className="font-bold">
                          +
                        </Typography>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <Typography
                  variant="h6"
                  className="font-thin text-xs text-red-700 italic items-center"
                >
                  Please note that the quotation provided will be of a general
                  nature and certain amenities may be subject to change. For the
                  most current and accurate information, we highly recommend
                  completing the enquiry form. We appreciate your understanding
                  and cooperation.
                </Typography>
              </div>
              {/* <Link to="/getQuotation"> */}
              <Button
                size="lg"
                className="mt-6 bg-cyan-700"
                fullWidth
                onClick={sendEmailandPrint}
              >
                <Typography variant="h6" className="font-bold">
                  Get Quotation
                </Typography>
              </Button>
              {/* </Link> */}
            </Card>
          </div>
        </div>
      </div>

      {/* <Quotation /> */}
    </div>
  );
};

export default BookNow;
