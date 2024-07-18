import { createSlice } from "@reduxjs/toolkit";

interface AppGlobalSlice {}

const initialState = {} as AppGlobalSlice;

const appGlobalSlice = createSlice({
  name: "appGlobal",
  initialState,
  reducers: {},
});

// export const {} = appGlobalSlice.actions;
export default appGlobalSlice;
