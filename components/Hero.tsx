import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/article';

interface HeroProps {
  article: Article;
}

export default function Hero({ article }: HeroProps) {
  if (!article) return null;

  return (
    <Link href={`/article/${article.id}`} className="block group">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded shadow-lg">
        <Image
          src={article.image || '/placeholder.jpg'}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#c8102e] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
              {article.category}
            </span>
            <span className="text-sm opacity-90">
              {new Date(article.publishedAt).toLocaleDateString('hi-IN')}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 line-clamp-2 group-hover:text-red-300 transition leading-tight drop-shadow-lg">
            {article.title}
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl line-clamp-2 leading-relaxed drop-shadow-md">
            {article.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
