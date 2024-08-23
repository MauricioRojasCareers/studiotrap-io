"use server";

import { redirect } from "next/navigation";
import { prisma } from "~/server/auth";

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

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password)
    return {
      name: "Incomplete Data",
      error: "Data is incomplete",
      status: true,
    };

  try {
    let response = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  } catch {
    return {
      name: "Incomplete Data",
      error: "Some Error Occured",
      status: true,
    };
  }

  redirect("/");
}
