import React from "react";
import {
  MyfamilyRightContainerBody,
  MyfamilyRightContainerContent,
  MyfamilyRightContainerContentRight,
  MyfamilyRightContainerDescription,
  MyfamilyRightContainerImage,
  MyfamilyRightContainerTitle,
  SemiBoldText,
} from "./MyfamilyRightContainer.style";
import MyfamilyImage from "../../../../../../../assets/MyfamilyImage.png";

const MyfamilyRightContainer = () => {
  return (
    <MyfamilyRightContainerBody>
      <MyfamilyRightContainerContent>
        <MyfamilyRightContainerImage src={MyfamilyImage} />
        <MyfamilyRightContainerContentRight>
          <MyfamilyRightContainerTitle>
            <SemiBoldText>Manage</SemiBoldText> <br />
            your family accounts
          </MyfamilyRightContainerTitle>
          <MyfamilyRightContainerDescription>
            You can add your family and manage from one linked account.
          </MyfamilyRightContainerDescription>
        </MyfamilyRightContainerContentRight>
      </MyfamilyRightContainerContent>
    </MyfamilyRightContainerBody>
  );
};

export default MyfamilyRightContainer;
