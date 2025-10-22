import { useConnectionRequestQuery } from "../apis/matchingApi";
import UserCardPage from "./UserCardPage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function RequestPage() {
  const { data, isLoading } = useConnectionRequestQuery();
  const requestors = data?.receivedRequests ?? [];
  console.log(data);
  console.log(requestors);

  if (isLoading) {
    return <Typography> loading data...</Typography>;
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
      {requestors.map((user) => (
        <UserCardPage key={user?._id} user={user.fromUserId} />
      ))}
    </Container>
  );
}
