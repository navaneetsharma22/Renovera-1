import { cn } from "@/lib/utils";
import { ArticleCard } from "./ArticleCard";
import { articles } from "./journalData";

export function ArticleGrid({ className }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", className)}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
