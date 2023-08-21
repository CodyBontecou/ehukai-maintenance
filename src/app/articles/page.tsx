import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Article, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.attributes.slug}`}>
          {article.attributes.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.attributes.publishedAt}
          className="md:hidden"
          decorate
        >
          {formatDate(article.attributes.publishedAt)}
        </Card.Eyebrow>
        <Card.Description>{article.attributes.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.attributes.publishedAt}
        className="hidden mt-1 md:block"
      >
        {formatDate(article.attributes.publishedAt)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col space-y-16 max-w-3xl">
          {articles.map((article) => (
            <Article key={article.attributes.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
