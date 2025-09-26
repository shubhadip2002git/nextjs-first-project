"use client";
import { Box, List, ListItem, Loader, Text } from "@mantine/core";

import "@mantine/notifications/styles.css";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  CommentsState,
  fetchComments,
  selectComments,
} from "@/lib/features/comments/CommentsSlice";

interface post {
  postId: string;
}

export function CommentsList({ postId }: post) {
  const dispatch = useAppDispatch();
  const Data: CommentsState = useAppSelector(selectComments);
  const comments = Data.comments;
  const isLoading = Data.isLoading;
  const error = Data.error;
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  return (
    <Box>
      {isLoading ? (
        <Loader />
      ) : comments.length === 0 ? (
        <List listStyleType="none" withPadding>
          <ListItem>
            <Text c={"gray"}>No comment in this post</Text>
          </ListItem>
        </List>
      ) : (
        <List type="ordered" withPadding>
          {comments.map((comment, ind) => (
            <ListItem key={ind}>
              <Text size="md">{comment}</Text>
            </ListItem>
          ))}
        </List>
      )}
      <Box>{error && <Text c={"red"}>{error}</Text>}</Box>
    </Box>
  );
}

export default CommentsList;
