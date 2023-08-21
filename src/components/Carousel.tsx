'use client'

import { Slide } from 'react-slideshow-image'
import { type Block } from '@/lib/articles'
import { baseUrl } from '@/lib/consts'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}

export function Carousel({ block }: { block: Block }) {
  return (
    <Slide
      duration={2000}
      transitionDuration={500}
      arrows={false}
      autoplay={true}
    >
      {/* @ts-ignore */}
      {block.files?.data.map((file, index) => (
        <div key={index}>
          <div
            style={{
              ...divStyle,
              backgroundImage: `url(${baseUrl}${file.attributes.url})`,
            }}
          ></div>
        </div>
      ))}
    </Slide>
  )
}
