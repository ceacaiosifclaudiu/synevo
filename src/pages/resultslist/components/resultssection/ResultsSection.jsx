import React from "react";
import ResultsLeftSection from "./resultsleftsection/ResultsLeftSection";
import ResultsRightSection from "./resultsrightsection/ResultsRightSection";
import { ResultsSectionBody } from "./ResultsSection.style";

const ResultsSection = () => {
  return (
    <ResultsSectionBody>
      <ResultsLeftSection />
      <ResultsRightSection />
    </ResultsSectionBody>
  );
};

export default ResultsSection;
