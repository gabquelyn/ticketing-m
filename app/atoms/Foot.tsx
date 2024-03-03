"use client";
import React from "react";
import { PiCaretUpBold } from "react-icons/pi";
import clsx from "clsx";
import Hr from "./Hr";
import LinkMap from "./LinkMap";
export default function Foot({
  onDrop,
  value,
  position,
  links,
  name
}: {
  onDrop: (val: number) => void;
  value: number;
  position: number;
  links: string[];
  name: string
}) {
  return (
    <div className="foot">
      <p
        className="flex items-center justify-between"
      >
        {name}
        <span
          className={clsx(
            "transition-all cursor-pointer block md:hidden",
            value === position && `rotate-[180deg]`
          )}
          onClick={() => onDrop(position)}
        >
          <PiCaretUpBold />
        </span>
      </p>
      <Hr className="block md:hidden"/>
      <div
        className={clsx(
          "max-h-0 md:max-h-fit overflow-hidden my-2 transition-all",
          value === position && "max-h-fit"
        )}
      >
        <LinkMap links={links} />
      </div>
    </div>
  );
}
