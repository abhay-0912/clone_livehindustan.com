import { getArticleById, getRelatedArticles } from '@/lib/api';
import { generateSEO } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

// Generate static paths for all articles
export async function generateStaticParams() {
  // Import here to avoid circular dependencies
  const { mockArticles } = await import('@/lib/mockData');
  
  return mockArticles.map((article) => ({
    id: article.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await getArticleById(id);
  
  if (!article) {
    return generateSEO({
      title: 'समाचार नहीं मिला',
      description: 'यह समाचार उपलब्ध नहीं है।',
    });
  }
  
  return generateSEO({
    title: article.title,
    description: article.summary,
    keywords: [article.category, article.author, 'hindi news'],
    ogImage: article.image,
    ogType: 'article',
    publishedAt: article.publishedAt,
    author: article.author,
  });
}

// Using ISR with revalidation
export const revalidate = 300; // Revalidate every 5 minutes

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await getArticleById(id);
  
  if (!article) {
    notFound();
  }
  
  const relatedArticles = await getRelatedArticles(article.id, article.category);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-4 text-gray-600">
          <Link href="/" className="hover:text-red-600">होम</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${article.category}`} className="hover:text-red-600">
            {article.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{article.title.slice(0, 30)}...</span>
        </nav>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-[#c8102e] text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Summary */}
        <p className="text-xl text-gray-800 mb-6 leading-relaxed font-medium">
          {article.summary}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('hi-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{article.readTime} मिनट पढ़ें</span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="relative h-[400px] md:h-[600px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-900 leading-relaxed space-y-4">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-800">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 py-6 border-y-2 border-gray-200">
          <span className="font-semibold text-gray-700">शेयर करें:</span>
          <div className="flex gap-2">
            <button className="bg-[#3b5998] text-white px-4 py-2 hover:bg-[#2d4373] transition font-medium">
              Facebook
            </button>
            <button className="bg-[#1da1f2] text-white px-4 py-2 hover:bg-[#0c85d0] transition font-medium">
              Twitter
            </button>
            <button className="bg-[#25d366] text-white px-4 py-2 hover:bg-[#1da851] transition font-medium">
              WhatsApp
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-4 border-[#c8102e] inline-block">
            संबंधित खबरें
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {relatedArticles.map((relatedArticle) => (
              <NewsCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
