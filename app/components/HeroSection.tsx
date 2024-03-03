import React from "react";
import Button from "../atoms/Button";
import FindTickets from "./FindTickets";
export default function HeroSection() {
  return (
    <div className="background flex flex-col w-full justify-between py-[4rem]">
      <FindTickets />
      <div className="mx-[15%]">
        <p className="uppercase text-[2rem] font-bold text-white">
          wallows: tell me it's over tour
        </p>
        <button className="text-white font-bold bg-orange rounded-md p-3 px-[4rem]">Find Tickets</button>
      </div>
    </div>
  );
}
