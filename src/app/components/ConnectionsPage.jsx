import { useNavigate } from "react-router";
import { useConnectionsQuery } from "../apis/matchingApi";
import UserCardPage from "./UserCardPage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


export default function ConnectionsPage() {
  const navigate = useNavigate();
  const { data: connectedPartners, error, isLoading } = useConnectionsQuery();
 console.log("connection"+connectedPartners)

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data...</Typography>;
  }
 if (!connectedPartners || connectedPartners.length === 0) {
      navigate("/nobody");
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
      {connectedPartners?.map((user) => (
        <UserCardPage key={user._id} user={user} />
      ))}
    </Container>
  );
}
