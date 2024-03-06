"use client";
import React, { useState } from "react";
import Hr from "../atoms/Hr";
import Image from "next/image";
import Foot from "../atoms/Foot";
import Logo from "../atoms/Logo";
export default function Footer() {
  const [drop, setDrop] = useState(0);
  const handleDrop = (val: number) => {
    if (drop === val) {
      setDrop(0);
    } else {
      setDrop(val);
    }
  };
  return (
    <div className="bg-black text-[#CFD0CE] py-[5rem] font-thin">
      <div className="mx-[10%] md:mx-[15%] ">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <div className="mb-5 md:mb-0">
            <Logo />
            <p className="my-5 font-bold">Connect</p>
            <div className="flex gap-5 md:justify-center md:gap-2">
              {[
                "/assets/icon/fbicon.png",
                "/assets/icon/inicon.png",
                "/assets/icon/thicon.png",
                "/assets/icon/xicon.png",
                "/assets/icon/tkicon.png",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`image${index}`}
                  width={20}
                  height={20}
                  unoptimized
                />
              ))}
            </div>
          </div>

          <Foot
            onDrop={handleDrop}
            value={drop}
            position={1}
            name="Helpful Links"
            links={[
              "Help/FAQ",
              "Sell",
              "My Account",
              "Contact Us",
              "Gift Cards",
              "Refunds and Exchanges",
              "Do Not Sell",
            ]}
          />
          <Foot
            onDrop={handleDrop}
            value={drop}
            position={2}
            name="About us"
            links={[
              "Live Nation",
              "House of Bluesl",
              "Front gate Tickets",
              "TicketWeb",
              "Universe",
              "NFL",
              "NBA",
            ]}
          />

          <Foot
            onDrop={handleDrop}
            value={drop}
            position={3}
            name="Our Network"
            links={[
              "Who We Are",
              "Blog",
              "Ticketing Truths",
              "Privacy Policy",
              "Ad Choices",
              "Careers",
              "Ticket Your Event",
              "Innovation",
            ]}
          />
          <Foot
            onDrop={handleDrop}
            value={drop}
            position={4}
            name="Our Partners"
            links={["Maya", "Paypal", "Allianz", " AWS"]}
          />
        </div>
        <Hr className="my-[2rem] border-orange hidden md:block" />
        <div className="text-[.7rem] flex flex-col md:flex-row justify-between my-[2rem] md:my-0">
          <div className="underline flex items-center gap-2">
            <p>Privacy policy</p>
            <div className="h-3 w-[1px] bg-[#CFD0CE]"></div>
            <p>Terms of use</p>
          </div>
          <p>
            @{new Date().getFullYear()} Lorem, ipsum dolor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
