import Box from "@mui/material/Box";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
export default function BasePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
