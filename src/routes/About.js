import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return <div>
    <Navbar />
     <HeroImg2 heading="ABOUT." text="im a friendly Back-End Developer" />
     <AboutContent />
    <Footer />
  </div>;
};

export default About;
