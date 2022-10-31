import React from "react";
import AvatarResults from "../../../../../../../assets/AvatarResults.png";
import {
  TitleResultsBody,
  TitleResultsAvatar,
  TitleResultsContainer,
  TitleResultsIntro,
  TitleResultsPersonalName,
} from "./TitleResults.style";

const TitleResults = () => {
  return (
    <TitleResultsBody>
      <TitleResultsAvatar src={AvatarResults} />
      <TitleResultsContainer>
        <TitleResultsIntro>Last Results for</TitleResultsIntro>
        <TitleResultsPersonalName>
          Elisabeta Aardeleanu
        </TitleResultsPersonalName>
      </TitleResultsContainer>
    </TitleResultsBody>
  );
};

export default TitleResults;
