import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Judul Seksi */}
      <SectionHeading heading="Berita Perjalanan untuk Anda" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard image="/recomendation/n1.jpg" title="10 Tempat Terbaik untuk Dikunjungi di Australia" date="22 Mei 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <NewsCard image="/recomendation/n2.jpg" title="10 Tempat Terbaik untuk Dikunjungi di Germany" date="10 Juni 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <NewsCard image="/recomendation/n3.jpg" title="10 Tempat Terbaik untuk Dikunjungi di France" date="09 Juni 2025" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <NewsCard image="/recomendation/n4.jpg" title="10 Tempat Terbaik untuk Dikunjungi di Italy" date="08 Agustus 2025" />
        </div>
      </div>
    </div>
  );
};

export default News;
