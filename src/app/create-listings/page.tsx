"use client";

import { motion } from "framer-motion"; // Import Framer Motion
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/app/components/ui/form";
import { Input } from "~/app/components/ui/input";

// Define validation schema using Zod
const formSchema = z.object({
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters." }),
  pricePerHour: z
    .number()
    .positive({ message: "Price per hour must be a positive number." }),
});

interface CreateListingData {
  address: string;
  pricePerHour: number;
}

export default function CreateListingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateListingData>({
    resolver: zodResolver(formSchema),
  });

  // Create a handler for submitted forms (POST call)
  const onSubmit: SubmitHandler<CreateListingData> = async (data) => {
    try {
      // Send a POST request to the backend
      const response = await fetch("/api/create-listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      const result = await response.json();
      if (response.ok) {
        // Handle success
        alert("Listing created successfully!");
        console.log(result);
      } else {
        // Handle failure
        alert(`Error: ${result.error || "Failed to create listing"}`);
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };

  const form = useForm();

  return (
    <motion.div
      className="h-screen w-full p-4 flex flex-col items-center bg-gradient-to-b from-[#ffd6ff] to-[#b8c0ff]" // Background gradient
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Form Section */}
      <Form {...form}>
        <motion.form
          className="space-y-6 p-8 bg-white rounded-xl shadow-xl max-w-md w-full mt-20 md:w-80"
          onSubmit={handleSubmit(onSubmit)} // Form submission handled here
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Listing
          </h1>

          {/* Username Field */}
          {/* 
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm"
                    {...field}
                    {...register("username")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          */}

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 Main St"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm"
                    {...field}
                    {...register("address")}
                  />
                </FormControl>
                {errors.address && (
                  <FormMessage>{errors.address.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Price per Hour Field */}
          <FormField
            control={form.control}
            name="pricePerHour"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Price Per Hour</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price per hour"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm"
                    {...field}
                    {...register("pricePerHour", { valueAsNumber: true })}
                  />
                </FormControl>
                {errors.pricePerHour && (
                  <FormMessage>{errors.pricePerHour.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Image Upload Field */}
          {/* 
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Upload an Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm"
                    {...field}
                    {...register("imageUrl")}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          */}

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between">
            <motion.button
              type="button"
              className="px-4 py-2 rounded-lg bg-[#261c1c81] text-black font-bold hover:bg-[#000000b3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </motion.button>

            <motion.button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#9f3acdb3] text-purple font-bold hover:bg-[#9f3acdb3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </Form>
    </motion.div>
  );
}
