import prisma from "@/lib/db";
import { Box, Text, Title, Stack } from "@mantine/core";
import { notFound } from "next/navigation";

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
  );
}
