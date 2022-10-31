import styled from "styled-components";
import { Link } from "react-router-dom";
import Variables from "../../../../styles/Variables";

export const SelectionSectionBody = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  gap: 15.7px;
  margin-bottom: 40px;
`;

export const SelectionCard = styled.div`
  height: 227.39px;
  width: 245.38px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 38.87px 20px 23.7px 15.37px;
  position: relative;
`;

export const CardTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: ${Variables.BLUE};
  margin-top: 24px;
  margin-bottom: 14.6px;
`;

export const CardCommingSoon = styled.div`
  width: 103px;
  height: 23px;
  border: 1px solid #00549d;
  border-radius: 12px;
  color: #00549d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  font-weight: ${Variables.MEDIUM};
  position: absolute;
  right: 11.54px;
  top: 19.06px;
`;

export const CardFooterContainer = styled.div`
  width: 211px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardFooterText = styled.div`
  color: #868686;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const CardFooterButton = styled(Link)`
  width: 19.35px;
  height: 19.35px;
  border-radius: 10px;
  background-color: #fdb913;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
