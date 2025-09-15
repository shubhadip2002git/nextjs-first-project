import prisma from "@/lib/db";
import { Box, List, ListItem, Text } from "@mantine/core";
import Link from "next/link";

export default async function PostsList() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <List size="lg" type="ordered" withPadding>
      {posts.map((post) => (
        <ListItem key={post.id}>
          <Box p={5}>
            <Link
              href={`/posts/${post.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Text size="lg">{post.title}</Text>
            </Link>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
