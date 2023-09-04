import styled from "styled-components";
import image from '../../images/banners.svg';

export const StyledSectionBackground = styled.svg`

    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 100%;
    padding-top: 118px;
    padding-bottom: 0px;
    @media screen and (min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx) {
        background-image: url(${image});
    }
    @media screen and (min-width: 768px) {
        background-image: url(${image});
    }
    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2), screen and (min-width: 768px) and (min-resolution: 192dpi), screen and (min-width: 768px) and (min-resolution: 2dppx) {
        background-image: url(${image});
    }
    @media screen and (min-width: 1200px) {
        background-image: url(${image});
    }
    @media screen and (min-width: 1200px) and (min-device-pixel-ratio: 2), screen and (min-width: 1200px) and (min-resolution: 192dpi), screen and (min-width: 1200px) and (min-resolution: 2dppx) {
        background-image: url(${image});
    }


h1 {
    padding: 0;
  margin-bottom: 30px;
  text-transform: capitalize;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: #FFFFFF;
  fonr-family: Almoni DL AAA;
}
`;