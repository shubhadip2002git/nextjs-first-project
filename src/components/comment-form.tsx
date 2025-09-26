"use client";

import { commentData } from "@/actions/actions";
import {
  crteateNewComment,
  selectComment,
} from "@/lib/features/comment/commentFormSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button, Group, TextInput } from "@mantine/core";
import "@mantine/notifications/styles.css";
import { useForm } from "@mantine/form";

interface post {
  postId: string;
}

export default function CommentForm({ postId }: post) {
  const dispatch = useAppDispatch();
  const Data = useAppSelector(selectComment);
  const isLoading = Data.isLoading;
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      comment: "",
    },

    validate: {
      comment: (value) =>
        value.length >= 2 ? null : "comment length must be grater than 2",
    },
  });

  const handleSubmit = (value: typeof form.values) => {
    const newComment: commentData = {
      text: value.comment,
      postId: parseInt(postId),
    };
    dispatch(crteateNewComment(newComment));
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        aria-label="comment"
        placeholder="write your comment here to post"
        key={form.key("comment")}
        {...form.getInputProps("comment")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={isLoading} disabled={isLoading}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
