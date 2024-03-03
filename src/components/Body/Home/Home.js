import React, { useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

import HomeCarousel from "./HomeCarousel";
import DestinationCards from "./DestinationCards";
import Banner from "./Banner";
import Testimonials from "./Testimonials";

const Home = ({ setCurrentDestination }) => {
  // setDestination("rushich ghar");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HomeCarousel />
      <DestinationCards setCurrentDestination={setCurrentDestination} />
      <Banner />
      <Testimonials />
    </div>
  );
};

export default Home;
