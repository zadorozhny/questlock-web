import Image from 'next/image'

interface BlogImageProps {
  src: string
  alt: string
  priority?: boolean
}

const CLOUD = 'https://res.cloudinary.com/y59p8mph/image/upload/f_auto,q_auto'

export default function BlogImage({ src, alt, priority }: BlogImageProps) {
  return (
    <Image
      className="blog-post-image"
      src={`${CLOUD}/${src}`}
      alt={alt}
      width={1536}
      height={1024}
      priority={priority}
    />
  )
}
