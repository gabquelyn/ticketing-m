"use client"
import React, {useState} from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
export default function ProfileSettings() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    country: "",
  });

  const inputChangeHandelr: InputHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-5 md:pr-10">
      <p className="mb-2 font-semibold">Profile details</p>
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
      <Input
        label="Phone number"
        type="tel"
        placeholder=""
        value={values.lastname}
        name="phone"
        onChange={inputChangeHandelr}
      />
      <Input
        label="Country"
        type="text"
        placeholder=""
        value={values.lastname}
        name="country"
        onChange={inputChangeHandelr}
      />
      <Button cta="Update profile" className="p-2" />
    </div>
  );
}
