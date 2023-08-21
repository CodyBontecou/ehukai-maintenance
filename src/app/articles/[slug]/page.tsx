import { ArticleLayout } from '@/components/ArticleLayout'
import { Carousel } from '@/components/Carousel'

import { type Article } from '@/lib/articles'
import { baseUrl } from '@/lib/consts'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default async function Article({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const { data } = await axios.get(
    `${baseUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate=deep`,
  )
  const article: Article = data.data[0]

  return (
    <ArticleLayout article={article}>
      {article.attributes.blocks.map((block) => {
        switch (block.__component) {
          case 'shared.rich-text':
            /* @ts-ignore */
            return <ReactMarkdown>{block.body}</ReactMarkdown>
          case 'shared.media':
            return <img src={`${baseUrl}${block.file?.data.attributes.url}`} />
          case 'shared.quote':
            console.log('quote')
            break
          case 'shared.slider':
            /* @ts-ignore */
            return <Carousel block={block}></Carousel>
          default:
            console.log('defaulted')
        }
      })}
    </ArticleLayout>
  )
}
