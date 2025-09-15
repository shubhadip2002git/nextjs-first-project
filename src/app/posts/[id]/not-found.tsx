import { Box, Text } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Not Found",
  },
};

export default function NotFound() {
  return (
    <Box>
      <Text c={"red"} ta={"center"} size="xl"> No post found for that id.</Text>
    </Box>
  );
}
