export interface Article {
  authors: [{ name: string; socials: null }];
  events: [];
  featured: boolean;
  id: number;
  image_url: string;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: string;
}
