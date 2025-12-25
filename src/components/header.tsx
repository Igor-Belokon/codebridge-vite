import { Typography, TextField, InputAdornment, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNews } from "../context/NewsContext";
import { searchArticles } from "../utils/searchRank";

export default function NewsHeader() {
  const { state, dispatch } = useNews();

  const results = searchArticles(state.articles, state.search).length;

  return (
    <Stack alignItems="start">
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        Filter by keywords
      </Typography>

      <TextField
        fullWidth
        placeholder="Search"
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
        sx={{
          maxWidth: 520,
          backgroundColor: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
          borderRadius: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="body2" sx={{ mt: 3, fontWeight: 500 }}>
        Results: {results}
      </Typography>
    </Stack>
  );
}
