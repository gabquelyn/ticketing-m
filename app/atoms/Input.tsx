"use client";
import { PiEyeSlashThin, PiEye } from "react-icons/pi";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
export default function Input({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  toggle,
  onToggle,
}: {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  name: string;
  onChange: InputHandler;
  toggle?: boolean;
  onToggle?: () => void;
}) {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [prev, setPrev] = useState("")
  const warn = isTouched && !value;
  useEffect(() => {
    setPrev(type)
  }, []);

  return (
    <div className="w-full">
      <label className="block">{label}</label>
      <div className="relative">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onBlur={() => {
            setIsTouched((prev) => !prev);
          }}
          onChange={onChange}
          className={cn(
            "p-2 outline-none rounded-md border-ash border-[1px] w-full transition-all focus:border-orange"
          )}
        />
        {prev == "password" && (
          <button
            className="absolute border-l-[1px] border-ash right-0 top-[50%] -translate-y-1/2 px-3 h-full"
            onClick={onToggle}
          >
            {toggle ? <PiEyeSlashThin /> : <PiEye />}
          </button>
        )}
      </div>
      {warn && <p className="link text-[.7rem] zoo ">{name} is required</p>}
    </div>
  );
}
