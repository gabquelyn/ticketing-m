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
      sliden={3}
      mediumWidth={32.3}
      className="h-[15rem] md:h-[20rem] md:w-[32.3%]"
      imgHeight="h-[15rem] md:h-[20rem]"
      eventType="popular"
      events={data}
    />
  );
}
