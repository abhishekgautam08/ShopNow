const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: 0,
};

const calculateTotals = (state) => {
  let total = 0;
  state.items.forEach((item) => {
    total += item.price * item.quantity;
  });
  state.total = total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add(state, action) {
      const items = state.items;

      const presentItemIdx = items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (presentItemIdx !== -1) {
        items[presentItemIdx].quantity += 1;
        state.items = items;
      } else {
        state.items = items.concat({ ...action.payload, quantity: 1 });
      }

      calculateTotals(state);
    },

    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
