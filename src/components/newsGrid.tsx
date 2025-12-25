import { Box } from "@mui/material";
import NewsCard from "./card";
import type { FC } from "react";
import { useNews } from "../context/NewsContext";
import { searchArticles } from "../utils/searchRank";

const NewsGrid: FC = () => {
  const { state } = useNews();

  const articles = searchArticles(state.articles, state.search);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
      }}
    >
      {articles.map((article) => (
        <Box
          key={article.id}
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 16px)",
              md: "calc(33.333% - 22px)",
            },
          }}
        >
          <NewsCard article={article} />
        </Box>
      ))}
    </Box>
  );
};

export default NewsGrid;
