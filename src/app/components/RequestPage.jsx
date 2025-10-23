import { useConnectionRequestQuery, useReviewRequestsMutation } from "../apis/matchingApi";
import UserCardPage from "./UserCardPage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


export default function RequestPage() {

  const { data, isLoading } = useConnectionRequestQuery();
  const requestors = data?.receivedRequests ?? [];
  const [reviewRequests ] = useReviewRequestsMutation();


  if (isLoading) {
    return <Typography> loading data...</Typography>;
  }

  const acceptHandler = async(id)=> {
    await reviewRequests({ state: "accepted",id }).unwrap();
  }
  const rejectHandler =async (id) => {
   await reviewRequests({ state: "rejected", id }).unwrap();
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
        <UserCardPage key={user?._id} user={user.fromUserId}  acceptHandler={() => acceptHandler(user._id)}
          rejectHandler={() => rejectHandler(user._id)}/>
      ))}
    </Container>
  );
}
