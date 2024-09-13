"use client"; // Ensure this component is treated as a Client Component

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

        {showMobileMenu ? (
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : (
          <DesktopMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </div>
    </nav>
  );
}
