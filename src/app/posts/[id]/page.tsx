import CommentForm from "@/components/comment-form";
import CommentsList from "@/components/comments-list";
import prisma from "@/lib/db";
import { Box, Text, Title, Stack, Container } from "@mantine/core";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Post",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!post) {
    notFound();
  }

  return (
    <Container>
      <Stack align="center" justify="center" gap="md">
        <Box maw={760} ta={"center"}>
          <Title size="3rem">{post.title}</Title>
        </Box>
        <Box maw={760}>
          <Text ta={"center"} size="lg" mt={"xs"}>
            {post.body}
          </Text>
        </Box>
      </Stack>
      <Container>
        <Box>
          <Text size="lg">Comments:-</Text>
        </Box>
        <Box>
          <CommentsList postId={id} />
        </Box>
        <Box m={5}>
          <CommentForm postId={id} />
        </Box>
      </Container>
    </Container>
  );
}
