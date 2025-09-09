import { createPost } from "@/actions/actions";
import { Button, Container, Textarea, TextInput } from "@mantine/core";

export default function Form() {
  return (
    <Container maw={450} mx={"auto"}>
      <form action={createPost}>
        <TextInput
          type="text"
          name="title"
          size="md"
          radius="md"
          placeholder="Title for new post"
          pb={10}
          required
        />
        <Textarea
          name="body"
          placeholder="Body content for new post"
          minRows={6}
          maxRows={11}
          py={8}
          autosize
          required
        />
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
