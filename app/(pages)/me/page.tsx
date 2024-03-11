import React from "react";
import NoEvents from "@/app/atoms/NoEvents";
import Ticket from "@/app/atoms/Ticket";
export default function MyAccount() {
  const data = [
    { name: "DELIGHT PARTY 2023", address: "Sec LB104, Row 24, Seat A3" },
    { name: "DELIGHT PARTY 2023", address: "Sec LB104, Row 24, Seat A3" },
  ];
  return (
    <div className="min-h-[50vh]  text-black">
      <p className="text-[1rem] font-bold mb-8 uppercase">My Tickets</p>

      <NoEvents />
      {/* if no events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {data.map((datum, index) => (
          <Ticket key={index} name={datum.name} address={datum.address} />
        ))}
      </div>
    </div>
  );
}
