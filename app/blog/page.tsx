import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips and ideas for calmer screen time at home.',
  alternates: { canonical: 'https://joinlilypad.com/blog/' },
}

const posts = [
  {
    slug: 'after-school-routine-for-kids',
    date: 'July 16, 2026',
    title: 'After School Routine for Kids: How to Manage Screen Time Without Arguments',
    excerpt:
      'The after-school hours are when screen time battles are most common. Here is a simple daily structure that helps kids transition from school to screen time — without the arguments.',
  },
  {
    slug: 'reduce-screen-time-for-kids',
    date: 'July 15, 2026',
    title: 'How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work',
    excerpt:
      "If you're wondering how to reduce screen time for kids without constant arguments, here are five simple habits that help screen time become a natural part of the day.",
  },
]

export default function Blog() {
  return (
    <>
      <PageNav />
      <main className="blog-index container">
        <h1>Blog</h1>
        {posts.map((post) => (
          <Link key={post.slug} className="blog-card" href={`/blog/${post.slug}`}>
            <div className="blog-card-meta">{post.date}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  )
}
