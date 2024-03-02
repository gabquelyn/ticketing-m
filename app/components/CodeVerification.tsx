import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { MdArrowBackIosNew } from "react-icons/md";
export default function CodeVerification({
  handlePrevious,
  otp,
  otpChange
}: {
  handlePrevious: AnonymousFnc;
  otp: string;
  otpChange: InputHandler
}) {

  return (
    <div className="zoo">
      <div className="text-center">
        <p className="text-[.7rem]">Step 2 of 2</p>
        <p className="font-bold text-[1rem]">Code verification</p>
      </div>
      <div className="flex flex-col gap-6 my-7">
        <p className="text-[.8rem]">
          A one-time code has been sent to *******3758 Enter your code below to
          continue.
        </p>
        <div>
          <Input
            type="text"
            label="One-Time Code"
            value={otp}
            name="otp"
            onChange={otpChange}
          />
          <p className="text-[.8rem]">
            Haven’t received your code?{" "}
            <span className="text-orange">Request a new code.</span>
          </p>
        </div>

        <Button cta="Confirm" />
        <button
          className="text-orange font-bold flex items-center justify-center gap-3"
          onClick={handlePrevious}
        >
          <MdArrowBackIosNew /> Back
        </button>
      </div>
    </div>
  );
}
