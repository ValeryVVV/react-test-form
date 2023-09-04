import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3E3E3E;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 284px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  img {
    margin-left: 20px;
  }

  a {
    font-size: 20px;
    font-family: Almoni DL AAA;
    padding: 1rem 0;
    font-weight: 700;
    line-height: 20.91px;
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;