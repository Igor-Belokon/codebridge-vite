import { useContext } from "react";

import { NewsContext } from "../context/NewsContext";

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within NewsProvider");
  }
  return context;
}
