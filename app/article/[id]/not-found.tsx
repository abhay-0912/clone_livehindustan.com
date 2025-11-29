import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-[#c8102e] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          समाचार नहीं मिला
        </h2>
        <p className="text-gray-600 mb-8">
          क्षमा करें, आप जिस समाचार की तलाश कर रहे हैं वह उपलब्ध नहीं है।
        </p>
        <Link
          href="/"
          className="inline-block bg-[#c8102e] text-white px-8 py-3 font-semibold hover:bg-red-800 transition"
        >
          होमपेज पर वापस जाएं
        </Link>
      </div>
    </div>
  );
}
