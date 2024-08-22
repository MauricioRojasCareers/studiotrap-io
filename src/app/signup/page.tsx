"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from "next/navigation" instead of "next/router"
import { motion } from "framer-motion"; // Import Framer Motion

export default function SignUp() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here, e.g., API call to create a new user
    console.log({ firstName, lastName, email, password });
  };

  const handleCancel = () => {
    router.push("/"); // Redirect to the home page or another page on cancel
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] text-white">
      {/* Studio Trap Title */}
      <motion.h1
        className="text-5xl font-extrabold tracking-tight sm:text-[5rem] mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Studio <span className="text-[#33134A]">Trap</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl font-medium text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The Airbnb for home studios
      </motion.p>

      <motion.div
        className="bg-white/10 p-8 rounded-lg shadow-lg max-w-md w-full hover:bg-white/20 transition-colors"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <motion.button
              type="button"
              onClick={handleCancel}
              className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
