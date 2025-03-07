import Image from 'next/image'
import React from 'react'

type Props = {
  image: string
  title: string
  date: string
}
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      {/* image */}
      <div className='h-[300px]'>
        <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-cover rounded-lg' />
      </div>
      {/* context text */}
      <h1 className='mt-6 text-foreground font-semibold text-lg hover:text-primary transition-all duration-200 cursor-pointer'>{title}</h1>
      <p className='text-sm text-secondary-foreground mt-3'>{date}</p>
    </div>
  )
}

export default NewsCard