import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // action.payload is = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // action.payload is = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQty(state, action) {
      // action.payload is = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQty(state, action) {
      // action.payload is = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // delete the item when quantity is =0
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCartItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
  clearCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getcart = (state) => state.cart.cart;

// get the total item  in the cart
export const getTotalCartQty = (state) =>
  state.cart.cart?.reduce((sum, item) => sum + item.quantity, 0);

// get the total item price in the cart
export const getTotalCartPrice = (state) =>
  state.cart.cart?.reduce((sum, item) => sum + item.totalPrice, 0);

//get the id of the item in the cart
export const getCurrentQtyById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
