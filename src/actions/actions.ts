"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface postData {
  title: string;
  body: string;
}

export interface commentData {
  postId: number;
  text: string;
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
}

export async function createComment(newComment: commentData) {
  const text = newComment.text;
  const postId = newComment.postId;
  if (text.length >= 2) {
    await prisma.comment.create({
      data: {
        text: text,
        post: { connect: { id: postId } },
      },
    });
    return text;
  } else throw Error("comment length must be grater or equal to 2");
}

export async function fetchCommentsFromPrisma(postId: string) {
  const response = await prisma.comment.findMany({
    where: { postId: parseInt(postId) },
    orderBy: { createdAt: "asc" },
  });
  const data = response.map((e) => e.text);
  return data;
}
