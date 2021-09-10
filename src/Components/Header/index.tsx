import React from "react";
import { HeaderContainer, Img } from "./style";

interface HeaderProps {
  titlePage: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <Img src={props.icon} />
      <h2>{props.titlePage}</h2>
    </HeaderContainer>
  );
};

export default Header;
