import React from "react";

import ArrowRightIcon from "./icons/ArrowRightIcon";

import {
  CardContainer,
  CardFooterButton,
  CardFooterContainer,
  CardFooterText,
  CardTitle,
  SelectionCard,
} from "./SelectionSection.style";

const SelectionCards = (props) => {
  return (
    <SelectionCard>
      <CardContainer>
        {props.commingsoon || null}
        {props.icon}
        <CardTitle>
          <strong>{props.titleBold}</strong>
          <br />
          {props.title}
        </CardTitle>
        <CardFooterContainer>
          <CardFooterText>{props.footerText}</CardFooterText>
          <CardFooterButton>
            <ArrowRightIcon />
          </CardFooterButton>
        </CardFooterContainer>
      </CardContainer>
    </SelectionCard>
  );
};

export default SelectionCards;
