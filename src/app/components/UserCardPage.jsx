import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";

export default function UserCardPage({ user }) {
  const { first_name, last_name, photoUrl, about, age, gender } = user || {};
  return (
    <Card
      component={Paper}
      elevation={11}
      sx={{
        width: 300,
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {`${first_name} ${last_name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {age && gender && <>{age + ", " + gender}</>}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // 최대 2줄
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {about}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <ButtonGroup
          size="small"
          variant="contained"
          sx={{ bgcolor: "#FF4D6D" }}
        >
          <Button sx={{ width: 100 }}>Ignore</Button>
          <Button
            variant="outlined"
            sx={{ color: "#FF4D6D", bgcolor: "#FFFF", width: 100 }}
          >
            Interested
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
