import React from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center py-[4rem]">
        <Image
          src="/assets/images/404.png"
          width={440}
          height={700}
          alt="NOt found image display"
          unoptimized
        />
      </div>
      <Footer/>
    </div>
  );
}
