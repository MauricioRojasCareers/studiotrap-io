"use client"; // Ensure this component is treated as a Client Component

import { useSession, signOut } from "next-auth/react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import AdvancedSearchBar from "../components/AdvancedSearchBar";

import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();

  if (!session) return null; // Don't render if the user is not authenticated

  return (
    <nav className="border-b border-gray-200 py-3 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          StudioTrap
        </Link>

        {/* Advanced Search Bar */}
        <div className="flex-grow mx-4 lg:mx-8">
          <AdvancedSearchBar />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/profile"
            className="text-gray-700 hover:text-gray-900 font-medium flex items-center mr-9"
          >
            <FaUserCircle className="text-2xl mr-2" /> {/* Profile Icon */}
            Profile
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* <p className="hidden lg:block text-gray-700">
            Welcome, {session.user?.name}!
          </p> */}
          {/* <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button> */}
        </div>
      </div>
    </nav>
  );
}
