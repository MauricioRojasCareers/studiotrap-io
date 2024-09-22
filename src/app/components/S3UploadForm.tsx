"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

  return (
    <>
      <div className="flex flex-col justify-center p-8 bg-white rounded-md mb-10 mt-10 gap-4">
        <h2 className="text-3xl font-bold">Upload an image:</h2>
        <label className="cursor-pointer px-4 py-2 rounded-md bg-[#9f3acdb3] active:bg-[#9f3acdb3] text-center text-white font-bold">
          {file ? file.name : "Choose File"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          type="submit"
          disabled={!file || uploading}
          onClick={handleSubmit}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </>
  );
}
