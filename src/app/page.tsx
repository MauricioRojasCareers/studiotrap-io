"use client";

import Link from "next/link";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const preventBounce = (event: TouchEvent) => event.preventDefault();

    document.addEventListener("touchmove", preventBounce, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventBounce);
    };
  }, []);
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] gap-12 px-4 py-16 overscroll-none">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] p-2 text-white">
        Studio <span className="text-[#33134A]">Trap</span>
      </h1>

      <div className="flex flex-col gap-2 p-2 text-center">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 h-30 w-60"
          href="/listings"
        >
          <h3 className="text-2xl font-bold text-white">Studio →</h3>
          <div className="text-lg">See Listings</div>
        </Link>
      </div>
    </main>
  );
}
