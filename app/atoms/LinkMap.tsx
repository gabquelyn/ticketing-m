import React from "react";

export default function LinkMap({ links }: { links: string[] }) {
  return (
    <ul className="p-2 md:p-0">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}
