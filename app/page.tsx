import { getAllArticles, getFeaturedArticles } from '@/lib/api';
import { generateSEO } from '@/lib/seo';
import Hero from '@/components/Hero';
import NewsCard from '@/components/NewsCard';
import NoDataMessage from '@/components/NoDataMessage';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export const metadata = generateSEO({
  title: 'मुखपृष्ठ - ताज़ा खबरें',
  description: 'भारत की अग्रणी हिंदी न्यूज़ वेबसाइट। ताज़ा खबरें, राजनीति, खेल, मनोरंजन, व्यापार और अधिक।',
  keywords: ['hindi news', 'live hindustan', 'breaking news', 'ताज़ा खबर', 'समाचार'],
});

// Using ISR (Incremental Static Regeneration)
// Revalidate every 60 seconds
export const revalidate = 60;

async function HomeContent() {
  try {
    const [featuredArticles, allArticles] = await Promise.all([
      getFeaturedArticles(),
      getAllArticles(),
    ]);

    if (!allArticles || allArticles.length === 0) {
      return <NoDataMessage message="इस समय कोई समाचार उपलब्ध नहीं है। कृपया बाद में पुनः प्रयास करें।" />;
    }

    const heroArticle = featuredArticles[0] || allArticles[0];
    const topArticles = allArticles.slice(0, 6);
    const sidebarArticles = allArticles.slice(6, 12);

    return (
      <>
        {/* Hero Section */}
        <section className="mb-8">
          <Hero article={heroArticle} />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-4 border-[#c8102e] inline-block">
              ताज़ा समाचार
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {topArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-[#c8102e]">
                अन्य खबरें
              </h2>
              <div className="space-y-1">
                {sidebarArticles.map((article) => (
                  <NewsCard 
                    key={article.id} 
                    article={article} 
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Articles */}
        {allArticles.length > 12 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-4 border-[#c8102e] inline-block">
              और खबरें
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {allArticles.slice(12).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </>
    );
  } catch (error) {
    console.error('Error fetching articles:', error);
    return (
      <NoDataMessage message="समाचार लोड करने में त्रुटि हुई। कृपया पुनः प्रयास करें।" />
    );
  }
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <HomeContent />
      </Suspense>
    </div>
  );
}
