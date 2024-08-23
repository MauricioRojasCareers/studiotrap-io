"use client"; // Mark this component as a Client Component

import { motion } from "framer-motion";
import Link from "next/link"; // Import the Link component
import StudioCard from "~/app/components/StudioCard"; // Adjust the path as needed

export default function ListingsPage() {
  const studios = [
    {
      image: "/homestudio.jpg",
      title: "Modern Recording Studio",
      rating: "4.9",
      details: "Professional studio · 2 hours minimum",
      price: "$50",
      link: "/listings/modern-studio", // Add link for each studio
    },
    {
      image: "/homestudio.jpg",
      title: "Cozy Home Studio",
      rating: "4.7",
      details: "Home studio · Flexible hours",
      price: "$30",
      link: "/listings/cozy-studio",
    },
    {
      image: "/homestudio.jpg",
      title: "Luxury Music Studio",
      rating: "5.0",
      details: "High-end equipment · Great location",
      price: "$80",
      link: "/listings/luxury-studio",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff] text-white pt-8">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Available Studios
        </motion.h1>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {studios.map((studio, index) => (
            <motion.div
              key={index}
              className="transform-gpu hover:scale-105 hover:rotate-0 transition-transform duration-300 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.15)]"
              variants={{
                hidden: { opacity: 0, y: 49 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link href={studio.link}>
                <motion.div
                  className="bg-white/10 rounded-xl p-4 shadow-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.4 },
                  }}
                >
                  <StudioCard
                    image={studio.image}
                    title={studio.title}
                    rating={studio.rating}
                    details={studio.details}
                    price={studio.price}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
