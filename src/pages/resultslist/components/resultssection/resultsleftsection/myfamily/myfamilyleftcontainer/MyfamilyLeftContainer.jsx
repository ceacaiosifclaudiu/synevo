import React from "react";
import {
  BlackText,
  MyfamilyLeftContainerBody,
  MyFamilyLeftContainerBodyCard,
  MyFamilyLeftContainerBodyCardDate,
  MyFamilyLeftContainerBodyCardName,
  MyFamilyLeftContainerBodyCardPlus,
  MyfamilyLeftContainerBodyTitle,
} from "./MyfamilyleftContainer.style";

const MyfamilyLeftContainer = () => {
  return (
    <MyfamilyLeftContainerBody>
      <MyfamilyLeftContainerBodyTitle>
        My<BlackText> family</BlackText>
      </MyfamilyLeftContainerBodyTitle>
      <MyFamilyLeftContainerBodyCard>
        <MyFamilyLeftContainerBodyCardPlus>+</MyFamilyLeftContainerBodyCardPlus>
        <MyFamilyLeftContainerBodyCardName>
          Elisabeta Aardeleanu
        </MyFamilyLeftContainerBodyCardName>
        <MyFamilyLeftContainerBodyCardDate>
          Born 14.09.2010
        </MyFamilyLeftContainerBodyCardDate>
      </MyFamilyLeftContainerBodyCard>
    </MyfamilyLeftContainerBody>
  );
};

export default MyfamilyLeftContainer;
