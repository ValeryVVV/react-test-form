import Footer from "pages/Footer/Footer";
import {
    Route,
    Routes,
  } from 'react-router-dom';


import Header from "pages/Header/Header";
import BackgroundComponent from "pages/Main/BackgroundComponent";
import React from "react";
import CongratulationPage from "pages/CongratulationsPage/CongratulationsPage";

export const App = () => {
    return (
        <>
         <Header />
         <Routes>
            <Route path="/" element={<BackgroundComponent />} />
            <Route path="/congratulation-page" element={<CongratulationPage />} />
        </Routes>
        <Footer />
        </>
  );
};
