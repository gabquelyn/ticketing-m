"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Error from "../atoms/Error";
import Link from "next/link";
import ByAgreeing from "../atoms/ByAgreeing";
export default function EmailPassword() {
  const [values, setValues] = useState<EmailSignInDetails>({
    email: "",
    password: "",
  }); 
  const [toggle, setToggled] = useState(false)
  const inputChangeHandelr: InputHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="">
      <div className="text-center mb-5">
        <p className="font-bold text-[1rem]">Sign in</p>
        <p className="text-[.8rem]">
          New to ticketing?{" "}
          <Link href = "/signup" className="text-orange font-semibold">signup</Link>
        </p>
      </div>

      {/* <Error error="Lorem ipsum dolor, sit amet consectetur" /> */}
      <div className="flex flex-col gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="Email"
          value={values.email}
          name="email"
          onChange={inputChangeHandelr}
        />
        <Input
          label="Password"
          type={toggle ? "text" : "password"}
          placeholder="password"
          value={values.password}
          name="password"
          onChange={inputChangeHandelr}
          onToggle={() => setToggled(prev => !prev)}
          toggle = {toggle}
        />
        <div className="flex items-center justify-between text-[.8rem]">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-orange text-[1.4rem]" />
            <span>Remember me</span>
          </label>
          <p className="link font-semibold">Forgot password?</p>
        </div>
        <Button cta="Sign in" disabled = {!values.email || !values.password}/>
        <ByAgreeing/>
      </div>
    </div>
  );
}
