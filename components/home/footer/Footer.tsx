import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Perusahaan</h1>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Tentang Kami</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Karier</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Blog</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Kartu Hadiah</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Majalah</p>
        </div>
        {/* 2 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Dukungan</h1>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Kontak</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Pemberitahuan Hukum</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Kebijakan Privasi</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Syarat & Ketentuan</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Peta Situs</p>
        </div>
        {/* 3 */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Layanan Lainnya</h1>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Sewa Mobil</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Aktivitas</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Daftar Tur</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Pencari Penerbangan</p>
          <p className="text-secondary-foreground font-medium cursor-pointer text-sm hover:text-primary">Agen Perjalanan</p>
        </div>
        {/* 4 */}
        <div>
          <h1 className="text-lg font-bold">Hubungi Kami</h1>
          <div className="mt-6">
            <h1 className="text-sm text-secondary-foreground">Telepon</h1>
            <h1 className="text-base font-bold">+62 812 345 678</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-secondary-foreground">Email</h1>
            <h1 className="text-base font-bold">tripku@gmail.com</h1>
          </div>
        </div>
      </div>
      {/* Bagian Bawah */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="">© 2025 Tripku. Semua hak dilindungi.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Sosial :</span>
          <Link href="#" className="text-secondary-foreground hover:text-primary">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-secondary-foreground hover:text-primary">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-secondary-foreground hover:text-primary">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer