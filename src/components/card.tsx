import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Box, Stack, Typography, Button } from "@mui/material";
import type { FC } from "react";

interface CardArgs {
  imgUrl: string;
  title: string;
  published_at: string;
  summary: string;
}

function formatDate(isoDate: string) {
  const date = new Date(isoDate);

  const day = date.getDate();
  const year = date.getFullYear();

  const month = date.toLocaleString("en-US", { month: "long" });

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${month} ${day}${suffix}, ${year}`;
}

const Card: FC<CardArgs> = ({ imgUrl, title, published_at, summary }) => (
  <Stack
    justifyContent="start"
    sx={{
      height: "530px",
      width: "400px",
      border: "1px solid rgba(234, 234, 234, 1)",
    }}
  >
    <Box
      component="img"
      src={imgUrl}
      alt="example"
      sx={{
        width: "100%",
        height: 150,
        borderRadius: 2,
      }}
    />
    <Stack direction="row">
      <CalendarTodayOutlinedIcon />
      <Typography textAlign="start">{formatDate(published_at)}</Typography>
    </Stack>
    <Typography>{title}</Typography>
    <Typography
      sx={{
        display: "-webkit-box",
        WebkitLineClamp: 2, // количество строк
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {summary}
    </Typography>
    <Button>Read more</Button>
  </Stack>
);
export default Card;
