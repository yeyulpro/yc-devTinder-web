import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function UserCardPage() {
  return (
      
    <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A card component has a figure, a body part, and inside body there are title and actions parts
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" variant="contained" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  )
}