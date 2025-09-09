"use client";

import { Container, Group } from "@mantine/core";
import Image from "next/image";
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
    <Container style={{ borderBottom: "1px solid black" }} h={"100%"} fluid>
      <Group justify="space-between" h="100%" mx={15} pt={5}>
        <Link href="/">
          <Image
            src="https://bytegrad.com/course-assets/youtube/example-logo.png"
            alt="Logo"
            width="35"
            height="35"
          />
        </Link>
        <Group gap="md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              style={{
                color: pathname === link.href ? "#18181b" : "#9f9fa9",
                textDecoration: "none",
              }}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </Group>
      </Group>
    </Container>
  );
}
