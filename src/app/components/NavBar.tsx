"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut, signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import AdvancedSearchBar from "../components/AdvancedSearchBar";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSign = () => {
    setIsMenuOpen(false);
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <nav className="border-b border-gray-200 py-3 bg-white shadow-sm sticky top-0 z-50 w-full rounded">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Studio<span className="text-[#33134A]">Trap</span>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Advanced Search Bar */}
        <div className="hidden md:flex flex-grow mx-4 lg:mx-8">
          <AdvancedSearchBar />
        </div>

        {/* Navigation Links (Hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex space-x-8 items-center">
          {session ? (
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Dashboard
            </Link>
          ) : null}

          <Link
            href={session ? "/profile" : "/api/auth/signin"}
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center text-center"
          >
            {/* Profile Icon */}
            <div>
              {session ? (
                <Image
                  src={session.user.image as string} // Type assertion to ensure TypeScript knows it's a string
                  alt="User Profile"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              ) : (
                "Log In"
              )}
            </div>
          </Link>
        </div>

        {/* Mobile Menu (Visible only when the hamburger menu is open) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {/* Show the Search Bar on Mobile */}
              <div className="flex mb-4">
                <AdvancedSearchBar />
              </div>

              <>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {session ? (
                    <>
                      <FaUserCircle className="text-2xl mr-2" />
                      <div>Profile</div>
                    </>
                  ) : null}
                  {/* Profile Icon */}
                </Link>
              </>

              <Button
                variant={session ? "destructive" : "default"}
                onClick={handleSign}
              >
                {session ? "Sign Out" : "Sign In"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
