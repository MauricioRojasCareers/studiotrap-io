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

  const ListingsPressed = () => {};

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
          <SheetContent side="right" className="container">
            <SheetHeader>
              <SheetDescription>
                {/* Profile and navigation options */}
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <>
                  <a href="/create-listings" className=" flex justify-start">
                    <Button type="submit" variant="link">
                      Create Listing
                    </Button>
                  </a>
                  <a href="/dashboard" className=" flex justify-start">
                    <Button type="submit" variant="link">
                      Dashboard
                    </Button>
                  </a>
                  <a href="/profile" className=" flex justify-start">
                    <Button type="submit" variant="link">
                      Profile
                    </Button>
                  </a>
                  <a href="/" className="mx-auto">
                    <SheetTitle>StudioTrap</SheetTitle>
                  </a>

                  {session ? (
                    <div className=" mt-2 text-xs text-gray-600 flex mx-auto p-4 absolute inset-x-0 bottom-0 text-center justify-center">
                      Signed in as &nbsp;
                      <a href="/profile">
                        <span className="text-slate-500">
                          {session?.user.name}
                        </span>
                      </a>
                    </div>
                  ) : null}
                </>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

// Sheet closed stash  {session ? (
//     <div className="w-full flex flex-col items-center h-screen">
//     <Link href="/create-listings">
//       <Button onClick={ListingsPressed} variant="link">
//         Create a listing
//       </Button>
//     </Link>
//     <Button
//       variant="default"
//       onClick={handleSign}
//       className=" absolute bottom-0 m-4 "
//     >
//       Sign Out
//     </Button>
//   </div>
// ) : (
//   <div className="w-full flex flex-col space-y-4">
//     <Link href="/api/auth/signin">
//       <Button type="submit" className="w-full">
//         Log In
//       </Button>
//     </Link>
{
  /* Add "Sign Up" button in mobile view when user is not logged in */
}
{
  /* <Link href="/signup">
                    <Button
                      variant="default"
                      className="w-full text-white bg-purple-200 hover:bg-purple-300"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div> */
}
// )}
