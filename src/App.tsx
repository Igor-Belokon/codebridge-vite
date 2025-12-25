import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/articles" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/articles" />} />
      </Routes>
    </>
  );
}

export default App;
