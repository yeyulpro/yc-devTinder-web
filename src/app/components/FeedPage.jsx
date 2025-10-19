import UserCardPage from "./UserCardPage";
import { useSelector } from "react-redux";
import { useGetFeedQuery } from "../apis/feedApi";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { getFeed } from "../store/slices/feedSlice";

export default function FeedPage() {
  const { data: users, error, isLoading } = useGetFeedQuery();
  const dispatch = useDispatch()
  dispatch(getFeed(users))
  const currentUserInfo = useSelector((state) => state.feed);

if (isLoading) {
  return <Typography>Loading...</Typography>;
}

if (error) {
  return <Typography>Error loading data...</Typography>;
}

if (!users || users.length === 0) {
  return <Typography>No user data...</Typography>;
}

  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexWrap: "wrap", gap:2 , justifyContent:'space-around', p:4}}>
      {currentUserInfo.map((user) => (
        <UserCardPage key={user._id} user={user} />
      ))}
    </Container>
  );
}
