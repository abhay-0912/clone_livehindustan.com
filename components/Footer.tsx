import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Live Hindustan</h3>
            <p className="text-gray-400 text-sm">
              भारत की अग्रणी हिंदी न्यूज़ वेबसाइट। ताज़ा खबरें, विश्लेषण और विविध विषयों पर जानकारी।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition">होम</Link></li>
              <li><Link href="/category/latest" className="hover:text-white transition">ताज़ा खबर</Link></li>
              <li><Link href="/category/sports" className="hover:text-white transition">खेल</Link></li>
              <li><Link href="/category/entertainment" className="hover:text-white transition">मनोरंजन</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">श्रेणियाँ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/category/politics" className="hover:text-white transition">राजनीति</Link></li>
              <li><Link href="/category/business" className="hover:text-white transition">व्यापार</Link></li>
              <li><Link href="/category/science" className="hover:text-white transition">विज्ञान</Link></li>
              <li><Link href="/category/education" className="hover:text-white transition">शिक्षा</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">संपर्क करें</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>ईमेल: contact@livehindustan.com</li>
              <li>फ़ोन: +91 1234567890</li>
              <li>पता: नई दिल्ली, भारत</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Live Hindustan. सर्वाधिकार सुरक्षित।</p>
          <p className="mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS | Assignment Project
          </p>
        </div>
      </div>
    </footer>
  );
}
