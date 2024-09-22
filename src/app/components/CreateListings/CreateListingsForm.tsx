// For Framer Motion Div:
import { motion } from "framer-motion";

// For Redirecting When Submitted:
import { useRouter } from "next/navigation";

// shadcn Components:
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/app/components/ui/form";
import { Input } from "~/app/components/ui/input";

// For React Hook Form:
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Import S3Upload Form:
import S3UploadForm from "./S3UploadForm";

// Form Validation
const formSchema = z.object({
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters." }),
  pricePerHour: z
    .number()
    .positive({ message: "Price per hour must be a positive number." }),
});

// Form Submission Data:
interface ListingDataShape {
  address: string;
  pricePerHour: number;
}

export default function CreateListingsForm() {
  // Redirect to "/listings" when submitted:
  const router = useRouter();

  //  Form Setup - Using React Hook Form:
  const formMethods = useForm<ListingDataShape>({
    resolver: zodResolver(formSchema),
  });

  // Extract methods wanted
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  /*------------BUSINESS LOGIC WHEN FORM IS SUBMITTED------------ */
  const onSubmit: SubmitHandler<ListingDataShape> = async (data) => {
    // Try a post request to our backend API with data from Form
    try {
      const response = await fetch("/api/create-listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle Response from backend API
      const result = await response.json();
      // Success:
      if (response.ok) {
        router.push("/listings");
      }
      // Failure:
      else {
        alert(`Error: ${result.error || "Failed to create listing"}`);
        console.error(result);
      }
    } catch (error) {
      // If Post Request Fails:
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };
  /*------------End of Business Logic----------- */

  return (
    <>
      <Form {...formMethods}>
        <motion.form
          className="
          bg-white rounded-xl shadow-xl
          space-y-6 p-8 m-16
          max-w-md w-full md:w-80 h-full
          
          "
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            Create Listing
          </h1>

          <S3UploadForm />

          {/* Address Field */}
          <FormField
            control={formMethods.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 Main St"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm text-[16px]"
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
            control={formMethods.control}
            name="pricePerHour"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Price Per Hour</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price per hour"
                    className="p-3 rounded-lg bg-gray-50 text-black shadow-sm text-[16px]"
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

          {/* Action Buttons: Submit, Cancel */}
          <div className="flex justify-between">
            <motion.button
              type="button"
              className="px-4 py-2 rounded-lg bg-[#261c1c81] text-black font-bold hover:bg-[#000000b3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/")}
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
    </>
  );
}
