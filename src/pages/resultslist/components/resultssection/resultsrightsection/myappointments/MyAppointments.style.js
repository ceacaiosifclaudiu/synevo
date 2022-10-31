import styled from "styled-components";
import { Link } from "react-router-dom";
import Variables from "../../../../../../styles/Variables";

export const MyAppointmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//Top

export const MyAppointmentsTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #00549e;
`;

//Body

export const MyAppointmentsBody = styled.div`
  width: 100%;
  height: 265.6px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 7.25px;
  margin-top: 27.5px;
  border-radius: 11px;
  padding-left: 35.5px;
  padding-bottom: 19.75px;
  position: relative;
`;

export const MyAppointmentsBodyTitle = styled.div`
  font-family: "Poppins", sans-serif;
  color: #00549e;
  font-size: 26px;
  font-weight: 300;
  line-height: 30px;
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const MyAppointmentsBodyDescription = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #868686;
  font-weight: 300;
  line-height: 22px;
  width: 327px;
`;

export const MyAppointmentsBodyImage = styled.img`
  width: 255px;
  height: 254px;
  position: absolute;
  right: 16px;
  top: -70px;
`;

//Footer

export const MyAppointmentsFooter = styled.div`
  width: 100%;
  height: 43px;
  margin-top: 26.68px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const MyAppointmentsFooterTitle = styled.div`
  color: #29263f;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: ${Variables.MEDIUM};
`;

export const MyAppointmentsFooterButton = styled(Link)`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  background-color: ${Variables.WHITE};
  box-shadow: 0px 3px 6px #00000029;
  margin-left: 10.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868686;
  font-size: 25px;
`;
