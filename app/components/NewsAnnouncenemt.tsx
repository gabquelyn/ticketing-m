"use client";
import React from "react";
import Slider from "../atoms/Slider";
const data = [
  {
    name: "WALLOWS: Tell Me That It's Over Tour 2024",
    image: "/assets/images/r1.png",
    state: "sold out",
  },
  {
    name: "THE WEEKND: After hours Til Dawn World Tour",
    image: "/assets/images/r2.png",
    state: "sold out",
  },
  {
    name: "BLACKPINK: Born Pink World Tour 2024",
    image: "/assets/images/r3.png",
    state: "sold out",
  },
  {
    name: "ARCTIC MONKEYS: World Tour Finale",
    image: "/assets/images/image5.png",
    state: "sold out",
  },
  {
    name: "POST MALONE: If Y'all Weren't Here I'd Be Crying World Tour",
    image: "/assets/images/image6.png",
    state: "sold out",
  },
  {
    name: "POST MALONE: If Y'all Weren't Here I'd Be Crying World Tour",
    image: "/assets/images/image6.png",
    state: "sold out",
  },
];
export default function NewsAnnouncement() {
  return (
    <Slider
      name="news/announcement"
      sliden={3}
      className="md:w-[32.3%]"
      mediumWidth={32.3}
      imgHeight="h-[12rem]"
      eventType="news"
      events={data}
    />
  );
}
