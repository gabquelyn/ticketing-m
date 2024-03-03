"use client";
import React, { useState, useEffect } from "react";
import EventBox from "../components/EventBox";
import { GrNext } from "react-icons/gr";
import clsx from "clsx";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
export default function Slider({
  name,
  sliden,
  className,
  imgHeight,
  eventType,
  events,
  mediumWidth
}: {
  name: string;
  sliden: number;
  className: string;
  imgHeight: string;
  eventType: EventType;
  events: DummyEvent[];
  mediumWidth: number
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const slides = getSlides();
  const [slide, setSlide] = useState(0);
  const incrementSlide = () => {
    if (slide < events.length - slides) {
      setSlide((prev) => prev + 1);
    }
  };

  const decrementSlide = () => {
    if (slide > 0) {
      setSlide((prev) => prev - 1);
    }
  };

  const getMediumWidth = (): number =>
    sliden === 2 ? 49 : sliden === 3 ? 32.3 : sliden === 4 ? 24 : 100;

  const getTranslateValue = (): number => {
    if (windowWidth < 768) {
      return 49;
    } else {
      return getMediumWidth();
    }
  };

  function getSlides(): number {
    if (windowWidth < 768) {
      return 2;
    } else {
      return sliden;
    }
  }
  return (
    <div>
      <p className="head">{name}</p>
      <div className="w-[100%] relative">
        <div className="w-full overflow-hidden">
          <div
            className={clsx("flex gap-[.7rem] box-border transition-all")}
            style={{
              transform: `translateX(calc((-${getTranslateValue()}% - 0.6rem) * ${slide})`,
            }}
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
                // boxWidth={`${sliden === 2 ? 49 : sliden === 3 ? 32.3 : sliden === 4 ? 24 : 100}%`}
              />
            ))}
          </div>
        </div>
        {slide < events.length - slides && (
          <button
            className="absolute top-[50%] md:-right-3 -right-1 shadow-md py-5 px-2 -translate-y-1/2 bg-orange text-white rounded-md"
            onClick={incrementSlide}
          >
            <GrNext />
          </button>
        )}
        {slide > 0 && (
          <button
            className="absolute top-[50%] md:-left-3 -left-1 shadow-md py-5 px-2 -translate-y-1/2 bg-orange text-white rounded-md"
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
