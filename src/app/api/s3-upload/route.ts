import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "~/env";

const s3Client = new S3Client({
  region: env.AWS_S3_REGION,
  credentials: {
    accessKeyId: env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file: any, fileName: any) {
  const fileBuffer = file;
  console.log(fileName);

  const params = {
    Bucket: "studiotrap-images",
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

export async function POST(request: any) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);
    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.error("Error in POST handler:", error); // Log specific error
    return NextResponse.json(
      { error: "Error uploading the file." },
      { status: 500 }
    );
  }
}
