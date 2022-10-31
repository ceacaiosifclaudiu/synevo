import React from "react";

import {
  BoldText,
  MyAppointmentsBody,
  MyAppointmentsBodyDescription,
  MyAppointmentsBodyImage,
  MyAppointmentsBodyTitle,
  MyAppointmentsContainer,
  MyAppointmentsFooter,
  MyAppointmentsFooterButton,
  MyAppointmentsFooterTitle,
  MyAppointmentsTitle,
} from "./MyAppointments.style";
import MyAppointmentsImage from "../../../../../../assets/MyAppointmentsImage.png";
import { BlackText } from "../../resultsleftsection/myfamily/myfamilyleftcontainer/MyfamilyleftContainer.style";
import PlusIcon from "./PlusIcon";

const MyAppointments = () => {
  return (
    <MyAppointmentsContainer>
      <MyAppointmentsTitle>
        My <BlackText>Appointments</BlackText>
      </MyAppointmentsTitle>
      <MyAppointmentsBody>
        <MyAppointmentsBodyTitle>
          <BoldText>Manage </BoldText>
          <br /> your appointments
        </MyAppointmentsBodyTitle>
        <MyAppointmentsBodyDescription>
          You can add, veiw and edit your appointments and get notifications
        </MyAppointmentsBodyDescription>
        <MyAppointmentsBodyImage src={MyAppointmentsImage} />
      </MyAppointmentsBody>
      <MyAppointmentsFooter>
        <MyAppointmentsFooterTitle>
          Create appointment
        </MyAppointmentsFooterTitle>
        <MyAppointmentsFooterButton to="/appointments">
          <PlusIcon />
        </MyAppointmentsFooterButton>
      </MyAppointmentsFooter>
    </MyAppointmentsContainer>
  );
};

export default MyAppointments;
