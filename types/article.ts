export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image?: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  isFeatured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
}
