import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppBarConfigState {
  isVisible: boolean;
}

interface AppStyleState {
  appBarConfig: AppBarConfigState;
}

const initialState = {
  appBarConfig: {
    isVisible: true,
  },
} as AppStyleState;

const appStyleSlice = createSlice({
  name: "appStyle",
  initialState,
  reducers: {
    setAppBarVisibility(state, action: PayloadAction<boolean>) {
      state.appBarConfig.isVisible = action.payload;
    },
  },
});

export const { setAppBarVisibility } = appStyleSlice.actions;
export default appStyleSlice;
