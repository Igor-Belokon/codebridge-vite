import { useContext } from "react";

import { NewsContext } from "../context/NewsContext";

import type { Article } from "../types/article";

export function useNewsById(
  id: number
): [Article | undefined, boolean | undefined] {
  const context = useContext(NewsContext);
  return [
    context?.state.articles.find((article) => article.id === id),
    context?.state.isLoading,
  ];
}
