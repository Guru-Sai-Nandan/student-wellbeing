
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider, theme } from "@chakra-ui/react"
import HydrationReminder from "./components/HydrationReminder";
import { Helmet } from "react-helmet";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import DailyCalorieIntake from "./components/Calculators/DailyCalorieIntake";
import NutritionTable from "./components/Nutrition/Nutrition";
import Media from "./components/Media/Media";
import Header from "./components/Header";

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Student Well-Being</title>
        <link rel="canonical" href="http://localhost:3004 " />
      </Helmet>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <ThemeProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/media' element={<Media />} />


              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
}

export default App;
