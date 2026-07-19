import { notFound } from "next/navigation";
import { 
  getArticleBySlug, 
  getAllArticleSlugs,
  ArticleHero,
  ArticleMetadata,
  TableOfContents,
  ArticleContent,
  ImageGallery,
  KeyTakeaways,
  AuthorProfile,
  ShareSection,
  RelatedArticles
} from "@/components/journal-details";
import { NewsletterSection, JournalCTA } from "@/components/journal-page";

// Statically generate all article routes at build time
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Dynamic metadata generation based on article slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return { title: "Article Not Found | Renovera" };
  }

  return {
    title: `${article.title} | Renovera Design Journal`,
    description: article.excerpt,
  };
}

export default async function JournalDetailsPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-background relative">
      <ArticleHero article={article} />
      <ArticleMetadata article={article} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 relative">
          
          {/* Left Sidebar: Table of Contents */}
          <aside className="lg:w-1/4 xl:w-1/5 shrink-0 relative hidden lg:block">
            <TableOfContents items={article.tableOfContents} />
          </aside>

          {/* Main Content Area */}
          <article className="lg:w-3/4 xl:w-4/5 max-w-[800px] w-full">
            <ArticleContent htmlContent={article.content} />
            <ImageGallery images={article.gallery} />
            <KeyTakeaways takeaways={article.keyTakeaways} />
            <ShareSection articleTitle={article.title} />
            <AuthorProfile author={article.author} />
          </article>
        </div>
      </div>

      <RelatedArticles articles={article.relatedArticles} />
      <NewsletterSection />
      <JournalCTA />
    </main>
  );
}
