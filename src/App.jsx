import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Navbar from "./app/layout/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import LoginPage from "./app/pages/LoginPage";
import TestPage from "./app/pages/TestPage";
import BasePage from "./app/pages/BasePage";
import React from "react";


const theme = createTheme({
  typography: {
    fontFamily: "cursive",
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<BasePage />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="test" element={<TestPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
