"use server";

import { redirect } from "next/navigation";
import { prisma } from "~/server/auth";
import { hash } from "bcrypt"

type SignUpActionType = {
  name: string;
  error: string;
  status: boolean;
};

export async function signUpAction(
  prevState: SignUpActionType,
  formData: FormData
) {
  // Things to be added still to this component
  // Hashing for password
  // email, name, and password verification

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString().trim();

  if (!name || !email || !password)
    return {
      name: "Incomplete Data",
      error: "Data is incomplete",
      status: true,
    };

  const hashedPassword = await hash(password, 10)

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch {
    return {
      name: "Incomplete Data",
      error: "Some Error Occured",
      status: true,
    };
  }

  redirect("/api/auth/signin");
}
