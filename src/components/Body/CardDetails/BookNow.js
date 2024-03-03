import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookNow = () => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div>
      <Calendar
        value={dateState}
        onChange={changeDate}
        minDate={new Date()}
        className="border-white"
      />

      <Link to="/booknow" state={dateState}>
        <Button size="lg" className="my-5 bg-cyan-700">
          Get Quotation
        </Button>
      </Link>
      <p className="font-bold text-xs">
        Need assistance? Call us on +91 9130003737
      </p>
    </div>
  );
};

export default BookNow;
