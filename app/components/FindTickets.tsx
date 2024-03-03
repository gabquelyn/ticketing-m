import React from "react";
import Image from "next/image";
export default function FindTickets() {
  return (
    <div className="w-full px-[15%]">
      <div className="bg-black rounded-md border-orange border-[1px] text-[#fafafa] p-2 px-4 w-full flex items-center justify-between ">
        <div className="flex items-center gap-3 ">
          <Image
            src="/assets/icon/ticon.png"
            alt="icon"
            height={18}
            width={18}
            unoptimized
          />
          <p>Current Location</p>
        </div>
        <div className="h-6 w-[1px] bg-[#818181]"></div>
        <div className="flex items-center gap-8">
          <Image
            src="/assets/icon/gicon.png"
            alt="icon"
            height={18}
            width={18}
            unoptimized
          />
          <p>All dates</p>
          <Image
            src="/assets/icon/vicon.png"
            alt="icon"
            height={8}
            width={8}
            unoptimized
          />
        </div>
        <div className="h-6 w-[1px] bg-[#818181]"></div>

        <input
          placeholder="Search by Artist, Event or Venue"
          className="bg-transparent outline-none border-none p-2 w-[16rem]"
        />
        <button className="bg-orange p-2 px-4 gap-2 flex text-white h-full items-center justify-center rounded-md">
        <Image
          src="/assets/icon/bicon.png"
          alt="icon"
          height={20}
          width={20}
          unoptimized
        />
        <p>Find tickets</p>
      </button>
      </div>
      
    </div>
  );
}
