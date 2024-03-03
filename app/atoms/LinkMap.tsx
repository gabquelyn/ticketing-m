import React from "react";

export default function LinkMap({ links }: { links: string[] }) {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}
