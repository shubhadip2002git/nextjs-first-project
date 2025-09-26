import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/post/postFormSlice";
import commentsReducer from "./features/comments/CommentsSlice";
import commentReducer from "./features/comment/commentFormSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      postsState: postsReducer,
      commentsState: commentsReducer,
      commentState: commentReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
