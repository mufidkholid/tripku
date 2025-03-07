import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

function Review() {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-gradient-to-r from-primary to-red-400">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <h1 className="text-2xl text-secondary font-semibold">Apa Kata Pelanggan Kami?</h1>
          <p className="mt-6 text-secondary text-base">Kami bangga memberikan layanan terbaik kepada pelanggan kami. Berikut adalah beberapa pengalaman mereka setelah menggunakan layanan kami.</p>
          {/* reting */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-secondary">4.88</p>
              <p className="text-secondary text-2xl mb-2">Rating Keseluruhan</p>
              <div className="flex items-center">
                <FaStar className="text-secondary text-xl" />
                <FaStar className="text-secondary text-xl" />
                <FaStar className="text-secondary text-xl" />
                <FaStar className="text-secondary text-xl" />
                <FaStar className="text-secondary text-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
}

export default Review