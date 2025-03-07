import SearchBox from "@/components/helper/SearchBox";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full bg-full h-full bg-gray-800 opacity-70"></div>
      {/* vido */}
      <video src="/images/hero1.mp4" autoPlay loop muted preload="metadata" className="w-full h-full object-cover"></video>
      {/* text content */}
      <div className="absolute w-full h-full z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-secondary uppercase font-bold"> Nikmati Keindahan Alam</h1>
            <p className="md:text-base text-center text-lg text-secondary font-normal [word-spacing:3px]">Dapatkan harga terbaik untuk Rp 2.000.000+ properti di seluruh dunia.</p>
          </div>
          {/* search box */}
          <SearchBox />
          <Button className="rounded h-10 px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-red-400 text-secondary hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-secondary opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold">Cari...</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
