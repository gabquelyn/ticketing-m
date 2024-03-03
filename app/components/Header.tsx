import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <nav className="bg-black text-white py-4 fixed z-20 w-full">
      <div className="mx-[15%] flex items-center justify-between">
        <p className="uppercase font-bold text-orange">Logo here</p>
        <ul className="flex items-center justify-center gap-6">
          <li>Concert</li>
          <li>Sport</li>
          <li>Theatre</li>
          <li>Art&Theatre</li>
          <li>Family</li>
        </ul>
        <div className="flex gap-2 items-center">
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
      </div>
    </nav>
  );
}
