import React from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export default function Header() {
  return (
    <nav className="bg-black text-white py-4 fixed z-20 w-full">
      <div className="md:mx-[15%] mx-[5%] flex items-center justify-between">
        <p className="uppercase font-bold text-orange">Logo here</p>
        <ul className="md:flex items-center justify-center gap-6 hidden">
          <li>Concert</li>
          <li>Sport</li>
          <li>Theatre</li>
          <li>Art&Theatre</li>
          <li>Family</li>
        </ul>
        <div className="gap-2 items-center hidden md:flex">
          <div className="overflow-hidden rounded-[50%] bg-white h-6 w-6"></div>
          <Image
            src="/assets/icon/uicon.png"
            alt="icon"
            height={20}
            width={20}
            unoptimized
          />
          <div className="h-6 w-[1px] bg-[#818181]"></div>
          <p>My Account</p>
        </div>
        <div className="md:hidden text-[1rem]">
          <p>
            <HiMenuAlt3 />
          </p>
        </div>
      </div>
    </nav>
  );
}
