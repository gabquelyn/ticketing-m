"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
export default function EmailSettings() {
  const [values, setValues] = useState({
    email: "",
  });
  return (
    <div className="flex flex-col gap-3">
        <p className="mb-2 font-semibold">Email address</p>
      <Input
        label="Email"
        type="email"
        placeholder=""
        value={values.email}
        name="email"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Button cta="Update email" className="p-2" />
    </div>
  );
}
