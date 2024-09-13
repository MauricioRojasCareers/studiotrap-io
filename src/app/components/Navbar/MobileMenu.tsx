import { useSession, signOut, signIn } from "next-auth/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";
import { UserCog } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MobileMenu = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSign = () => {
    setMenuOpen(false);
    if (session) {
      signOut({ redirect: true, callbackUrl: "/" });
    } else {
      signIn();
    }
  };

  return (
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
                    <Button type="submit" variant="ghost" className="w-full">
                      <Link
                        href="/"
                        className="outline-none focus:outline-none flex justify-start w-full"
                      >
                        Home
                      </Link>
                    </Button>
                    <Button type="submit" variant="ghost" className="w-full">
                      <Link
                        href="/dashboard"
                        className="flex justify-start w-full"
                      >
                        Dashboard
                      </Link>
                    </Button>
                    <Button type="submit" variant="ghost" className="w-full">
                      <Link
                        href="/listings"
                        className="flex justify-start w-full"
                      >
                        All Listings
                      </Link>
                    </Button>

                    <Button type="submit" variant="link" className="w-full">
                      <Link
                        href="/create-listings"
                        className=" flex justify-start w-full"
                      >
                        Create Listing
                      </Link>
                    </Button>
                  </>
                )}
              </SheetDescription>

              <SheetTitle className="flex flex-col items-center gap-3 pt-4 pb-2">
                {session?.user?.image && (
                  <Link href="/profile">
                    <div className="flex justify-center items-center">
                      {" "}
                      <Image
                        src={session.user.image}
                        alt="Users Image"
                        width={60}
                        height={60}
                        className="rounded-full "
                      />
                      <UserCog size={30} className="absolute right-0 m-10" />
                    </div>
                  </Link>
                )}{" "}
                <Link href="/" className="flex justify-center">
                  {!session ? null : session?.user.name}
                </Link>{" "}
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
                <Link href="/">StudioTrap</Link>
                {!session && (
                  <div className="flex flex-col p-2 items-center gap-4 ">
                    <Link href="/" className="">
                      <Image
                        src="/studiotrap.png"
                        alt="studiotrap logo"
                        width={120}
                        height={120}
                        className="border-full"
                      />
                    </Link>
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
  );
};

export default MobileMenu;
