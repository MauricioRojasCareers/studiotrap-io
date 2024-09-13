"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Ellipsis, House, UserCog } from "lucide-react";
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/components/ui/dropdown-menu";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSign = () => {
    setMenuOpen(false);
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth > window.innerHeight) {
        // Close the sheet when in landscape mode
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleOrientationChange);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
      window.removeEventListener("orientationchange", handleOrientationChange);
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
        {/* Advanced Search Bar */}
        {/* <div className="hidden md:flex flex-grow mx-4 lg:mx-8">
          <AdvancedSearchBar />
        </div> */}
        <div className="w-full flex justify-center ">
          {/* <AdvancedSearchBar /> */}
        </div>
        {/* Navigation Links (Hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex items-center">
          <Link
            href={session ? "/" : "/api/auth/signin"}
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center text-center"
          >
            {" "}
          </Link>
          {/* Profile Icon */}
          {session ? (
            <div className="hidden md:flex flex-row justify-center items-center gap-8 ">
              <a href="/">
                <House />
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2">
                  <Ellipsis className="" size={30} />

                  <DropdownMenuContent className="flex gap-4 p-2 mx-auto">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <a href="/listings">All Listings</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a
                        href="/profile"
                        className="flex flex-row items-center gap-3"
                      >
                        <Image
                          src={session?.user.image as string}
                          alt="profile image"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        Profile{" "}
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/dashboard">Dashboard</a>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="bg-red-500 hover:bg-red-500 text-xs focus:bg-red-300 ">
                      <button className=" text-white " onClick={handleSign}>
                        Sign Out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuTrigger>
              </DropdownMenu>
              <Link href="create-listings">
                <Button variant="link" size="noButton">
                  Create a Listing{" "}
                </Button>
              </Link>
            </div>
          ) : (
            <div className=" flex flex-row items-center gap-2">
              <a href="/">
                <House />
              </a>
              <Button variant={"ghost"} onClick={handleSign}>
                Log In
              </Button>
            </div>
          )}

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
          <SheetContent side="right" className="container md:mt-2">
            <SheetFooter>
              <SheetClose asChild>
                <>
                  <SheetDescription className="">
                    {session && (
                      <>
                        <Button
                          type="submit"
                          variant="ghost"
                          className="w-full"
                        >
                          <a
                            href="/"
                            className="outline-none focus:outline-none flex justify-start w-full"
                          >
                            {" "}
                            Home{" "}
                          </a>
                        </Button>
                        <Button
                          type="submit"
                          variant="ghost"
                          className="w-full"
                        >
                          <a
                            href="/dashboard"
                            className="flex justify-start w-full"
                          >
                            {" "}
                            Dashboard
                          </a>
                        </Button>
                        <Button
                          type="submit"
                          variant="ghost"
                          className="w-full"
                        >
                          <a
                            href="/listings"
                            className="flex justify-start w-full"
                          >
                            {" "}
                            All Listings
                          </a>
                        </Button>

                        <Button type="submit" variant="link" className="w-full">
                          <a
                            href="/create-listings"
                            className=" flex justify-start w-full"
                          >
                            Create Listing
                          </a>
                        </Button>
                      </>
                    )}
                  </SheetDescription>

                  <SheetTitle className="flex flex-col items-center gap-3 pt-4 pb-2">
                    {session?.user?.image && (
                      <a href="/profile">
                        <div className="flex justify-center items-center">
                          {" "}
                          <Image
                            src={session.user.image}
                            alt="Users Image"
                            width={60}
                            height={60}
                            className="rounded-full "
                          />
                          <UserCog
                            size={30}
                            className="absolute right-0 m-10"
                          />
                        </div>
                      </a>
                    )}{" "}
                    <a href="/" className="flex justify-center">
                      {!session ? null : session?.user.name}
                    </a>{" "}
                    <div className="absolute top-0 left-0 mx-auto md:mb-2">
                      <Button
                        onClick={handleSign}
                        variant="ghost"
                        className="mt-2 ml-2"
                      >
                        {session ? "Sign Out" : "Sign In"}
                      </Button>
                    </div>
                  </SheetTitle>
                  <SheetHeader className="text-xs flex items-center pt-4 mt-10">
                    <a href="/">StudioTrap</a>
                    {!session && (
                      <div className="flex flex-col p-2 items-center gap-4 ">
                        <a href="/" className="">
                          <Image
                            src="/studiotrap.png"
                            alt="studiotrap logo"
                            width={120}
                            height={120}
                            className="border-full"
                          />
                        </a>
                        <a
                          href="/create-listings"
                          className=" flex justify-center w-full "
                        >
                          <Button
                            type="submit"
                            variant="default"
                            className="w-full "
                          >
                            Create Listing
                          </Button>
                        </a>
                      </div>
                    )}
                  </SheetHeader>

                  <div className=" mt-2 text-xs text-gray-600 flex mx-auto p-4 absolute inset-x-0 bottom-0 text-center justify-center">
                    StudioTrap LLC.
                  </div>
                </>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
