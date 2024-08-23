"use client";

import { motion } from "framer-motion"; // Import Framer Motion
import { signUpAction } from "../actions";
import { useFormState, useFormStatus } from "react-dom";

// useFormState, useFormStaus, useActionState

function SignUpSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      disabled={pending}
      type="submit"
      className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {pending ? "Submitting..." : "Submit"}
    </motion.button>
  );
}

export default function SignUp() {
  const [state, formAction] = useFormState(signUpAction, {
    name: "",
    error: "",
    status: false,
  });

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
        <form action={formAction} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Smith"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="jsmith@gmail.com"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full mt-1 p-2 rounded-lg bg-white text-black focus:outline-none"
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <motion.button
              type="button"
              onClick={() => {}}
              className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <SignUpSubmitButton />
          </div>
          {state.error && <div>{state.error}</div>}
        </form>
      </motion.div>
    </div>
  );
}
