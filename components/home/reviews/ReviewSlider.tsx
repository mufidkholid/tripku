"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {EffectCards} from "swiper/modules"
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]">
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="bg-secondary rounded-3xl block">
              <div className="w-[80%] mx-auto mt-16">
                {/* Review Text */}
                <p className="text-xs sm:text-sm md:text-base font-semibold">{data.review}</p>
                {/* icon */}
                <div className="flex items-center mt-4">
                  <FaStar className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
                  <FaStar className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
                  <FaStar className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
                  <FaStar className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
                  <FaStar className="text-red-400 md:w-6 md:h-6 w-3 h-3" />
                </div>
                {/* user profile */}
                <div className="mt-10">
                  <div className="flex items-center space-x-4">
                    <Image src={data.image} alt={data.name} width={60} height={60} className="rounded-full" />
                    <div>
                      <p className="text-sm font-semibold sm:text-lg">{data.name}</p>
                      <p className="text-xs sm:text-base">{data.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ReviewSlider