import React from "react";
import Slider from "../atoms/Slider";
const data: DummyEvent[] = [
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
  {
    name: "ZACK TABUDLO: The Morning Tour 2024",
    image: "/assets/images/image7.png",
    state: "sold out",
  },
];
export default function PopularEvents() {
  return (
    <Slider
      name="popular events"
      translate={33.6}
      sliden={3}
      className="w-[32.3%] h-[20rem]"
      imgHeight="h-[20rem]"
      eventType="popular"
      events={data}
    />
  );
}
