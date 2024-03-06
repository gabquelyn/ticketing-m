import React from "react";
import Link from "next/link";
export default function Navigation() {
  return (
    <div className="bg-black text-white px-[15%] font-semibold flex items-center justify-between">
      <Link href="/me" className="menu-items">My tickets</Link>
      <Link href="/profile" className="menu-items">Profile details</Link>
      <Link href="/billing" className="menu-items">Billing information</Link>
      <Link href="/faq" className="menu-items">FAQs</Link>
    </div>
  );
}
