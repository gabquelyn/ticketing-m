import React from "react";
import ProfileSettings from "@/app/components/ProfileSettings";
import PasswordSettings from "@/app/components/PasswordSettings";
export default function Settings() {
  return (
    <div className="">
      <p className="text-[1rem] font-bold mb-8 uppercase">Profile settings</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-0">
        <ProfileSettings />
        <PasswordSettings />
      </div>
    </div>
  );
}
