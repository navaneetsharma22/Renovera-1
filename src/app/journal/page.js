import {
  JournalHero,
  FeaturedArticle,
  TrendingTopics,
  ArticlesGrid,
  PopularArticles,
  NewsletterSection,
  JournalCTA
} from "@/components/journal-page";

export const metadata = {
  title: "Design Journal | Renovera",
  description: "Read expert insights on architecture, luxury home renovation, interior design, construction, and modern living from Renovera.",
};

export default function JournalPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <JournalHero />
      <FeaturedArticle />
      <TrendingTopics />
      
      {/* Search and Filters are embedded within ArticlesGrid to share state */}
      <div id="articles">
        <ArticlesGrid />
      </div>
      
      <PopularArticles />
      <NewsletterSection />
      <JournalCTA />
    </main>
  );
}
