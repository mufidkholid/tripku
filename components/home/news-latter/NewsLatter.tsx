import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLatter = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-red-400 pt-16 pb-16 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="w-16 h-16 text-secondary" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-secondary font-semibold mt-10 tracking-widest">Perjalanan Liburan Anda Dimulai di Sini</h1>
      <p className="mt-3 text-secondary text-xs sm:text-sm ">Daftar sekarang dan kami akan mengirimkan penawaran terbaik untuk Anda</p>
      {/* subscription */}
      <div className="w-full">
        <Input type="text" className="px-6 py-3.5 bg-secondary mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none" placeholder="Email" />
        <Button className="bg-primary text-secondary mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg">Berlangganan</Button>
      </div>
    </div>
  );
}

export default NewsLatter