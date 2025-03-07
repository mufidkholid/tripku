import SectionHeading from '@/components/helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      {/* section heading */}
      <SectionHeading heading="Rekomendasi Hotel" />
      <p className="w-[80%] mx-auto mt-2 text-secondary-foreground sm:text-base text-sm font-medium">Dapatkan hotel terbaik dengan fasilitas lengkap dan harga terjangkau.</p>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mt-16">
        {/* Hotel Card */}
        {hotelsData.map((data, i) => {
          return (
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 100}`} key={data.id}>
              <HotelCard hotel={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotel