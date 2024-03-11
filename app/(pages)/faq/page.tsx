"use client";
import React, { useState } from "react";
import Foot from "@/app/atoms/Foot";
export default function FAQ() {
  const [drop, setDrop] = useState(0);
  const handleDrop = (val: number) => {
    if (drop === val) {
      setDrop(0);
    } else {
      setDrop(val);
    }
  };
  return (
    <div>
      <Foot
        onDrop={handleDrop}
        element={
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corporis ea laudantium numquam a nam repellat fuga sunt dolore quod
            aliquam nostrum, dolores accusamus eos ducimus, reiciendis qui
            maxime magnam?
          </p>
        }
        value={drop}
        position={1}
        faq
        name="Lorem ipsum dolor, sit amet consectetur adip."
      />
      <Foot
        onDrop={handleDrop}
        element={
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corporis ea laudantium numquam a nam repellat fuga sunt dolore quod
            aliquam nostrum, dolores accusamus eos ducimus, reiciendis qui
            maxime magnam?
          </p>
        }
        value={drop}
        position={2}
        faq
        name="Lorem ipsum dolor, sit amet consectetur adip."
      />
      <Foot
        onDrop={handleDrop}
        element={
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corporis ea laudantium numquam a nam repellat fuga sunt dolore quod
            aliquam nostrum, dolores accusamus eos ducimus, reiciendis qui
            maxime magnam?
          </p>
        }
        value={drop}
        position={3}
        faq
        name="Lorem ipsum dolor, sit amet consectetur adip."
      />
    </div>
  );
}
