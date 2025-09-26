import prisma from "@/lib/db";
import { Box, List, ListItem, Text, Title } from "@mantine/core";
import Link from "next/link";

export default async function PostsList() {
  const posts = await prisma.post.findMany();
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return posts.length === 0 ? (
    <Box>
      <Title order={1} c={"gray"}>
        There is No Posts
      </Title>{" "}
    </Box>
  ) : (
    <List size="lg" type="ordered" withPadding>
      {posts.map((post, ind) => (
        <ListItem key={ind}>
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
