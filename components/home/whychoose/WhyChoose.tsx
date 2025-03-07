import SectionHeading from '@/components/helper/SectionHeading'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* section heading */}
      <SectionHeading heading="Kenapa Memilih Kami" />
      <p className="w-[80%] mx-auto mt-2 text-secondary-foreground sm:text-base text-sm font-medium">Kami menawarkan layanan terbaik dengan harga kompetitif untuk memastikan kepuasan Anda.</p>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* why choose card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="Jaminan Harga Terbaik" description="Dapatkan harga paling kompetitif untuk setiap pemesanan tanpa biaya tersembunyi." />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
          <WhyChooseCard image="/images/c2.svg" title="Pemesanan Mudah & Cepat" description="Proses pemesanan yang sederhana dan cepat untuk kenyamanan perjalanan Anda." />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <WhyChooseCard image="/images/c3.svg" title="Layanan Pelanggan 24/7" description="Tim dukungan kami siap membantu Anda kapan saja, di mana saja, sepanjang hari." />
        </div>
      </div>
    </div>
  );
}

export default WhyChoose