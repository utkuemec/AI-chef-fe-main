// src/store/store.ts

import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  Reducer,
} from "@reduxjs/toolkit";
import appStyleSlice from "./slices/appStyleSlice";
import { StoreActionType } from "./actions/storeActions";
import { baseApiClient } from "./apiClient";
import appGlobalSlice from "./slices/appGlobalSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import appCartSlice from "./slices/appCartSlice";

const initialState = {};

const combinedReducer = combineReducers({
  appGlobalSlice: appGlobalSlice.reducer,
  appStyleSlice: appStyleSlice.reducer,
  appCartSlice: appCartSlice.reducer,
  [baseApiClient.reducerPath]: baseApiClient.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === StoreActionType.Reset.toString()) {
    return initialState as RootState;
  }
  return combinedReducer(state, action);
};

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApiClient.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
