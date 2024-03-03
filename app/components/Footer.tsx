import React from "react";
import Hr from "../atoms/Hr";
import LinkMap from "../atoms/LinkMap";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-black text-[#CFD0CE] py-[5rem] font-thin">
      <div className="mx-[15%]">
        <div className="flex justify-between">
          <div>
            <p className="uppercase font-bold text-orange">Logo here</p>
            <p className="my-2 font-bold">Connect</p>
            <div className="flex gap-2">
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

          <div className="foot">
            <p>Helpful Links</p>
            <LinkMap
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
          </div>

          <div className="foot">
            <p>About us</p>
            <LinkMap
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
          </div>

          <div className="foot">
            <p>Our Network</p>
            <LinkMap
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
          </div>

          <div className="foot">
            <p>Our Partners</p>
            <LinkMap links={["Maya", "Paypal", "Allianz", " AWS"]} />
          </div>
        </div>
        <Hr className="my-[2rem] border-orange" />
        <div className="text-[.7rem] flex justify-between">
          <div className="underline flex gap-2">
            <p>Privacy policy</p>
            <div className="h-full w-[1px] bg-[#CFD0CE]"></div>
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
