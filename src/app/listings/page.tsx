"use client";

import { motion } from "framer-motion"; // For animations

import { useEffect, useState } from "react";
import Spinner from "../components/Navbar/Spinner";
import { useSession } from "next-auth/react";

interface Listing {
  User: {
    email: string | null;
  } | null;
  id: string;
  address: string;
  pricePerHour: number;
  userId: string;
  title: string | null;
  description: string | null;
  createdAt: Date;
}

export default function Listings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    // Fetch listings from the API
    const fetchListings = async () => {
      try {
        const response = await fetch("/api/read-listings", {
          cache: "no-store", // Ensure no caching for dynamic data
        });

        const result = await response.json();
        if (!response.ok) return setError("Failed to fetch listings.");
        setListings(result.listings); // Set the fetched listings to state
        setError(null);
      } catch (error) {
        setError("An unexpected error occurred.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings(); // Call the function to fetch listings
  }, []);

  async function onDelete(id: string, userId: string) {
    let pastListings: Listing[] = [];
    try {
      setListings((prevListings) => {
        pastListings = prevListings;
        return prevListings.filter((prevListing) => prevListing.id !== id);
      });
      await fetch("/api/delete-listing", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ id, userId }),
      });
    } catch (error) {
      console.error(error);
      setListings(pastListings);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Spinner width={100} height={100} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]">
      <motion.div
        className="flex-grow p-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Listings</h2>

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
            {listings.map((listing) => (
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg"
                key={listing.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {listing.User?.email === session?.user.email && (
                  <div
                    onClick={() => onDelete(listing.id, listing.userId)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-300 focus:outline-none"
                  >
                    x
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{listing.address}</h2>
                <p className="text-gray-700">
                  Price per hour: ${listing.pricePerHour}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No listings available.</p>
        )}
      </motion.div>
    </div>
  );
}
