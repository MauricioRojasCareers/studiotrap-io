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

const DesktopMenu = ({ menuOpen, setMenuOpen }: MenuProps) => {
  const { data: session } = useSession();

  const handleSign = () => {
    setMenuOpen(false);
    if (session) {
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
            <House />
          </Link>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger className="p-2">
              <Ellipsis className="" size={30} />

              <DropdownMenuContent className="flex gap-4 p-2 mx-auto">
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/listings">All Listings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
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
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="bg-red-500 hover:bg-red-500 text-xs focus:bg-red-300 ">
                  <button className="text-white " onClick={handleSign}>
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
          <Link href="/">
            <House />
          </Link>
          <Button variant={"ghost"} onClick={handleSign}>
            Log In
          </Button>
          <Link href={"/signup"}>
            <Button variant={"ghost"}>Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
