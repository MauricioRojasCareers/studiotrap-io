"use client";

import { motion } from "framer-motion"; // For animations

import { useEffect, useState } from "react";
import Spinner from "../components/Navbar/Spinner";
import { useSession } from "next-auth/react";
import { CircleX } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "~/app/components/ui/aspect-ratio";

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

interface ImageFile {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
}

export default function Listings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<any[]>([]);
  const { data: session } = useSession();
  const [images, setImages] = useState<{ Key: string }[]>([]);

  const [imagesLoading, setImagesLoading] = useState(true);

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

        const res = await fetch("/api/s3-read-images");
        const imagesData = await res.json();

        if (imagesData.success) {
          setFiles(imagesData.files); // Store the list of files
        } else {
          setError("Failed to fetch files.");
        }

        setError(null);

        const responseImages = await fetch("/api/s3-read-images");
        if (!responseImages.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await responseImages.json();

        const sortedImages = data.files.sort(
          (a: ImageFile, b: ImageFile) =>
            new Date(b.LastModified).getTime() -
            new Date(a.LastModified).getTime()
        );
        setImages(sortedImages);
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

  function onImageLoad() {
    setImagesLoading(false);
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]">
        <div className=" p-4">
          <h2 className="text-center text-slate-700 font-bold text-2xl">
            S3 Uploads
          </h2>
          <div className="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-12 md:p-8 lg:p-8">
            {images?.map((image, index) => (
              <div
                className="bg-white rounded-md p-4 shadow-lg transition-transform transform hover:scale-105 active:scale-90 flex flex-col md:gap-6 lg:gap-6 gap-2"
                key={index}
              >
                <div className="w-[100%] flex items-center">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    {!imagesLoading && (
                      <div className="bg-black flex justify-center items-center h-full rounded-md">
                        <Spinner width={100} height={100} />
                      </div>
                    )}
                    <Image
                      src={`https://studiotrap-images.s3.amazonaws.com/${image.Key}`}
                      alt="Image"
                      fill
                      className="h-full w-full rounded-md object-cover"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onLoad={onImageLoad}
                    />
                  </AspectRatio>
                </div>
                <p className="font-bold text-sm text-wrap truncate w-full text-center">
                  {image.Key}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="flex-grow p-6 flex flex-col items-center h-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Listings</h2>

          {listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full m-4 ">
              {listings.map((listing) => (
                <motion.div
                  className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-110"
                  key={listing.id}
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-row h-full gap-2 justify-between">
                    <div className="flex flex-col w-[75%] h-20 ">
                      <div className="">
                        <h2 className="font-bold truncate">
                          {listing.address}
                          &nbsp;
                        </h2>
                      </div>
                      <hr />
                      <div className="h-full">
                        <div className="absolute bottom-0 left-0 p-4">
                          <p
                            className="text-slate-900 text-sm truncate font-bold
                    "
                          >
                            ${listing.pricePerHour}/
                            <span className="font-extralight">hr</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {listing.User?.email === session?.user.email && (
                      <button className="absolute top-0 right-0 p-2">
                        <div className="p-2">
                          <CircleX
                            size={20}
                            className=" md:text-slate-300 text-rose-400 hover:text-rose-500 ative:text-rose-800 transition-transform transform active:scale-95 hover:scale-110"
                            onClick={() => onDelete(listing.id, listing.userId)}
                          />
                        </div>
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p>No listings available.</p>
          )}
        </motion.div>
      </div>
    </>
  );
}
