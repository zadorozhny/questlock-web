import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'
import BlogCta from '@/components/BlogCta'
import CarouselBuilder from '@/components/CarouselBuilder'
import BlogImage from '@/components/BlogImage'
import { getAllPosts, getPost } from '@/lib/blog'
import { getCarousel } from '@/lib/carousels'
import { notFound } from 'next/navigation'

type Params = Promise<{ slug: string }>

const components = {
  BlogImage,
  BlogCta,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link href={href ?? '/'} {...props}>{children}</Link>
  ),
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  let meta
  try {
    ;({ meta } = getPost(slug))
  } catch {
    return {}
  }
  const canonical = `https://joinlilypad.com/blog/${slug}/`
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [{ url: meta.ogImage, width: 1536, height: 1024, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params
  let meta, content
  try {
    ;({ meta, content } = getPost(slug))
  } catch {
    notFound()
  }

  const canonical = `https://joinlilypad.com/blog/${slug}/`
  const carousel = getCarousel(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta!.title,
    description: meta!.description,
    image: meta!.ogImage,
    datePublished: meta!.datePublished,
    dateModified: meta!.datePublished,
    author: { '@type': 'Organization', name: 'Lilypad', url: 'https://joinlilypad.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Lilypad',
      logo: { '@type': 'ImageObject', url: 'https://joinlilypad.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogNav />
      <article className="blog-post">
        <div className="blog-post-meta">{meta!.date}</div>
        <h1>{meta!.title}</h1>
        <MDXRemote source={content!} components={components} />
        <BlogCta />
      </article>
      {process.env.NODE_ENV === 'development' && carousel && (
        <CarouselBuilder slides={carousel.slides} caption={carousel.caption} />
      )}
      <Footer />
    </>
  )
}
