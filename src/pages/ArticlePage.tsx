import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import type { Article } from "../types/article";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}/`)
      .then((res) => res.json())
      .then(setArticle);
  }, [id]);

  if (!article) return <div>Loading...</div>;
  console.log(article);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: 250,
          backgroundImage: `url(${article.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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
            to="/"
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
    </Box>
  );
};
export default ArticlePage;
