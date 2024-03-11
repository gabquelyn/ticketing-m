import React from "react";
import Card from "@/app/components/Card";
import { BsCreditCard2Back } from "react-icons/bs";
export default function Billing() {
  return (
    <div>
      <p className="text-[1rem] font-bold mb-8 uppercase">My Cards</p>
      <Card number="45893483948394737" />
      <div className="text-orange flex gap-2 items-center my-7 font-semibold">
        <p>+</p>
        <BsCreditCard2Back className="text-black"/>
        <p>Add new card</p>
      </div>
    </div>
  );
}
