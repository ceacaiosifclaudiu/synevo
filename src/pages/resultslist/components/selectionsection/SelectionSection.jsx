import React from "react";
import SelectionCards from "./SelectionCard";
import {
  CardCommingSoon,
  SelectionSectionBody,
} from "./SelectionSection.style";
import MyData from "./utils/MyDatas";

const SelectionSection = () => {
  const CommingSoon = <CardCommingSoon>Comming soon</CardCommingSoon>;

  return (
    <SelectionSectionBody>
      {MyData.map((items) => (
        <SelectionCards
          key={items.id}
          icon={items.icon}
          titleBold={items.titleBold}
          title={items.title}
          footerText={items.footerText}
          commingsoon={items.commingSoon && CommingSoon}
        />
      ))}
    </SelectionSectionBody>
  );
};

export default SelectionSection;
