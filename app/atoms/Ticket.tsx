import React from "react";
import Image from "next/image";
export default function Ticket({
  name,
  address,
}: {
  name: string;
  address: string;
}) {
  return (
    <div className="border-[1px] border-grey p-3 w-full rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/icon/tticon.png"
          alt="ticket icon"
          width={30}
          height={30}
          unoptimized
        />
        <div className="capitalize">
          <p>{name}</p>
          <p>{address}</p>
        </div>
      </div>
      <p className="link font-semibold">View ticket</p>
    </div>
  );
}
