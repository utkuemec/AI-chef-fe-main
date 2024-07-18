import { useCartSlice } from "./useSlices";

export const useMenuItemInCart = (id: string) =>
  useCartSlice()?.cart?.find((item) => item?.id === id);
