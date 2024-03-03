import React from "react";
import Image from "next/image";
import clsx from "clsx";
export default function EventBox({
  image,
  name,
  state,
}: {
  image: string;
  name: string;
  state: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[1rem] h-[20rem] relative">
      <Image src={image} alt={name} fill className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]"></div>
      <div className="absolute bottom-[10%]">
        <div
          className={clsx(
            "bg-[#D50000] w-fit p-3 px-8 text-white capitalize rounded-tr-lg rounded-br-lg"
          )}
        >
          {state}
        </div>
        <p className="text-white font-bold p-4">{name}</p>
      </div>
    </div>
  );
}
