import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  wishLists: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = {
        id: nanoid(),
        product: action.payload,
        count: 1,
      };
      state.carts.push(cartItem);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    incriment: (state, action) => {
      state.carts = state.carts.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    decriment: (state, action) => {
      state.carts = state.carts.map((item) =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      );
    },
    addToWishList: (state, action) => {
      const wishListItem = {
        id: nanoid(),
        product: action.payload,
      };
      state.wishLists.push(wishListItem);
    },
    removeFromWishList: (state, action) => {
      state.wishLists = state.wishLists.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleWishList: (state, action) => {
      const found = state.wishLists.find(
        (item) => item.product.id === action.payload.id
      );
      if (found) {
        state.wishLists = state.wishLists.filter(
          (item) => item.id !== found.id
        );
      } else {
        const wishListItem = {
          id: nanoid(),
          product: action.payload,
        };
        state.wishLists.push(wishListItem);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incriment,
  decriment,
  addToWishList,
  removeFromWishList,
  toggleWishList,
} = cartSlice.actions;
export default cartSlice.reducer;
