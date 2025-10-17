import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/loginSchema";
import { toast } from "react-toastify";

import axios from "axios";
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", data, {
        withCredentials: true,
      });

      toast("Wow so easy!");
      return res.data;
    } catch (error) {
      if (error.response) {
        toast("Login failed: " + error.response.data.message);
      } else {
        toast("Something went wrong: " + error.message);
      }
    }
  };

  return (
    <Paper
      elevation={9}
      sx={{ bgcolor: "#f4acb7", mt: 0, borderRadius: 3, width: 550, pb: 5 }}
    >
      {/* for center arrangement */}
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* logo  */}
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Login in to your account
        </Typography>

        {/* form */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("emailId")}
            value="test@gmail.com"
          />
          <Typography sx={{ color: "#ff0000" }}>
            {errors.emailId?.message}
          </Typography>
          <Typography sx={{ color: "#ff0000" }}>{/* {email} */}</Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
            value="Passw0rd!"
          />
          <Typography sx={{ color: "#ff0000" }}>
            {errors.password?.message}
          </Typography>
          {/* Forgot password + Sign in button
          <Grid container sx={{ mt: 1, mb: 2 }}>
            <Grid item xs>
              <Link href="#" variant="body2" underline="hover">
                Forgot password?
              </Link>
            </Grid>
          </Grid> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, marginY: 2 }}
          >
            Login
          </Button>

          <Typography variant="body2" align="center">
            Not a member?{" "}
            <Link href="#" variant="body2" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
