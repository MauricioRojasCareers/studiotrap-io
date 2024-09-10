"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut, signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import AdvancedSearchBar from "../components/AdvancedSearchBar";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

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
    <nav className="border-b border-gray-200 py-3 bg-white shadow-sm top-0 z-50 w-full rounded">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Studio<span className="text-[#33134A]">Trap</span>
        </Link>
        {/* Advanced Search Bar */}
        <div className="hidden md:flex flex-grow mx-4 lg:mx-8">
          <AdvancedSearchBar />
        </div>
        {/* Navigation Links (Hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href={session ? "/" : "/api/auth/signin"}
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center text-center"
          >
            {/* Profile Icon */}
            {session ? (
              <div className="flex flex-row justify-center items-center gap-2 ml-4">
                <Image
                  src={session.user.image as string} // Type assertion to ensure TypeScript knows it's a string
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <Button variant="ghost" onClick={handleSign}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button variant={"ghost"}>Log In</Button>
            )}
          </Link>
          {/* Display "Sign Up" button if not logged in */}
          {session ? (
            ""
          ) : (
            <Link href={"/signup"}>
              <Button variant={"ghost"}>Sign Up</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu (Sheet for mobile navigation) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden lg:hidden">
              <FaBars className="text-2xl" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>StudioTrap</SheetTitle>
              <hr />

              <SheetDescription>
                {/* Profile and navigation options */}
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                {session ? (
                  <div className="w-full flex flex-col items-center">
                    <Button
                      variant="destructive"
                      onClick={handleSign}
                      className="w-full text-white bg-red-500 hover:bg-red-600"
                    >
                      Sign Out
                    </Button>
                    <div className="mt-2 text-xs text-gray-600">
                      Signed in as {session?.user.name}
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex flex-col space-y-4">
                    <Link href="/api/auth/signin">
                      <Button type="submit" className="w-full">
                        Log In
                      </Button>
                    </Link>
                    {/* Add "Sign Up" button in mobile view when user is not logged in */}
                    <Link href="/signup">
                      <Button
                        variant="default"
                        className="w-full text-white bg-purple-200 hover:bg-purple-300"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
