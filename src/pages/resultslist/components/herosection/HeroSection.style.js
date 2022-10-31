import styled from "styled-components";
import { Link } from "react-router-dom";
import Variables from "../../../../styles/Variables";

export const HeroSectionBody = styled.div`
  width: 100%;
  height: 207px;
  background-image: linear-gradient(261deg, #3a83ce, #00539f);
  border-radius: 13px;
  color: ${Variables.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 57.5px;
  padding-right: 56px;
  margin-bottom: 40px;
`;

//Left side of the hero

export const HeroSectionLeft = styled.div`
  width: 209px;
  height: 112px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

export const HeroSectionTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: ${Variables.LIGHT};
  color: ${Variables.WHITE};
  letter-spacing: 0;
`;

export const HeroSectionTitleBold = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: ${Variables.WHITE};
  letter-spacing: 0;
`;

export const HeroSectionDots = styled.div`
  width: 60px;
  height: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;
`;

export const HeroSectionDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.49);
`;

//Right side of the hero

export const HeroSectionRight = styled.div`
  width: 470px;
  height: 129px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeroSectionDescription = styled.div`
  height: 120px;
  color: rgba(255, 255, 255, 0.79);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: ${Variables.LIGHT};
  line-height: 1.8;
`;

export const HeroSectionDescriptionSemiBold = styled.div`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: ${Variables.MEDIUM};
`;

export const HeroSectionButtonsContainer = styled.div`
  width: 460px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 23px;
`;

export const HeroSectionButton = styled(Link)`
  border: 1px solid ${Variables.WHITE};
  border-radius: 19px;
  height: 31px;
  padding: 16px 32px 16px 32px;
  color: rgba(243, 246, 249, 0.85);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
