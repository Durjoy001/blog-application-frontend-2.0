import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './../slices/blogSlice'
import userReducer from './../slices/userSlice'
import {blogApi}  from './../api/blogApi'
// ...
import authReducer from './../slices/authSlice'

export const store = configureStore({
  reducer: {
     blogs: blogsReducer,
     users: userReducer,
     [blogApi.reducerPath]: blogApi.reducer,
     auth : authReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(blogApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch