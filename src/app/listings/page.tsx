"use client";

import { motion } from "framer-motion"; // Import Framer Motion
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

import { SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const form = useForm();

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#e7a5f3]"
      initial={{ opacity: 0, y: 50 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }} // Final state for animation
      transition={{ duration: 0.8 }} // Duration of animation
    >
      {/* Studio Trap Title */}
      <motion.h1
        className="text-5xl font-extrabold tracking-tight sm:text-[5rem] mb-8" // Added margin-bottom
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Studio <span className="text-[#33134A]">Trap</span>
      </motion.h1>

      {/* Form Section */}
      <Form {...form}>
        <motion.form
          className="space-y-8 p-8 bg-white rounded-lg shadow-lg max-w-md w-full h-[650px]"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, scale: 0.9 }} // Initial animation for form
          animate={{ opacity: 1, scale: 1 }} // Final animation for form
          transition={{ duration: 0.5 }} // Transition duration
        >
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    defaultValue="test"
                    {...register("username")}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 Main St"
                    {...field}
                    {...register("address")}
                  />
                </FormControl>
                <FormDescription>
                  Enter the address of your studio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price per Hour Field */}
          <FormField
            control={form.control}
            name="pricePerHour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Hour</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price per hour"
                    {...field}
                    {...register("pricePerHour")}
                  />
                </FormControl>
                <FormDescription>
                  Set the hourly rate for your studio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload Field */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload an Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    {...field}
                    {...register("image")}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Upload an image of your studio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button with Framer Animation */}
          <motion.div
            whileHover={{ scale: 0.95 }} // Enlarge slightly when hovered
            whileTap={{ scale: 0.95 }} // Shrink slightly when clicked
          >
            <Button type="submit">Submit</Button>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  );
}
