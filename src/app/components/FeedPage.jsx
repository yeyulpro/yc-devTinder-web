import UserCardPage from "./UserCardPage";
import { useGetAllFeedQuery } from "../apis/matchingApi";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


export default function FeedPage() {
  const { data, error, isLoading } = useGetAllFeedQuery();
  

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data...</Typography>;
  }

  if (!data?.feedList || data?.feedList.length === 0) {
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
      {data?.feedList.map((user) => (
        <UserCardPage key={user._id} user={user} />
      ))}
    </Container>
  );
}
