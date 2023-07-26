import React from "react";
import web from "../img/about.png";
import Common from "../Common";

const About = () => {
  return (
    <Common
      name="Welcome to About Page"
      visit="/contact"
      btnname="Contact Here"
      imgsrc={web}
    />
  );
};

export default About;
