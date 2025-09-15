import PostsList from "@/components/posts-list";
import { Loader, Title, Stack, Box } from "@mantine/core";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "All Posts",
};
export default async function Posts() {
  return (
    <Stack align="center" justify="flex-start" gap="md">
      <Box maw={760} ta={"center"}>
        <Title size="3rem">All Posts</Title>
      </Box>
      <Box maw={760}>
        <Suspense fallback={<Loader />}>
          <PostsList />
        </Suspense>
      </Box>
    </Stack>
  );
}
