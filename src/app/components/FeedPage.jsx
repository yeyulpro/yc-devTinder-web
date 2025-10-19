import UserCardPage from "./UserCardPage";
import { useGetFeedQuery } from "../apis/feedApi";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FeedPage() {
  const { data: users, error, isLoading } = useGetFeedQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading feed</p>;

  return (
    <>
      {users?.map((user) => (
        <Box key={user._id}>
          <Typography variant="body2" color="initial">
            {user.first_name}
          </Typography>
        </Box>
      ))}
      <UserCardPage users={users} />
    </>
  );
}
