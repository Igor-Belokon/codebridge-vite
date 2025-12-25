import { useContext } from "react";

import { NewsContext } from "../context/NewsContext";

export function useSearch() {
  const context = useContext(NewsContext);

  return context?.state.search;
}
