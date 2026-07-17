import fs from 'fs'
import path from 'path'
import type { CarouselSlide } from '@/components/CarouselBuilder'

export interface CarouselData {
  slides: CarouselSlide[]
  caption: string
}

export function getCarousel(slug: string): CarouselData | null {
  if (process.env.NODE_ENV !== 'development') return null
  const file = path.join(process.cwd(), 'content/blog', slug, 'carousel.json')
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8')) as CarouselData
}
