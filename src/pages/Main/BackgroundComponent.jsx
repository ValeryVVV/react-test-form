import React from "react";
import { StyledSectionBackground } from "./BackgroundComponentStyled";
import FormDetails from "pages/FormDetails/FormDetails";

const BackgroundComponent = () => {
  return (
    <>
        <StyledSectionBackground>
            <h1>React Test</h1>
        </StyledSectionBackground>
        <FormDetails />
    </>
  );
};

export default BackgroundComponent;
