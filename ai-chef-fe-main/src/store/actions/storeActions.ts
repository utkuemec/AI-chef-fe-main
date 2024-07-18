import { createAction } from "@reduxjs/toolkit";

const createStoreAction = (actionName: string) =>
  createAction(`store/${actionName}`);

export const StoreActionType = {
  Reset: createStoreAction("reset"),
};
