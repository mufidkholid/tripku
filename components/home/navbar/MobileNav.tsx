import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-foreground opacity-70 w-full h-screen`}></div>
      {/* navlink */}
      <div className={`text-primary ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-secondary space-y-6 z-[1050]`}>
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-primary w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-primary sm:text-[30px] ">{link.label}</p>
            </Link>
          );
        })}

        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  );
};

export default MobileNav;
