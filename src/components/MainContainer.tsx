import { Center, Box, Container } from "@mantine/core";

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container
      size={1100}
      style={{
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        background: "var(--mantine-color-white)",
      }}
    >
      <Center
        mih={
          "calc(100dvh - var(--app-shell-header-height) - var(--app-shell-footer-height))"
        }
      >
        <Box>{children}</Box>
      </Center>
    </Container>
  );
}
