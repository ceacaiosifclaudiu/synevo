import React from "react";
import BannerLeftSection from "./bannerleftsection/BannerLeftSection";
import LastResults from "./lastresults/LastResults";
import Myfamily from "./myfamily/Myfamily";
import { ResultsLeftBody } from "./ResultsLeftSection.style";

const ResultsLeftSection = () => {
  return (
    <ResultsLeftBody>
      <LastResults />
      <Myfamily />
      <BannerLeftSection />
    </ResultsLeftBody>
  );
};

export default ResultsLeftSection;
