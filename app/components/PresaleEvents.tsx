import React from "react";
import Slider from "../atoms/Slider";
const data: DummyEvent[] = [
  {
    name: "ZACK TABUDLO: The Morning Tour 2024",
    image: "/assets/images/image1.png",
    state: "sold out",
  },
  {
    name: "ARCTIC MONKEYS: World Tour Finale",
    image: "/assets/images/image9.png",
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
export default function PreSaleEvents() {
  return (
    <Slider
      name="presale events"
      sliden={3}
      className="md:w-[32.3%]"
      mediumWidth={32.3}
      imgHeight="h-[12rem] md:h-[15rem]"
      eventType="presale"
      events={data}
    />
  );
}
