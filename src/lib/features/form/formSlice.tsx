import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store.ts";
import { createPost, postData } from "@/actions/actions";

export const formSlice = createSlice({
  name: "posts",
  initialState: [] as postData[],
  reducers: {
    addNewPost: (state: postData[], action: PayloadAction<postData>) => {
      // console.log(action.payload);
      state.push(action.payload);
      createPost(action.payload);
    },
  },
});

export const { addNewPost } = formSlice.actions;

export const selectPost = (state: RootState) => state.posts;

export default formSlice.reducer;
