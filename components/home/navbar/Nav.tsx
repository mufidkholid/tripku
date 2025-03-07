"use client";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={` ${navBg ? "bg-gradient-to-r from-primary to-red-400 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center flex-col">
            <FaPlaneDeparture className="text-secondary w-6 h-6" />
          </div>
          <h1 className="text-xl md:text-2xl text-secondary uppercase font-bold">Tripku</h1>
        </div>
        {/* NavLink */}
        <div className="hidden lg:flex item-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id} className="text-primary hover:text-primary/80">
                <p className='relative text-secondary font-medium text-base w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex item-center space-x-4">
          <Button className="md:px-10 md:py-2.5 px-8 py-2 text-base">Booking</Button>
          {/* burger */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursore-pointer text-primary lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
