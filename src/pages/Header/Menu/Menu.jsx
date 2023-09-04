import React from "react";
import { StyledMenu } from "./MenuStyled";
import logo from '../../../images/icon (1).svg';
import image from '../../../images/Group (1).svg';
import phone from '../../../images/icon.svg';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
      Link to Google
        <img src={logo} width='18px' height='18px' alt="Link to Google" />
      </a>
      <a href="/">
      Link to Google
      <img src={phone} width='18px' height='18px' alt="Link to Google" />
      </a>
      <a href="/">
      Link to Google
        <img src={image} width='18px' height='18px' alt="Link to Google" />
      </a>
    </StyledMenu>
  );
};

export default Menu;
