import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function NobodyPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/nobody.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          bgcolor: "rgba(0,0,0,0.5)",
          p: 3,
          borderRadius: 2,
        }}
      >
        No Connections 😢
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Try connecting with someone new!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={() => navigate("/feed")}
      >
        Back to Feed
      </Button>
    </Box>
  );
}
