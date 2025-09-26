"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { addNewPost } from "@/lib/features/post/postFormSlice";
import { postData } from "@/actions/actions";
import { useAppDispatch } from "@/lib/hooks";

export default function Form() {
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      newPost: {
        title: "",
        body: "",
      },
    },

    validate: {
      newPost: {
        title: (value) =>
          value.length <= 0 ? "Title is required for newpost" : null,
        body: (value) =>
          value.length <= 0 ? "Body is required for newpost" : null,
      },
    },
  });
  const handleSubmit = (value: typeof form.values) => {
    const newPost: postData = {
      title: value.newPost.title,
      body: value.newPost.body,
    };
    dispatch(addNewPost(newPost));
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              aria-label="title"
              size="md"
              radius="md"
              placeholder="Title for new post"
              key={form.key("newPost.title")}
              {...form.getInputProps("newPost.title")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              aria-label="body"
              placeholder="Body content for new post"
              size="md"
              radius="md"
              minRows={6}
              autosize
              key={form.key("newPost.body")}
              {...form.getInputProps("newPost.body")}
            />
          </Grid.Col>
        </Grid>
        <Box my={10}>
          <Button fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}
