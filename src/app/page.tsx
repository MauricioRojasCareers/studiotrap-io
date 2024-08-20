import Link from "next/link";
import StudioCard from "~/app/components/StudioCard"; // Adjust the path if needed
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  // Sample data for the cards
  const studios = [
    {
      image: "/homestudio.jpg",
      title: "Modern Recording Studio",
      rating: "4.9",
      details: "Professional studio · 2 hours minimum",
      price: "$50",
    },
    {
      image: "/homestudio.jpg",
      title: "Cozy Home Studio",
      rating: "4.7",
      details: "Home studio · Flexible hours",
      price: "$30",
    },
    {
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] ">
          Studio <span className="text-[#33134A]">Trap</span>
        </h1>

        {/* Existing Links */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 ">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 h-30 w-60"
            href="/listings"
          >
            <h3 className="text-2xl font-bold">Studio →</h3>
            <div className="text-lg">See Listings</div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Music →</h3>
            <div className="text-lg">See Vault</div>
          </Link>
        </div>

        {/* Session-based Sign In/Out */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 text-[#33134A]"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
