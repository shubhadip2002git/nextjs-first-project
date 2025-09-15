"use client";

import { Box, Center, Image, Group } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Center h={"100%"} bg={"var(--mantine-color-gray-light)"}>
      <Box
        w={1100}
        h={"100%"}
        p="md"
        mx="auto"
        style={{
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          borderLeft: "1px solid black",
        }}
        bg={"var(--mantine-color-white)"}
      >
        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Box>
            <Box w={35}>
              <Link href="/">
                <Image
                  src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                  alt="Logo"
                  radius="md"
                  h={35}
                  fit="contain"
                />
              </Link>
            </Box>
          </Box>
          <Box>
            <Group justify="flex-end">
              {navLinks.map((link) => (
                <Box key={link.href}>
                  <Link
                    style={{
                      color: pathname === link.href ? "#18181b" : "#9f9fa9",
                      textDecoration: "none",
                    }}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Group>
          </Box>
        </Group>
      </Box>
    </Center>
  );
}
