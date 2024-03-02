import React from "react";

export default function Error({ error }: { error: string }) {
  return (
    <div className="w-full rounded-md p-3 text-[.8rem] bg-error mb-4 text-red animate-in fade-in zoom-in">
      <p className="font-semibold">Error</p>
      <p>{error}</p>
    </div>
  );
}
