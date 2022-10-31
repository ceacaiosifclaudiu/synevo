import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowDownProfile,
  HamburgerContainer,
  ImageProfile,
  LeftSection,
  Link,
  LinksContainer,
  LogoContainer,
  LogoText,
  MenuHamburgerTitle,
  NameProfile,
  NavbarBody,
  NavbarContainer,
  ProfileContainer,
  RightSection,
} from "./Navbar.style";

import ProfileImage from "../../assets/Image 1.png";
import ArrowDown from "../../assets/Group 14043.png";
import MenuBurger from "./icons/MenuBurger";
import ClopotIcon from "./icons/ClopotIcon";
import LogoIcon from "./icons/LogoIcon";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <NavbarBody>
      <NavbarContainer>
        <LeftSection>
          <LogoContainer onClick={() => nav("/")}>
            <LogoIcon
              style={{ display: "inline-block", transform: "rotate(45deg)" }}
            />
            <LogoText>synevo</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link
              to="/appointments"
              className={({ isActive }) => (isActive ? undefined : undefined)}
            >
              APPOINTMENTS
            </Link>
            <Link to="/resultslist">RESULTS LIST</Link>
            <Link to="/store">STORE</Link>
          </LinksContainer>
        </LeftSection>
        <RightSection>
          <ProfileContainer>
            <ImageProfile src={ProfileImage} />
            <NameProfile>Hello,Alexandru</NameProfile>
            <ArrowDownProfile src={ArrowDown} />
          </ProfileContainer>
          <ClopotIcon className="clopot"/>
          <HamburgerContainer>
            <MenuBurger />
            <MenuHamburgerTitle>MENU</MenuHamburgerTitle>
          </HamburgerContainer>
        </RightSection>
      </NavbarContainer>
    </NavbarBody>
  );
};

export default Navbar;
