import { createSlice } from "@reduxjs/toolkit";

interface SliceMenuItem {
  id: string;
  price: number;
  count: number;
}
interface AppCartSlice {
  cart: SliceMenuItem[];
}

const initialState = {
  cart: [],
} as AppCartSlice;

const appCartSlice = createSlice({
  name: "appCart",
  initialState,
  reducers: {
    addMenuItemToCart: (state, action) => {
      const { cart } = state;
      const { id, price } = action.payload;

      const menuItemIndex = cart.findIndex((item) => item.id === id);
      if (menuItemIndex === -1) {
        cart.push({ id, price, count: 1 });
      } else {
        cart[menuItemIndex].count += 1;
      }
    },
    removeMenuItemFromCart: (state, action) => {
      const { cart } = state;
      const { id } = action.payload;
      const menuItemIndex = cart.findIndex((item) => item.id === id);
      if (menuItemIndex !== -1) {
        cart[menuItemIndex].count -= 1;
        if (cart[menuItemIndex].count === 0) {
          cart.splice(menuItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addMenuItemToCart, removeMenuItemFromCart, clearCart } =
  appCartSlice.actions;
export default appCartSlice;
