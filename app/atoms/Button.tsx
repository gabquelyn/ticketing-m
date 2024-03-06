import React from "react";
import { cn } from "@/lib/utils";
export default function Button({
  cta,
  disabled,
  className,
  onClick
}: {
  cta: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: AnonymousFnc
}) {
  return (
    <button
      className={cn(
        className,
        "bg-orange font-semibold text-baby p-4 rounded-md disabled:cursor-not-allowed "
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {cta}
    </button>
  );
}
