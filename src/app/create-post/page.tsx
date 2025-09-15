// "use client";
import type { Metadata } from "next";
import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Box, Button, Stack, Title } from "@mantine/core";

export const metadata: Metadata = {
  title: "Create Post",
};

export default function CreatePostPage() {
  return (
    <Stack align="center" justify="flex-start" gap="md">
      <Box>
        <Title size="3rem">Create post</Title>
      </Box>
      <Box>
        <Form />
      </Box>
      <Box>
        <LogoutLink>
          <Button mt={10} bg={"var(--mantine-color-red-9) "}>
            Log out
          </Button>
        </LogoutLink>
      </Box>
    </Stack>
  );
}
