import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 10rem;
`;

export const FormTitle = styled.h1`
    text-align: center;
    font-family: Almoni DL AAA;
    fomt-weight: 700;
    fomt-size: 22px;
    line-height: 26px;
    color: #000000;
    margin-top: 3rem;
`;

export const FormField = styled.input`
    display: block;
    border: 1px solid #58595B;
    border-radius: 5px;
    width: 310px;
    height: 2rem;
    padding-left: 20px;
    margin-bottom: 2rem;

    &::placeholder {
        color: #000000;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const FormError = styled.p`
    color: #F93F3F;
    font-weight: 400;
    font-size: 14px;
    font-family: Almoni DL AAA;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 300px;

    input {
        width: 17px;
        height: 17px;
    }

    label {
        font-size: 16px;
        font-weight: 400;
        line-height: 21.79px;
        padding-bottom: 15px;
    }
`;
