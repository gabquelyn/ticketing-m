import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularEvents from "./components/PopularEvents";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="mx-[8%] my-[3%]">
        <PopularEvents />
      </div>
    </div>
  );
}
