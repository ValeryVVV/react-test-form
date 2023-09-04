import styled from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    padding: 60px 0px;
    background-color: #1B1B1B;
`;

export const FooterContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    }
    @media screen and (min-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
    }
    @media screen and (min-width: 480px) {
    width: 480px;
    }
    @media screen and (min-width: 768px) {
    width: 768px;
    }
    @media screen and (min-width: 1200px) {
    width: 1200px;
    }
`;

export const FooterFlex = styled.div`
    display: block;
    margin: 0;
    padding: 0px;
    list-style: none;
    }
    @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px 165px;
    }
    }
    @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    text-align: left;
    gap: 70px;
    }
`;

export const Divider = styled.hr`
    display: block;
    margin-bottom: 50px;
    margin-left: 100px;
    margin-right: 100px;
    border-color: #797979;
    border-width: 1px;

    @media (max-width: 768px) {
        margin-left: 30px;
        margin-right: 30px;
    }
    @media (min-width: 1200px) {
        margin-left: 100px;
        margin-right: 100px;
    }
`;

export const FooterTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    font-famile: Almoni DL AAA;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    gap: 10px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

