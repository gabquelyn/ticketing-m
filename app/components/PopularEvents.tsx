import React from "react";
import EventBox from "./EventBox";
const data = [
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
];
export default function PopularEvents() {
  return (
    <div className="grid gap-3 grid-cols-3">
      {data.map((datum, index) => (
        <EventBox
          key={index}
          name={datum.name}
          image={datum.image}
          state={datum.state}
        />
      ))}
    </div>
  );
}
