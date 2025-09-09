import prisma from "@/lib/db";
import { Box, List, ListItem, ScrollArea } from "@mantine/core";
import Link from "next/link";

export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <Box mx={"auto"} mah={"65vh"}>
      <ScrollArea h={"63vh"} pt={"xs"} offsetScrollbars>
        <List listStyleType="none" size="lg">
          {posts.map((post) => (
            <ListItem key={post.id} mb={7}>
              <Link
                href={`/posts/${post.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {post.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </ScrollArea>
    </Box>
  );
}
