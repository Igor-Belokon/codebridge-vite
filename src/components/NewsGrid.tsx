import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";
import type { FC } from "react";
import { useNews } from "../hooks/useNews";
import { searchArticles } from "../utils/searchRank";

const NewsGrid: FC = () => {
  const { state } = useNews();

  const articles = searchArticles(state.articles, state.search);

  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid key={article.id} size={{ xs: 12, md: 6, xl: 4 }}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsGrid;
