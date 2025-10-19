import { NavLink } from "react-router"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"



export default function HomePage() {
  return (
    <Box sx={{ position: "absolute" }}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          marginLeft: "-24px",
          overflow: "hidden"
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <source src="/homeVideo.mp4" type="video/mp4" />
        </video>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
          }}
          component={NavLink}
          to={"/login"}
        >
          <Typography variant="h2" fontWeight="bold">
            Love Love Love
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Start with YC-Tinder
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}