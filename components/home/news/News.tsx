import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* section heading */}
      <SectionHeading heading="Travel News for you" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard image="/recomendation/n1.jpg" title="Top 10 place to visit in Australia" date="22 May 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <NewsCard image="/recomendation/n2.jpg" title="Top 10 place to visit in Germany" date="10 June 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <NewsCard image="/recomendation/n3.jpg" title="Top 10 place to visit in France" date="09 June 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <NewsCard image="/recomendation/n4.jpg" title="Top 10 place to visit in Italy" date="08 August 2025" />
        </div>
      </div>
    </div>
  );
};

export default News;
