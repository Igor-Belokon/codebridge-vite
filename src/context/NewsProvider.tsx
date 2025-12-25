import { useReducer, useEffect, type ReactNode } from "react";
import type { State, Action } from "../types/newsContextType";

import { NewsContext } from "./NewsContext";

const initialState: State = {
  articles: [],
  search: "",
  isLoading: true,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function NewsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=20")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_ARTICLES", payload: data.results }))
      .finally(() => dispatch({ type: "SET_IS_LOADING", payload: false }));
  }, []);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}
