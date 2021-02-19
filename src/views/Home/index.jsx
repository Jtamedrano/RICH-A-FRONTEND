import React, { useEffect } from "react";
import CTA from "./CTA";
import Hero from "./Hero";
import IssueSummary from "./Issues";
import SummaryAbout from "./SummaryAbout";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <SummaryAbout />
      <IssueSummary />
      <CTA />
    </>
  );
};

export default Home;
