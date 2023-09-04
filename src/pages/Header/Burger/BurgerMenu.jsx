import React from "react";
import { StyledBurger } from "./BurgerMenuStyled";

const Burger = ({ open, setOpen }) => {
  return (
    <div>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    </div>
  );
};

export default Burger;
