import prisma from "@/lib/db";
import { Box, Container, ScrollArea, Text, Title } from "@mantine/core";
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
    <Container px={28} pt={"3rem"} ta={"center"}>
      <Title mb={10} size={50} fw={600}>{post.title}</Title>
      <Box maw={760} mx={"auto"} mah={"65vh"}>
            <ScrollArea h={"63vh"} pt={"xs"} offsetScrollbars>
      <Text maw={700} mx={"auto"} >{post.body}</Text>
      </ScrollArea>
      </Box>
    </Container>
  );
}
