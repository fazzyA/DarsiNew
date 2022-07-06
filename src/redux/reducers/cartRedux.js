import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let isProduct = state.products.find((x) => x._id === action.payload._id);
      if (isProduct) {
        state.products.map((item, key) => {
          if (item._id === action.payload._id) {
            state.products[key].quantity =
              state.products[key].quantity + action.payload.quantity;
          }
        });
      } else {
        state.products.push(action.payload);
      }
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      if (action.payload.quantity > 1) {
        state.products.map((item, key) => {
          if (item._id === action.payload._id) {
            state.products[key].quantity--;
          }
        });
      } else {
        state.products = state.products.filter((item) => item.quantity > 1);
      }
      state.quantity--;
      state.total -= action.payload.price;
    },
    clear_cart: (state, action) => {
      state.total = 0;
      state.products = [];
      state.quantity = 0;
    },
  },
});

export const { addProduct, removeProduct, clear_cart } = cartSlice.actions;
export default cartSlice.reducer;
