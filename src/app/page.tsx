"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-12 px-4 py-16 overflow-hidden relative">
      <div className="absolute inset-0 animate-gradient" />
      <motion.h1
        className="text-5xl font-extrabold tracking-tight sm:text-[5rem] p-2 text-white z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      >
        Studio <span className="text-[#33134A]">Trap</span>
      </motion.h1>
      <motion.div
        className="flex flex-col gap-2 p-2 text-center z-10"
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
