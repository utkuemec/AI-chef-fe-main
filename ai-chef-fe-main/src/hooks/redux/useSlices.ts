import { useAppSelector } from "./useRedux";

export const useGlobal = () => useAppSelector((state) => state.appGlobalSlice);
export const useCartSlice = () => useAppSelector((state) => state.appCartSlice);
