
import CssBaseline from "@mui/material/CssBaseline";
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
import ProfileEditPage from "./app/components/ProfileEditPage";
import ConnectionsPage from "./app/components/ConnectionsPage";
import NobodyPage from "./app/sharedComponents/Nobody";

const theme = createTheme({
  typography: {
    fontFamily: `'cursive', 'Helvetica', 'Arial', sans-serif`,
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
              <Route path="/" element={<HomePage />} />
              <Route path="/" element={<BasePage />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="feed" element={<FeedPage />} />
                <Route path="edit" element={<ProfileEditPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="connections" element={<ConnectionsPage />} />
                <Route path="nobody" element={<NobodyPage />} />
                
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}
