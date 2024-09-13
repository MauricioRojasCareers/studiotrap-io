"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth > 768) {
        // Close the sheet when in landscape mode
        setShowMobileMenu(false);
      } else {
        setShowMobileMenu(true);
      }
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <nav className="border-b border-gray-200 py-3 bg-white shadow-sm top-0 z-50 w-full rounded">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 ">
        <div className="flex flex-row gap-6">
          {/* Logo or Brand Name */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Studio<span className="text-[#33134A]">Trap</span>
          </Link>
        </div>

        {showMobileMenu ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </nav>
  );
}
