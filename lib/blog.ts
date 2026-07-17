import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string
  datePublished: string
  ogImage: string
  cardImage: string
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const slug = d.name
      const source = fs.readFileSync(path.join(CONTENT_DIR, slug, 'post.mdx'), 'utf8')
      const { data } = matter(source)
      return { slug, ...data } as PostMeta
    })
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const source = fs.readFileSync(path.join(CONTENT_DIR, slug, 'post.mdx'), 'utf8')
  const { data, content } = matter(source)
  return { meta: { slug, ...data } as PostMeta, content }
}
