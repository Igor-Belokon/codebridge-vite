import { createContext } from "react";

import type { State, Action } from "../types/newsContextType";

export const NewsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);
