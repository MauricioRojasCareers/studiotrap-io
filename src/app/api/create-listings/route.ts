// app/api/create-listing/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { address, pricePerHour } = await req.json();
    const session = await getServerSession();

    if (!session || !session.user)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );

    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: session.user.email,
        },
      },
      select: {
        id: true,
      },
    });

    if (!user)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );

    // Insert data into the Prisma-managed database
    const listing = await prisma.listing.create({
      data: {
        userId: user.id,
        address: address || "",
        pricePerHour: parseFloat(pricePerHour), // Convert to float if necessary
      },
    });

    return NextResponse.json({ success: true, listing });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create listing" },
      { status: 500 }
    );
  }
}
