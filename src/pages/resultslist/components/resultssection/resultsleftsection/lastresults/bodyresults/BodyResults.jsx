import React from "react";
import {
  BottomBodyImage,
  BottomBodyResults,
  BottombodyResultTitleContainer,
  BottomBodyResultTitleDescription,
  BottomBodyResultTitlePresentation,
} from "./BodyResults.style";
import LastResultsImage from "../../../../../../../assets/LastResultsImage.png";

const BodyResults = () => {
  return (
    <BottomBodyResults>
      <BottombodyResultTitleContainer>
        <BottomBodyResultTitlePresentation>
          <strong>View</strong> your medical results
        </BottomBodyResultTitlePresentation>
        <BottomBodyResultTitleDescription>
          You can add your family and manage from one linked account.
        </BottomBodyResultTitleDescription>
      </BottombodyResultTitleContainer>
      <BottomBodyImage src={LastResultsImage} />
    </BottomBodyResults>
  );
};

export default BodyResults;
