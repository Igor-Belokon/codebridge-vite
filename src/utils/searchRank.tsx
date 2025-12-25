import { type Article } from "../types/article";

export function countMatches(text: string, query: string): number {
  if (!query.trim()) return 0;

  const words = query.toLowerCase().split(/\s+/).filter(Boolean);

  const target = text.toLowerCase();

  return words.reduce((count, word) => {
    return target.includes(word) ? count + 1 : count;
  }, 0);
}

export function getArticleScore(article: Article, query: string): number {
  const titleMatches = countMatches(article.title, query);
  const summaryMatches = countMatches(article.summary, query);

  return titleMatches * 10 + summaryMatches;
}

export function searchArticles(articles: Article[], query: string): Article[] {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return articles;
  }

  return articles
    .map((article) => ({
      article,
      score: getArticleScore(article, trimmedQuery),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article);
}
