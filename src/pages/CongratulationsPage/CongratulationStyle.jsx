import styled from "styled-components";
import CongratulationImg from '../../images/CongratulationImage/congratulation-img.svg';

export const StyledCongratulationPage = styled.img`
    margin-left: auto;
    margin-right: auto;
    background-image: url(${CongratulationImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 450px;
    padding-bottom: 0px;
    @media screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx) {
        background-image: url(${CongratulationImg});
    }
    @media screen and (min-width: 768px) {
        background-image: url(${CongratulationImg});
    }
    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2), screen and (min-width: 768px) and (min-resolution: 192dpi), screen and (min-width: 768px) and (min-resolution: 2dppx) {
        background-image: url(${CongratulationImg});
    }
    @media screen and (min-width: 1200px) {
        background-image: url(${CongratulationImg});
    }
    @media screen and (min-width: 1200px) and (min-device-pixel-ratio: 2), screen and (min-width: 1200px) and (min-resolution: 192dpi), screen and (min-width: 1200px) and (min-resolution: 2dppx) {
        background-image: url(${CongratulationImg});
    }

`;

export const Title = styled.h1`
    font-family: Almoni DL AAA;
    font-weight: 700;
    font-size: 34px;
    line-height: 35px;
    text-align: center;
    margin-top: 50px;
    color: #1B1B1B;
`;

export const Text = styled.p`
    font-family: Almoni DL AAA;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-top: 10px;
    color: #58595B;
    @media (max-width: 576px) {
        padding-right: 20px;
        padding-left: 20px;
    }

`;

export const SendButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 576px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;
