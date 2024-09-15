import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Ellipsis, House } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/app/components/ui/dropdown-menu";
import { MenuProps } from "./NavBar";
import { useState } from "react";
import Spinner from "./Spinner";

const DesktopMenu = ({ menuOpen, setMenuOpen }: MenuProps) => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false); // State to manage loading

  const handleSign = () => {
    setMenuOpen(false);
    if (session) {
      setLoading(true);
      signOut({ redirect: true, callbackUrl: "/" });
    } else {
      signIn();
    }
  };

  return (
    <div className="hidden md:flex items-center">
      {/* Profile Icon */}
      {session ? (
        <div className="hidden md:flex flex-row justify-center items-center gap-8 ">
          <Link href="/">
            <Button
              variant="ghost"
              size="noButton"
              className="text-black p-2 transition-transform transform hover:scale-125 active:scale-95"
            >
              <House size={30} />
            </Button>
          </Link>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger
              className={
                menuOpen
                  ? "text-black p-2 transition-transform transform hover:scale-150 active:scale-75 bg-zinc-100 scale-75 rounded-md"
                  : "text-black p-2 transition-transform transform hover:scale-125 active:scale-75 rounded-md hover:bg-zinc-100 "
              }
            >
              {loading ? <Spinner /> : <Ellipsis size={30} />}

              <DropdownMenuContent className="flex gap-4 p-2 mx-auto items-center">
                <DropdownMenuSeparator />
                <Link href="/listings">
                  <DropdownMenuItem className="transition-transform transform hover:scale-105 active:scale-95 cursor-pointer">
                    All Listings
                  </DropdownMenuItem>
                </Link>
                <Link href="/profile">
                  <DropdownMenuItem className="flex flex-row items-center gap-3 transition-transform transform hover:scale-105 active:scale-95 cursor-pointer">
                    <Image
                      src={session?.user.image as string}
                      alt="profile image"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard">
                  <DropdownMenuItem className="transition-transform transform hover:scale-105 active:scale-95 cursor-pointer">
                    Dashboard
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  className="bg-red-500 hover:bg-red-500 text-xs focus:bg-red-300 transition-transform transform hover:scale-90 active:scale-105 text-white cursor-pointer"
                  onClick={handleSign}
                >
                  <span className="text-white">Sign Out </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Link
            href="create-listings"
            className="hover:scale-110 transition-transform transform active:scale-95"
          >
            <Button variant="link" size="noButton">
              Create a Listing
            </Button>
          </Link>
        </div>
      ) : (
        <div className=" flex flex-row items-center gap-2">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-black p-2 transition-transform transform hover:scale-125 active:scale-95 "
            >
              <House />
            </Button>
          </Link>
          <div onClick={handleSign}>
            <Button
              variant={"ghost"}
              className="text-black p-2 transition-transform transform hover:scale-105 active:scale-75 "
            >
              Log In
            </Button>
          </div>
          <Link href={"/signup"}>
            <Button
              variant={"ghost"}
              className="text-black p-2 transition-transform transform hover:scale-105 active:scale-75 "
            >
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
