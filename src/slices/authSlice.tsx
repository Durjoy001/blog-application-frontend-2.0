import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, SetUser } from "../models/authModel";

const initialState: AuthState = {
  username: localStorage.getItem("username") || "",
  loggedIn: localStorage.getItem("loggedIn") ? true : false,
  access_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNewAccessToken: (state: AuthState, action: PayloadAction<any>) => {
      state.access_token = action.payload.access_token;
    },
    setUser: (state: AuthState, action: PayloadAction<any>) => {
      state.username = action.payload.name;
      state.loggedIn = action.payload.loggedIn;
      state.access_token = action.payload.access_token;
      localStorage.setItem("username", action.payload.name!);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("refresh_token", action.payload.refresh_token!);
    },
    removeUser: (state: AuthState) => {
      localStorage.clear();
      state.username = "";
      state.loggedIn = false;
      state.access_token = "";
    },
  },
});

export const { setUser, removeUser, setNewAccessToken } = authSlice.actions;
export default authSlice.reducer;