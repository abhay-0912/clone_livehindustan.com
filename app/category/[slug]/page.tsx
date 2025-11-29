import { getArticlesByCategory } from '@/lib/api';
import { generateSEO } from '@/lib/seo';
import { categories } from '@/lib/mockData';
import NewsCard from '@/components/NewsCard';
import NoDataMessage from '@/components/NoDataMessage';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return generateSEO({
      title: 'श्रेणी नहीं मिली',
      description: 'यह श्रेणी उपलब्ध नहीं है।',
    });
  }
  
  return generateSEO({
    title: `${category.name} - समाचार`,
    description: `${category.name} से संबंधित नवीनतम समाचार और अपडेट`,
    keywords: [category.name, 'hindi news', 'live hindustan'],
  });
}

// Using ISR
export const revalidate = 60;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    notFound();
  }
  
  const articles = await getArticlesByCategory(slug);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 pb-2 border-b-4 border-[#c8102e] inline-block">
          {category.name}
        </h1>
        <p className="text-gray-600 mt-4">
          {category.name} से संबंधित नवीनतम समाचार
        </p>
      </div>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <NoDataMessage message={`${category.name} श्रेणी में कोई समाचार उपलब्ध नहीं है।`} />
      )}
    </div>
  );
}
