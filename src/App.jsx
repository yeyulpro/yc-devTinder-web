import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Navbar from "./app/layout/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/components/HomePage";
import LoginPage from "./app/components/LoginPage";
import FeedPage from "./app/components/FeedPage";
import TestPage from "./app/components/TestPage";
import BasePage from "./app/components/BasePage";
import ProfilePage from "./app/components/ProfilePage";
import { appStore } from "./app/store/appStore";
import { Provider } from "react-redux";
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: "cursive",
  },
});

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<BasePage />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="feed" element={<FeedPage />} />
                <Route path="test" element={<TestPage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}
