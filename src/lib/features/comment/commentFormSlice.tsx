import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store.ts";
import { commentData, createComment } from "@/actions/actions";
import { notifications } from "@mantine/notifications";

export const crteateNewComment = createAsyncThunk(
  "createComment",
  async (comment: commentData) => {
    const res = await createComment(comment);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return res;
  }
);

interface CommentState {
  comment: string;
  isLoading: boolean;
  error: string;
}

const initialState: CommentState = {
  comment: "",
  error: "",
  isLoading: false,
};

const commentSlice = createSlice({
  name: "commentState",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(crteateNewComment.pending, (state) => {
      state.isLoading = true;
      state.comment = "";
      state.error = "";
    });
    builder.addCase(crteateNewComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
      state.error = "";
      notifications.show({
        message: "comment created successfully",
        color: "green",
      });
    });
    builder.addCase(crteateNewComment.rejected, (state, action) => {
      state.isLoading = false;
      state.comment = "";
      state.error = action.error.message || "something went wrong";
      notifications.show({
        message: state.error,
        color: "red",
      });
    });
  },
});

export const selectComment = (state: RootState) => state.commentState;

export default commentSlice.reducer;
