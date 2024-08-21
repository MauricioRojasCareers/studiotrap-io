"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from "next/navigation" instead of "next/router"

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
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] mb-4">
        Studio <span className="text-[#33134A]">Trap</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl font-medium text-white mb-8">
        The Airbnb for home studios
      </p>

      <div className="bg-white/10 p-8 rounded-lg shadow-lg max-w-md w-full hover:bg-white/20 transition-colors">
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
            <button
              type="button"
              onClick={handleCancel}
              className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
