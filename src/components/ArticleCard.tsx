import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { unsplash } from "@/data/images";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      href={`/travel/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-deep/10 bg-white/70 transition-all hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_18px_40px_-24px_rgba(15,61,62,0.35)]"
    >
      <div className={`relative w-full overflow-hidden bg-linen-2 ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image
          src={unsplash(article.coverPhoto, { w: featured ? 1200 : 800, h: featured ? 675 : 500 })}
          alt={article.coverAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-deep-dark/80 px-3 py-1 text-xs font-semibold text-linen backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col justify-between ${featured ? "p-7" : "p-6"}`}>
        <div>
          <h3 className={`font-display font-semibold text-deep ${featured ? "text-2xl" : "text-lg"}`}>
            {article.title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{article.excerpt}</p>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-deep/10 pt-4 text-xs text-ink/50">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
            {article.readingTime}
          </span>
          <span className="flex items-center gap-1 font-semibold text-coral">
            Read
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
