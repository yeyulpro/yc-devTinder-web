import UserCardPage from "./UserCardPage";
import { useSelector } from "react-redux";
import { useGetAllFeedQuery } from "../apis/feedApi";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { getFeed } from "../store/slices/feedSlice";
import { useEffect } from "react";

export default function FeedPage() {
  const { data, error, isLoading } = useGetAllFeedQuery();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    if (data?.userList) {
      dispatch(getFeed(data?.userList));
    }
  }, [dispatch, data?.userList]);

  const feed = useSelector((state) => state.feed);
  const feedUsers = feed.filter((user) => user._id !== currentUser?._id);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data...</Typography>;
  }

  if (!data.userList || data.userList.length === 0) {
    return <Typography>No user data...</Typography>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-around",
        p: 4,
      }}
    >
      {feedUsers?.map((user) => (
        <UserCardPage key={user._id} user={user} />
      ))}
    </Container>
  );
}
