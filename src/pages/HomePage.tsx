import { type FC } from "react";
import { Container, Divider, Box } from "@mui/material";
import NewsHeader from "../components/NewsHeader";
import NewsGrid from "../components/NewsGrid";

const HomePage: FC = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <NewsHeader />
        <Divider sx={{ my: 3 }} />
        <NewsGrid />
      </Box>
    </Container>
  );
};
export default HomePage;
