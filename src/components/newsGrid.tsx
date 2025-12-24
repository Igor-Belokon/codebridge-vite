import { Box } from "@mui/material";
import NewsCard from "./card";
import type { FC } from "react";
import { useNews } from "../context/NewsContext";

const NewsGrid: FC = () => {
  const { state } = useNews();

  const articles = state.articles.filter((a) =>
    a.title.toLowerCase().includes(state.search.toLowerCase())
  );

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
