import React from "react";
import { cn } from "@/lib/utils";
export default function Button({ cta }: { cta: string | React.ReactNode }) {
  return (
    <button className={cn("bg-orange font-semibold text-baby p-4 rounded-md")}>
      {cta}
    </button>
  );
}
