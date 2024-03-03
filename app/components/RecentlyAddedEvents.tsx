"use client";
import React from "react";
import Slider from "../atoms/Slider";
const data = [
  {
    name: "WALLOWS: Tell Me That It's Over Tour 2024",
    image: "/assets/images/image1.png",
    state: "sold out",
  },
  {
    name: "THE WEEKND: After hours Til Dawn World Tour",
    image: "/assets/images/image8.png",
    state: "sold out",
  },
  {
    name: "BLACKPINK: Born Pink World Tour 2024",
    image: "/assets/images/image9.png",
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
export default function RecentlyAddedEvents() {
  return (
    <Slider
      name="recently added"
      translate={25.3}
      sliden={4}
      className="w-[24%]"
      imgHeight="h-[14rem]"
      eventType="recent"
      events={data}
    />
  );
}
