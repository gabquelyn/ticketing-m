"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
export default function VerifyPhoneNumber({
  nextPage,
  phone,
  phoneChangeHandler,
  agreed,
  setAgreed,
}: {
  nextPage: AnonymousFnc;
  phone: string;
  phoneChangeHandler: InputHandler;
  agreed: boolean;
  setAgreed: InputHandler;
}) {
  const submitNumber = () => {
    //submit number ad next
    nextPage();
  };
  return (
    <div className="zoo">
      <div className="text-center">
        <p className="text-[.7rem]">Step 1 of 2</p>
        <p className="font-bold text-[1rem]">Enter your phone number</p>
      </div>
      <div className="flex flex-col gap-6 my-7">
        <p className="text-[.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet non
          nemo est commodi accusamus impedit quo recusandae
        </p>
        <div>
          <Input
            type="tel"
            label="Phone number"
            value={phone}
            name="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="flex gap-2 items-start text-[.6rem] font-semibold">
          <input
            type="checkbox"
            className="accent-orange text-[1.4rem] cursor-pointer"
            checked={agreed}
            onChange={setAgreed}
          />
          <span>
            I consent to receive notifications about upcoming events and special
            offers via text message. Applies to mobile numbers only.{" "}
            <span className="link">Privacy Policy</span>
          </span>
        </div>
        <Button
          cta="Next"
          onClick={submitNumber}
          disabled={!agreed || phone.length < 11}
        />
      </div>
    </div>
  );
}
