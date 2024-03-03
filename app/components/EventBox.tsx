import React from "react";
import Image from "next/image";
import clsx from "clsx";
export default function EventBox({
  image,
  name,
  state,
  className,
  eventType,
  imgHeight,
  // boxWidth,
}: {
  image: string;
  name: string;
  state: string;
  className?: string;
  eventType: EventType;
  imgHeight: string;
  // boxWidth: string;
}) {
  return (
    <div
      className={clsx(
        "flex-shrink-0 flex-grow-0",
        className,
        `w-[48.9%]`
      )}
    >
      <div
        className={clsx(
          eventType === "presale" || eventType === "news"
            ? "rounded-tl-[0.5rem] rounded-tr-[0.5rem]"
            : "rounded-[0.5rem]",
          "overflow-hidden w-full relative",
          imgHeight
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
        {eventType === "popular" && (
          <>
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
          </>
        )}
        {eventType === "presale" && (
          <div className="absolute bottom-[5%]">
            <div
              className={clsx(
                "bg-orange w-fit p-3 px-8 text-white capitalize rounded-tr-lg rounded-br-lg shadow-md"
              )}
            >
              ongoing
            </div>
          </div>
        )}
      </div>
      {(eventType === "trending" || eventType === "recent") && (
        <p className="text-[.7rem] font-bold p-1">{name}</p>
      )}
      {eventType === "presale" && (
        <div className="bg-black text-white p-3 rounded-bl-[0.5rem] rounded-br-[0.5rem]">
          <p className="uppercase font-semibold ellipsis">{name}</p>
          <p className="text-[.8rem] uppercase">Lorem ipsum dolor sit.</p>
        </div>
      )}
      {eventType === "news" && (
        <div className="pt-3 rounded-bl-[0.5rem] rounded-br-[0.5rem]">
          <p className="font-semibold uppercase">Lorem ipsum dolor sit.</p>
          <p className="text-[.7rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repudiandae fugiat excepturi dignissimos asperiores voluptatem
            dolore, quod similique?
          </p>
        </div>
      )}
    </div>
  );
}
