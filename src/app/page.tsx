"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] gap-12 px-4 py-16 overscroll-none">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight sm:text-[5rem] p-2 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.1, 1.2, 1.1, 1], // More pronounced scaling effect
          rotate: [0, 10, -10, 0], // More rotation for a lively effect
        }}
        transition={{
          duration: 2, // Slower for a more dynamic feel
          ease: "easeInOut",
          loop: Infinity, // Loop the animation
        }}
      >
        Studio <span className="text-[#33134A]">Trap</span>
      </motion.h1>

      <motion.div
        className="flex flex-col gap-2 p-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20 h-30 w-60"
          href="/listings"
        >
          <h3 className="text-2xl font-bold text-white">Studio →</h3>
          <div className="text-lg">See Listings</div>
        </Link>
      </motion.div>
    </main>
  );
}
