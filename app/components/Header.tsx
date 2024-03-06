"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import clsx from "clsx";
import Logo from "../atoms/Logo";
export default function Header() {
  const [slideIn, setSlideIn] = useState(false);
  return (
    <nav className="bg-black text-white py-4 fixed z-20 w-full">
      <div className="md:mx-[15%] mx-[5%] flex items-center justify-between">
        <div className="flex gap-3">
          <button
            className="text-[1.5rem] md:hidden"
            onClick={() => setSlideIn(true)}
          >
            <HiMenuAlt2 />
          </button>
          <Logo />
        </div>
        <ul className="md:flex items-center justify-center gap-6 hidden">
          <li>Concert</li>
          <li>Sport</li>
          <li>Theatre</li>
          <li>Art&Theatre</li>
          <li>Family</li>
        </ul>
        <div className="gap-2 items-center flex">
          <div className="overflow-hidden rounded-[50%] bg-white h-6 w-6 hidden md:block"></div>
          <Image
            src="/assets/icon/uicon.png"
            alt="icon"
            height={20}
            width={20}
            unoptimized
          />
          <div className="h-6 w-[1px] bg-[#818181] hidden md:block"></div>
          <p className="hidden md:block">My Account</p>
        </div>
      </div>

      {/* mobile naviagetion */}
      <div
        className={clsx(
          "fixed transition-all duration-500 bg-[rgba(0,0,0,0.1)] z-50 top-0 h-[100svh] oveflow-hidden w-full text-black",
          slideIn ? "translate-x-0" : "-translate-x-[100%]"
        )}
      >
        <div className="bg-white p-5 h-full w-[95%]">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between mb-[3rem]">
                <Logo />
                <button onClick={() => setSlideIn(false)}>
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col gap-[3rem]">
                <li className="flex items-center justify-between">
                  Concert <FaArrowRight className="text-orange" />
                </li>
                <li className="flex items-center justify-between">
                  Sport
                  <FaArrowRight className="text-orange" />
                </li>
                <li>Theatre</li>
                <li className="flex items-center justify-between">
                  Art&Theartre <FaArrowRight className="text-orange" />
                </li>
                <li>Family</li>
              </ul>
            </div>
            <div className="mb-[2rem]">
              <ul>
                <li className="flex items-center gap-2">
                  <AiOutlineQuestionCircle />
                  Help center
                </li>

                <li className="flex items-center gap-2">
                  <GrAnnounce />
                  Announcement
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineAccountCircle />
                  Account
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
