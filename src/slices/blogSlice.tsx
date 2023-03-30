import { createSlice } from '@reduxjs/toolkit'
import data from './../data.json'

const initialState = data
  
// const blogsSlice = createSlice({
//     name: 'blogs',
//     initialState,
//     reducers: {}
//  })
  
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      }
    }
  })
  
export const { postAdded } = blogsSlice.actions
  
// export default postsSlice.reducer

export default blogsSlice.reducer