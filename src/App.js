import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/Body/AboutUs/AboutUs";
import BookNow from "./components/Body/BookNow/BookNow";
import CardDetails from "./components/Body/CardDetails/CardDetails";
import Home from "./components/Body/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Quotation from "./components/Body/BookNow/Quotation";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [currentDestination, setCurrentDestination] = useState(null);

  if (currentDestination != null) {
    localStorage.setItem("myState", JSON.stringify(currentDestination));
  }

  const savedCurrentDestination = JSON.parse(localStorage.getItem("myState"));
  console.log("savedCurrentDestination from app.js", savedCurrentDestination);

  return (
    <div className="App">
      {location.pathname !== "/getQuotation" && <Header />}
      <Routes>
        <Route
          path="/"
          element={<Home setCurrentDestination={setCurrentDestination} />}
        />
        <Route
          exact
          path="/card-details"
          element={<CardDetails currentDestination={currentDestination} />}
        />
        <Route
          exact
          path="/booknow"
          element={<BookNow currentDestination={savedCurrentDestination} />}
        />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route
          path="/getQuotation"
          element={<Quotation currentDestination={savedCurrentDestination} />}
        />
      </Routes>
      {location.pathname !== "/getQuotation" && (
        <Footer setCurrentDestination={setCurrentDestination} />
      )}
    </div>
  );
}

export default App;
