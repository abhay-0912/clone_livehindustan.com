# Design Document - Live Hindustan News Portal

## 1. Project Overview

### Purpose
Build a responsive news portal inspired by LiveHindustan.com that demonstrates modern web development practices using Next.js.

### Target Audience
- Hindi-speaking news readers
- Mobile and desktop users
- Users across various network speeds

## 2. Design Philosophy

### Principles
1. **Content First**: News content is the hero
2. **Performance**: Fast load times are critical
3. **Accessibility**: Usable by everyone
4. **Responsive**: Works on all devices
5. **SEO Optimized**: Discoverable by search engines

## 3. Wireframes

### Home Page (Desktop)
```
┌──────────────────────────────────────────────────────────┐
│  Logo: Live Hindustan        [Date]           [Menu]     │
│  [ताज़ा खबर][राजनीति][खेल][मनोरंजन][व्यापार][विज्ञान] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │                                                    │ │
│  │         HERO IMAGE                                 │ │
│  │         [Featured Article]                         │ │
│  │                                                    │ │
│  │  Category | Title                                  │ │
│  │  Summary text...                                   │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
├────────────────────────────────┬─────────────────────────┤
│  ताज़ा समाचार                 │  अन्य खबरें           │
│  ┌──────────┐ ┌──────────┐    │  • News title...      │
│  │  Image   │ │  Image   │    │  • News title...      │
│  │  Title   │ │  Title   │    │  • News title...      │
│  │  Summary │ │  Summary │    │  • News title...      │
│  └──────────┘ └──────────┘    │  • News title...      │
│                                │  • News title...      │
│  ┌──────────┐ ┌──────────┐    │                       │
│  │  Image   │ │  Image   │    │                       │
│  │  Title   │ │  Title   │    │                       │
│  │  Summary │ │  Summary │    │                       │
│  └──────────┘ └──────────┘    │                       │
│                                │                       │
│  ┌──────────┐ ┌──────────┐    │                       │
│  │  Image   │ │  Image   │    │                       │
│  │  Title   │ │  Title   │    │                       │
│  │  Summary │ │  Summary │    │                       │
│  └──────────┘ └──────────┘    │                       │
├────────────────────────────────┴─────────────────────────┤
│  और खबरें                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  │  Image   │ │  Image   │ │  Image   │              │
│  │  Title   │ │  Title   │ │  Title   │              │
│  └──────────┘ └──────────┘ └──────────┘              │
├──────────────────────────────────────────────────────────┤
│  Footer: Links | Categories | Contact                   │
└──────────────────────────────────────────────────────────┘
```

### Home Page (Mobile)
```
┌──────────────────┐
│ ☰  Live Hindustan│
├──────────────────┤
│                  │
│  ┌────────────┐  │
│  │   HERO     │  │
│  │   IMAGE    │  │
│  │            │  │
│  │  Title     │  │
│  └────────────┘  │
│                  │
│  ताज़ा समाचार   │
│  ┌────────────┐  │
│  │  Image     │  │
│  │  Title     │  │
│  └────────────┘  │
│                  │
│  ┌────────────┐  │
│  │  Image     │  │
│  │  Title     │  │
│  └────────────┘  │
│                  │
│  अन्य खबरें     │
│  • Title...      │
│  • Title...      │
│  • Title...      │
│                  │
│  ┌────────────┐  │
│  │  Image     │  │
│  │  Title     │  │
│  └────────────┘  │
│                  │
├──────────────────┤
│  Footer          │
└──────────────────┘
```

### Article Page (Desktop)
```
┌──────────────────────────────────────────────────────────┐
│  Logo: Live Hindustan        [Date]           [Menu]     │
│  [ताज़ा खबर][राजनीति][खेल][मनोरंजन][व्यापार][विज्ञान] │
├──────────────────────────────────────────────────────────┤
│  Home > Category > Article                               │
│                                                          │
│  [Category Badge]                                        │
│                                                          │
│  ARTICLE TITLE IN LARGE TEXT                            │
│  Summary text in slightly smaller font                   │
│                                                          │
│  👤 Author  |  📅 Date  |  ⏱️ 5 min read                │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │                                                    │ │
│  │             FEATURED IMAGE                         │ │
│  │                                                    │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Article content paragraph 1...                          │
│  Lorem ipsum dolor sit amet, consectetur adipiscing...   │
│                                                          │
│  Article content paragraph 2...                          │
│  More content here with proper formatting...             │
│                                                          │
│  Article content paragraph 3...                          │
│  Additional content with good readability...             │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│  Share: [Facebook] [Twitter] [WhatsApp]                 │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  संबंधित खबरें                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  │  Image   │ │  Image   │ │  Image   │              │
│  │  Title   │ │  Title   │ │  Title   │              │
│  └──────────┘ └──────────┘ └──────────┘              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  Footer: Links | Categories | Contact                   │
└──────────────────────────────────────────────────────────┘
```

## 4. Layout Decisions

### Why This Structure?

#### Hero Section
- **Purpose**: Immediate engagement with top story
- **Size**: Large (400-500px height) for impact
- **Content**: Featured article with image overlay
- **Rationale**: Users expect most important news first

#### Two-Column Layout (Desktop)
- **Main Content (2/3)**: Primary news grid
- **Sidebar (1/3)**: Quick links to other news
- **Rationale**: 
  - Familiar pattern for news sites
  - Maximizes content visibility
  - Sidebar keeps users engaged

#### Card-Based Design
- **Visual Hierarchy**: Image → Title → Summary → Meta
- **Consistency**: Same card style across site
- **Variants**: Three versions for different contexts
- **Rationale**: 
  - Easy to scan
  - Mobile-friendly
  - Reusable components

### Top Story Highlighting

**Methods Used:**
1. **Hero Section**: Full-width featured article
2. **Size**: Larger images and text
3. **Position**: Top of page (F-pattern reading)
4. **Visual Weight**: Gradient overlay, bold text
5. **isFeatured Flag**: Data-driven selection

### Column Choices

**Desktop (>1024px):**
- Hero: 1 column (full width)
- Main: 2 columns (grid)
- Sidebar: 1 column (sticky)
- Footer articles: 3 columns

**Tablet (768px-1024px):**
- Hero: 1 column
- Main: 2 columns
- Sidebar: Full width below main
- Footer: 2-3 columns

**Mobile (<768px):**
- All: 1 column (stacked)
- Priority: Content readability

**Rationale:**
- Cognitive load: 2-3 items scannable at once
- White space: Prevents overwhelming users
- Performance: Fewer columns = faster rendering on mobile

## 5. Data Fetching Strategy

### ISR (Incremental Static Regeneration) - Our Choice

#### Why ISR?

**Comparison Matrix:**

| Feature | SSR | SSG | ISR | CSR |
|---------|-----|-----|-----|-----|
| Speed | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| SEO | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Freshness | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Scalability | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Cost | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Decision: ISR**

#### Implementation

```typescript
// Home Page
export const revalidate = 60; // 1 minute

// Article Pages
export const revalidate = 300; // 5 minutes

// Category Pages
export const revalidate = 60; // 1 minute
```

#### Rationale

1. **News Context**: 
   - Not real-time critical (acceptable 1-5 min delay)
   - High traffic expected
   - Content changes frequently

2. **Performance Benefits**:
   - First load: Pre-rendered HTML
   - Subsequent: Served from cache
   - Background revalidation doesn't block users

3. **SEO Benefits**:
   - Fully static HTML for crawlers
   - Fast Core Web Vitals
   - Better indexing

4. **Scalability**:
   - Handles traffic spikes
   - CDN-friendly
   - Reduced server load

#### Tradeoffs Accepted

✅ **Pros:**
- Lightning fast page loads
- Excellent SEO
- Cost-effective at scale
- Automatic caching

❌ **Cons:**
- Slight content delay (60-300s)
- More complex than pure SSR
- Requires understanding of revalidation

**Mitigation:**
- For breaking news: Could add manual revalidation API
- For live updates: Could add WebSocket layer
- For user-specific: Could use CSR for personalization

## 6. Component Architecture

### Component Hierarchy

```
App Layout
├── Navbar (Client Component)
│   ├── Logo
│   ├── Navigation Links
│   └── Mobile Menu Toggle
│
├── Page Content (Server Component)
│   ├── Hero (Server Component)
│   │   └── Image + Text Overlay
│   │
│   ├── NewsCard (Server Component)
│   │   ├── Image
│   │   ├── Category Badge
│   │   ├── Title
│   │   ├── Summary
│   │   └── Metadata
│   │
│   ├── LoadingSpinner
│   ├── ErrorMessage
│   └── NoDataMessage
│
└── Footer (Server Component)
    ├── About
    ├── Quick Links
    ├── Categories
    └── Contact
```

### Component Decisions

**Server Components (Default):**
- Hero, NewsCard, Footer
- Rationale: Static content, better performance

**Client Components:**
- Navbar (interactive menu)
- Rationale: User interactions require JavaScript

## 7. Data Model

### Article Interface

```typescript
interface Article {
  id: string;           // Unique identifier
  title: string;        // Article headline
  summary: string;      // Short description
  content: string;      // Full article text
  image?: string;       // Optional image URL
  category: string;     // News category
  author: string;       // Author name
  publishedAt: string;  // ISO date string
  readTime: number;     // Minutes to read
  isFeatured?: boolean; // Featured flag
}
```

### Why This Structure?

1. **id**: Required for routing and keys
2. **title**: SEO critical, displayed prominently
3. **summary**: Social shares, previews
4. **content**: Full article body
5. **image**: Optional - handles edge case of missing images
6. **category**: Enables filtering/navigation
7. **author**: Attribution and credibility
8. **publishedAt**: Sorting and display
9. **readTime**: User experience (set expectations)
10. **isFeatured**: Business logic for highlighting

## 8. Color Palette & Typography

### Colors

```css
Primary Red:    #DC2626 (red-600)
Hover Red:      #B91C1C (red-700)
Background:     #F9FAFB (gray-50)
Card BG:        #FFFFFF (white)
Text Primary:   #111827 (gray-900)
Text Secondary: #6B7280 (gray-500)
Border:         #E5E7EB (gray-200)
```

**Rationale:**
- Red: Brand association with LiveHindustan
- Gray tones: Professional, readable
- High contrast: Accessibility (WCAG AA)

### Typography

```css
Headings: font-bold, leading-tight
Body:     font-normal, leading-relaxed
Links:    hover:text-red-600 transition

Sizes:
- H1: text-3xl md:text-4xl
- H2: text-2xl md:text-3xl
- Body: text-base (16px)
- Small: text-sm (14px)
```

## 9. Responsive Breakpoints

### Tailwind Breakpoints Used

```css
sm:  640px  (Small tablets)
md:  768px  (Tablets)
lg:  1024px (Desktops)
xl:  1280px (Large desktops)
```

### Key Responsive Changes

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Nav | Hamburger | Full | Full |
| Hero | 400px | 450px | 500px |
| Grid | 1 col | 2 cols | 2-3 cols |
| Sidebar | Below | Below | Sticky right |
| Cards | Stack | Grid 2 | Grid 3 |
| Padding | 4 | 6 | 8 |

## 10. Accessibility

### Implemented Features

✅ Semantic HTML (header, nav, main, article, footer)
✅ Alt text on images
✅ ARIA labels on interactive elements
✅ Keyboard navigation support
✅ Focus states on links/buttons
✅ Color contrast (WCAG AA)
✅ Responsive text sizes

### Future Enhancements

- Screen reader testing
- Skip to content link
- Focus trapping in mobile menu
- ARIA live regions for updates

## 11. SEO Strategy

### On-Page SEO

1. **Meta Tags**: Title, description, keywords
2. **OpenGraph**: Social sharing optimization
3. **Structured Data**: Ready for Article schema
4. **Semantic HTML**: Proper heading hierarchy
5. **Image Alt Text**: All images described
6. **Clean URLs**: `/article/1`, `/category/sports`

### Technical SEO

1. **Fast Load Times**: ISR + Image optimization
2. **Mobile-First**: Responsive design
3. **Sitemap**: Auto-generated by Next.js
4. **robots.txt**: Crawler guidance

## 12. Performance Optimizations

### Implemented

1. **Next.js Image**: Automatic optimization
2. **Code Splitting**: Automatic with Next.js App Router
3. **ISR**: Pre-rendered pages
4. **CSS Purging**: Tailwind removes unused styles
5. **Font Optimization**: Next.js font optimization
6. **Lazy Loading**: Images below fold

### Metrics Goals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **TTI**: < 3.5s (Time to Interactive)

## 13. Design Evolution

### Initial Concept
Simple blog layout with list of articles

### Current Design
Full-featured news portal with:
- Hero section for featured content
- Multiple card variants
- Category filtering
- Responsive navigation
- Comprehensive error handling

### Future Vision
- Advanced filtering
- User preferences
- Dark mode
- Personalized feeds
- Push notifications

---

**Design Document Version 1.0**
**Last Updated: November 29, 2025**
