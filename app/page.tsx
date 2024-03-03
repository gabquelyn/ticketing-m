import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularEvents from "./components/PopularEvents";
import TrendingEvents from "./components/TendingEvents";
import RecentlyAddedEvents from "./components/RecentlyAddedEvents";
import PreSaleEvents from "./components/PresaleEvents";
import NewsAnnouncement from "./components/NewsAnnouncenemt";
import Footer from "./components/Footer";
import Hr from "./atoms/Hr";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="mx-[2%] md:mx-[15%] my-[5%] flex flex-col gap-[2rem]">
        <PopularEvents />
        <Hr />
        <TrendingEvents />
        <Hr />
        <RecentlyAddedEvents />
        <Hr />
        <PreSaleEvents />
        <Hr />
        <NewsAnnouncement />
      </div>
      <Footer />
    </div>
  );
}
