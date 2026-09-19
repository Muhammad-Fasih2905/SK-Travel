import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { articles, getArticle } from "@/data/articles";
import { unsplash } from "@/data/images";
import { ArticleCard } from "@/components/ArticleCard";
import { site } from "@/data/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/travel/articles/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [unsplash(article.coverPhoto, { w: 1200, h: 630 })],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [unsplash(article.coverPhoto, { w: 1200, h: 630 })],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [unsplash(article.coverPhoto, { w: 1200, h: 630 })],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: site.travelName,
    },
    publisher: {
      "@type": "Organization",
      name: site.travelName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sk-associates.example.com/travel/articles/${article.slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-deep/10 bg-deep-dark text-linen">
        <div className="absolute inset-0">
          <Image
            src={unsplash(article.coverPhoto, { w: 1920, h: 900 })}
            alt={article.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-deep-dark/85 to-deep-dark/50" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            href="/travel/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-linen/70 hover:text-linen"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            {article.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-linen/65">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" strokeWidth={1.75} />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" strokeWidth={1.75} />
              {article.readingTime}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="space-y-5">
          {article.content.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="pt-4 font-display text-2xl font-semibold text-deep"
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-[16px] leading-relaxed text-ink/75">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[16px] leading-relaxed text-ink/75">
                {section.text}
              </p>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-amber/15 p-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-deep">
              Have a question about this?
            </p>
            <p className="mt-1 text-[15px] text-ink/65">
              Send us your situation on WhatsApp and we&apos;ll give you a direct answer.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-deep px-6 py-3 text-[15px] font-semibold text-linen hover:bg-deep-dark"
          >
            Message us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-deep/10 bg-linen-2">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-2xl font-semibold text-deep">
              More articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
