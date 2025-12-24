import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
  Stack,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNews } from "../context/NewsContext";

import type { Article } from "../types/article";

import { highlightText } from "../utils/highlightText";

interface Art {
  article: Article;
}

const NewsCard: FC<Art> = ({ article }) => {
  const { state } = useNews();
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          transform: "translateY(-4px)",
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
            {highlightText(article.title, state.search)}
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
              {highlightText(article.summary, state.search)}
            </Typography>

            <Link
              component={RouterLink}
              to={`/article/${article.id}`}
              underline="none"
              alignContent="flex-start"
              alignItems="flex-start"
              sx={{
                textAlign: "start",
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Read more →
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default NewsCard;
