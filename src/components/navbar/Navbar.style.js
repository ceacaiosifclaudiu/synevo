import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Variables from "../../styles/Variables";

export const NavbarBody = styled.div`
  width: 100%;
  height: 116.5px;
  position: sticky;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarContainer = styled.div`
  width: 1286px;
  margin: 0 auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Left side navbar

export const LinksContainer = styled.div`
  width: 333px;
  height: 116.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Variables.WHITE};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45%;
`;

export const LogoContainer = styled.div`
  height: 40.12px;
  min-width: 152px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 9.52px;

  &:hover {
    cursor: pointer;
  }
`;

export const LogoText = styled.h1`
  font-family: "Poppins", sans-serif;
  color: ${Variables.BLUE};
  font-weight: ${Variables.BOLD};
  font-size: 30.65px;
  margin: 0;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${Variables.GRAYTEXT};
  height: 116.5px;

  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-decoration: ${(props) => {
    return props.style
      ? (isActive) => (isActive ? "underline" : "none")
      : "none";
  }};

  &[class*="active"] {
    color: ${Variables.ORANGE};
    border-bottom: 2px solid ${Variables.ORANGE};
  }
`;

// Right side navbar

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 116.5px;
  width: 40%;
`;

export const ProfileContainer = styled.div`
  height: 40px;
  width: 193px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  border: 1px solid ${Variables.NAVBARBORDERCOLOR};
`;

export const ImageProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 24px;
`;

export const NameProfile = styled.p`
  width: 94px;
  color: ${Variables.GRAYTEXT};

  font-size: 13px;
  font-family: "Lato", sans-serif;
  margin-left: 3px;
`;

export const ArrowDownProfile = styled.img`
  width: 13.09px;
  height: 6.54px;
  margin-right: 25px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 19px;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuHamburgerTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${Variables.GRAYTEXTMENU};
`;
