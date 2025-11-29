import { Article } from '@/types/article';
import { mockArticles } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getAllArticles(): Promise<Article[]> {
  await delay(500); // Simulate network delay
  return mockArticles;
}

export async function getFeaturedArticles(): Promise<Article[]> {
  await delay(500);
  return mockArticles.filter(article => article.isFeatured);
}

export async function getArticleById(id: string): Promise<Article | null> {
  await delay(500);
  return mockArticles.find(article => article.id === id) || null;
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  await delay(500);
  
  if (category === 'latest') {
    return mockArticles;
  }
  
  // Map English slugs to Hindi categories
  const categoryMap: { [key: string]: string } = {
    'politics': 'राजनीति',
    'sports': 'खेल',
    'entertainment': 'मनोरंजन',
    'business': 'व्यापार',
    'science': 'विज्ञान',
    'education': 'शिक्षा',
  };
  
  const hindiCategory = categoryMap[category];
  
  if (!hindiCategory) {
    return [];
  }
  
  return mockArticles.filter(article => article.category === hindiCategory);
}

export async function getRelatedArticles(articleId: string, category: string): Promise<Article[]> {
  await delay(500);
  return mockArticles
    .filter(article => article.id !== articleId && article.category === category)
    .slice(0, 3);
}
