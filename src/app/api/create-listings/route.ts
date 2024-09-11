// app/api/create-listing/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { address, pricePerHour } = await req.json();

    // Log the received address and pricePerHour to the console
    console.log("Received data:", { address, pricePerHour });

    // Insert data into the Prisma-managed database
    const listing = await prisma.listing.create({
      data: {
        address: address || '',
        pricePerHour: parseFloat(pricePerHour), // Convert to float if necessary
      },
    });

    // Log the listings to the console
    console.log("Listing: ", { listing });

    return NextResponse.json({ success: true, listing });
  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json({ success: false, error: 'Failed to create listing' }, { status: 500 });
  }
}
