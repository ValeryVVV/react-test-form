import React from "react";
import footerLogo from "../../images/logo (7).svg";
import { Divider, FooterContainer, FooterFlex, FooterTitle, StyledFooter } from "./FooterStyle";

const Footer = () => {
  return (
    <StyledFooter>
        <FooterContainer>
            <FooterFlex>
                <Divider></Divider>
        <FooterTitle>Copyright © 2023 & Powered by: <span><img src={footerLogo} alt="logo" width='64px' height='21px' /></span></FooterTitle>
        </FooterFlex>
        </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
