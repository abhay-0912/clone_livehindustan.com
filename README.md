# Live Hindustan - News Portal

## Project Overview
A modern, responsive news portal built with Next.js 15, TypeScript, and Tailwind CSS, inspired by the LiveHindustan website. This project demonstrates advanced Next.js features including ISR, dynamic routing, and SEO optimization.

## 🚀 Features

### Core Features
- ✅ Responsive news portal with mobile-first design
- ✅ Hero section with featured articles
- ✅ Multiple news card layouts (default, horizontal, compact)
- ✅ Category-based news filtering
- ✅ Dynamic article pages with related articles
- ✅ Sticky navigation with mobile menu
- ✅ Loading and error states
- ✅ SEO optimization with meta tags

### Next.js Features Used
1. **ISR (Incremental Static Regeneration)**: Chosen for optimal balance between performance and fresh content
   - Home page revalidates every 60 seconds
   - Article pages revalidate every 5 minutes
   - Category pages revalidate every 60 seconds

2. **Dynamic Routing**: `/article/[id]` and `/category/[slug]` routes
   - Pre-rendered at build time with `generateStaticParams`
   - Fallback handling for missing pages

3. **Image Optimization**: Using Next.js `<Image>` component
   - Automatic optimization and lazy loading
   - Responsive image sizing
   - Priority loading for hero images

4. **SEO Features**:
   - Custom metadata for each page
   - OpenGraph tags for social sharing
   - Structured data ready
   - Semantic HTML

## 📁 Project Structure

```
news-portal/
├── app/
│   ├── layout.tsx                 # Root layout with Navbar & Footer
│   ├── page.tsx                   # Home page with ISR
│   ├── article/
│   │   └── [id]/
│   │       ├── page.tsx           # Dynamic article pages
│   │       └── not-found.tsx      # 404 handling
│   └── category/
│       └── [slug]/
│           └── page.tsx           # Category pages
├── components/
│   ├── Navbar.tsx                 # Sticky navigation with mobile menu
│   ├── Hero.tsx                   # Featured article hero section
│   ├── NewsCard.tsx               # Reusable news card (3 variants)
│   ├── Footer.tsx                 # Site footer
│   ├── LoadingSpinner.tsx         # Loading state component
│   ├── ErrorMessage.tsx           # Error state component
│   └── NoDataMessage.tsx          # Empty state component
├── lib/
│   ├── api.ts                     # Data fetching functions
│   ├── mockData.ts                # Mock news articles
│   └── seo.ts                     # SEO helper functions
└── types/
    └── article.ts                 # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Running

```bash
# Navigate to project
cd news-portal

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000

## 🚀 Deployment on Netlify

### Quick Deploy

1. **Push to GitHub** (Already done!)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Visit [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select repository: `abhay-0912/clone_livehindustan.com`
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Done!** Your site will be live at `https://your-site-name.netlify.app`

### Manual Netlify CLI Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Configuration Files Added
- ✅ `netlify.toml` - Netlify build configuration
- ✅ `.nvmrc` - Node version specification
- ✅ `.gitignore` - Updated for Netlify

### Environment Variables (Optional)
If using real APIs in the future, add environment variables in Netlify dashboard:
- Go to Site settings → Environment variables
- Add your API keys


## 🎨 Design Decisions

### Why ISR (Incremental Static Regeneration)?

**Chosen over:**
- ❌ `getServerSideProps`: Too slow, generates pages on every request
- ❌ Pure static with `getStaticProps`: No fresh content without rebuild
- ✅ **ISR**: Perfect balance!

**Benefits:**
1. **Performance**: Pages served instantly from cache
2. **Freshness**: Auto-revalidates in background
3. **Scalability**: Handles traffic spikes gracefully
4. **SEO**: Fully static HTML for crawlers

## 🧪 Testing Scenarios

### Test Cases

1. **Image Fallback Test**
   - Remove image URL from an article
   - Should display placeholder

2. **Empty State Test**
   - Return empty array from API
   - Should show "No news available"

3. **Long Title Test**
   - Add very long title (100+ chars)
   - Should truncate with ellipsis

4. **Category Filter Test**
   - Click different categories
   - Should filter articles correctly

5. **Responsive Test**
   - Resize browser window
   - All layouts should adapt

## 📚 Documentation

- **DESIGN.md**: Comprehensive design document with wireframes, layout decisions, and architecture
- **SUBMISSION.md**: Complete assignment submission with all requirements and AI reflection

## 🤖 AI Usage

This project was built with AI assistance. See `SUBMISSION.md` for detailed breakdown of:
- What AI helped with (70% component boilerplate, 60% styling)
- Where AI was wrong (type safety, image optimization)
- Custom modifications beyond AI suggestions
- Verification methods used

## 📈 Performance Optimizations

- Next.js Image component for automatic optimization
- ISR for pre-rendered pages
- Tailwind CSS purging
- Code splitting (automatic)
- Font optimization

## 📱 Responsive Design

- **Mobile**: < 768px (1 column, hamburger menu)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns with sidebar)

## 🔧 Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Mono
- **Data**: Mock JSON (easily replaceable with real API)
- **Hosting**: Netlify (with Next.js plugin)

## 🌐 Live Demo

**Deployed on Netlify**: [View Live Site](https://your-site-name.netlify.app)

Repository: [GitHub - clone_livehindustan.com](https://github.com/abhay-0912/clone_livehindustan.com)


## 📝 License

This is a student assignment project.

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
