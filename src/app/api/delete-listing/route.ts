// app/api/delete-listing/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  const session = await getServerSession();

  if (!session || !session.user)
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );

  try {
    const { id, userId } = await request.json();

    if (!id)
      return NextResponse.json(
        { success: false, error: "Bad Request" },
        { status: 400 }
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

    if (!user || user.id !== userId)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );

    await prisma.listing.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting listing:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete listing" },
      { status: 500 }
    );
  }
}
