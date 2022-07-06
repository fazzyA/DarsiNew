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
            state.products[key].quantity =
              state.products[key].quantity - action.payload.quantity;
          }
        });
      } else {
        state.products = state.products.filter((item) => item.quantity > 1);
      }
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
