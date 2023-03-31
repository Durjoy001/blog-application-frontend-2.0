import { createSlice } from '@reduxjs/toolkit'
import data from './../data.json'

const initialState = data
  
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      },
      postUpdated(state, action) {
        const { id, name, description } = action.payload
        const existingPost = state.find(blog => blog.id === id)
        if (existingPost) {
          existingPost.name = name
          existingPost.description = description
        }
      },
      postDeleted(state, action) {
        const id = action.payload
        const index = state.findIndex(blog => blog.id === id)
        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    }
  })
  
export const { postAdded , postUpdated , postDeleted} = blogsSlice.actions
  
// export default postsSlice.reducer

export default blogsSlice.reducer