import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type { Article } from "../types/article";

type State = {
  articles: Article[];
  search: string;
};

type Action =
  | { type: "SET_ARTICLES"; payload: Article[] }
  | { type: "SET_SEARCH"; payload: string };

const initialState: State = {
  articles: [],
  search: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

const NewsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=20")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "SET_ARTICLES", payload: data.results })
      );
  }, []);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within NewsProvider");
  }
  return context;
}
