"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className="bg-black text-white px-[5%] md:px-[15%] font-semibold flex items-center justify-between">
      <Link
        href="/me"
        className={clsx(
          "menu-items border-orange",
          pathname === "/me" ? "border-orange" : "border-transparent"
        )}
      >
        My tickets
      </Link>
      <Link
        href="/settings"
        className={clsx(
          "menu-items border-orange",
          pathname === "/settings" ? "border-orange" : "border-transparent"
        )}
      >
        Profile details
      </Link>
      <Link
        href="/billing"
        className={clsx(
          "menu-items border-orange",
          pathname === "/billing" ? "border-orange" : "border-transparent"
        )}
      >
        Billing information
      </Link>
      <Link
        href="/faq"
        className={clsx(
          "menu-items border-orange",
          pathname === "/faq" ? "border-orange" : "border-transparent"
        )}
      >
        FAQs
      </Link>
    </div>
  );
}
