"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import { FaTimes } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import Button from "../atoms/Button";
export default function PasswordSettings() {
  const [toggle, setToggled] = useState<PasswordToggled>({
    current: false,
    new: false,
    confirm: false,
  });
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const passwordHandler: InputHandler = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const passwordTogleHandler = (name: "current" | "new" | "confirm") => {
    setToggled((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const returnIcon = (condition: boolean): React.ReactNode => {
    if (condition) {
      return <GiCheckMark className="text-orange" />;
    }
    return <FaTimes className="text-grey" />;
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="mb-2 font-semibold">Password & Security</p>
      <Input
        label="Current Password"
        type={toggle.current ? "text" : "password"}
        placeholder="Password"
        value={password.current}
        name="current"
        onChange={passwordHandler}
        onToggle={() => passwordTogleHandler("current")}
        toggle={toggle.current}
      />
      <Input
        label="New Password"
        type={toggle.new ? "text" : "password"}
        placeholder="Password"
        value={password.new}
        name="new"
        onChange={passwordHandler}
        onToggle={() => passwordTogleHandler("new")}
        toggle={toggle.new}
      />
      <Input
        label="Confirm Password"
        type={toggle.confirm ? "text" : "password"}
        placeholder="Password"
        value={password.confirm}
        name="confirm"
        onChange={passwordHandler}
        onToggle={() => passwordTogleHandler("confirm")}
        toggle={toggle.confirm}
      />
      <div className="text-[.7rem]">
        <p>Password must include: </p>
        <div className="flex items-center gap-3 transition-all">
          {returnIcon(password.new.length >= 8)}
          <p>8 characters</p>
        </div>
        <div className="flex items-center gap-3 transition-all">
          {returnIcon(/\d/.test(password.new))} <p>One number</p>
        </div>
        <div className="flex items-center gap-3 transition-all">
          {returnIcon(/[^a-zA-Z0-9\s]/.test(password.new))}
         <p>One special character</p>
        </div>
      </div>
      <Button cta="Confirm password" />
    </div>
  );
}
