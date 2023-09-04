import React from "react";
import { StyledCongratulationPage, Title, Text, SendButtonContainer } from "./CongratulationStyle";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

const CongratulationPage = () => {
    const navigate = useNavigate();
  return (
    <>
        <StyledCongratulationPage />
        <Title>The form has been sent successfully</Title>
        <Text>An answer returned from the transmission of the form</Text>
        <SendButtonContainer>
            <Button onClick={() => navigate("/")}>Send again</Button>
        </SendButtonContainer>
    </>
  );
};

export default CongratulationPage;
