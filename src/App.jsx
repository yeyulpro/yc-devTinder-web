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
import RequestPage from "./app/components/RequestPage";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./app/apis/userApi";
import { useEffect } from "react";
import { setUser } from "./app/store/slices/userSlice";

const theme = createTheme({
  typography: {
    fontFamily: `'cursive', 'Helvetica', 'Arial', sans-serif`,
  },
});

function AppContent() {
  const dispatch = useDispatch();
  const { data, isSuccess } = useProfileQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<BasePage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="edit" element={<ProfileEditPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="connect-request" element={<RequestPage />} />
          <Route path="connections" element={<ConnectionsPage />} />
          <Route path="nobody" element={<NobodyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </Provider>
    </>
  );
}
