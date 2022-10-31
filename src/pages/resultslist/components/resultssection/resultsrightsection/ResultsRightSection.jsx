import React from "react";
import BannerRightSection from "./bannerrightsection/BannerRightSection";
import MyAppointments from "./myappointments/MyAppointments";
import { ResultsRightBody } from "./ResultsRightSection.style";

const ResultsRightSection = () => {
  return (
    <ResultsRightBody>
      <MyAppointments />
      <BannerRightSection />
    </ResultsRightBody>
  );
};

export default ResultsRightSection;
