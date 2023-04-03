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
      const {email,password} = action.payload
      const existingAuth = state.user.find(user => user.email === email)
      state.isAuthenticated = true;
      state.authName = existingAuth?.name || '';
    }
  } 
})
export const {userAdded,authLogin} = usersSlice.actions
export default usersSlice.reducer