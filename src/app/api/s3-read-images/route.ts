// src/app/api/list-files/route.ts (or pages/api/list-files.ts in older Next.js)

import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { env } from "~/env";

// Initialize the S3 client
const s3Client = new S3Client({
  region: env.AWS_S3_REGION,
  credentials: {
    accessKeyId: env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_S3_SECRET_ACCESS_KEY,
  },
});
export async function GET() {
  try {
    const bucketName = "studiotrap-images"; // Your S3 bucket name

    const command = new ListObjectsV2Command({
      Bucket: bucketName,
    });

    const data = await s3Client.send(command);

    // Return the list of files (objects)
    return NextResponse.json({
      success: true,
      files: data.Contents || [], // Contents contains the file metadata in S3
    });
  } catch (error) {
    console.error("Error listing S3 files:", error);
    return NextResponse.json(
      { error: "Error fetching files" },
      { status: 500 }
    );
  }
}
