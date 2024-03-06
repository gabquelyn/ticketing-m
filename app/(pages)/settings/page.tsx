import React from "react";
import NameSettings from "@/app/components/NameSettings";
import EmailSettings from "@/app/components/EmailSettings";
import Hr from "@/app/atoms/Hr";
export default function Settings() {
  return (
    <div className="">
      <p className="text-[1rem] font-semibold mb-8">My Info</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-[2rem]">
          <NameSettings />
          <Hr/>
          <EmailSettings />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
