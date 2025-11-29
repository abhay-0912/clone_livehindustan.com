import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/article';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'horizontal' | 'compact';
}

export default function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  const imageUrl = article.image || '/placeholder.jpg';

  if (variant === 'horizontal') {
    return (
      <Link href={`/article/${article.id}`} className="group">
        <div className="flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition">
          <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="128px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-[#c8102e] transition mb-1 text-gray-900">
              {article.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-[#c8102e] font-medium">{article.category}</span>
              <span>•</span>
              <span>{article.readTime} मिनट पढ़ें</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/article/${article.id}`} className="group block">
        <div className="hover:bg-gray-50 p-3 rounded-lg transition">
          <h3 className="font-semibold text-sm line-clamp-3 group-hover:text-[#c8102e] transition mb-2 text-gray-900">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-[#c8102e] font-medium">{article.category}</span>
            <span>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('hi-IN')}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`} className="group block">
      <article className="bg-white rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-[#c8102e] text-white px-3 py-1 text-xs font-bold">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-base md:text-lg font-bold mb-2 line-clamp-3 group-hover:text-[#c8102e] transition leading-snug text-gray-900">
            {article.title}
          </h2>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1 leading-relaxed">
            {article.summary}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{new Date(article.publishedAt).toLocaleDateString('hi-IN')}</span>
              <span>•</span>
              <span>{article.readTime} मिनट</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
