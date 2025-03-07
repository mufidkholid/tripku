import Image from 'next/image'
import React from 'react'

type Props = {
  image: string
  title: string
  description: string
}

const WhyChooseCard = ({ image, title, description }: Props) => {
  return (
    <div>
      {/* image */}
      <Image src={image} alt={title} width={70} height={70} className='mx-auto' />
      {/* content */}
      <h1 className='mt-6 text-center text-foreground font-medium text-2xl'>{title}</h1>
      <p className='mt-2 text-center text-base font-medium text-secondary-foreground'>{description}</p>
    </div>
  )
}

export default WhyChooseCard