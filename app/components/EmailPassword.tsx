import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Error from "../atoms/Error";
export default function EmailPassword() {
  return (
    <div className="">
      <div className="text-center mb-5">
        <p className="font-bold text-[1rem]">Sign up</p>
        <p className="text-[.8rem]">
          New to ticketing?{" "}
          <span className="text-orange font-semibold">signup</span>
        </p>
      </div>
    
      <Error error="Lorem ipsum dolor, sit amet consectetur" />
      <div className="flex flex-col gap-4">
        <Input label="Email Address" type="email" placeholder="Email" />
        <Input label="Password" type="text" placeholder="password" />
        <div className="flex items-center justify-between text-[.8rem]">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-orange text-[1.4rem]" />
            <span>Remember me</span>
          </label>
          <p className="link font-semibold">Forgot password?</p>
        </div>
        <Button cta="Sign in" />
        <p className="text-[.7rem] text-center font-semibold">
          By signing in or creating an account, you agree to{" "}
          <span className="link">Terms of Use</span> and acknowledge our{" "}
          <span className="link">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
