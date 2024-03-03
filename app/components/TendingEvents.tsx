"use client";
import React from "react";
import Slider from "../atoms/Slider";
const data = [
  {
    name: "TAYLOR SWIFT: The Eras Tour 2024 Leg",
    image: "/assets/images/image4.png",
    state: "sold out",
  },
  {
    name: "SZA: SOS Tour",
    image: "/assets/images/image3.png",
    state: "sold out",
  },
  {
    name: "ZACK TABUDLO: The Morning Tour 2024",
    image: "/assets/images/image7.png",
    state: "sold out",
  },
  {
    name: "ARCTIC MONKEYS: World Tour Finale",
    image: "/assets/images/image5.png",
    state: "sold out",
  },
  {
    name: "POST MALONE: If Y’all Weren’t Here I’d Be Crying World Tour",
    image: "/assets/images/image6.png",
    state: "sold out",
  },
  {
    name: "POST MALONE: If Y’all Weren’t Here I’d Be Crying World Tour",
    image: "/assets/images/image6.png",
    state: "sold out",
  },
];
export default function TrendingEvents() {
  return (
    <Slider
      name="trending events"
      sliden={4}
      mediumWidth={24}
      className="md:w-[24%]"
      imgHeight="h-[14rem]"
      eventType="trending"
      events={data}
    />
  );
}
