import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store.ts";
import { fetchCommentsFromPrisma } from "@/actions/actions";
import { crteateNewComment } from "../comment/commentFormSlice";

export const fetchComments = createAsyncThunk(
  "fetchComments",
  async (postId: string) => {
    const response = await fetchCommentsFromPrisma(postId);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response;
  }
);

export interface CommentsState {
  comments: string[];
  isLoading: boolean;
  error: string;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: true,
  error: "",
};

const commentSlice = createSlice({
  name: "commentsState",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
      state.comments = [];
      state.error = "";
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state: CommentsState, action: PayloadAction<string[]>) => {
        state.isLoading = false;
        state.comments = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(crteateNewComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
  },
});

export const selectComments = (state: RootState) => state.commentsState;

export default commentSlice.reducer;
