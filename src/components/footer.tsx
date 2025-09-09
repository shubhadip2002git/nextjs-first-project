import { Box, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Box h="100%" style={{ borderTop: "1px solid #9f9fa9" }} pt={20}>
      <Text size="sm" c="dimmed" ta="center">
        &copy; 2025. All rights reserved
      </Text>
    </Box>
  );
}
