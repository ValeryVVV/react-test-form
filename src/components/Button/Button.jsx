import React from 'react';
import { StyledButton } from './ButtonStyle';

const Button = ({ children, style, onClick }) => {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
