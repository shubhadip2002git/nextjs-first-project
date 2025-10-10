import { Box, Stack, Text, Title } from "@mantine/core";
//temp line add
export default function Home() {
  return (
    <Stack align="center" justify="center" gap="md">
      <Box maw={760} ta={"center"}>
        <Title size="3rem">Welcome to my blog</Title>
      </Box>
      <Box maw={760}>
        <Text ta={"center"} size="lg" mt={"xs"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          magnam nostrum at sunt, impedit nulla eveniet optio iste porro
          perferendis est placeat vero nam fugiat accusantium sapiente
          consectetur delectus odio esse ipsa, officiis in numquam doloremque?
          Aliquam magni minus iure corrupti, maxime omnis voluptates quasi
          molestiae dolore sit, esse officiis ex quia. Ratione ducimus, corrupti
          dolorum voluptatibus expedita totam laudantium quae! Aut vitae
          voluptas doloribus. Commodi, aut ex. Beatae, velit reiciendis corrupti
          dignissimos consequuntur totam animi obcaecati quibusdam possimus est,
          quisquam voluptates natus commodi, maiores magnam? Inventore sint, cum
          sed eligendi sunt, distinctio eius harum veniam tempora doloribus
          doloremque quo.
        </Text>
      </Box>
    </Stack>
  );
}
