"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut, signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import AdvancedSearchBar from "../components/AdvancedSearchBar";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className="border-b border-gray-200 py-3 bg-white shadow-sm  top-0 z-50 w-full rounded ">
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
          {/* {session ? (
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Dashboard
            </Link>
          ) : null} */}

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
          {session ? (
            ""
          ) : (
            <Link href={"/signup"}>
              <Button variant={"ghost"}>Sign Up</Button>
            </Link>
          )}
        </div>
        {/* Mobile Menu (Visible only when the hamburger menu is open) */}
        {/* Hamburger Menu Icon for Mobile */}
        {/* <div className="flex md:hidden items-center">
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
        </div> */}

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
                {/* Make changes to your profile here. Click save when you're done. */}
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                {session ? null : (
                  <Link href="/api/auth/signin">
                    <Button type="submit" className="w-full">
                      Log In
                    </Button>
                  </Link>
                )}
              </SheetClose>
              <div className="flex justify-center text-xs">
                Signed in as {session?.user.name}
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* 
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <hr />
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {session ? (
                    <div className="flex gap-4 items-center mx-auto mt-10">
                      <Image
                        src={session.user.image as string}
                        alt="User Profile"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <div> {session.user.name}</div>
                    </div>
                  ) : null} */}
        {/* Profile Icon */}
        {/* </Link>
              </>

              <Button
                variant={session ? "destructive" : "default"}
                onClick={handleSign}
              >
                {session ? "Sign Out" : "Sign In"}
              </Button>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
}
