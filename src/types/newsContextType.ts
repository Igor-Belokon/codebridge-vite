import type { Article } from "./article";
export type State = {
  articles: Article[];
  search: string;
  isLoading: boolean;
};

export type Action =
  | { type: "SET_ARTICLES"; payload: Article[] }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_IS_LOADING"; payload: boolean };
