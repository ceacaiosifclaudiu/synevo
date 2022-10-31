import React from "react";
import { LastResultsBody } from "./LastResults.style";

import BodyResults from "./bodyresults/BodyResults";
import TitleResults from "./titleresults/TitleResults";

const LastResults = () => {
  return (
    <LastResultsBody>
      <TitleResults />
      <BodyResults />
    </LastResultsBody>
  );
};

export default LastResults;
