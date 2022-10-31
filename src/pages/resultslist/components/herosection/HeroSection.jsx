import React from "react";
import {
  HeroSectionBody,
  HeroSectionButton,
  HeroSectionButtonsContainer,
  HeroSectionDescription,
  HeroSectionDescriptionSemiBold,
  HeroSectionDot,
  HeroSectionDots,
  HeroSectionLeft,
  HeroSectionRight,
  HeroSectionTitle,
  HeroSectionTitleBold,
} from "./HeroSection.style";

const HeroSection = () => {
  return (
    <HeroSectionBody>
      <HeroSectionLeft>
        <HeroSectionTitle>
          <HeroSectionTitleBold>Welcome to</HeroSectionTitleBold>MySynevo
        </HeroSectionTitle>
        <HeroSectionDots>
          <HeroSectionDot />
          <HeroSectionDot />
          <HeroSectionDot />
        </HeroSectionDots>
      </HeroSectionLeft>
      <HeroSectionRight>
        <HeroSectionDescription>
          In this tutorial you will see how to manage MySynevo app and we will
          guide you trough all the important functions.
          <HeroSectionDescriptionSemiBold>
            You can watch it again anytime, from the menu.
          </HeroSectionDescriptionSemiBold>
        </HeroSectionDescription>
        <HeroSectionButtonsContainer>
          <HeroSectionButton>Skip</HeroSectionButton>
          <HeroSectionButton>Start Journey</HeroSectionButton>
        </HeroSectionButtonsContainer>
      </HeroSectionRight>
    </HeroSectionBody>
  );
};

export default HeroSection;
