import React from "react";

import FindTickets from "./FindTickets";
export default function HeroSection() {
  return (
    <div className="background flex flex-col w-full justify-between">
      <FindTickets />
      <div className="md:mx-[15%] mx-[5%] mb-[4rem]">
        <p className="uppercase text-[2rem] font-bold text-white">
          wallows: tell me it&apos;s over tour
        </p>
        <button className="text-white font-bold bg-orange rounded-md p-3 px-[4rem]">Find Tickets</button>
      </div>
    </div>
  );
}
