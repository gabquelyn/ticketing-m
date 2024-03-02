"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import ByAgreeing from "../atoms/ByAgreeing";
import Link from "next/link";
export default function EmailSignup({ nextPage }: { nextPage: AnonymousFnc }) {
  const [values, setValues] = useState<EmailSignUpDetails>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
    postal: "",
  });
  const [toggle, setToggled] = useState(false);
  const inputChangeHandelr: InputHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitDetails = () => {
    //submit the details and next

    nextPage();
  };

  return (
    <div>
      <div className="text-center mb-5">
        <p className="font-bold text-[1rem]">Sign up</p>
        <p className="text-[.8rem]">
          Already have an account?{" "}
          <Link href="/login" className="text-orange font-semibold">
            sign in
          </Link>
        </p>
      </div>

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
          onToggle={() => setToggled((prev) => !prev)}
          toggle={toggle}
        />
        <div className="flex justify-between gap-4">
          <Input
            label="First name"
            type="text"
            placeholder=""
            value={values.firstname}
            name="firstname"
            onChange={inputChangeHandelr}
          />
          <Input
            label="Last name"
            type="text"
            placeholder=""
            value={values.lastname}
            name="lastname"
            onChange={inputChangeHandelr}
          />
        </div>

        <div className="flex justify-between gap-4">
          <Input
            label="Country"
            type="text"
            placeholder=""
            value={values.country}
            name="country"
            onChange={inputChangeHandelr}
          />
          <Input
            label="Postal code"
            type="text"
            placeholder=""
            value={values.postal}
            name="postal"
            onChange={(e: inputEvent) => {
              if (/^\d+$/.test(e.target.value) || !e.target.value) {
                if (e.target.value.length <= 6)
                  setValues((prev) => ({ ...prev, postal: e.target.value }));
              }
            }}
          />
        </div>
        <Button
          cta="Next"
          disabled={
            !values.email ||
            !values.password ||
            !values.country ||
            !values.firstname ||
            !values.lastname ||
            !values.postal
          }
          onClick={submitDetails}
        />
        <ByAgreeing />
      </div>
    </div>
  );
}
