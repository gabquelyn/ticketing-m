import React from "react";
import Image from "next/image";
import Button from "./Button";
export default function NoEvents() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-[3rem]">
      <Image
        src="/assets/icon/tticon.png"
        alt="ticket icon"
        width={50}
        height={50}
        unoptimized
      />
      <p className="font-semibold">No upcoming events</p>
      <p>All your ticket orders will automatically appear here</p>
      <Button cta="Browse events" />
    </div>
  );
}
