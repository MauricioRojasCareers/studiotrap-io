"use client";

import { motion } from "framer-motion";

import CreateListingsForm from "~/app/components/CreateListings/CreateListingsForm";

export default function CreateListingForm() {
  return (
    <motion.div
      className="
      h-screen w-full p-4 
      flex flex-col items-center 
      bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <CreateListingsForm />
    </motion.div>
  );
}
