import React from "react";
import web from "../img/home.png";
import Common from "../Common";

const Home = () => {
  return (
    <Common
      name="Grow your business with"
      visit="/service"
      btnname="Get Started"
      imgsrc={web}
    />
  );
};

export default Home;
