import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import { Input } from "../ui/input";
import { FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="bg-secondary rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%] ">
      {/* 1 search input */}
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-primary" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Lokasi</p>
          <Input type="text" placeholder="Lokasi" className="outline-none border-none placeholder:text-grey-800 " />
        </div>
      </div>
      {/* 2 search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-primary" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Tanggal Pergi</p>
          <Input type="date" className="outline-none border-none" />
        </div>
      </div>
      {/* 3 search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-primary" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Tanggal Pulang</p>
          <Input type="date" className="outline-none border-none" />
        </div>
      </div>
      {/* 4 search input */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className="w-6 h-6 text-primary" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Pengunjung</p>
          <p className="text-base font-normal">1 Pengunjung 1 Kamar</p>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
