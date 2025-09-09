import type { Metadata } from "next";
import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button, Container, Title } from "@mantine/core";

export const metadata: Metadata = {
  title: "Create Post",
}

export default async function Page() {
  return (
    <Container ta={"center"} pt={"3rem"}>
      <Title size={50} fw={700} mb={28}>
        Create post
      </Title>

      <Form />

      <LogoutLink>
        <Button mt={10} bg={"var(--mantine-color-red-9) "}>Log out</Button>
      </LogoutLink>
    </Container>
  );
}
