import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips and ideas for calmer screen time at home.',
  alternates: { canonical: 'https://joinlilypad.com/blog/' },
}

export default function Blog() {
  const posts = getAllPosts()
  return (
    <>
      <PageNav />
      <main className="blog-index container">
        <h1>Blog</h1>
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            image={post.cardImage}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}
