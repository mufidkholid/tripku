import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* section heading */}
        <SectionHeading heading="Menelusuri Tempat Wisata Terpopuler" />
        <p className="w-[80%] mx-auto mt-2 text-secondary-foreground sm:text-base text-sm font-medium">Temukan tempat wisata terbaik di seluruh dunia dan nikmati pengalaman perjalanan yang tak terlupakan.</p>
      
      {/* section content */}
      <div className="mt-12 w-[80%] mx-auto">
        {/* slider */}
        <DestinationSlider />
      </div>
    </div>
  );
}

export default Destination