import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

export default function LoginUserProfileCard({ user }) {
  const { first_name, last_name, photoUrl, about, age, gender, skills } =
    user || {};
  return (
    <Card
      component={Paper}
      elevation={11}
      sx={{
        width: 400,
        boxShadow: 1,
        bgcolor: "#FFB6C1",
        borderRadius: 3,
        border: "2px solid #FF4D6D",
      }}
    >
      <CardMedia
        component="img"
        height="290"
        image={photoUrl}
        alt="user photo"
        sx={{ p: 2, borderRadius: 3 }}
      />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{mt:1}} >
          <Chip label="Name" />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {`${first_name} ${last_name}`}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{mt:1}}>
          <Chip label="Age" />
          <Typography variant="body2" color="text.secondary">
            {age }
          </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{mt:1}}>
          <Chip label="Gender" />
          <Typography variant="body2" color="text.secondary">
            { gender}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{mt:1}}>
          <Chip label="About" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
            //   display: "-webkit-box",
            //   WebkitLineClamp: 2, // 최대 2줄
            //   WebkitBoxOrient: "vertical",
            //   overflow: "hidden",
            //   textOverflow: "ellipsis",
            }}
          >
            {about}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{mt:1}}>
          <Chip label="Skills" />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {skills}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
