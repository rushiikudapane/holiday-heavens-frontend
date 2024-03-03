import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const EnquiryForm = ({ currentDestination }) => {
  const [enquiryName, setenquiryName] = useState("");
  const [enquiryEmail, setenquiryEmail] = useState("");
  const [enquiryContactNo, setenquiryContactNo] = useState("");
  const [enquiryTotalPeople, setenquiryTotalPeople] = useState(1);
  const [enquiryDate, setEnquiryDate] = useState(new Date());
  const [enquiryMessage, setenquiryMessage] = useState("");
  const [isDataSet, setIsDataSet] = useState(false);
  const [enquiryData, setEnquiryData] = useState();
  const enquiryDestination = currentDestination.name;

  const changeEnquiryData = (e, label) => {
    if (label == "name") {
      setenquiryName(e.target.value);
    }
    if (label == "email") {
      setenquiryEmail(e.target.value);
    }
    if (label == "contactNo") {
      setenquiryContactNo(e.target.value);
    }
    if (label == "totalPeople") {
      setenquiryTotalPeople(e.target.value);
    }
    if (label == "date") {
      const selectedDate = e;
      const parsedDate = new Date(selectedDate);
      const formattedDate = parsedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setEnquiryDate(formattedDate);
    }
    if (label == "message") {
      setenquiryMessage(e.target.value);
    }
  };

  const validateFormFields = () => {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !re.test(enquiryEmail) ||
      enquiryContactNo.length > 10 ||
      enquiryTotalPeople < 1 ||
      enquiryName === "" ||
      enquiryEmail === ""
    ) {
      return false;
    }
    return true;
  };

  const submit = () => {
    // used callback to do task because setState is asynchronous method and may take more time to set the state
    if (validateFormFields()) {
      setIsDataSet(true);
      setEnquiryData({
        enquiryName,
        enquiryEmail,
        enquiryContactNo,
        enquiryTotalPeople,
        enquiryDate,
        enquiryDestination,
        enquiryMessage,
      });
    } else {
      alert("Please make sure that fields entered are correct.");
      return;
    }
  };

  const makeEquiryRequest = (userData) => {
    axios
      .post(`http://localhost:5001/api/enquiry/makeEnquiry`, userData)
      .then((res) => {
        console.log(res.data);
        alert("Enquiry has been made sucessfully, we will contact you soon.");
        setenquiryEmail("");
        setenquiryContactNo("");
        setenquiryMessage("");
        setenquiryName("");
        setenquiryTotalPeople(0);
      });
  };

  useEffect(() => {
    if (isDataSet) {
      console.log(enquiryData);
      makeEquiryRequest(enquiryData);
    }
  }, [enquiryData]);

  return (
    <div>
      <div className="my-10 bg-white rounded-lg shadow-lg border-t-4 border-cyan-900">
        <Card color="transparent" shadow={true} className="px-5 py-5 shadow-lg">
          <Typography color="gray" className="mt-1 font-normal">
            Get Exclusive Offers!!! Fill the Enquiry Form
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6 items-start">
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
                value={enquiryName}
                required
              />

              <Input
                size="lg"
                type="email"
                placeholder="your-mail-id@mail.com"
                variant="outlined"
                label="Mail ID"
                color="blue"
                className="rounded-xl"
                required
                onChange={(e) => {
                  changeEnquiryData(e, "email");
                }}
                value={enquiryEmail}
              />
              <Input
                type="number"
                size="lg"
                placeholder="Your Contact Number"
                variant="outlined"
                label="Contact No."
                color="blue"
                className="rounded-xl"
                required
                onChange={(e) => {
                  const val = e.target.value;
                  if (!Number.isInteger(Number(val))) {
                    return;
                  }
                  if (val.length > 10) {
                    alert("The contact number should not exceed 10 digits");
                    return;
                  }
                  changeEnquiryData(e, "contactNo");
                }}
                value={enquiryContactNo}
              />
              <Input
                type="number"
                min="1"
                size="lg"
                placeholder="Count"
                variant="outlined"
                label="Total People"
                color="blue"
                className="rounded-xl"
                required
                onChange={(e) => {
                  const val = e.target.value;
                  if (val <= 0) {
                    alert("The total count of people should be greater than 0");
                    return;
                  }
                  changeEnquiryData(e, "totalPeople");
                }}
                value={enquiryTotalPeople}
              />
              <Popover placement="bottom">
                <PopoverHandler>
                  <Input
                    label="Select a Date"
                    onChange={(e) => {
                      changeEnquiryData(e, "date");
                    }}
                    value={enquiryDate}
                    className="rounded-xl"
                    required
                  />
                </PopoverHandler>
                <PopoverContent>
                  <Calendar
                    value={enquiryDate}
                    onChange={(e) => {
                      changeEnquiryData(e, "date");
                    }}
                    minDate={new Date()}
                    className="border-white rounded-xl"
                  />
                </PopoverContent>
              </Popover>
              <Textarea
                type="text-box"
                size="lg"
                variant="outlined"
                label="Message"
                color="blue"
                className="rounded-xl"
                required
                onChange={(e) => {
                  changeEnquiryData(e, "message");
                }}
                value={enquiryMessage}
              />
            </div>
            <div className="flex flex-row justify-around">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-green-800 lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2font-normal"
                >
                  We assure the privacy of your contact data.
                </Typography>
              </div>
            </div>

            <div className="flex flex-row justify-around">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-green-800 lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 font-normal"
                >
                  This data will only be used by our team to contact you and no
                  other purposes.
                </Typography>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-6 bg-cyan-700"
              fullWidth
              onClick={submit}
            >
              Send Enquiry
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EnquiryForm;
