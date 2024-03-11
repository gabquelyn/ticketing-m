"use client";
import React from "react";
import { PiCaretUpBold } from "react-icons/pi";
import clsx from "clsx";
import Hr from "./Hr";
export default function Foot({
  onDrop,
  value,
  position,
  element,
  faq,
  name,
}: {
  onDrop: (val: number) => void;
  value: number;
  position: number;
  element: React.ReactNode;
  name: string;
  faq?: boolean;
}) {
  return (
    <div className="foot">
      <p className="flex items-center justify-between font-bold">
        {name}
        <span
          className={clsx(
            "transition-all duration-200 cursor-pointer block", !faq && "md:hidden",
            value === position && `rotate-[180deg]`
          )}
          onClick={() => onDrop(position)}
        >
          <PiCaretUpBold />
        </span>
      </p>
      <Hr className={clsx("block", !faq && "md:hidden")} />
      <div
        className={clsx(
          "max-h-0  overflow-hidden my-2 transition-all",
          !faq && "md:max-h-fit",
          value === position && "max-h-fit"
        )}
      >
        {element}
      </div>
    </div>
  );
}
