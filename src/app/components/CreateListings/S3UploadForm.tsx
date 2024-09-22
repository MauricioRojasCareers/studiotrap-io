"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../Navbar/Spinner";
import { motion } from "framer-motion";

export default function S3UploadFor() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
      router.push("/listings");
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center rounded-md mb-10 mt-10 gap-4">
        <h2 className="text-center text-md font-bold w-full">
          Upload an image:
        </h2>
        <div className="flex flex-row text-center items-center justify-around gap-4">
          <label className="text-center text-xs w-full cursor-pointer rounded-md p-4 text-black font-extralight">
            {file ? file.name : "Choose File"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {uploading ? <Spinner /> : null}
        </div>
        <div className="flex justify-around p-2">
          <button
            className={!file ? "hidden" : "text-xs"}
            type="submit"
            disabled={!file || uploading}
            onClick={handleClearFile}
          >
            {!file ? "" : "Clear"}
          </button>
          <motion.button
            className={`
                      text-white font-extralight py-2 px-4 rounded-full 
                        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                        animate-gradient bg-[length:400%_400%] 
                        transition-all duration-300 ease-in-out
                        hover:scale-105
                        focus:outline-none
              ${!file ? "hidden" : uploading ? "scale-90" : "hover:scale-110 active:scale-95"}
            `}
            type="submit"
            disabled={!file || uploading}
            onClick={handleSubmit}
            style={{
              animation: "gradient-animation 5s ease infinite",
            }}
          >
            {uploading ? "Uploading..." : "Upload"}
          </motion.button>

          {/* <motion.button
            className="
        text-white font-bold py-2 px-4 rounded-full 
        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
        animate-gradient bg-[length:400%_400%] 
        transition-all duration-300 ease-in-out
        hover:scale-105
        focus:outline-none
        shadow-lg"
            style={{
              animation: "gradient-animation 5s ease infinite",
            }}
          >
            Animated Colorful Button
          </motion.button> */}
        </div>
      </div>
    </>
  );
}
