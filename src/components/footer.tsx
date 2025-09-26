import { Box, Center, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Center h={"100%"} bg={"var(--mantine-color-gray-light)"} >
      <Box
        w={1100}
        h={"100%"}
        p="lg"
        mx="auto"
        style={{
          borderTop: "1px solid #9f9fa9",
          borderRight: "1px solid black",
          borderLeft: "1px solid black"
        }}
        bg={"var(--mantine-color-white)"}
      >
        <Text size="sm" c="dimmed" ta="center">
          &copy; 2025. All rights reserved
        </Text>
      </Box>
    </Center>
  );
}
