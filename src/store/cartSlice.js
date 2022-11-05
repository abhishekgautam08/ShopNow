const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: 0,
};

const calculateTotals = (state) => {
  let total = 0;
  state.items.forEach((item) => {
    total = total + item.count * item.price;
  });
  state.total = total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    ADD_TO_CART(state, action) {
      const items = state.items;
      const existingItem = items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        action.payload.count = 1;
        state.items = items.concat({ ...action.payload });
      }

      calculateTotals(state);
    },

    REMOVE_TO_CART(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },
    ADD_QUANTITY(state, action) {
      const items = state.items;
      const existingItem = items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.count += 1;
      }
      calculateTotals(state);
    },

    SUB_QUANTITY(state, action) {
      const items = state.items;
      const existingItem = items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.count -= 1;
      }

      if (existingItem.count <= 0) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      calculateTotals(state);
    },
  },
});

export const { ADD_TO_CART, REMOVE_TO_CART, ADD_QUANTITY, SUB_QUANTITY } =
  cartSlice.actions;

export default cartSlice.reducer;
