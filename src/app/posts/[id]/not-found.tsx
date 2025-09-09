import { Container } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Not Found",
  },
};

export default function NotFound() {
  return <Container>No post found for that id.</Container>;
}
