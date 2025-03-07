"use client"

import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'
import WhyChoose from './whychoose/WhyChoose'
import Review from './reviews/Review'
import News from './news/News'
import NewsLatter from './news-latter/NewsLatter'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS();
  },[])

  return (
    <div className='overflow:hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewsLatter />
    </div>
  )
}

export default Home