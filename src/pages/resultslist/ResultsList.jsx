import React from "react";
import { Container } from "../../styles/Container.style";
import { ResultsListBody } from "./ResultsList.style";
import HeroSection from "./components/herosection/HeroSection";
import SelectionSection from "./components/selectionsection/SelectionSection";
import ResultsSection from "./components/resultssection/ResultsSection";

const ResultsList = () => {
  return (
    <ResultsListBody>
      <Container>
        <HeroSection />
        <SelectionSection />
        <ResultsSection />
      </Container>
    </ResultsListBody>
  );
};

export default ResultsList;
