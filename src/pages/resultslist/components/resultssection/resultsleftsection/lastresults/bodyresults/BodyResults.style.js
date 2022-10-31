import styled from "styled-components";

export const BottomBodyResults = styled.div`
  width: 100%;
  height: 140px;
  color: #29263f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 11px;
`;

//Left side

export const BottombodyResultTitleContainer = styled.div`
  width: 335px;
  height: 84px;
  color: #868686;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 48px;
`;

export const BottomBodyResultTitlePresentation = styled.div`
  width: 350px;
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 300;
  color: #00549e;
`;

export const BottomBodyResultTitleDescription = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #868686;
  width: 307px;
  line-height: 20px;
  margin-left: 6.5px;
`;

//Right side

export const BottomBodyImage = styled.img`
  width: 341px;
  height: 227px;
  position: absolute;
  right: 39px;
  top: -79px;
`;
