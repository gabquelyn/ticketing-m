import React from "react";
import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-[100svh]">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] shadow-md w-[90vw] md:w-[50vw] rounded-md">
        <div className="h-full w-full relative hidden md:block">
          <Image
            alt="tickets"
            src="/assets/images/signup.png"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="p-[2rem] h-[100svh] md:h-[80svh]">{children}</div>
      </div>
    </div>
  );
}
