import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function ProfilePage() {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          You need to be logged in to view your profile.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0">
          <div className="flex flex-col items-center mb-6">
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {session.user?.name}
            </h2>
            <p className="text-gray-600">{session.user?.email}</p>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/profile"
              className="rounded-full bg-purple-500 text-white text-center py-2 font-semibold hover:bg-purple-700 transition"
            >
              Overview
            </Link>
            <Link
              href="/listings/manage"
              className="rounded-full bg-purple-500 text-white text-center py-2 font-semibold hover:bg-purple-700 transition"
            >
              My Listings
            </Link>
            <Link
              href="/bookings"
              className="rounded-full bg-purple-500 text-white text-center py-2 font-semibold hover:bg-purple-700 transition"
            >
              Booking History
            </Link>
            <Link
              href="/reviews"
              className="rounded-full bg-purple-500 text-white text-center py-2 font-semibold hover:bg-purple-700 transition"
            >
              My Reviews
            </Link>
            <Link
              href="/account/settings"
              className="rounded-full bg-purple-500 text-white text-center py-2 font-semibold hover:bg-purple-700 transition"
            >
              Account Settings
            </Link>
          </nav>
        </aside>

        {/* Profile Content */}
        <main className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Profile Overview
          </h1>
        </main>
      </div>
    </div>
  );
}