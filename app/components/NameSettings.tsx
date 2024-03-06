"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
export default function NameSettings() {
  const [values, setValues] = useState<Names>({
    firstname: "",
    lastname: "",
  });
  const inputChangeHandelr: InputHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-2 font-semibold">Name</p>

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
      <Button cta="Update names" className="p-2" />
    </div>
  );
}
