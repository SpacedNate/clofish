"use client"

import ImageNext from "next/image"
import { useEffect, useState } from "react"

interface Props {
  number: string
}

export default function DimensionImage({ number }: Props) {
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 })

  const url =
    "https://vgrdskrhfywma9wx.public.blob.vercel-storage.com/" + number

  useEffect(() => {
    const img = new Image()
    img.src = url

    img.onload = () => {
      setDimensions({ width: 200, height: 200 / (img.width / img.height) })
    }
  }, [])

  return (
    <ImageNext
      src={url}
      alt={"Box Image"}
      width={dimensions.width}
      height={dimensions.height}
      priority
    />
  )
}
