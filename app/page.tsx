"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState("");

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
    <main>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
        <div className="hidden md:flex md:w-1/2">
          <div

            style={{ backgroundImage: 'url("/dynamo-ticket.png")' }}
          >
            <Image 
            src="/dynamo-ticket.png" 
            alt = ""
            width = {800}
            height = {800}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Sign In
          </h2>
          <div className="mb-4 text-center">
            New to Ticketingsite?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </a>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign in
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">
              By signing in or creating an account, you agree to{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Terms of Use
              </a>{" "}
              and acknowledge our{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

/*
  return (
    <main>
      <div>
        <h1>Welcome to the Home Page</h1>
        <Button onClick={() => handleClick()}>hi</Button>
        Enter username:<Input value={username} onChange={ (e) => setUsername(e.target.value) }></Input>
        <Button><Link href = "/login">Do login</Link></Button>
      </div>
    </main>
  );

*/



/*
      
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
        <div className="invisible md:block md:w-1/2 xl:w-1/3">
          <div className="w-full h-full bg-cover bg-no-repeat bg-center"
               style={{ backgroundImage: 'url("/dynamo-ticket.png")' }}>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 md:mx-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Sign In</h2>
          <div className="mb-4 text-center">
            New to Ticketingsite? <a href="#" className="text-blue-500 hover:text-blue-700">Sign Up</a>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" name="email" required
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" required
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" name="remember"/>
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mb-6">
              <button type="submit"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Sign in
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">
              By signing in or creating an account, you agree to <a href="#" className="text-blue-500 hover:text-blue-700">Terms of Use</a> and acknowledge our <a href="#" className="text-blue-500 hover:text-blue-700">Privacy Policy</a>.
            </div>
          </form>
        </div>
      </div>
*/
