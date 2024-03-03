"use client";
import React, { useState } from "react";
import EventBox from "../components/EventBox";
import { GrNext } from "react-icons/gr";
import clsx from "clsx";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
export default function Slider({
  name,
  translate,
  sliden,
  className,
  imgHeight,
  eventType,
  events,
}: {
  name: string;
  translate: number;
  sliden: number;
  className: string;
  imgHeight: string;
  eventType: EventType;
  events: DummyEvent[];
}) {
  const [slide, setSlide] = useState(0);
  const incrementSlide = () => {
    if (slide < events.length - sliden) {
      setSlide((prev) => prev + 1);
    }
  };

  const decrementSlide = () => {
    if (slide > 0) {
      setSlide((prev) => prev - 1);
    }
  };

  return (
    <div>
      <p className="head">{name}</p>
      <div className="w-[100%] relative">
        <div className="w-full overflow-hidden">
          <div
            className={clsx("flex gap-3 transition-all")}
            style={{ transform: `translateX(-${slide * translate}%)` }}
          >
            {events.map((datum, index) => (
              <EventBox
                key={index}
                name={datum.name}
                image={datum.image}
                state={datum.state}
                className={className}
                imgHeight={imgHeight}
                eventType={eventType}
              />
            ))}
          </div>
        </div>
        {slide < events.length - sliden && (
          <button
            className="absolute top-[50%] -right-3 shadow-md py-5 px-2 -translate-y-1/2 bg-orange text-white rounded-md"
            onClick={incrementSlide}
          >
            <GrNext />
          </button>
        )}
        {slide > 0 && (
          <button
            className="absolute top-[50%] -left-3 shadow-md py-5 px-2 -translate-y-1/2 bg-orange text-white rounded-md"
            onClick={decrementSlide}
          >
            <MdOutlineArrowBackIosNew />
          </button>
        )}
      </div>
      <div className="flex justify-end">
        <p
          className={clsx(
            "link font-semibold",
            eventType === "recent" || eventType === "trending" ? "mt-1" : "mt-6"
          )}
        >
          View all
        </p>
      </div>
    </div>
  );
}
