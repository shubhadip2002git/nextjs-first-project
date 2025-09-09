import PostsList from "@/components/posts-list";
import { Container, Loader, Title } from "@mantine/core";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "All Posts",
}
export default async function Posts() {
  return (
    <Container ta={"center"} pt={"2rem"} >
      <Title size={50} mb={15}>All posts</Title>
      <Suspense fallback={<Loader/>}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
