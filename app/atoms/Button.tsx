import React from "react";
import { cn } from "@/lib/utils";
export default function Button({
  cta,
  disabled,
}: {
  cta: string | React.ReactNode;
  disabled: boolean;
}) {
  return (
    <button
      className={cn(
        "bg-orange font-semibold text-baby p-4 rounded-md disabled:cursor-not-allowed "
      )}
      disabled={disabled}
    >
      {cta}
    </button>
  );
}
