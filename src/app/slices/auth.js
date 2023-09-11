import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const authInitialValue = () => {
  return { isAuth: localStorage.getItem("login") };
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialValue(),
  reducers: {
    login(state) {
      localStorage.setItem("login", "true");
      state.isAuth = true;
      // redirect("/");
    },
    logout(state) {
      localStorage.removeItem("login");
      state.isAuth = false;
      // redirect("/");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
