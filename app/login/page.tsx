"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

export default function Home() {


  const handleClick = async () => {
    
    const response = await fetch(process.env.API_SERVER ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: "value1",
        key2: "value2",
      }),
    });

    const data = await response.json();
  };

  return (
    <main>
      <div>
        <h1>Login</h1>
        <Button onClick={() => handleClick()}>hi</Button>
      </div>
    </main>
  );
}
