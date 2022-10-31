import React from "react";
import { MyFamilyBody } from "./Myfamily.style";
import MyfamilyLeftContainer from "./myfamilyleftcontainer/MyfamilyLeftContainer";
import MyfamilyRightContainer from "./myfamilyrightcontainer/MyfamilyRightContainer";

const Myfamily = () => {
  return (
    <MyFamilyBody>
      <MyfamilyLeftContainer />
      <MyfamilyRightContainer />
    </MyFamilyBody>
  );
};

export default Myfamily;
