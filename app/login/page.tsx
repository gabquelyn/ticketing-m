"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    console.log(process.env.NEXT_PUBLIC_API_SERVER);
    const response = await fetch(process.env.API_SERVER ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: username,
        key2: "value2",
      }),
    });

    const data = await response.json();
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div className="flex justify-between">
        <div className="hidden md:flex md:w-1/2">
          <Image
            src="/signinbg.png"
            alt="side-bg"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>

        <div className="bg-subtleWhite text-newBlack flex justify-center items-center md:p-8 rounded-lg shadow-md w-full max-w-lg mx-4 md:mx-0">
          <div className="p-8 w-full max-w-md mx-4 md:mx-0">
            <h2 className="text-2xl font-bold mb-3 text-center">Sign In</h2>
            <div className="mb-6 font-medium text-center">
              New to Ticketingsite?{" "}
              <Link href="#" className="text-orange hover:text-orange/80">
                Sign Up
              </Link>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-md font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="shadow bg-transparent appearance-none border border-newBlack/50 rounded w-full sm:py-2 sm:px-3 px-5 py-2 text-gray-700 leading-tight focus:outline-newBlack focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-md font-semibold mb-2"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="shadow bg-transparent appearance-none border border-newBlack/50 rounded w-full sm:py-2 sm:px-3 px-5 py-2 text-gray-700 leading-tight focus:outline-newBlack focus:shadow-outline"
                    placeholder="abc@123#"
                    // onChange={(e) =>
                    //   setUser({ ...user, password: e.target.value })
                    // }
                  />
                  <button
                    type="button"
                    className="text-newBlack border-l-2 border-newBlack/50 absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl p-2"
                    onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
                <div className="flex items-center justify-between my-5">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="shadow accent-orange border border-newBlack/50 rounded p-6 focus:outline-newBlack focus:shadow-outline"
                      name="remember"
                    />
                    <span className="ml-1 md:text-sm text-xs font-medium text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <Link
                    href="#"
                    className="inline-block align-baseline font-semibold md:text-sm text-xs text-orange hover:text-orange/85"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="bg-orange hover:bg-orange/85 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center text-sm text-newBlack">
                By signing in or creating an account, you agree to{" "}
                <Link href="#" className="text-orange hover:text-orange/85">
                  Terms of Use
                </Link>{" "}
                and acknowledge our{" "}
                <Link href="#" className="text-orange hover:text-orange/85">
                  Privacy Policy
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
