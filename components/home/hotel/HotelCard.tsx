import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* add to wishlist */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-secondary rounded-full text-black flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3" />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* image */}
        <Image src={hotel.image} alt={hotel.name} width={500} height={500} className="overflow-hiddenw-full h-full transition-all duration-300 object-cover group-hover:scale-110" />
      </div>
      {/* content */}
      <div>
        <h1 className="mt-4 text-lg font-semibold text-primary hover:text-black cursor-pointer transition-all duration-200 ">{hotel.name}</h1>
        <p className="text-sm text-secondary-foreground mt-3 font-medium mb-6">{hotel.location}</p>
        {/* ratings */}
        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-gradient-to-r from-primary to-red-400 rounded-md font-bold text-secondary text-xs">{hotel.rating}</div>
          <p className="text-sm font-bold text-secondary-foreground ml-2">{hotel.reviews} ulasan</p>
        </div>
        {/* price */}
        <p className="mt-3 text-secondary-foreground text-lg font-medium">
          Dimulai dari <span className="text-primary font-bold">{hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
