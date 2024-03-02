import React from "react";
import { cn } from "@/lib/utils";
export default function Input({
  label,
  type,
  placeholder,
}: {
  label: string;
  placeholder?: string;
  type: string;
}) {
  return (
    <div className="w-full">
      <label className="block">{label}</label>
      <input
        placeholder={placeholder}
        type={"text" || type}
        className={cn(
          "p-2 outline-none rounded-md border- border-[1px] border-ash w-full transition-all focus:border-orange"
        )}
      />
    </div>
  );
}
