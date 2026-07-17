'use client'
import { CldImage, type CldImageProps } from 'next-cloudinary'

export default function CldImg(props: CldImageProps) {
  return <CldImage {...props} />
}
