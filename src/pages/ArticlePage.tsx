import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNewsById } from "../hooks/useNewsById";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  const [article, isLoading] = useNewsById(Number(id));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: 250,
          backgroundImage: `url(${article?.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {isLoading ? (
        <CircularProgress />
      ) : !article ? (
        <Typography variant="h5">Not found 404</Typography>
      ) : (
        <Container maxWidth="md">
          <Paper
            sx={{
              transform: "translateY(-160px)",
              p: { xs: 3, md: 6 },
              borderRadius: 2,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                lineHeight: 1.25,
              }}
            >
              {article.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {article.summary}
            </Typography>
          </Paper>

          <Box textAlign="start" sx={{ mt: -12 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              component={RouterLink}
              to="/articles"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Back to homepage
            </Button>
          </Box>
        </Container>
      )}
    </Box>
  );
};
export default ArticlePage;
