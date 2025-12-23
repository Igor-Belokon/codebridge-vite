import { Box, Stack, TextField, Typography } from "@mui/material";
import { type FC, useEffect, useState } from "react";

import Card from "../components/card";

interface Articles {
  authors: [{ name: string; socials: null }];
  events: [];
  featured: boolean;
  id: number;
  image_url: string;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: string;
}

const Home: FC = () => {
  const [articles, setArticles] = useState<Array<Articles>>([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
        console.log("data results", data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      component="main"
      sx={{ width: "100%", height: "100%", bgcolor: "rgba(255, 255, 255, 1)" }}
    >
      <Stack direction="column" sx={{ margin: "75px" }}>
        <Typography>Filter by keywords</Typography>
        <TextField sx={{ width: "600px" }} />
        <Typography>Results:{articles.length}</Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ flexWrap: "wrap" }}
        >
          {articles.map((event) => (
            <Card
              published_at={event.published_at}
              title={event.title}
              imgUrl={event.image_url}
              summary={event.summary}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Home;
