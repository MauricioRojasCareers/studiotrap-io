import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Define the GET method for fetching listings
export async function GET() {
  try {
    const listings = await prisma.listing.findMany(); // Fetch all listings from the database
    const response = NextResponse.json({ success: true, listings });
    response.headers.set("Cache-Control", "no-store");
    revalidatePath("/listings");

    return response;
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}
