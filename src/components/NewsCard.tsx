import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";

import type { Article } from "../types/article";

import { highlightText } from "../utils/highlightText";

interface NewsCardProps {
  article: Article;
}

const NewsCard: FC<NewsCardProps> = ({ article }) => {
  const search = useSearch();

  return (
    <RouterLink to={`/articles/${article.id}`}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 2,
          boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            transform: "translateY(-4px)",
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={article.image_url}
          alt={article.title}
        />

        <CardContent sx={{ p: 3 }}>
          <Stack sx={{ height: "300px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                color: "text.secondary",
                mb: 1.5,
              }}
            >
              <CalendarMonthIcon sx={{ fontSize: 16 }} />
              <Typography alignContent="start" variant="body2">
                {new Date(article.published_at).toDateString()}
              </Typography>
            </Box>

            <Typography
              textAlign="start"
              variant="h6"
              sx={{ fontWeight: 600, mb: 1.5, height: "50%", lineHeight: 1.3 }}
            >
              {highlightText(article.title, search)}
            </Typography>
            <Stack justifyContent="space-between" sx={{ height: "100%" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="start"
                sx={{
                  mb: 2,
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {highlightText(article.summary, search)}
              </Typography>

              <Typography
                alignItems="flex-start"
                sx={{
                  textAlign: "start",
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Read more →
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </RouterLink>
  );
};
export default NewsCard;
