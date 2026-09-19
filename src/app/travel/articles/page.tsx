import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Travel Articles & Visa Guides",
  description:
    "Practical visa guides and destination tips from SK Travels — Canada visa documents, Southeast Asia weather, Umrah preparation, Russia visa photos, and more.",
};

export default function ArticlesPage() {
  const [latest, ...rest] = articles
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-dark">
        Articles
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-deep sm:text-5xl">
        Visa guides and travel notes worth reading before you book
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/65">
        Practical, specific write-ups on the paperwork, timing, and preparation
        behind each of our packages — written from what we see in real
        applications, not general advice.
      </p>

      {latest && (
        <div className="mt-12">
          <ArticleCard article={latest} featured />
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
