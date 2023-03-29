import { createSlice } from '@reduxjs/toolkit'
import data from './../data.json'

const initialState = data
  
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {}
 })
  
export default blogsSlice.reducer