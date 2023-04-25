import { createSlice } from '@reduxjs/toolkit'
import userData from './../data/userData.json'

const initialState = {
  user : userData,
  isAuthenticated: false,
  authName : ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.user.push(action.payload)
    },
    authLogin(state,action){  
      const {name,password} = action.payload
      const existingAuth = state.user.find(user => user.name === name)
      state.isAuthenticated = true;
      state.authName = existingAuth?.name || '';
    }
  } 
})
export const {userAdded,authLogin} = usersSlice.actions
export default usersSlice.reducer