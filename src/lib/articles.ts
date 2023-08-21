import axios from 'axios'
import { baseUrl } from './consts'

export interface Article {
  id: number
  attributes: ArticleAttributes
}

interface ArticleAttributes {
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover?: SharedMedia
  blocks: Block[]
}

export interface Block {
  id: number
  __component:
    | 'shared.rich-text'
    | 'shared.media'
    | 'shared.quote'
    | 'shared.slider'
  title?: string
  body?: string
  file?: SharedMedia
  files?: SharedMedia[]
}

export interface SharedMedia {
  data: ImageData
}

interface ImageData {
  id: number
  attributes: ImageAttributes
}

interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  url: string
}

interface ImageAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat
    large: ImageFormat
    small: ImageFormat
    medium: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

export async function getAllArticles() {
  const { data } = await axios.get(`${baseUrl}/api/articles?populate[0]=blocks`)
  const articles: Article[] = data.data

  return articles.sort(
    (a, z) =>
      +new Date(z.attributes.publishedAt) - +new Date(a.attributes.publishedAt),
  )
}
