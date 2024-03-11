import React from "react";

export default function Card({ number }: { number: string }) {
  return (
    <div className="border-grey border-[1px] rounded-lg p-4 flex items-center justify-between w-[100%] md:w-[60%]">
      <div className="flex gap-5 items-center justify-center">
        <input type="radio" className="accent-orange cursor-pointer" />
        <p className="tracking-[.4rem] flex gap-3 italic">
          <span>****</span>
          <span>****</span>
          <span>****</span>
          <span></span>
          {number.slice(number.length - 5, number.length)}
        </p>
      </div>
      <p className="italic text-[.8rem]">Primary card</p>
    </div>
  );
}
