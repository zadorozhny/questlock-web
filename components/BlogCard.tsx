'use client'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

interface BlogCardProps {
  slug: string
  date: string
  title: string
  excerpt: string
  image: string
}

export default function BlogCard({ slug, date, title, excerpt, image }: BlogCardProps) {
  return (
    <Link className="blog-card" href={`/blog/${slug}`}>
      <CldImage
        className="blog-card-image"
        src={image}
        alt={title}
        width={680}
        height={340}
      />
      <div className="blog-card-content">
        <div className="blog-card-meta">{date}</div>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    </Link>
  )
}
