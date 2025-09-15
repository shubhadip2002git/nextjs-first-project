"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface postData {
  title: string;
  body: string;
}

export async function createPost(newPost: postData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const title = newPost.title;
  const body = newPost.body;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts");
  // redirect("/posts");
}
